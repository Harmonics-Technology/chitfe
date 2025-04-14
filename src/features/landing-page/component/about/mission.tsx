import Image from 'next/image';
import React from 'react';

const Mission = () => {
    return (
        <section className='mx-4 mt-16 overflow-hidden rounded-[20px] bg-gradient-to-r from-[#6E58D3] to-[#301A9A] md:mx-10 lg:mx-20'>
            <div className='flex flex-col items-center justify-between lg:flex-row'>
                <div className='w-full px-6 py-10 md:px-10 lg:w-1/2'>
                    <h2 className='mb-4 text-3xl font-bold text-white md:text-4xl'>
                        Our Mission
                    </h2>
                    <p className='text-sm leading-relaxed text-white md:text-base'>
                        At CHIT, we strive to revolutionize Africa's financial
                        services landscape by simplifying financial management
                        for our users. Our mission is to create a unified
                        platform that addresses the challenges of fragmentation,
                        enhances financial literacy, and ensures that everyone
                        has access to comprehensive financial tools. We are
                        dedicated to enabling our users to make informed
                        budgeting and financial planning decisions, ultimately
                        driving economic empowerment and inclusion across the
                        continent.
                    </p>
                </div>

                <div className='size-full lg:w-1/2'>
                    <Image
                        src='/our-mission-image.svg'
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

export default Mission;
