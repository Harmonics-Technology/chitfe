// import Image from 'next/image';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';

import AppLogo from '@components/AppLogo';

export const metadata: Metadata = {
    title: 'Authentication - Chit',
    description: '',
};

type AuthLayoutProps = {
    children: ReactNode;
};

export default function Authlayout({ children }: AuthLayoutProps) {
    return (
        <section className='grid h-dvh w-full grid-cols-1'>
            <AppLogo />
            <div className='grid size-full grid-cols-1 md:grid-cols-2 md:gap-6 md:p-4'>
                <div className='relative size-full overflow-hidden rounded'>
                    #illustration
                </div>
                <div className='flex flex-col items-center justify-center'>
                    {children}
                </div>
            </div>
        </section>
    );
}
