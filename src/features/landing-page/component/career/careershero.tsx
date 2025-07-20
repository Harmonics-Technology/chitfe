import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function CareersSection() {
    return (
        <section className='w-full bg-white px-6 py-16 md:px-20'>
            <div className='mx-auto flex max-w-7xl flex-col items-center justify-around gap-10 md:flex-row'>
                {/* Text Content */}
                <div className='max-w-lg text-center md:text-left'>
                    <h2 className='mb-4 text-4xl font-bold text-gray-900 md:text-5xl'>
                        Work At <span className='text-[#3A2A7E]'>CHIT</span>
                    </h2>
                    <p className='mb-6 font-[poppins] text-xl text-gray-700 md:text-lg'>
                        Build the Future of Finance with Us – Be part of an
                        innovative team dedicated to empowering individuals,
                        driving financial inclusion, and shaping a more
                        connected economy.
                    </p>
                    <Link
                        href='/career'
                        className='inline-flex items-center rounded-lg bg-[#3A2A7E] px-6 py-3 font-[poppins] text-lg font-semibold text-white transition hover:bg-[#2e2269]'
                    >
                        See open roles
                        <ArrowRight className='ml-2 size-4' />
                    </Link>
                </div>

                {/* Image */}
                <div className='w-full max-w-md'>
                    <Image
                        src='/career-hero-img.svg'
                        alt='Team at work'
                        width={600}
                        height={500}
                        className='h-auto w-full rounded-xl object-cover'
                    />
                </div>
            </div>
        </section>
    );
}
