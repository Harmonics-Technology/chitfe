import React from 'react';

const Purpose = () => {
    return (
        <div className='mt-24 px-4 py-14 sm:px-8 md:px-16 lg:px-32'>
            {/* Subtitle */}
            <p className='text-center font-[poppins] font-medium text-[#2A1A6E] sm:text-lg md:text-xl'>
                ABOUT US
            </p>

            {/* Title */}
            <h1 className='mt-2 text-center text-2xl font-bold tracking-wide sm:text-3xl md:text-4xl'>
                Who We Are
            </h1>

            {/* Description */}
            <p className='mx-auto mt-6 max-w-4xl text-center font-[poppins] text-sm font-normal leading-relaxed text-gray-700 sm:text-base md:text-lg'>
                At CHIT, we are dedicated to transforming Africa's financial
                services landscape by harnessing the power of mobile money. We
                understand the unique challenges faced by our diverse user base,
                including fragmentation of accounts, varying levels of financial
                literacy, limited access to traditional banking, and the absence
                of comprehensive financial tools. With a commitment to
                innovation and community-centric services, we aim to bridge the
                gap in financial services, ensuring that every person can thrive
                in a rapidly changing economic environment.
            </p>
        </div>
    );
};

export default Purpose;
