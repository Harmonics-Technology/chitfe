import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ChitContainer } from '../reuseables/ChitContainer';

const Secure = () => {
    return (
        <ChitContainer>
            <div className='group relative m-4 mt-16 flex flex-col items-center justify-center gap-8 overflow-hidden rounded-2xl border border-blue-200/50 bg-gradient-to-br from-blue-50 via-indigo-50/50 to-sky-50/30 p-6 shadow-xl shadow-blue-100/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-200/60 sm:m-8 sm:gap-10 sm:p-8 md:m-10 md:mt-24 md:flex-row md:gap-12 md:p-12 lg:rounded-3xl lg:p-16'>
                {/* Decorative gradient orbs */}
                <div className='pointer-events-none absolute -left-20 -top-20 size-64 rounded-full bg-gradient-to-br from-blue-200/40 to-indigo-200/30 blur-3xl transition-all duration-500 group-hover:scale-110' />
                <div className='pointer-events-none absolute -bottom-20 -right-20 size-64 rounded-full bg-gradient-to-tr from-sky-200/30 to-blue-200/30 blur-3xl transition-all duration-500 group-hover:scale-110' />

                {/* Left: Enhanced Authorize Card */}
                <div className='group/card relative z-10 w-full max-w-md overflow-hidden rounded-2xl border border-white/60 bg-white/80 px-8 py-10 text-center shadow-xl backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl'>
                    {/* Decorative gradient */}
                    <div className='pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-100/30 via-transparent to-indigo-100/30 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100' />

                    {/* Image with animation */}
                    <div className='lock-slide relative z-10 mb-6 inline-block rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-6 shadow-lg'>
                        <Image
                            src='/authorise.svg'
                            alt='Authorize Transactions'
                            width={100}
                            height={100}
                            className='mx-auto'
                        />
                    </div>

                    <h4 className='relative z-10 mb-3 bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-xl font-bold text-transparent'>
                        Authorize Transactions
                    </h4>
                    <p className='relative z-10 mb-8 font-[poppins] text-sm leading-relaxed text-gray-600'>
                        To ensure seamless transactions and securely process
                        transactions, we need your authorization. Would you like
                        to authorize transactions on this application?
                    </p>

                    <Link href='/create-account' passHref>
                        <div className='group/btn relative z-10 flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/40'>
                            <span className='absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100' />
                            <span className='relative'>Yes, Authorise</span>
                            <ArrowRight className='relative size-4 transition-transform group-hover/btn:translate-x-1' />
                        </div>
                    </Link>
                </div>

                {/* Right: Text Section */}
                <div className='relative z-10 max-w-xl text-center md:text-left'>
                    <div className='mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100/80 px-4 py-1.5 text-sm font-semibold text-blue-800 backdrop-blur-sm'>
                        <svg
                            className='size-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                        >
                            <path
                                fillRule='evenodd'
                                d='M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                                clipRule='evenodd'
                            />
                        </svg>
                        Security & Trust
                    </div>
                    <h3 className='mb-4 bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-3xl font-bold leading-tight text-transparent sm:text-4xl lg:text-5xl'>
                        Secure and Reliable
                    </h3>
                    <p className='font-[poppins] text-base leading-relaxed text-gray-700 sm:text-lg lg:text-xl lg:leading-relaxed'>
                        We prioritize your safety with robust security measures.
                        Your data and transactions are always protected, giving
                        you peace of mind.
                    </p>
                </div>
            </div>
        </ChitContainer>
    );
};

export default Secure;
