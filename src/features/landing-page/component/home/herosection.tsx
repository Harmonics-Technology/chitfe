'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Button from '@features/landing-page/component/reuseables/ChitButton';

const HeroSection = () => {
    const rotatingWords = ['Money', 'Finances', 'Expenses'];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentWordIndex(
                    (prevIndex) => (prevIndex + 1) % rotatingWords.length
                );
                setIsAnimating(false);
            }, 400);
        }, 3000);

        return () => clearInterval(interval);
    }, [rotatingWords.length]);

    return (
        <section className='relative overflow-hidden bg-gradient-to-br from-white via-purple-50/30 to-white px-4 pb-0 pt-6 sm:px-6 sm:pt-12 lg:px-8 lg:pt-20'>
            {/* Decorative background elements */}
            <div className='pointer-events-none absolute inset-0 overflow-hidden'>
                <div className='absolute -left-32 -top-32 size-96 rounded-full bg-purple-100/40 blur-3xl' />
                <div className='absolute -right-32 top-64 size-96 rounded-full bg-indigo-100/40 blur-3xl' />
            </div>

            <div className='relative mx-auto max-w-[1440px]'>
                {/* Mobile and Tablet: Stacked Layout */}
                <div className='lg:hidden'>
                    <div className='pb-12 pt-8 text-center sm:pb-16 sm:pt-12'>
                        {/* Badge or Tag */}
                        <div className='mb-6 inline-flex items-center gap-2 rounded-full bg-purple-100/80 px-4 py-2 text-sm font-medium text-purple-900 backdrop-blur-sm'>
                            <span className='relative flex size-2'>
                                <span className='absolute inline-flex size-full animate-ping rounded-full bg-purple-400 opacity-75' />
                                <span className='relative inline-flex size-2 rounded-full bg-purple-500' />
                            </span>
                            Financial Freedom, Simplified
                        </div>

                        <h1 className='mx-auto mb-6 max-w-xs bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-[2.5rem] font-black leading-[1.15] tracking-tight text-transparent sm:max-w-2xl sm:text-[3.5rem] md:text-[4rem]'>
                            Take Charge Of Your{' '}
                            <span className='relative inline-block'>
                                <span className='absolute -inset-1 block bg-gradient-to-r from-purple-600 to-indigo-600 opacity-20 blur-lg' />
                                <span
                                    className={`duration-400 relative inline-block bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 bg-clip-text text-transparent transition-all ${
                                        isAnimating
                                            ? 'translate-y-2 opacity-0'
                                            : 'translate-y-0 opacity-100'
                                    }`}
                                >
                                    {rotatingWords[currentWordIndex]}
                                </span>
                            </span>{' '}
                            With{' '}
                            <span className='relative inline-block'>
                                <span className='absolute -inset-1 block bg-gradient-to-r from-indigo-600 to-purple-600 opacity-20 blur-lg' />
                                <span className='relative bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'>
                                    CHIT
                                </span>
                            </span>
                        </h1>

                        <p className='mx-auto max-w-lg font-[poppins] text-base leading-relaxed text-gray-600 sm:text-lg sm:leading-relaxed md:max-w-xl'>
                            Manage all your bank accounts, track spending, and
                            stay on budget—all in one secure app.
                        </p>

                        <div className='mx-auto mt-8 flex w-full max-w-md flex-col items-center justify-center gap-4 font-[poppins] sm:max-w-lg sm:flex-row sm:gap-4 md:mt-10'>
                            <Link
                                href='/get-started'
                                className='w-full sm:w-auto'
                            >
                                <Button
                                    label='Get Started'
                                    variant='filled'
                                    suffix={<ArrowRight className='size-5' />}
                                />
                            </Link>

                            <Link href='/download' className='w-full sm:w-auto'>
                                <Button
                                    label='Download App'
                                    variant='outline'
                                />
                            </Link>
                        </div>

                        {/* Trust indicators */}
                        <div className='mt-12 flex items-center justify-center gap-8 text-sm text-gray-500'>
                            <div className='flex items-center gap-2'>
                                <svg
                                    className='size-5 text-green-500'
                                    fill='currentColor'
                                    viewBox='0 0 20 20'
                                >
                                    <path
                                        fillRule='evenodd'
                                        d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                                        clipRule='evenodd'
                                    />
                                </svg>
                                <span className='font-medium'>Secure</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <svg
                                    className='size-5 text-green-500'
                                    fill='currentColor'
                                    viewBox='0 0 20 20'
                                >
                                    <path
                                        fillRule='evenodd'
                                        d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                                        clipRule='evenodd'
                                    />
                                </svg>
                                <span className='font-medium'>
                                    Bank-grade encryption
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className='relative flex items-center justify-center overflow-visible pb-0'>
                        <div className='relative w-full max-w-[300px] sm:max-w-[420px] md:max-w-screen-sm'>
                            <div className='absolute inset-0 bg-gradient-to-t from-purple-200/30 to-transparent blur-2xl' />
                            <Image
                                src='/mobile-phone.svg'
                                alt='A mobile phone'
                                width={860}
                                height={452}
                                className='relative h-auto w-full drop-shadow-2xl'
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Desktop: Two-Column Layout */}
                <div className='hidden lg:grid lg:min-h-[650px] lg:grid-cols-[1.1fr,1fr] lg:items-center lg:gap-12 xl:min-h-[750px] xl:gap-16'>
                    {/* Left Column: Text Content */}
                    <div className='flex flex-col justify-center'>
                        {/* Badge or Tag */}
                        <div className='mb-8 inline-flex w-fit items-center gap-2 rounded-full bg-purple-100/80 px-5 py-2.5 text-sm font-semibold text-purple-900 backdrop-blur-sm'>
                            <span className='relative flex size-2'>
                                <span className='absolute inline-flex size-full animate-ping rounded-full bg-purple-400 opacity-75' />
                                <span className='relative inline-flex size-2 rounded-full bg-purple-500' />
                            </span>
                            Financial Freedom, Simplified
                        </div>

                        <h1 className='mb-8 max-w-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-[3.75rem] font-black leading-[1.1] tracking-tight text-transparent xl:text-[5rem] xl:leading-[1.1]'>
                            Take Charge Of Your{' '}
                            <span className='relative inline-block'>
                                <span className='absolute -inset-1 block bg-gradient-to-r from-purple-600 to-indigo-600 opacity-20 blur-xl' />
                                <span
                                    className={`duration-400 relative inline-block bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 bg-clip-text text-transparent transition-all ${
                                        isAnimating
                                            ? 'translate-y-3 opacity-0'
                                            : 'translate-y-0 opacity-100'
                                    }`}
                                >
                                    {rotatingWords[currentWordIndex]}
                                </span>
                            </span>{' '}
                            With{' '}
                            <span className='relative inline-block'>
                                <span className='absolute -inset-1 block bg-gradient-to-r from-indigo-600 to-purple-600 opacity-20 blur-xl' />
                                <span className='relative bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'>
                                    CHIT
                                </span>
                            </span>
                        </h1>

                        <p className='mb-10 max-w-xl font-[poppins] text-lg leading-relaxed text-gray-600 xl:text-xl xl:leading-relaxed'>
                            Manage all your bank accounts, track spending, and
                            stay on budget—all in one secure app.
                        </p>

                        <div className='flex flex-col items-start gap-4 font-[poppins] sm:flex-row sm:gap-5'>
                            <Link href='/get-started' className='group'>
                                <Button
                                    label='Get Started'
                                    variant='filled'
                                    suffix={
                                        <ArrowRight className='size-5 transition-transform group-hover:translate-x-1' />
                                    }
                                />
                            </Link>

                            <Link href='/download' className='group'>
                                <Button
                                    label='Download App'
                                    variant='outline'
                                />
                            </Link>
                        </div>

                        {/* Trust indicators */}
                        <div className='mt-12 flex items-center gap-8 text-sm text-gray-500'>
                            <div className='flex items-center gap-2'>
                                <svg
                                    className='size-5 text-green-500'
                                    fill='currentColor'
                                    viewBox='0 0 20 20'
                                >
                                    <path
                                        fillRule='evenodd'
                                        d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                                        clipRule='evenodd'
                                    />
                                </svg>
                                <span className='font-medium'>
                                    256-bit encryption
                                </span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <svg
                                    className='size-5 text-green-500'
                                    fill='currentColor'
                                    viewBox='0 0 20 20'
                                >
                                    <path
                                        fillRule='evenodd'
                                        d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                                        clipRule='evenodd'
                                    />
                                </svg>
                                <span className='font-medium'>
                                    FDIC insured
                                </span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <svg
                                    className='size-5 text-green-500'
                                    fill='currentColor'
                                    viewBox='0 0 20 20'
                                >
                                    <path
                                        fillRule='evenodd'
                                        d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                                        clipRule='evenodd'
                                    />
                                </svg>
                                <span className='font-medium'>
                                    SOC 2 compliant
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Phone Mockup */}
                    <div className='relative flex items-center justify-center'>
                        <div className='absolute inset-0 bg-gradient-to-br from-purple-200/40 via-indigo-200/30 to-transparent blur-3xl' />
                        <div className='relative w-full max-w-[680px] xl:max-w-[760px]'>
                            <Image
                                src='/mobile-phone.svg'
                                alt='A mobile phone'
                                width={860}
                                height={452}
                                className='h-auto w-full drop-shadow-2xl transition-transform duration-300 hover:scale-[1.02]'
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
