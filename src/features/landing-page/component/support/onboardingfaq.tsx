'use client';

import { useState } from 'react';
import {
    ChevronDown,
    ChevronUp,
    FileText,
    Link2,
    Wallet,
    Send,
    Shield,
    Settings,
} from 'lucide-react';

const faqData = {
    Onboarding: [
        {
            question: 'How do I sign up for CHIT?',
            answer: 'To sign up, download the CHIT app from the App Store or Google Play Store, open the app, and follow the registration process by providing your email, phone number, and other required details.',
        },
        {
            question:
                'What information do I need to provide during onboarding?',
            answer: 'You will need to provide your full name, phone number, valid ID, and possibly BVN for verification.',
        },
        {
            question: 'Do I need to verify my BVN and email address?',
            answer: 'Yes, CHIT requires you to verify both your BVN and your email address for account validation and security.',
        },
        {
            question: 'How do I complete the KYC process during onboarding?',
            answer: 'You complete the KYC by uploading valid identification documents and filling out the required personal information during sign-up.',
        },
    ],
    'Account Linking': [
        {
            question: 'How do I link my account?',
            answer: 'Navigate to the account settings and select "Link Bank Account". Follow the instructions provided.',
        },
        {
            question: 'Is it safe to link my account?',
            answer: 'Yes, CHIT uses encrypted channels and secure verification to ensure your account is safe.',
        },
    ],
    'Fund Wallet': [
        {
            question: 'How do I fund my wallet?',
            answer: 'Use your debit card, bank transfer, or USSD to fund your wallet from the app.',
        },
    ],
    'Transfer & Bill Payment': [
        {
            question: 'Can I transfer to any bank?',
            answer: 'Yes, CHIT supports transfers to all Nigerian banks.',
        },
        {
            question: 'What bills can I pay with CHIT?',
            answer: 'You can pay for airtime, electricity, cable TV, and other common utility services directly from the app.',
        },
    ],
    CHIT: [
        {
            question: 'What is CHIT?',
            answer: 'CHIT is a digital platform for smart savings, payments, and financial services.',
        },
    ],
    Security: [
        {
            question: 'How secure is my account?',
            answer: 'We use two-factor authentication (2FA), encryption, and secure protocols to protect your data and money.',
        },
    ],
};

export default function FAQs() {
    const [activeSection, setActiveSection] =
        useState<keyof typeof faqData>('Onboarding');
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const [showLabel, setShowLabel] = useState<string | null>(null); // for mobile click toggle

    const toggleIndex = (index: number) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    const sections = [
        { name: 'Onboarding', icon: FileText },
        { name: 'Account Linking', icon: Link2 },
        { name: 'Fund Wallet', icon: Wallet },
        { name: 'Transfer & Bill Payment', icon: Send },
        { name: 'CHIT', icon: Settings },
        { name: 'Security', icon: Shield },
    ];

    return (
        <div className='min-h-screen bg-[#f7f5ff] px-4 py-10'>
            <h1 className='mb-10 text-center text-3xl font-bold text-gray-900 md:mb-28'>
                Frequently Asked Questions (FAQs)
            </h1>

            <div className='mx-auto flex max-w-6xl flex-col overflow-hidden rounded-2xl bg-white shadow md:flex-row'>
                {/* Top Nav (Sidebar on desktop) */}
                <div className='flex items-center justify-between gap-2 overflow-x-auto border-b bg-white p-4 font-medium text-gray-600 md:w-1/4 md:flex-col md:border-b-0 md:border-r'>
                    {sections.map(({ name, icon: Icon }) => {
                        const isActive = activeSection === name;

                        return (
                            <button
                                key={name}
                                onClick={() => {
                                    setActiveSection(
                                        name as keyof typeof faqData
                                    );
                                    setOpenIndex(0);
                                    setShowLabel(
                                        name === showLabel ? null : name
                                    ); // toggle on mobile
                                }}
                                onMouseEnter={() => setShowLabel(name)} // for desktop hover
                                onMouseLeave={() => setShowLabel(null)}
                                className={`flex flex-col items-center gap-1 rounded-xl p-2 transition md:flex-row ${
                                    isActive
                                        ? 'bg-[#f7f5ff] font-semibold text-[#6B46FF]'
                                        : 'hover:bg-gray-100'
                                }`}
                            >
                                <Icon
                                    size={20}
                                    className={`${isActive ? 'text-[#6B46FF]' : ''}`}
                                />
                                <span
                                    className={`text-xs md:text-sm ${
                                        showLabel === name || isActive
                                            ? 'block'
                                            : 'hidden md:block'
                                    }`}
                                >
                                    {name}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* FAQ Content */}
                <div className='w-full space-y-4 p-6 md:w-3/4'>
                    {faqData[activeSection].map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className='overflow-hidden rounded-xl border'
                            >
                                <button
                                    onClick={() => toggleIndex(index)}
                                    className={`flex w-full items-center justify-between px-6 py-4 text-left text-sm font-medium ${
                                        isOpen
                                            ? 'border-l-4 border-[#6B46FF] bg-[#f7f5ff]'
                                            : 'bg-white'
                                    }`}
                                >
                                    <span className='text-gray-900'>
                                        {faq.question}
                                    </span>
                                    {isOpen ? (
                                        <ChevronUp
                                            size={18}
                                            className='text-[#6B46FF]'
                                        />
                                    ) : (
                                        <ChevronDown
                                            size={18}
                                            className='text-[#6B46FF]'
                                        />
                                    )}
                                </button>
                                {isOpen && (
                                    <div className='bg-[#f7f5ff] px-6 pb-4 pt-2 text-sm text-gray-600'>
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
