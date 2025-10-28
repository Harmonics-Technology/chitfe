'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { IdentityService } from '@lib/services';
import { useToast } from '@hooks/use-toast';

const bvnSchema = yup.object({
    bvn: yup
        .string()
        .required('BVN is required')
        .matches(/^\d{11}$/, 'BVN must be exactly 11 digits'),
});

export type BvnSchemaType = yup.InferType<typeof bvnSchema>;

export function useBvnRegister() {
    const router = useRouter();
    const { toast } = useToast();
    const [sessionData, setSessionData] = useState<{
        sessionId: string;
        bvn: string;
    } | null>(null);

    const form = useForm<BvnSchemaType>({
        resolver: yupResolver(bvnSchema),
        mode: 'onChange',
        reValidateMode: 'onChange',
        defaultValues: {
            bvn: '',
        },
    });

    const {
        handleSubmit,
        formState: { errors, isValid, isSubmitting },
    } = form;

    const onSubmit = async (data: BvnSchemaType) => {
        try {
            const response = await IdentityService.initiateBvnRegistration({
                bvn: data.bvn,
                isMobile: false,
            });

            if (!response.status) {
                toast({
                    title: 'Something went wrong',
                    description: response.message as string,
                    variant: 'destructive',
                });
                return;
            }

            // Store session data in localStorage for later use
            const sessionInfo = {
                sessionId: response.data?.sessionId || '',
                bvn: data.bvn,
                methods: response.data?.methods || [],
            };

            localStorage.setItem(
                'BVN_VERIFICATION_KEY',
                JSON.stringify(sessionInfo)
            );

            setSessionData({
                sessionId: response.data?.sessionId || '',
                bvn: data.bvn,
            });

            // Navigate to method selection page
            router.push('/signup/bvn/verify');
        } catch (error: unknown) {
            const errorBody = (error as { body?: { message?: string } })?.body;
            toast({
                title: 'Something went wrong',
                description:
                    errorBody?.message || 'Failed to initiate BVN registration',
                variant: 'destructive',
            });
        }
    };

    return {
        form,
        submit: handleSubmit(onSubmit),
        errors,
        isValid,
        isSubmitting,
        sessionData,
    };
}
