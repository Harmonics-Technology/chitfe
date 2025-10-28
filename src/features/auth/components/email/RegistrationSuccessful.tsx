'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import AppButton from '@components/app-button';

import successBadge from '~/public/assets/images/success-badge.svg';

export default function RegistrationSuccessful() {
    const router = useRouter();

    return (
        <div className='flex flex-col items-center justify-center space-y-8 p-5 pt-9 font-[poppins] md:p-16'>
            <Image
                src={successBadge}
                alt='success badge image'
                className='size-20'
            />
            <div
                aria-label='account created successfully page'
                className='space-y-4 text-center'
            >
                <h1 className='text-4xl font-bold leading-26'>
                    Account Created Successfully!
                </h1>
                <p className='text-sm font-normal leading-[20.72px]'>
                    Your email has been verified and your account is now active.
                    You can now log in to access all features.
                </p>
            </div>

            <div className='flex w-full flex-col items-center space-y-4 pt-8'>
                <AppButton
                    type='button'
                    aria-label='button to login page'
                    className='w-full'
                    onClick={() => router.push('/login')}
                >
                    Continue to Login
                </AppButton>
            </div>
        </div>
    );
}
