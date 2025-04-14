import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function GetStarted() {
    const steps = [
        {
            title: 'Monitor Your Finances',
            description:
                'Track your balances and transactions in real-time. Stay organized and in full control of your money.',
            image: '/step-3.svg',
        },
        {
            title: 'Link Bank Accounts',
            description:
                'Easily connect all your bank accounts in one place. No stress, no switching between apps.',
            image: '/step-2.svg',
        },
        {
            title: 'Open a CHIT Account',
            description:
                'Sign up using your email or BVN. It’s a simple and secure process designed to get you started in no time.',
            image: '/step-1.svg',
        },
    ];

    return (
        <section className='w-full bg-gradient-to-br from-white to-[#f4f0ff] px-6 py-10 md:px-20'>
            <div className='mx-auto grid max-w-7xl items-start gap-12 md:grid-cols-2'>
                {/* Left Content */}
                <div className='pt-5 text-center md:text-left'>
                    <h2 className='mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl'>
                        Get Started <br />
                        With <span className='text-indigo-600'>CHIT</span>
                    </h2>
                    <p className='mb-8 text-lg text-gray-700'>
                        A step-by-step guide to setting up your account,{' '}
                        <br className='hidden md:inline' />
                        linking your banks, and unlocking the full{' '}
                        <br className='hidden md:inline' />
                        potential of our app.
                    </p>
                    <Link href='/create-account' passHref>
                        <div className='mx-auto flex w-fit cursor-pointer items-center gap-2 rounded-lg bg-indigo-900 px-6 py-3 text-base font-semibold text-white transition hover:bg-indigo-800 md:mx-0'>
                            Create an Account <ArrowRight className='size-4' />
                        </div>
                    </Link>
                </div>

                {/* Right Pillar + Floating Card */}
                <div className='relative mx-auto mt-32 flex items-end justify-between gap-2 md:gap-4'>
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className='relative flex flex-col items-center'
                        >
                            {/* Pillar container */}
                            <div className='flex w-[110px] flex-col items-center md:w-[180px]'>
                                <div className='absolute -top-4 z-10 flex size-7 items-center justify-center rounded-full bg-white text-xs font-bold text-indigo-600 shadow-md md:size-10 md:text-lg'>
                                    {index + 1}
                                </div>
                                <div className='w-full overflow-hidden rounded-t-[24px] shadow-lg md:rounded-t-[40px]'>
                                    <Image
                                        src={step.image}
                                        alt={step.title}
                                        width={300}
                                        height={
                                            index === 0
                                                ? 300
                                                : index === 1
                                                  ? 230
                                                  : 190
                                        }
                                        className='w-full object-cover'
                                    />
                                </div>
                            </div>

                            {/* Floating card */}
                            <div className='absolute right-[-30px] top-[120px] z-20 m-2 w-40 rounded-xl bg-white p-3 shadow-xl md:right-[100px] md:w-72'>
                                <h2 className='mb-1 text-sm font-semibold text-gray-900 md:text-base'>
                                    {step.title}
                                </h2>
                                <p className='text-xs leading-relaxed text-gray-300 hover:text-black md:text-xs'>
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
