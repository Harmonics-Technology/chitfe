import Image from 'next/image';

export default function WhyJoinUs() {
    return (
        <section className='w-full bg-gradient-to-b from-white to-[#F9F8FF] px-4 py-20 text-center md:px-20'>
            <div className='mx-auto max-w-7xl'>
                <h2 className='mb-4 text-3xl font-bold text-[#0F0F0F] md:text-4xl'>
                    Why Join Us
                </h2>
                <p className='mx-auto mb-12 max-w-3xl font-[poppins] text-lg text-gray-600'>
                    At CHIT, we invest in our people, providing opportunities to
                    grow, lead, and innovate while making a difference in the
                    financial sector.
                </p>

                {/* Grid */}
                <div className='grid grid-cols-1 gap-x-14 gap-y-12 text-left sm:grid-cols-2 lg:grid-cols-3'>
                    {[
                        {
                            title: 'Work with Purpose',
                            text: 'Contribute to a product that changes lives and promotes financial empowerment.',
                        },
                        {
                            title: 'Career Development',
                            text: 'Access mentorship, learning programs, and growth opportunities.',
                        },
                        {
                            title: 'Innovative Culture',
                            text: 'Thrive in a dynamic environment that values creativity and problem-solving.',
                        },
                        {
                            title: 'Competitive Compensation',
                            text: 'Enjoy attractive salaries, bonuses, and benefits.',
                        },
                        {
                            title: 'Flexible Work Environment',
                            text: 'Balance work and life with hybrid or remote-friendly policies.',
                        },
                        {
                            title: 'Diverse & Inclusive Team',
                            text: 'Collaborate with professionals from different backgrounds and perspectives.',
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className='flex flex-col items-center gap-3 text-center md:flex-row md:items-start md:text-left'
                        >
                            <Image
                                src='/ballon.svg'
                                alt='icon'
                                width={40}
                                height={40}
                            />
                            <div className='max-w-xs'>
                                {' '}
                                {/*  keeps text width consistent */}
                                <h3 className='font-semibold text-[#0F0F0F]'>
                                    {item.title}
                                </h3>
                                <p className='mt-1 font-[poppins] text-base leading-snug text-gray-600'>
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
