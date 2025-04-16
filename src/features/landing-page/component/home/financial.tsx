import React from 'react';
import Image from 'next/image';
import { ChitContainer } from '../reuseables/ChitContainer';

const Financial = () => {
    return (
        <ChitContainer>
            <div className='mb-14 mt-27 flex flex-col items-center justify-center gap-10 rounded-xl bg-[#FCDDEC4D] p-6 md:flex-row'>
                {/* Text Section */}
                <div className='max-w-xl text-center md:text-left'>
                    <h1 className='mb-3 text-3xl font-medium leading-10 md:text-4xl'>
                        Tailored Financial <br /> Insights
                    </h1>
                    <p className='text-lg font-normal leading-7'>
                        Stay on top of your finances with insights that help you
                        manage transactions, track trends, and optimize your
                        money effectively.
                    </p>
                </div>

                {/* Image Section */}
                <div className='w-full max-w-xl'>
                    <Image
                        src='/financialadvice.svg'
                        alt='Financial advice'
                        width={0}
                        height={0}
                        className='h-auto w-full'
                    />
                </div>
            </div>
        </ChitContainer>
    );
};

export default Financial;
