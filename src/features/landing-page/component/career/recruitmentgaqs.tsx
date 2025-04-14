import { ChevronRight } from 'lucide-react';

// Simulated data (can be replaced with API fetch in future)
const faqData = [
    {
        id: 1,
        question:
            'Lorem ipsum dolor sit amet consectetur. Semper purus magna eleifend ultrices.',
    },
    {
        id: 2,
        question:
            'Lorem ipsum dolor sit amet consectetur. Semper purus magna eleifend ultrices.',
    },
    {
        id: 3,
        question:
            'Lorem ipsum dolor sit amet consectetur. Semper purus magna eleifend ultrices.',
    },
    {
        id: 4,
        question:
            'Lorem ipsum dolor sit amet consectetur. Semper purus magna eleifend ultrices.',
    },
];

export default function RecruitmentFAQs() {
    return (
        <section className='w-full bg-white px-4 py-20 text-center md:px-10'>
            <div className='mx-auto max-w-5xl'>
                <h2 className='mb-10 text-3xl font-bold text-[#0F0F0F] md:text-4xl'>
                    Recruitment FAQs
                </h2>

                <div className='rounded-3xl bg-[#FBF9FF] px-6 py-10 md:px-10'>
                    <div className='space-y-6'>
                        {faqData.map((faq) => (
                            <div
                                key={faq.id}
                                className='flex items-center justify-between border-b border-gray-200 pb-6 last:border-b-0 last:pb-0'
                            >
                                <p className='max-w-3xl text-left text-sm text-gray-700 md:text-base'>
                                    {faq.question}
                                </p>
                                <ChevronRight className='size-5 shrink-0 text-gray-500' />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
