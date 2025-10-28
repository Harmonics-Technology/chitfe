import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            title: 'Budgeting Made Simple',
            quote: 'I love how simple it was to link my accounts and set up my budgets. Plus, the daily spending insights are spot on!',
            author: 'Emeka Obi',
            location: 'Enugu',
            rating: 5,
        },
        {
            title: 'A Game-Changer for My Finance',
            quote: 'CHIT helped me manage all my bank accounts in one place. The interface is intuitive and the insights are incredibly helpful.',
            author: 'Aisha Mohammed',
            location: 'Lagos',
            rating: 5,
        },
        {
            title: 'Perfect for Tracking Expenses',
            quote: 'I love how simple it was to link my accounts and set up my budgets. The real-time notifications keep me informed.',
            author: 'Chidi Okafor',
            location: 'Abuja',
            rating: 4,
        },
        {
            title: 'Best Financial App',
            quote: 'CHIT has transformed how I manage my finances. Everything I need is in one place and easy to access.',
            author: 'Fatima Bello',
            location: 'Kaduna',
            rating: 5,
        },
        {
            title: 'Highly Recommended',
            quote: 'The budgeting tools are fantastic and the security features give me peace of mind. Best decision I made this year!',
            author: 'Tunde Adeyemi',
            location: 'Ibadan',
            rating: 5,
        },
        {
            title: 'The Secure Choice for Freelancers',
            quote: 'With CHIT, I do not miss a single transaction. The app is simple, secure, and really effective for my financial planning.',
            author: 'Abdulrahman Yusuf',
            location: 'Kano',
            rating: 5,
        },
    ];

    return (
        <section className='relative overflow-hidden bg-gradient-to-br from-gray-50 via-purple-50/30 to-white px-4 py-16 sm:px-6 md:py-24 lg:px-8 lg:py-32'>
            {/* Decorative background elements */}
            <div className='pointer-events-none absolute inset-0 overflow-hidden'>
                <div className='absolute -left-32 top-32 size-96 rounded-full bg-purple-100/20 blur-3xl' />
                <div className='absolute -right-32 bottom-32 size-96 rounded-full bg-indigo-100/20 blur-3xl' />
            </div>

            <div className='relative mx-auto max-w-7xl'>
                {/* Header */}
                <div className='mb-12 text-center sm:mb-16 lg:mb-20'>
                    <div className='mb-4 inline-flex items-center gap-2 rounded-full bg-purple-100/80 px-4 py-1.5 text-sm font-semibold text-purple-800 backdrop-blur-sm'>
                        <svg
                            className='size-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                        >
                            <path d='M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z' />
                            <path d='M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z' />
                        </svg>
                        Testimonials
                    </div>
                    <h2 className='mb-5 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-4xl font-black leading-tight tracking-tight text-transparent sm:text-5xl lg:text-6xl'>
                        What Users Are Saying
                    </h2>
                    <p className='mx-auto max-w-2xl font-[poppins] text-base leading-relaxed text-gray-600 sm:text-lg lg:text-xl'>
                        Real feedback from real people who love CHIT.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className='grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3'>
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className='group relative overflow-hidden rounded-2xl border border-purple-100/50 bg-white p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:border-purple-200 hover:shadow-2xl sm:p-8'
                        >
                            {/* Decorative gradient overlay */}
                            <div className='pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-50/30 via-transparent to-indigo-50/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100' />

                            {/* Quote icon */}
                            <div className='relative mb-4 flex items-start justify-between'>
                                <div className='inline-flex rounded-xl bg-gradient-to-br from-purple-100 to-indigo-100 p-3'>
                                    <Quote className='size-5 text-purple-600' />
                                </div>
                                {/* Star rating */}
                                <div className='flex gap-0.5'>
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={16}
                                            className={
                                                i < testimonial.rating
                                                    ? 'fill-amber-400 text-amber-400'
                                                    : 'fill-gray-200 text-gray-200'
                                            }
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className='relative mb-3 text-lg font-bold text-gray-900 sm:text-xl'>
                                {testimonial.title}
                            </h3>
                            <p className='relative mb-6 font-[poppins] text-sm leading-relaxed text-gray-600 sm:text-base'>
                                "{testimonial.quote}"
                            </p>

                            {/* Author info */}
                            <div className='relative flex items-center gap-3 border-t border-gray-100 pt-4'>
                                <div className='flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 text-sm font-bold text-white shadow-lg'>
                                    {testimonial.author.charAt(0)}
                                </div>
                                <div>
                                    <p className='font-[poppins] text-sm font-semibold text-gray-900'>
                                        {testimonial.author}
                                    </p>
                                    <p className='font-[poppins] text-xs text-gray-500'>
                                        {testimonial.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
