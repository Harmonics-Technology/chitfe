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
        <nav className='bg-white shadow-sm'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='flex h-16 items-center justify-between'>
                    {/* Logo */}
                    <Image
                        src='/chit.svg'
                        alt='Company Logo'
                        width={120}
                        height={40}
                    />

                    {/* Desktop Navigation */}
                    <div className='hidden items-center space-x-8 md:flex'>
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <div key={link.name} className='group relative'>
                                    <Link
                                        href={link.href}
                                        className={`px-3 py-2 text-base font-medium ${
                                            isActive
                                                ? 'font-semibold text-[#3A2A7E]'
                                                : 'text-gray-900'
                                        } hover:text-[#3A2A7E]`}
                                    >
                                        {link.name}
                                    </Link>
                                    <span
                                        className={`absolute inset-x-0 -bottom-2 h-0.5 bg-[#3A2A7E] transition-transform ${
                                            isActive
                                                ? 'scale-x-100'
                                                : 'scale-x-0 group-hover:scale-x-100'
                                        } origin-left`}
                                    ></span>
                                </div>
                            );
                        })}
                    </div>

                    {/* Auth Buttons - Desktop */}
                    <div className='hidden items-center space-x-4 md:flex'>
                        {authLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`rounded-lg px-4 py-2 font-[poppins] text-lg font-semibold transition-all ${
                                    link.name === 'Sign Up'
                                        ? 'border-2 border-[#3A2A7E] bg-[#3A2A7E] text-white'
                                        : 'border-2 border-[#3A2A7E] text-[#3A2A7E]'
                                }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Hamburger Button - Mobile */}
                    <div className='md:hidden'>
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className='text-[#3A2A7E] focus:outline-none'
                        >
                            {menuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className='space-y-4 border-t border-gray-200 bg-white px-4 pb-6 pt-4 md:hidden'>
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className={`block text-base font-medium ${
                                    isActive
                                        ? 'font-semibold text-[#3A2A7E]'
                                        : 'text-gray-900'
                                } hover:text-[#3A2A7E]`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}

                    <div className='flex flex-col space-y-3 border-t border-gray-100 pt-4'>
                        {authLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className={`w-full rounded-lg px-4 py-2 text-center text-sm font-medium transition-all ${
                                    link.name === 'Sign Up'
                                        ? 'border-2 border-[#3A2A7E] bg-[#3A2A7E] text-white'
                                        : 'border-2 border-[#3A2A7E] text-[#3A2A7E]'
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
