import React from 'react';
import Image from 'next/image';
import { ChitContainer } from '../reuseables/ChitContainer';

const Financial = () => {
    return (
        <ChitContainer>
            <div className='group relative mb-14 mt-16 flex flex-col items-center justify-center gap-8 overflow-hidden rounded-2xl border border-pink-200/50 bg-gradient-to-br from-pink-50 via-rose-50/50 to-fuchsia-50/30 p-6 shadow-xl shadow-pink-100/50 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-200/60 sm:gap-10 sm:p-8 md:mt-24 md:flex-row md:gap-12 md:p-12 lg:rounded-3xl lg:p-16'>
                {/* Decorative gradient orbs */}
                <div className='pointer-events-none absolute -left-20 -top-20 size-64 rounded-full bg-gradient-to-br from-pink-200/40 to-rose-200/30 blur-3xl transition-all duration-500 group-hover:scale-110' />
                <div className='pointer-events-none absolute -bottom-20 -right-20 size-64 rounded-full bg-gradient-to-tr from-fuchsia-200/30 to-pink-200/30 blur-3xl transition-all duration-500 group-hover:scale-110' />

                {/* Text Section */}
                <div className='relative z-10 max-w-xl text-center md:text-left'>
                    <div className='mb-4 inline-flex items-center gap-2 rounded-full bg-pink-100/80 px-4 py-1.5 text-sm font-semibold text-pink-800 backdrop-blur-sm'>
                        <svg
                            className='size-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                        >
                            <path
                                fillRule='evenodd'
                                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                                clipRule='evenodd'
                            />
                        </svg>
                        Financial Insights
                    </div>
                    <h3 className='mb-4 bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-3xl font-bold leading-tight text-transparent sm:text-4xl lg:text-5xl'>
                        Tailored Financial Insights
                    </h3>
                    <p className='font-[poppins] text-base leading-relaxed text-gray-700 sm:text-lg lg:text-xl lg:leading-relaxed'>
                        Stay on top of your finances with insights that help you
                        manage transactions, track trends, and optimize your
                        money effectively.
                    </p>
                </div>

                {/* Image Section */}
                <div className='relative z-10 w-full max-w-xl transition-transform duration-500 group-hover:scale-105'>
                    <div className='absolute inset-0 rounded-xl bg-gradient-to-br from-pink-300/20 to-transparent blur-xl' />
                    <Image
                        src='/financialadvice.svg'
                        alt='Financial advice and insights visualization'
                        width={582}
                        height={480}
                        className='relative h-auto w-full drop-shadow-2xl'
                    />
                </div>
            </div>
        </ChitContainer>
    );
};

export default Financial;
