import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            title: 'A Game-Changer for My Finance',
            quote: 'CHIT helped me manage all my bank accounts in one place',
            author: 'Alfina, Lagos',
            rating: 4,
        },
        {
            title: 'Budgeting Made Simple',
            quote: 'I love how simple it was to link my accounts and set up my budgets. Plus, the daily spending insights are spot on!',
            author: 'Erneka Obi, Enugu',
            rating: 4,
        },
        {
            title: 'The Secure Choice for Freelancers',
            quote: "With CHIT, I don't miss a single transaction. The app is simple, secure, and really effective for my financial planning.",
            author: 'Abdulrahman Yusuf, Kano',
            rating: 4,
        },
        {
            title: 'Highly Recommended!',
            quote: "I've been using CHIT for months, and I can confidently say it's the best financial management app out there!",
            author: 'Grace Odill, Rivers',
            rating: 4,
        },
        {
            title: 'Perfect for Students',
            quote: 'Finally, an app that understands Nigerian banking! Linking my accounts and tracking my spending has never been smoother',
            author: 'Ngazi Eze, Anamira',
            rating: 4,
        },
        {
            title: 'Budgeting Made Simple',
            quote: 'I love how simple it was to link my accounts and set up my budgets. Plus, the daily spending insights are spot on!',
            author: 'Erneka Obi, Enugu',
            rating: 4,
        },
    ];

    return (
        <div className='bg-[#F3F2F9] p-8'>
            {/* Header */}
            <div className='mb-12 text-center'>
                <h1 className='mb-3 text-3xl font-bold'>
                    What Users Are Saying
                </h1>
                <p className='text-gray-600'>
                    Real feedback from real people who love CHIT.
                </p>
            </div>

            {/* Testimonials Grid */}
            <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className={`rounded-lg border border-gray-200 p-6 ${
                            (index + 1) % 2 === 0 ? 'bg-[#E3DEF7]' : 'bg-white'
                        } shadow-lg transition-shadow duration-300 hover:shadow-xl`}
                    >
                        <h3 className='mb-2 text-lg font-bold'>
                            {testimonial.title}
                        </h3>
                        <p className='mb-4 italic text-gray-600'>
                            "{testimonial.quote}"
                        </p>
                        <div className='flex flex-col'>
                            <p className='mb-1 font-medium'>
                                {testimonial.author}
                            </p>
                            <div className='flex'>
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={18}
                                        className={
                                            i < testimonial.rating
                                                ? 'fill-[#251763] text-[#251763]'
                                                : 'text-[#251763]'
                                        }
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
