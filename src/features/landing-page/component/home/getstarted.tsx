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
                'Sign up using your email or BVN. It is a simple and secure process designed to get you started in no time.',
            image: '/step-1.svg',
        },
    ];

    return (
        <section className='relative flex w-full items-center justify-center overflow-hidden bg-gradient-to-br from-white via-purple-50/20 to-indigo-50/30 px-6 py-16 md:px-20 md:py-24 lg:py-32'>
            {/* Decorative background elements */}
            <div className='pointer-events-none absolute inset-0 overflow-hidden'>
                <div className='absolute -left-32 top-32 size-96 rounded-full bg-purple-100/30 blur-3xl' />
                <div className='absolute -right-32 bottom-32 size-96 rounded-full bg-indigo-100/30 blur-3xl' />
            </div>

            <div className='relative mx-auto grid max-w-7xl items-start gap-12 md:grid-cols-2 lg:gap-16'>
                {/* Left Content */}
                <div className='mt-10 pt-5 text-center md:text-left'>
                    <div className='mb-6 inline-flex items-center gap-2 rounded-full bg-purple-100/80 px-4 py-1.5 text-sm font-semibold text-purple-800 backdrop-blur-sm'>
                        <svg
                            className='size-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                        >
                            <path d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' />
                        </svg>
                        Quick Setup
                    </div>
                    <h2 className='mb-6 text-4xl font-black leading-tight text-gray-900 md:text-5xl lg:text-6xl'>
                        Get Started{' '}
                        <span className='relative inline-block'>
                            <span className='absolute -inset-1 block bg-gradient-to-r from-purple-600 to-indigo-600 opacity-20 blur-xl' />
                            <span className='relative bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent'>
                                With CHIT
                            </span>
                        </span>
                    </h2>
                    <p className='mb-8 font-[poppins] text-base leading-relaxed text-gray-600 sm:text-lg lg:text-xl lg:leading-relaxed'>
                        A step-by-step guide to setting up your account, linking
                        your banks, and unlocking the full potential of our app.
                    </p>
                    <Link href='/get-started'>
                        <button className='group relative mt-4 flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 font-[poppins] text-base font-semibold text-white shadow-xl shadow-purple-500/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40 md:text-lg'>
                            <span className='absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
                            <span className='relative'>Create an Account</span>
                            <ArrowRight className='relative ml-1 size-5 transition-transform group-hover:translate-x-1' />
                        </button>
                    </Link>
                </div>

                {/* Right Pillar + Floating Card */}
                <div className='relative mx-auto mt-32 flex flex-row items-end justify-between gap-2 md:gap-4'>
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className='group/pillar relative flex flex-col items-center'
                        >
                            {/* Pillar container */}
                            <div className='flex w-[110px] flex-col items-center md:w-[180px]'>
                                <div className='absolute -top-0 bottom-6 z-10 flex size-7 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-purple-600 to-indigo-600 text-xs font-bold text-white shadow-xl shadow-purple-500/30 transition-all duration-300 group-hover/pillar:scale-110 md:size-10 md:text-lg'>
                                    {3 - index}
                                </div>
                                <div className='w-full overflow-hidden rounded-t-[24px] shadow-xl transition-all duration-300 group-hover/pillar:shadow-2xl md:rounded-t-[40px]'>
                                    <Image
                                        src={step.image}
                                        alt={step.title}
                                        width={300}
                                        height={
                                            index === 0
                                                ? 190
                                                : index === 1
                                                  ? 230
                                                  : 300
                                        }
                                        className='w-full object-cover transition-transform duration-300 group-hover/pillar:scale-105'
                                    />
                                </div>
                            </div>

                            {/* Floating card with hover effect */}
                            <div className='absolute right-[-20px] top-[-60px] z-20 m-2 w-40 rounded-xl border border-purple-100/50 bg-white/95 p-3 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-purple-200 hover:shadow-2xl md:right-[120px] md:w-72 md:p-4'>
                                <div className='mb-2 flex items-center gap-2'>
                                    <div className='flex size-6 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 text-xs font-bold text-white'>
                                        {3 - index}
                                    </div>
                                    <h3 className='text-sm font-bold text-gray-900 md:text-base'>
                                        {step.title}
                                    </h3>
                                </div>
                                <p className='font-[poppins] text-xs leading-relaxed text-gray-600 md:text-sm'>
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
