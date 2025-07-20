import React from 'react';
import Image from 'next/image';

const Inclusion = () => {
    return (
        <section className='w-full bg-white px-4 py-12 md:px-10'>
            <div className='mx-auto flex max-w-7xl flex-col items-center gap-10 lg:flex-row'>
                <div className='flex w-full justify-center lg:w-1/2'>
                    <Image
                        src='/career-inclusion-img.svg'
                        alt='career'
                        width={400}
                        height={400}
                        className='h-auto w-full max-w-[400px]'
                    />
                </div>

                <div className='w-full text-center lg:w-1/2 lg:text-left'>
                    <h1 className='text-3xl font-bold text-[#0F0F0F] md:text-4xl'>
                        Inclusion and Diversity
                    </h1>
                    <p className='mt-5 font-[poppins] text-base font-normal text-gray-700 md:text-sm'>
                        A Place for Everyone, A Future for All – we celebrate
                        diversity and <br className='hidden md:block' />
                        empower individuals from all backgrounds.
                    </p>
                    <p className='mt-5 font-[poppins] text-lg font-normal text-gray-700 md:text-sm'>
                        At CHIT, diversity isn’t just a policy—it’s our
                        strength. We celebrate{' '}
                        <br className='hidden md:block' />
                        differences in backgrounds, perspectives, and
                        experiences, knowing <br className='hidden md:block' />
                        that they fuel creativity and innovation. We are
                        committed to building <br className='hidden md:block' />
                        an inclusive workplace where everyone—regardless of
                        gender, ethnicity, <br className='hidden md:block' />
                        age, ability, or background—feels valued and empowered
                        to contribute <br className='hidden md:block' />
                        their best. Together, we foster a culture of belonging,
                        respect, and equal <br className='hidden md:block' />
                        opportunity for all.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Inclusion;
