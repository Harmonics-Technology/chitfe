'use client';
import { useState } from 'react';

import AppButton from '@components/app-button';
import { RadioGroup, RadioGroupItem } from '@components/ui/radio-group';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import VerifyOTP from './VerifyOTP';

const options = [
    {
        id: 'email',
        label: 'Email',
        description:
            'An email with verification code will be sent to chu******ess@gmail.com',
    },
    {
        id: 'phone1',
        label: 'Phone Number 1',
        description:
            'SMS with a verification code will be sent to +234817****788',
    },
    {
        id: 'phone2',
        label: 'Phone Number 2',
        description:
            'SMS with a verification code will be sent to +234909****603',
    },
    {
        id: 'alternative',
        label: 'Alternative Phone Number',
        description:
            'SMS with a verification code will be sent to your alternate phone number',
    },
];

export default function BVNVerification() {
    const [hasCode, setHasCode] = useState<boolean>(false);
    // const [option, setOption] = useState<string>('');

    const toggleOtpInput = () => {
        setHasCode(!hasCode);
    };

    return (
        <div className='w-full space-y-8 p-5 sm:space-y-14 sm:px-16'>
            <div>
                <Link href='/auth/register' className='flex items-center gap-3'>
                    <ArrowLeft />{' '}
                    <span className='hidden text-xl text-chit-woodsmoke sm:inline-block'>
                        Back
                    </span>
                </Link>
            </div>

            {hasCode ? (
                <VerifyOTP />
            ) : (
                <>
                    <div
                        aria-label='Sign up form for new users using BVN'
                        className='space-y-3'
                    >
                        <h1 className='text-xl font-bold leading-26 sm:text-2xl sm:font-semibold sm:text-chit-woodsmoke'>
                            Verify your BVN
                        </h1>
                        <p className='text-sm font-normal leading-[20.72px] sm:text-base'>
                            Please select how you want to receive otp for bvn
                            verification
                        </p>
                    </div>
                    <div className='w-full space-y-8'>
                        <RadioGroup>
                            {options.map((option) => (
                                <div
                                    key={option.id}
                                    className='mb-3 flex items-start gap-4 focus-within:rounded-xl focus-within:ring-1 focus-within:ring-gray-100 hover:shadow-none sm:items-center'
                                >
                                    <RadioGroupItem
                                        id={option.id}
                                        value={option.id}
                                        className='mt-1 size-6 border-chit-gainsboro checked:border-chit-primary'
                                    />
                                    <label
                                        htmlFor={option.id}
                                        className='flex-1 space-y-2 sm:rounded-xl sm:bg-chit-milk-white sm:p-2.5'
                                    >
                                        <h2 className='text-base font-semibold leading-[21.12px] text-chit-woodsmoke sm:text-lg sm:font-medium'>
                                            {option.label}
                                        </h2>
                                        <p className='text-xs leading-[14.64px] text-chit-ship-gray'>
                                            {option.description}
                                        </p>
                                    </label>
                                </div>
                            ))}
                        </RadioGroup>
                    </div>
                    <div className='pt-14 sm:pt-16'>
                        <AppButton
                            type='submit'
                            className='font-semibold text-chit-white-smoke sm:text-lg'
                            isLoading={false}
                            onClick={() => toggleOtpInput()}
                            // isDisabled={!isValid || isSubmitting}
                        >
                            Send OTP
                        </AppButton>
                    </div>{' '}
                </>
            )}
        </div>
    );
}
