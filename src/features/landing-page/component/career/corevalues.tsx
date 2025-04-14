import { Box, Circle, Layers, MoveDiagonal } from 'lucide-react';

export default function CoreValues() {
    return (
        <section className='w-full bg-white px-4 py-16 text-center md:px-20'>
            <div className='mx-auto max-w-7xl'>
                <h2 className='mb-4 text-3xl font-bold text-[#0F0F0F] md:text-4xl'>
                    Built on Trust, Driven by Innovation
                </h2>
                <p className='mx-auto mb-12 max-w-2xl text-gray-600'>
                    Our core values shape everything we do—from building
                    inclusive financial solutions to fostering innovation and
                    integrity.
                </p>

                <div className='flex flex-wrap justify-center gap-6 text-left'>
                    {/* Innovation */}
                    <div className='flex w-full max-w-[230px] flex-col gap-3 rounded-2xl bg-[#FAFDEA] p-4 shadow-sm'>
                        <div className='flex size-8 items-center justify-center rounded-md border'>
                            <Box className='size-5 text-[#333]' />
                        </div>
                        <h3 className='text-base font-semibold text-[#0F0F0F]'>
                            Innovation
                        </h3>
                        <p className='text-sm leading-relaxed text-gray-600'>
                            We embrace creativity and <br />
                            forward-thinking solutions <br />
                            to develop seamless <br />
                            financial tools that <br />
                            transform lives.
                        </p>
                    </div>

                    {/* Inclusion */}
                    <div className='flex w-full max-w-[230px] flex-col gap-3 rounded-2xl bg-[#F8F3FF] p-4 shadow-sm md:mt-16'>
                        <div className='flex size-8 items-center justify-center rounded-md border'>
                            <Circle className='size-5 text-[#3A2A7E]' />
                        </div>
                        <h3 className='text-base font-semibold text-[#0F0F0F]'>
                            Inclusion
                        </h3>
                        <p className='text-sm leading-relaxed text-gray-600'>
                            We believe in equitable <br />
                            access to financial <br />
                            services, ensuring no one is <br />
                            left behind, regardless of <br />
                            background or location.
                        </p>
                    </div>

                    {/* Integrity */}
                    <div className='flex w-full max-w-[230px] flex-col gap-3 rounded-2xl bg-[#F4FDF5] p-4 shadow-sm'>
                        <div className='flex size-8 items-center justify-center rounded-md border'>
                            <Layers className='size-5 text-[#144B1E]' />
                        </div>
                        <h3 className='text-base font-semibold text-[#0F0F0F]'>
                            Integrity
                        </h3>
                        <p className='text-sm leading-relaxed text-gray-600'>
                            We uphold transparency, <br />
                            accountability, and ethical <br />
                            decision-making in all our <br />
                            interactions—both <br />
                            internally and with our <br />
                            customers.
                        </p>
                    </div>

                    {/* Impact */}
                    <div className='flex w-full max-w-[230px] flex-col gap-3 rounded-2xl bg-[#F0F9FF] p-4 shadow-sm md:mt-16'>
                        <div className='flex size-8 items-center justify-center rounded-md border'>
                            <MoveDiagonal className='size-5 text-[#0B314A]' />
                        </div>
                        <h3 className='text-base font-semibold text-[#0F0F0F]'>
                            Impact
                        </h3>
                        <p className='text-sm leading-relaxed text-gray-600'>
                            We are committed to <br />
                            making a real difference in <br />
                            communities by improving <br />
                            financial literacy and <br />
                            accessibility.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
