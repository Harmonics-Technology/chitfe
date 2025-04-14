import React from 'react';
import Image from 'next/image';

const hero = () => {
    return (
        <div>
            <div>
                <h1 className='ml-6 mt-10 text-center text-2xl font-semibold leading-tight sm:ml-10 sm:mt-16 sm:text-4xl sm:leading-snug md:ml-14 md:mt-20 md:text-5xl lg:text-6xl'>
                    Simplifying <span className='text-[#5539D0]'>Finances</span>{' '}
                    <br /> for a Better Tomorrow
                </h1>

                <Image
                    src='/about-us hero.svg'
                    alt='Hero image'
                    width={1440}
                    height={400}
                    className='mt-10 p-4'
                />
            </div>
        </div>
    );
};

export default hero;
