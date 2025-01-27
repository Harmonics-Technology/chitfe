import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { signUpWithEmail } from '../schema';

import { IdentityService } from '@lib/services';
import { useRouter } from 'next/router';
import { useToast } from '@hooks/use-toast';

export type SignUpEmailSchemaType = yup.InferType<typeof signUpWithEmail>;

export default function useEmailRegister() {
    const router = useRouter();
    const { toast } = useToast();

    const {
        control,
        handleSubmit,
        getValues,
        formState: { isValid, isSubmitting },
    } = useForm<SignUpEmailSchemaType>({
        resolver: yupResolver<SignUpEmailSchemaType>(signUpWithEmail),
        defaultValues: {
            surname: '',
            firstName: '',
            otherName: '',
            phoneNumber: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
    });

    const onSubmit = async (data: SignUpEmailSchemaType) => {
        try {
            const response = await IdentityService.register({
                requestBody: data,
            });

            if (!response.status) {
                throw new Error(
                    response.message || 'Error registering user...'
                );
            }

            router.push({
                pathname: '/auth/signup/verify',
                query: { email: data.email },
            });
        } catch (error) {
            const errorBody = (error as { body: unknown })?.body as string;

            toast({
                variant: 'destructive',
                title: 'Operation Failed',
                description: errorBody,
            });
        }
    };

    return {
        control,
        isValid,
        isSubmitting,
        handleSubmit,
        getValues,
        onSubmit,
    };
}
