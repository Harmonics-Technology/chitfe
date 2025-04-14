import React from 'react';
import Image from 'next/image';

const Download = () => {
    return (
        <div className='mb-10 w-full px-4 py-10 md:px-8 lg:px-16'>
            <div className='relative h-auto w-full'>
                <Image
                    src='/download-image.svg'
                    alt='download image'
                    width={1400}
                    height={500}
                    className='h-auto w-full object-cover'
                    priority
                />
            </div>
        </div>
    );
};

export default Download;
