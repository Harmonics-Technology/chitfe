'use client';

import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className=''>
            <div className='mx-auto flex max-w-6xl flex-col items-center justify-between md:flex-row'>
                <Image
                    src='/chit.svg'
                    alt='Chit Logo'
                    width={100}
                    height={40}
                />

                {/* Navigation Links */}
                <nav className='m-4 flex gap-6 text-sm text-[#030303]'>
                    <Link href='/about' className='hover:text-gray-900'>
                        About Us
                    </Link>
                    <Link href='/career' className='hover:text-gray-900'>
                        Careers
                    </Link>
                    <Link href='/support' className='hover:text-gray-900'>
                        Support
                    </Link>
                    <Link href='/docs' className='hover:text-gray-900'>
                        Documentation
                    </Link>
                </nav>

                {/* Social Media Icons as Images */}
                <div className='flex gap-3'>
                    <Link
                        href='#'
                        className='flex size-10 items-center justify-center rounded-full bg-gray-100 transition-colors duration-200 hover:bg-gray-200'
                    >
                        <Image
                            src='/instagram (2).svg'
                            alt='Instagram'
                            width={20}
                            height={20}
                        />
                    </Link>
                    <Link
                        href='#'
                        className='flex size-10 items-center justify-center rounded-full bg-gray-100 transition-colors duration-200 hover:bg-gray-200'
                    >
                        <Image
                            src='/linkedin icon.svg'
                            alt='LinkedIn'
                            width={20}
                            height={20}
                        />
                    </Link>
                    <Link
                        href='#'
                        className='flex size-10 items-center justify-center rounded-full bg-gray-100 transition-colors duration-200 hover:bg-gray-200'
                    >
                        <Image
                            src='/Twitter icon.svg'
                            alt='Twitter'
                            width={20}
                            height={20}
                        />
                    </Link>
                </div>
            </div>

            {/* Divider */}
            <div className='my-4 w-full border-t border-gray-300'></div>

            {/* Bottom Section */}
            <div className='mx-auto mb-8 flex max-w-6xl flex-col flex-wrap items-center justify-between text-sm text-[#030303] md:flex-row'>
                <div className='mb-4 flex gap-6 md:mb-0'>
                    <Link href='/terms' className='hover:text-gray-900'>
                        Terms of service
                    </Link>
                    <Link href='/policy' className='hover:text-gray-900'>
                        Privacy policy
                    </Link>
                </div>
                <div>&copy; 2024 CHIT. All rights reserved.</div>
            </div>
        </footer>
    );
};

export default Footer;
