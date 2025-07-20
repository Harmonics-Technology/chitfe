import Image from 'next/image';
import React from 'react';

const Vision = () => {
    return (
        <section className='mx-4 mt-16 overflow-hidden rounded-[30px] bg-gradient-to-r from-[#6E58D3] to-[#301A9A] md:mx-10 lg:mx-20'>
            <div className='flex flex-col items-center justify-between lg:flex-row'>
                <div className='w-full px-6 py-10 md:px-10 lg:w-1/2'>
                    <h2 className='mb-4 text-4xl font-semibold text-white md:text-4xl'>
                        Our Vision
                    </h2>
                    <p className='font-[poppins] text-sm leading-relaxed text-white md:text-base'>
                        To empower individuals across Africa by providing a
                        seamless and inclusive financial ecosystem that bridges
                        the gap between traditional banking and mobile money,
                        fostering financial literacy and accessibility for all.
                    </p>
                </div>

                <div className='relative size-full lg:w-1/2'>
                    <Image
                        src='/our-vision-image.svg'
                        alt='Our Mission Presentation'
                        width={1246}
                        height={512}
                        className='size-full object-cover'
                    />
                </div>
            </div>
        </section>
    );
};

export default Vision;
