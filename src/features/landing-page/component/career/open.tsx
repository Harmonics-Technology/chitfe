import React from 'react';
import { ArrowRight } from 'lucide-react';

const roles = [
    {
        category: 'Design',
        color: 'bg-[#FCEFD6] text-[#C79F3A]',
        items: [{ title: 'Illustrator' }, { title: 'Illustrator' }],
    },
    {
        category: 'Product/Marketing',
        color: 'bg-[#EAE2FD] text-[#6E58D3]',
        items: [
            { title: 'Illustrator' },
            { title: 'Illustrator' },
            { title: 'Illustrator' },
        ],
    },
    {
        category: 'Development',
        color: 'bg-[#FFE3E3] text-[#F94F4F]',
        items: [{ title: 'Illustrator' }, { title: 'Illustrator' }],
    },
];

export default function OpenRoles() {
    return (
        <section className='bg-white px-4 py-20 text-center md:px-8'>
            <h2 className='mb-4 text-3xl font-bold text-[#0F0F0F] md:text-4xl'>
                Be Part of Our Mission
            </h2>
            <p className='mb-12 text-center font-[poppins] text-lg font-normal text-gray-500'>
                A step-by-step guide to setting up your account, linking your
                banks and unlocking the full potential of our app.
            </p>

            <div className='mx-auto max-w-5xl rounded-3xl bg-[#FBFAFF] p-8 md:p-12'>
                <div className='flex flex-col gap-10 text-left'>
                    {roles.map((role, index) => (
                        <div key={index}>
                            {/* Category Title aligned to the first card */}
                            <span
                                className={`mb-4 inline-block rounded-md px-3 py-1 text-sm font-semibold ${role.color}`}
                            >
                                {role.category}
                            </span>

                            {/* Illustrator Cards */}
                            <div className='grid gap-4 md:grid-cols-2'>
                                {role.items.map((item, i) => (
                                    <div
                                        key={i}
                                        className='flex items-center justify-between rounded-xl bg-white px-6 py-4 shadow-md'
                                    >
                                        <div className='text-sm font-medium text-[#0F0F0F]'>
                                            {item.title}
                                        </div>
                                        <div className='flex items-center gap-3 text-sm text-gray-400'>
                                            <span>Remote</span>
                                            <ArrowRight size={16} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <p className='mt-12 text-center text-sm text-gray-600'>
                    Want to know more about the company?{' '}
                    <a
                        href='/about'
                        className='font-semibold text-[#6E58D3] hover:underline'
                    >
                        About Us
                    </a>
                </p>
            </div>
        </section>
    );
}
