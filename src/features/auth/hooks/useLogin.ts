import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { useRouter } from 'next/navigation';

import { IdentityService, OpenAPI } from '@lib/services';
import { onErrorDisplay, ServiceMode } from '@lib/index';

import { useToast } from '@hooks/use-toast';
import { useChitService } from '@hooks/useChitService';

import { loginSchema } from '../lib/schema';
import { useAuthStore } from '@src/stores/authStore';

export type TLoginSchema = yup.InferType<typeof loginSchema>;

export default function useLogin() {
    const router = useRouter();
    const { toast } = useToast();

    const { onLogin: setAuthUser } = useAuthStore();

    const { execute, isLoading } = useChitService({
        service: IdentityService,
        selector: (service) => service.postIdentityApiIdentityLogin,
        mode: ServiceMode.MUTATION,
    });

    const form = useForm<TLoginSchema>({
        resolver: yupResolver<TLoginSchema>(loginSchema),
        defaultValues: {
            identifier: '',
            password: '',
            stayLoggedIn: false,
        },
        mode: 'onChange',
        reValidateMode: 'onChange',
    });

    const onLogin = async (values: TLoginSchema): Promise<void> => {
        try {
            let email = values.identifier;

            // If identifier doesn't contain '@', retrieve email from identifier
            if (!values.identifier?.includes('@')) {
                const response =
                    await IdentityService.retrieveEmailFromIdentifiers({
                        identifier: values.identifier as string,
                    });

                if (!response.status) {
                    toast({
                        variant: 'destructive',
                        title: 'Login Error',
                        description:
                            response.message ||
                            'Could not find user with the provided identifier.',
                    });
                    return;
                }

                email = response.data as string;
            }

            // Perform login with email and password
            const loginResponse = await execute({
                requestBody: {
                    email: email,
                    password: values.password,
                },
            });

            if (!loginResponse.accessToken) {
                throw new Error('Error logging in...');
            }

            // Validate token to get user information
            OpenAPI.TOKEN = loginResponse.accessToken;
            const userResponse = await IdentityService.validateToken({});

            if (!userResponse.data) {
                throw new Error('Error retrieving user information...');
            }

            // Update auth store with user and tokens
            setAuthUser(loginResponse, userResponse.data);

            // Navigate to home page
            router.push('/');
        } catch (error) {
            console.error('Login error:', error);

            const errorBody = (error as { body: unknown; message: string })
                ?.body as Record<string, string>;

            onErrorDisplay(
                errorBody,
                toast,
                'Oops! Looks like your login details are wrong. Double-check your details and try again.'
            );
        }
    };

    return { form, onLogin, isLoading };
}
