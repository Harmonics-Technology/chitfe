import React from 'react';
import Image from 'next/image';

const StartHere = () => {
    return (
        <div className='mb-14 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-16'>
            <section className='relative w-full overflow-hidden rounded-xl bg-[#532c9bb7] pt-14 text-white'>
                {/* Background Pattern */}
                <div className='absolute inset-0 -z-10'>
                    <Image
                        src='/starthere-backgroundimage.svg'
                        alt='background pattern'
                        fill
                        className='object-cover'
                    />
                </div>

                {/* Main Content */}
                <div className='mx-auto flex max-w-7xl flex-col items-center justify-center gap-10 px-6 md:flex-row md:justify-between md:px-20'>
                    {/* Left: Text + Buttons */}
                    <div className='text-center md:max-w-xl md:text-left'>
                        <h2 className='text-4xl font-bold leading-tight md:text-5xl'>
                            Your Financial Future <br />
                            <span className='text-white'>Starts Here</span>
                        </h2>
                        <p className='mt-4 text-lg text-gray-200'>
                            Take control of your money effortlessly and
                            securely. Join thousands already managing their
                            finances smarter with CHIT.
                        </p>

                        {/* Store Buttons */}
                        <div className='mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start'>
                            {/* App Store */}
                            <a
                                href='#'
                                className='flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-md transition hover:scale-105'
                            >
                                <Image
                                    src='/applestore-icon.svg'
                                    alt='App Store logo'
                                    width={24}
                                    height={24}
                                />
                                <div className='text-left leading-tight'>
                                    <p className='text-[10px] text-gray-600'>
                                        Download on the
                                    </p>
                                    <p className='text-sm font-semibold text-black'>
                                        App Store
                                    </p>
                                </div>
                            </a>

                            {/* Play Store */}
                            <a
                                href='#'
                                className='flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-md transition hover:scale-105'
                            >
                                <Image
                                    src='/playstore-icon.svg'
                                    alt='Play Store logo'
                                    width={24}
                                    height={24}
                                />
                                <div className='text-left leading-tight'>
                                    <p className='text-[10px] text-gray-600'>
                                        Get it on
                                    </p>
                                    <p className='text-sm font-semibold text-black'>
                                        Google Play
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Right: Phone Image */}
                    <div className='relative -mt-4 w-full max-w-md md:mt-0'>
                        <Image
                            src='/phone-img.svg'
                            alt='Phone display'
                            width={600}
                            height={600}
                            className='h-auto w-full'
                            priority
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default StartHere;
