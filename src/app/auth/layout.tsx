// import Image from 'next/image';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';

import AppLogo from '@components/AppLogo';
import AuthCarousel from '@features/auth/components/AuthCarousel';

export const metadata: Metadata = {
    title: 'Chit - Authentication ',
    description: '',
};

type AuthLayoutProps = {
    children: ReactNode;
};

export default function Authlayout({ children }: AuthLayoutProps) {
    return (
        <section className='h-dvh w-full'>
            <header className='h-14 px-5 pt-4'>
                <AppLogo />
            </header>

            <section className='grid size-full grid-cols-1 md:grid-cols-2 md:gap-6 md:p-4'>
                <div className='relative hidden size-full items-center justify-center overflow-hidden sm:flex'>
                    <AuthCarousel />
                </div>
                <div className='flex flex-col rounded-3xl bg-chit-milk-white'>
                    {children}
                </div>
            </section>
        </section>
    );
}
