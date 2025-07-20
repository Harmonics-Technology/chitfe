import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Security = () => {
    return (
        <div className='mb-14 flex flex-1 flex-col items-center justify-around gap-0 p-4 md:flex-row'>
            {/* ↓↓↓ Image Section ↓↓↓ */}
            <div>
                <Image
                    src='/security.svg'
                    alt='a shield'
                    width={608}
                    height={513}
                    className='p-8'
                />
            </div>

            {/* ↓↓↓ Text Section ↓↓↓ */}
            <div className='max-w-xl text-center md:text-left'>
                <h1 className='mx-auto mb-6 max-w-sm text-4xl font-bold leading-[44px] text-[#191042] md:mx-0 md:max-w-md lg:max-w-lg'>
                    Security You Can Trust
                </h1>

                <ul className='space-y-4 font-[poppins] text-base text-gray-700'>
                    <li className='flex items-start justify-center text-left md:justify-start'>
                        <span className='mr-2 mt-1 text-[#3A2A7E]'>•</span>
                        <span>
                            Your data and transactions are protected with the
                            highest security standards, including bank-grade
                            encryption and full compliance with CBN regulations.
                        </span>
                    </li>
                    <li className='flex items-start justify-center text-left md:justify-start'>
                        <span className='mr-2 mt-1 text-[#3A2A7E]'>•</span>
                        <span>
                            Our robust systems ensure secure logins, fraud
                            detection, and 24/7 monitoring to keep your
                            information safe.
                        </span>
                    </li>
                </ul>

                <Link
                    href='/get-started'
                    className='mt-6 flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-[#3A2A7E] px-6 py-3 font-[poppins] font-medium text-white transition-colors hover:bg-[#4d3a9e] md:w-fit'
                >
                    Get Started <ArrowRight className='size-5' />
                </Link>
            </div>
        </div>
    );
};

export default Security;
