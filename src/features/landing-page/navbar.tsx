'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/career' },
        { name: 'Support', href: '/support' },
    ];

    const authLinks = [
        { name: 'Log In', href: '/login' },
        { name: 'Sign Up', href: '/signup' },
    ];

    return (
        <nav className='sticky top-0 z-50 border-b border-gray-100/50 bg-white/80 shadow-sm backdrop-blur-xl'>
            <div className='mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8'>
                <div className='flex h-20 items-center justify-between lg:h-24'>
                    {/* Logo */}
                    <Link
                        href='/'
                        className='flex items-center transition-opacity hover:opacity-80'
                    >
                        <Image
                            src='/chit.svg'
                            alt='Company Logo'
                            width={110}
                            height={36}
                            className='h-9 w-auto lg:h-10'
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className='hidden items-center space-x-1 md:flex lg:space-x-2'>
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <div key={link.name} className='group relative'>
                                    <Link
                                        href={link.href}
                                        className={`relative rounded-lg px-4 py-2 font-[poppins] text-[15px] font-medium transition-all duration-200 ${
                                            isActive
                                                ? 'bg-purple-50/50 font-semibold text-purple-700'
                                                : 'text-gray-700 hover:bg-purple-50/30 hover:text-purple-700'
                                        }`}
                                    >
                                        {link.name}
                                    </Link>
                                    <span
                                        className={`absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 transition-all duration-300 ${
                                            isActive
                                                ? 'scale-x-100 opacity-100'
                                                : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                                        } origin-center`}
                                    ></span>
                                </div>
                            );
                        })}
                    </div>

                    {/* Auth Buttons - Desktop */}
                    <div className='hidden items-center space-x-3 md:flex'>
                        {authLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`group relative overflow-hidden rounded-xl px-5 py-2.5 font-[poppins] text-[15px] font-semibold transition-all duration-300 ${
                                    link.name === 'Sign Up'
                                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/30 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/40'
                                        : 'border-2 border-gray-200 text-gray-700 hover:border-purple-300 hover:bg-purple-50/50 hover:text-purple-700'
                                }`}
                            >
                                {link.name === 'Sign Up' && (
                                    <span className='absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
                                )}
                                <span className='relative'>{link.name}</span>
                            </Link>
                        ))}
                    </div>

                    {/* Hamburger Button - Mobile */}
                    <div className='md:hidden'>
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className='relative rounded-lg p-2 text-purple-700 transition-colors hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-500/20'
                            aria-label='Toggle menu'
                        >
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className='border-t border-gray-100 bg-white/95 px-4 pb-6 pt-4 shadow-lg backdrop-blur-xl md:hidden'>
                    <div className='space-y-1'>
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className={`block rounded-lg px-4 py-3 text-base font-medium transition-all ${
                                        isActive
                                            ? 'bg-purple-50 font-semibold text-purple-700'
                                            : 'text-gray-700 hover:bg-purple-50/50 hover:text-purple-700'
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>

                    <div className='mt-4 flex flex-col space-y-3 border-t border-gray-100 pt-4'>
                        {authLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className={`w-full rounded-xl px-5 py-3 text-center text-base font-semibold transition-all ${
                                    link.name === 'Sign Up'
                                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/30'
                                        : 'border-2 border-gray-200 text-gray-700 hover:border-purple-300 hover:bg-purple-50/50 hover:text-purple-700'
                                }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
