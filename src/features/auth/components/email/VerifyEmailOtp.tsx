'use client';

import { Suspense, useState } from 'react';
import AppButton from '@components/app-button';
import { Input } from '@components/ui/input';

import useVerifyEmailOtp from '@features/auth/hooks/useVerifyEmailOtp';

function VerifyEmailOtpContent() {
    const { countdown, email, isSubmitting, submit, resendCode } =
        useVerifyEmailOtp();

    const [code, setCode] = useState('');

    // Mask email for display
    const maskEmail = (email: string) => {
        if (!email) return '';
        const [username, domain] = email.split('@');
        if (!username || !domain) return email;
        const maskedUsername =
            username.charAt(0) + '***' + username.charAt(username.length - 1);
        return `${maskedUsername}@${domain}`;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        submit(code);
    };

    return (
        <div className='space-y-8 pt-9 font-[poppins] md:p-16'>
            <div aria-label='Email verification page' className='space-y-3'>
                <h1 className='text-4xl font-bold leading-26'>
                    Verify Your Email
                </h1>
                <p className='text-sm font-normal leading-[20.72px]'>
                    Please enter the verification code sent to{' '}
                    <span className='font-semibold'>{maskEmail(email)}</span> to
                    verify your email address
                </p>
            </div>

            <form onSubmit={handleSubmit} className='space-y-8'>
                <div className='space-y-2'>
                    <label
                        htmlFor='verification-code'
                        className='text-sm font-medium'
                    >
                        Verification Code
                    </label>
                    <Input
                        id='verification-code'
                        type='text'
                        placeholder='Enter verification code'
                        value={code}
                        onChange={(e) => setCode(e.target.value.toUpperCase())}
                        disabled={isSubmitting}
                        maxLength={10}
                        className='text-center text-lg uppercase tracking-widest'
                    />
                </div>

                <div className='text-center'>
                    {countdown > 0 ? (
                        <p className='text-sm text-chit-ship-gray'>
                            Resend code in{' '}
                            <span className='font-semibold text-chit-primary'>
                                00:{countdown.toString().padStart(2, '0')}
                            </span>
                        </p>
                    ) : (
                        <button
                            onClick={resendCode}
                            className='text-sm font-semibold text-chit-primary hover:underline'
                            type='button'
                        >
                            Resend Code
                        </button>
                    )}
                </div>

                <div className='flex flex-col items-center space-y-4 pt-8'>
                    <AppButton
                        type='submit'
                        className='w-full'
                        isLoading={isSubmitting}
                        isDisabled={isSubmitting || code.length < 10}
                    >
                        Verify Email
                    </AppButton>
                </div>
            </form>
        </div>
    );
}

export default function VerifyEmailOtp() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <VerifyEmailOtpContent />
        </Suspense>
    );
}
