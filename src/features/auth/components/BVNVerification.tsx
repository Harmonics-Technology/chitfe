'use client';

import AppButton from '@components/app-button';
import { RadioGroup, RadioGroupItem } from '@components/ui/radio-group';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

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
    return (
        <div className='w-full space-y-8 p-5'>
            <div>
                <Link href='/auth/register'>
                    <ArrowLeft />
                </Link>
            </div>

            <div
                aria-label='Sign up form for new users using BVN'
                className='space-y-3'
            >
                <h1 className='text-xl font-bold leading-[26.4px]'>
                    Verify your BVN
                </h1>
                <p className='text-sm font-normal leading-[20.72px]'>
                    Please select how you want to receive otp for bvn
                    verification
                </p>
            </div>

            <div className='w-full space-y-8'>
                <RadioGroup>
                    {options.map((option) => (
                        <div
                            key={option.id}
                            className='mb-3 flex items-start gap-4 focus-within:rounded-xl focus-within:ring-1 focus-within:ring-gray-100 hover:shadow-none'
                        >
                            <RadioGroupItem
                                id={option.id}
                                value={option.id}
                                className='mt-1 size-6 border-chit-gainsboro checked:border-chit-primary'
                            />
                            <label
                                htmlFor={option.id}
                                className='flex-1 space-y-2'
                            >
                                <h2 className='text-base font-semibold leading-[21.12px] text-chit-woodsmoke'>
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

            <div className='mt-14'>
                <AppButton
                    type='submit'
                    className='font-semibold text-chit-white-smoke'
                    isLoading={false}
                    // isDisabled={!isValid || isSubmitting}
                >
                    Send OTP
                </AppButton>
            </div>
        </div>
    );
}
