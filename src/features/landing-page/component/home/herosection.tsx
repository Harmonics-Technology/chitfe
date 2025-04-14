import React from 'react';
import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';
import Image from 'next/image';
import Button from '@features/landing-page/link/getstarted';

const HeroSection = () => {
    return (
        <section className='bg-white px-4 pb-0 sm:px-6 lg:px-8'>
            <div className='mx-auto max-w-7xl'>
                <div className='pb-12 pt-16 text-center'>
                    <h1 className='mx-auto mb-6 max-w-xs text-4xl font-extrabold leading-snug text-gray-900 sm:max-w-none md:text-5xl'>
                        Take Charge Of Your
                        <span className='block sm:mt-2'>
                            Money With{' '}
                            <span className='text-[#3A2A7E]'>CHIT</span>
                        </span>
                    </h1>
                    <p className='text-lg'>
                        Manage all your bank accounts, track spending, and stay
                        on
                        <br className='hidden md:inline' /> budget—all in one
                        secure app.
                    </p>

                    <div className='mx-auto mt-6 flex w-full max-w-2xl flex-col items-center justify-center gap-4 md:flex-row'>
                        <Link href='/get-started'>
                            <Button
                                label='Get Started'
                                variant='filled'
                                suffix={<ArrowRight className='size-5' />}
                            />
                        </Link>

                        <Link href='/download'>
                            <Button
                                label='Download App'
                                variant='outline'
                                prefix={<Download className='size-5' />}
                            />
                        </Link>
                    </div>
                </div>

                <div className='relative -mx-8 flex items-center justify-center overflow-hidden bg-[linear-gradient(to_top,#C6BDEF_0%,transparent_60%)] pb-8'>
                    <div className='mb-8 w-full max-w-2xl px-4'>
                        <Image
                            src='/mobile-phone.svg'
                            alt='A mobile phone'
                            width={860}
                            height={452}
                            className='h-auto w-full'
                        />
                    </div>
                </div>

                <div className='mb-20 mt-14 px-4 text-center'>
                    <h2 className='mb-4 text-4xl font-bold leading-10'>
                        Smarter Finance, Simplified.
                    </h2>
                    <p className='text-lg font-normal'>
                        Everything you need to manage your money with ease.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
