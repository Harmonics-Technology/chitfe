'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { useToast } from '@hooks/use-toast';
import { IdentityService } from '@lib/services';
import { onErrorDisplay } from '@lib/index';

export default function useVerifyEmailOtp() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { toast } = useToast();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [codes, setCodes] = useState<string[]>(Array(10).fill(''));
    const [countdown, setCountdown] = useState(60);
    const email = searchParams.get('email') || '';

    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => {
                setCountdown(countdown - 1);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [countdown]);

    const onChangeCode = (text: string, index: number) => {
        // Handle paste of full OTP
        if (text.length > 1) {
            const newCodes = text.split('').slice(0, 10);
            setCodes([...newCodes, ...Array(10 - newCodes.length).fill('')]);
            return;
        }

        // Handle single digit input
        const newCodes = [...codes];
        newCodes[index] = text;
        setCodes(newCodes);

        // Auto-submit when all 10 characters are entered
        if (
            newCodes.every((code) => code !== '') &&
            newCodes.join('').length === 10
        ) {
            submit(newCodes.join(''));
        }
    };

    const submit = async (otp: string) => {
        if (!email) {
            toast({
                title: 'Error',
                description: 'Email is required for verification',
                variant: 'destructive',
            });
            return;
        }

        setIsSubmitting(true);
        try {
            const response = await IdentityService.confirmEmail({
                requestBody: {
                    email,
                    token: otp,
                },
                isMobile: false,
            });

            if (!response.status) {
                toast({
                    title: 'Verification Error',
                    description:
                        response.message || 'Invalid verification code',
                    variant: 'destructive',
                });
                // Clear codes on error
                setCodes(Array(10).fill(''));
                return;
            }

            // Success - navigate to success page
            toast({
                title: 'Success',
                description: 'Email verified successfully!',
            });
            router.push('/signup/registration-successful');
        } catch (error: unknown) {
            console.error('OTP verification error:', error);
            const errorBody = (error as { body?: Record<string, string> })
                ?.body as Record<string, string>;
            onErrorDisplay(errorBody, toast, 'Verification Error');
            // Clear codes on error
            setCodes(Array(10).fill(''));
        } finally {
            setIsSubmitting(false);
        }
    };

    const resendCode = async () => {
        if (countdown > 0) return;

        try {
            // Call resend confirmation email API
            const response =
                await IdentityService.postIdentityApiIdentityResendConfirmationEmail(
                    {
                        requestBody: { email },
                    }
                );

            if (response) {
                toast({
                    title: 'Code Resent',
                    description:
                        'A new verification code has been sent to your email',
                });
                setCountdown(60);
                setCodes(Array(10).fill(''));
            }
        } catch (error: unknown) {
            console.error('Resend code error:', error);
            const errorBody = (error as { body?: Record<string, string> })
                ?.body as Record<string, string>;
            onErrorDisplay(errorBody, toast, 'Resend Error');
        }
    };

    return {
        codes,
        countdown,
        email,
        isSubmitting,
        onChangeCode,
        submit,
        resendCode,
    };
}
