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
        <section className='h-dvh w-full bg-gradient-to-t from-[#211364] to-[#442BB6]'>
            <header className='px-5 pt-4'>
                <AppLogo />
            </header>

            <section className='grid size-full grid-cols-1 md:grid-cols-2 md:gap-6 md:p-4'>
                <div className='relative flex size-full items-center justify-center overflow-hidden'>
                    <AuthCarousel />
                </div>
                <div className='flex flex-col'>{children}</div>
            </section>
        </section>
    );
}
