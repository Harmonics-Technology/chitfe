'use client';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import { useToast } from '@hooks/use-toast';

import { signUpWithEmail } from '../lib/schema';

import { IdentityService } from '@lib/services';
import { onErrorDisplay } from '@lib/index';

export type SignUpEmailSchemaType = yup.InferType<typeof signUpWithEmail>;

const DEFAULT_VALUES = {
    surname: '',
    firstName: '',
    otherName: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    referral: '',
};

export default function useEmailRegister() {
    const router = useRouter();
    const { toast } = useToast();

    const form = useForm<SignUpEmailSchemaType>({
        resolver: yupResolver<SignUpEmailSchemaType>(signUpWithEmail),
        defaultValues: DEFAULT_VALUES,
        mode: 'onChange',
    });

    const {
        control,
        handleSubmit,
        getValues,
        formState: { isValid, isSubmitting },
    } = form;

    const onSubmit = async (data: SignUpEmailSchemaType) => {
        try {
            // Map form fields to UserModel structure
            const requestBody = {
                firstName: data.firstName,
                lastName: data.surname,
                otherNames: data.otherName,
                email: data.email,
                phoneNumber: data.phoneNumber,
                password: data.password,
                referralId: data.referral || null,
            };

            const response = await IdentityService.register({
                requestBody,
                isMobile: false,
            });

            console.log({ response });

            if (!response.status) {
                console.log({ response });

                toast({
                    title: 'Registration Error',
                    description:
                        response.message || 'Error registering user...',
                    variant: 'destructive',
                });
                return;
            }

            // Navigate to OTP verification page with email as query param
            router.push(
                `/signup/verify-email?email=${encodeURIComponent(data.email)}`
            );
        } catch (error: unknown) {
            console.error('Registration error:', error);
            const errorBody = (error as { body?: Record<string, string> })
                ?.body as Record<string, string>;
            onErrorDisplay(errorBody, toast, 'Authentication Error');
        }
    };

    return {
        form,
        control,
        isValid,
        isSubmitting,
        handleSubmit,
        getValues,
        onSubmit,
    };
}
