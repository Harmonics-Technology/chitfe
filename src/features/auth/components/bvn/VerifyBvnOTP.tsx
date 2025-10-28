'use client';

import AppButton from '@components/app-button';
import { Button } from '@components/ui/button';
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from '@components/ui/input-otp';

import { useBvnOtpVerify } from '@features/auth/hooks';

export default function VerifyBvnOTP() {
    const { codes, onChangeCode, countdown, submit, isSubmitting, resendOtp } =
        useBvnOtpVerify();

    const isCountingDown = countdown > 0;

    return (
        <div className='w-full'>
            <div className='space-y-12'>
                <div
                    aria-label='Input fields to verify BVN for new users'
                    className='space-y-3'
                >
                    <h1 className='text-xl font-bold leading-26 sm:text-2xl sm:font-semibold sm:text-chit-woodsmoke'>
                        Verify your BVN
                    </h1>
                    <p className='text-sm font-normal leading-[20.72px] sm:text-base sm:leading-[23.68px]'>
                        Please enter the code sent to your chosen method to
                        verify your BVN
                    </p>
                </div>

                <div className='flex w-full flex-col items-center'>
                    <InputOTP
                        maxLength={6}
                        value={codes.join('')}
                        onChange={(value) => {
                            const newCodes = value.split('');
                            for (let i = 0; i < 6; i++) {
                                if (newCodes[i] !== codes[i]) {
                                    onChangeCode(newCodes[i] || '', i);
                                    break;
                                }
                            }
                        }}
                    >
                        <InputOTPGroup className='gap-2 sm:gap-4'>
                            <InputOTPSlot
                                index={0}
                                className='size-[60px] sm:size-[75.96px]'
                            />
                            <InputOTPSlot
                                index={1}
                                className='size-[60px] sm:size-[75.96px]'
                            />
                            <InputOTPSlot
                                index={2}
                                className='size-[60px] sm:size-[75.96px]'
                            />
                            <InputOTPSlot
                                index={3}
                                className='size-[60px] sm:size-[75.96px]'
                            />
                            <InputOTPSlot
                                index={4}
                                className='size-[60px] sm:size-[75.96px]'
                            />
                            <InputOTPSlot
                                index={5}
                                className='size-[60px] sm:size-[75.96px]'
                            />
                        </InputOTPGroup>
                    </InputOTP>
                </div>

                <div className='mt-20 flex items-center gap-4'>
                    <AppButton
                        type='button'
                        className='sm:text-lg'
                        isLoading={isSubmitting}
                        isDisabled={codes.join('').length !== 6 || isSubmitting}
                        onClick={() => submit(codes.join(''))}
                    >
                        Verify
                    </AppButton>
                </div>
            </div>

            <div className='mt-4 flex w-full items-center justify-center gap-1'>
                <div className='flex items-center text-sm text-chit-primary sm:text-base'>
                    Didn't receive the code?{' '}
                    <span className='ml-1'>
                        {isCountingDown ? (
                            <span className='font-medium'>
                                {Math.floor(countdown / 60)
                                    .toString()
                                    .padStart(2, '0')}
                                :{(countdown % 60).toString().padStart(2, '0')}
                            </span>
                        ) : (
                            <Button
                                type='button'
                                className='w-full px-1 py-0 font-medium hover:bg-transparent sm:font-semibold'
                                variant='ghost'
                                onClick={resendOtp}
                            >
                                Resend OTP
                            </Button>
                        )}
                    </span>
                </div>
            </div>
        </div>
    );
}
