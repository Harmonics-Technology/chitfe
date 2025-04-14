import React from 'react';
import Image from 'next/image';
import { ChitContainer } from '../reuseables/ChitContainer';

const Financial = () => {
    return (
        <ChitContainer>
            <div className='mt-27 flex flex-col items-center justify-center gap-10 rounded-xl bg-[#FCDDEC4D] p-6 md:flex-row'>
                {/* Text Section */}
                <div className='max-w-xl text-center md:text-left'>
                    <h1 className='mb-3 text-3xl font-medium leading-10 md:text-4xl'>
                        Tailored Financial <br className='hidden md:block' />{' '}
                        Insights
                    </h1>
                    <p className='text-lg font-normal leading-7'>
                        Stay on top of your finances with insights that help{' '}
                        <br className='hidden sm:inline' />
                        you manage transactions, track trends, and optimize{' '}
                        <br className='hidden sm:inline' />
                        your money effectively.
                    </p>
                </div>

                {/* Image Section */}
                <div className='w-full max-w-xl'>
                    <Image
                        src='/financialadvice.svg'
                        alt='Financial advice'
                        width={582}
                        height={480}
                        className='h-auto w-full'
                    />
                </div>
            </div>
        </ChitContainer>
    );
};

export default Financial;
