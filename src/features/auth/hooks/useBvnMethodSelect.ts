'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {
    IdentityService,
    BVNVerificationHintResponse,
    InitiateRegistrationResponse,
} from '@lib/services';
import { useToast } from '@hooks/use-toast';

const alternativePhoneSchema = yup.object({
    alternativePhoneNumber: yup.string().when('$showAlternativePhoneInput', {
        is: true,
        then: (schema) =>
            schema
                .required('Phone number is required')
                .matches(
                    /^(\+234|0)[789]\d{9}$/,
                    'Please enter a valid Nigerian phone number'
                ),
        otherwise: (schema) => schema.notRequired(),
    }),
});

export type AlternativePhoneSchemaType = yup.InferType<
    typeof alternativePhoneSchema
>;

export function useBvnMethodSelect() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { toast } = useToast();

    const [selectedMethod, setSelectedMethod] = useState<string>('');
    const [showAlternativePhoneInput, setShowAlternativePhoneInput] =
        useState(false);
    const [methods, setMethods] = useState<BVNVerificationHintResponse[]>([]);
    const [sessionId, setSessionId] = useState<string>('');
    const [bvn, setBvn] = useState<string>('');

    const form = useForm<AlternativePhoneSchemaType>({
        resolver: yupResolver(alternativePhoneSchema),
        mode: 'onChange',
        reValidateMode: 'onChange',
        context: { showAlternativePhoneInput },
        defaultValues: {
            alternativePhoneNumber: '',
        },
    });

    const {
        handleSubmit,
        formState: { errors, isValid, isSubmitting },
    } = form;

    // Load methods from localStorage on mount
    useEffect(() => {
        const savedMethods = localStorage.getItem('BVN_VERIFICATION_KEY');
        if (savedMethods) {
            try {
                const options: InitiateRegistrationResponse =
                    JSON.parse(savedMethods);
                setMethods(options.methods || []);
                setSessionId(options.sessionId || '');
                setBvn(searchParams.get('bvn') || '');
            } catch (error) {
                console.error('Error parsing saved methods:', error);
            }
        }
    }, [searchParams]);

    // Handle alternative phone input visibility
    useEffect(() => {
        if (selectedMethod === 'alternate_phone') {
            setShowAlternativePhoneInput(true);
        } else {
            setShowAlternativePhoneInput(false);
        }
    }, [selectedMethod]);

    const onSubmit = async (data: AlternativePhoneSchemaType) => {
        try {
            const requestBody = {
                bvn: bvn,
                sessionId: sessionId,
                method: selectedMethod,
                phoneNumber: data.alternativePhoneNumber || undefined,
            };

            const response = await IdentityService.verifyBvnWithSelectedMethod({
                requestBody,
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

            // Navigate to OTP verification page
            router.push(
                `/signup/bvn/verify-otp?bvn=${bvn}&sessionId=${sessionId}`
            );
        } catch (error: unknown) {
            const errorBody = (error as { body?: { message?: string } })?.body;
            toast({
                title: 'Something went wrong',
                description: errorBody?.message || 'Failed to send OTP',
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
        selectedMethod,
        setSelectedMethod,
        showAlternativePhoneInput,
        methods,
        sessionId,
        bvn,
    };
}
