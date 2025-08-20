import Image from 'next/image';

export default function CoreValues() {
    return (
        <section className='w-full bg-white px-4 py-16 text-center md:px-20'>
            <div className='mx-auto max-w-7xl'>
                <h2 className='mb-4 text-3xl font-bold text-[#0F0F0F] md:text-4xl'>
                    Built on Trust, Driven by Innovation
                </h2>
                <p className='mx-auto mb-12 max-w-5xl text-center font-[poppins] leading-relaxed text-gray-600'>
                    Our core values shape everything we do — from building
                    inclusive financial solutions to fostering innovation and
                    integrity.
                </p>

                {/* Cards wrapper */}
                <div className='flex flex-col items-center gap-6 text-left sm:flex-row sm:items-start sm:justify-center sm:overflow-x-auto'>
                    {/* Innovation */}
                    <div className='flex w-[230px] flex-col gap-3 rounded-2xl bg-[#FAFDEA] p-4 shadow-sm'>
                        <div className='flex size-12 items-center justify-center rounded-md border'>
                            <Image
                                src='/innovation.svg'
                                alt='Innovation icon'
                                width={48}
                                height={48}
                            />
                        </div>
                        <h3 className='text-base font-semibold text-[#0F0F0F]'>
                            Innovation
                        </h3>
                        <p className='font-[poppins] text-sm leading-relaxed text-gray-600'>
                            We embrace creativity and forward-thinking solutions
                            to develop seamless financial tools that transform
                            lives.
                        </p>
                    </div>

                    {/* Inclusion */}
                    <div className='flex w-[230px] flex-col gap-3 rounded-2xl bg-[#F8F3FF] p-4 shadow-sm sm:mt-12'>
                        <div className='flex size-12 items-center justify-center rounded-md border'>
                            <Image
                                src='/inclusion.svg'
                                alt='Inclusion icon'
                                width={48}
                                height={48}
                            />
                        </div>
                        <h3 className='text-base font-semibold text-[#0F0F0F]'>
                            Inclusion
                        </h3>
                        <p className='font-[poppins] text-sm leading-relaxed text-gray-600'>
                            We believe in equitable access to financial
                            services, ensuring no one is left behind regardless
                            of background or location.
                        </p>
                    </div>

                    {/* Integrity */}
                    <div className='flex w-[230px] flex-col gap-3 rounded-2xl bg-[#F4FDF5] p-4 shadow-sm'>
                        <div className='flex size-12 items-center justify-center rounded-md border'>
                            <Image
                                src='/integrity.svg'
                                alt='Integrity icon'
                                width={48}
                                height={48}
                            />
                        </div>
                        <h3 className='text-base font-semibold text-[#0F0F0F]'>
                            Integrity
                        </h3>
                        <p className='font-[poppins] text-sm leading-relaxed text-gray-600'>
                            We uphold transparency, accountability, and ethical
                            decision-making in all our interactions — both
                            internally and with our customers.
                        </p>
                    </div>

                    {/* Impact */}
                    <div className='flex w-[230px] flex-col gap-3 rounded-2xl bg-[#F0F9FF] p-4 shadow-sm sm:mt-12'>
                        <div className='flex size-12 items-center justify-center rounded-md border'>
                            <Image
                                src='/impact.svg'
                                alt='Impact icon'
                                width={48}
                                height={48}
                            />
                        </div>
                        <h3 className='text-base font-semibold text-[#0F0F0F]'>
                            Impact
                        </h3>
                        <p className='font-[poppins] text-sm leading-relaxed text-gray-600'>
                            We are committed to making a real difference in
                            communities by improving financial literacy and
                            accessibility.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
