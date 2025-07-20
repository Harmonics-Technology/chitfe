import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ChitContainer } from '../reuseables/ChitContainer';

const Secure = () => {
    return (
        <ChitContainer>
            <div className='m-4 mt-20 flex flex-col items-center justify-center gap-10 rounded-xl bg-[#D6E7FF40] p-6 sm:m-8 md:m-10 md:flex-row'>
                {/* Left: Animated Authorize Card */}
                <div className='w-full max-w-md rounded-xl bg-white px-6 py-8 text-center shadow-md'>
                    {/* Image with left-right animation */}
                    <div className='lock-slide mb-6'>
                        <Image
                            src='/authorise.svg'
                            alt='Authorize Transactions'
                            width={100}
                            height={100}
                            className='mx-auto'
                        />
                    </div>

                    <h4 className='mb-2 text-lg font-semibold text-black'>
                        Authorize Transactions
                    </h4>
                    <p className='mb-6 text-sm leading-relaxed text-gray-700'>
                        To ensure seamless transactions and securely process
                        transactions, we need your authorization. Would you like
                        to authorize transactions on this application?
                    </p>

                    <Link href='/create-account' passHref>
                        <div className='flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-indigo-900 px-6 py-3 text-base font-semibold text-white transition hover:bg-indigo-800'>
                            Yes, Authorise <ArrowRight className='size-4' />
                        </div>
                    </Link>
                </div>

                {/* Right: Text Section */}
                <div className='max-w-xl text-center md:text-left'>
                    <h1 className='mb-3 text-3xl font-medium md:text-4xl'>
                        Secure and Reliable
                    </h1>
                    <p className='font-[poppins] text-lg leading-7 text-gray-700'>
                        We prioritize your safety with robust security{' '}
                        <br className='hidden sm:inline' />
                        measures. Your data and transactions are always{' '}
                        <br className='hidden sm:inline' />
                        protected, giving you peace of mind.
                    </p>
                </div>
            </div>
        </ChitContainer>
    );
};

export default Secure;
