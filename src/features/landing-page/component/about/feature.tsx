'use client';

import React from 'react';
import Image from 'next/image';
import { Banknote, Building2, PiggyBank } from 'lucide-react';

const FeaturesSection = () => {
    return (
        <section className='mt-7 flex flex-col items-stretch justify-between gap-10 px-6 py-16 md:px-16 lg:flex-row'>
            {/* Text Section */}
            <div className='flex size-full flex-col justify-between gap-12 font-[poppins] lg:w-1/2'>
                {/* Active Feature */}
                <div className='group mt-14'>
                    <div className='flex flex-col items-start text-[#2A1A6E]'>
                        <div className='mb-2 flex size-12 items-center justify-center rounded-md bg-[#E5DEFF]'>
                            <Banknote size={24} />
                        </div>
                        <h3 className='text-xl font-bold'>
                            Account Aggregation
                        </h3>
                    </div>
                    <p className='mt-2 max-w-md text-base text-[#5A5A5A]'>
                        Seamlessly link and view all financial accounts in one
                        central location, eliminating the hassle of juggling
                        multiple platforms.
                    </p>
                </div>

                <div className='group mt-14 cursor-pointer transition-all duration-300'>
                    <div className='flex flex-col items-start text-black group-hover:text-[#2A1A6E]'>
                        <div className='mb-2 flex size-12 items-center justify-center rounded-md bg-[#E5DEFF] group-hover:text-[#2A1A6E]'>
                            <Building2 size={24} />
                        </div>
                        <h3 className='text-xl font-semibold group-hover:text-[#2A1A6E]'>
                            Embedded Banking Services
                        </h3>
                    </div>
                </div>

                <div className='group mt-14 cursor-pointer transition-all duration-300'>
                    <div className='flex flex-col items-start text-black group-hover:text-[#2A1A6E]'>
                        <div className='mb-2 flex size-12 items-center justify-center rounded-md bg-[#E5DEFF] group-hover:text-[#2A1A6E]'>
                            <PiggyBank size={24} />
                        </div>
                        <h3 className='text-xl font-semibold group-hover:text-[#2A1A6E]'>
                            Advanced Budgeting Tools
                        </h3>
                    </div>
                </div>
            </div>

            {/* Image Section */}
            <div className='flex size-full items-center justify-center lg:w-1/2'>
                <Image
                    src='/feature-image.svg'
                    alt='Phone'
                    width={510}
                    height={776}
                    className='h-auto max-w-full object-contain'
                />
            </div>
        </section>
    );
};

export default FeaturesSection;
