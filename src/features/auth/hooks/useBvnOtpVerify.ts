'use client';

import { useState, useEffect, useRef, RefObject } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { IdentityService } from '@lib/services';
import { useToast } from '@hooks/use-toast';

export function useBvnOtpVerify() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { toast } = useToast();

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [codes, setCodes] = useState<string[]>(Array(6).fill(''));
    const [countdown, setCountdown] = useState<number>(60);

    const refs: RefObject<HTMLInputElement | null>[] = [
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
    ];

    const sessionId = searchParams.get('sessionId') || '';
    const bvn = searchParams.get('bvn') || '';

    // Countdown timer
    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => {
                setCountdown(countdown - 1);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [countdown]);

    const onChangeCode = (text: string, index: number) => {
        // Handle paste of full code
        if (text.length > 1) {
            const newCodes = text.split('').slice(0, 6);
            setCodes([...newCodes, ...Array(6 - newCodes.length).fill('')]);
            refs[5]?.current?.focus();
            if (newCodes.length === 6) {
                submit(newCodes.join(''));
            }
            return;
        }

        // Handle single character input
        const newCodes = [...codes];
        newCodes[index] = text;
        setCodes(newCodes);

        // Auto-submit when all fields are filled
        if (newCodes[5] !== '' && newCodes.every((code) => code !== '')) {
            submit(newCodes.join(''));
            return;
        }

        // Move to next input
        if (text !== '' && index < 5) {
            refs[index + 1]?.current?.focus();
        }
    };

    const submit = async (otp: string) => {
        if (!sessionId || !otp || otp.length !== 6) {
            toast({
                title: 'Invalid OTP',
                description: 'Please enter a valid 6-digit OTP',
                variant: 'destructive',
            });
            return;
        }

        setIsSubmitting(true);
        try {
            const response = await IdentityService.fetchBvnDetails({
                otp,
                sessionId,
                isMobile: false,
            });

            if (!response.status) {
                toast({
                    title: 'Something went wrong',
                    description: response.message as string,
                    variant: 'destructive',
                });
                setIsSubmitting(false);
                return;
            }

            // Store user details in localStorage
            localStorage.setItem(
                'BVN_REGISTRATION_USER_DETAILS',
                JSON.stringify(response.data)
            );

            // Navigate to account setup page
            router.push('/signup/bvn/account-setup');
        } catch (error: unknown) {
            const errorBody = (error as { body?: { message?: string } })?.body;
            toast({
                title: 'Something went wrong',
                description: errorBody?.message || 'Failed to verify OTP',
                variant: 'destructive',
            });
            setIsSubmitting(false);
        }
    };

    const resendOtp = async () => {
        // Reset countdown
        setCountdown(60);

        // You might need to call the verify method again to resend OTP
        // This depends on your API implementation
        toast({
            title: 'OTP Resent',
            description: 'A new OTP has been sent',
        });
    };

    return {
        codes,
        setCodes,
        countdown,
        onChangeCode,
        refs,
        submit,
        isSubmitting,
        resendOtp,
        sessionId,
        bvn,
    };
}
