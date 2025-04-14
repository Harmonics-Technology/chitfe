import { ArrowRight } from 'lucide-react';

export default function OpenRoles() {
    const roles = [
        {
            department: 'Design',
            color: 'bg-[#FFEFD8] text-[#D28B14]',
            items: ['Illustrator', 'Illustrator'],
        },
        {
            department: 'Product/Marketing',
            color: 'bg-[#EEE7FF] text-[#774DD6]',
            items: ['Illustrator', 'Illustrator', 'Illustrator'],
        },
        {
            department: 'Development',
            color: 'bg-[#FFE4E4] text-[#DE5B5B]',
            items: ['Illustrator', 'Illustrator'],
        },
    ];

    return (
        <section className='w-full bg-white px-4 py-20 text-center md:px-10'>
            <div className='mx-auto max-w-6xl'>
                <h2 className='mb-3 text-3xl font-bold text-[#0F0F0F] md:text-4xl'>
                    Be Part of Our Mission
                </h2>
                <p className='mx-auto mb-10 max-w-2xl text-gray-600'>
                    A step-by-step guide to setting up your account, linking
                    your banks and unlocking the full potential of our app.
                </p>

                <div className='rounded-3xl bg-[#FCFAFF] px-6 py-12 shadow-sm'>
                    <div className='flex flex-col gap-12 text-left'>
                        {roles.map((section, idx) => (
                            <div key={idx}>
                                <span
                                    className={`mb-4 inline-block rounded-md px-3 py-1 text-sm font-medium ${section.color}`}
                                >
                                    {section.department}
                                </span>

                                <div
                                    className={`grid ${section.items.length > 1 ? 'grid-cols-1 gap-4 md:grid-cols-2' : 'grid-cols-1'}`}
                                >
                                    {section.items.map((role, i) => (
                                        <div
                                            key={i}
                                            className='flex items-center justify-between rounded-xl bg-white px-4 py-3 shadow-sm transition hover:shadow-md'
                                        >
                                            <span className='text-sm font-medium'>
                                                {role}
                                            </span>
                                            <div className='flex items-center gap-4 text-sm text-gray-500'>
                                                <span>Remote</span>
                                                <ArrowRight className='size-4' />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className='mt-12 text-center text-sm text-gray-700'>
                        Want to know more about the company?{' '}
                        <span className='cursor-pointer font-medium text-[#774DD6]'>
                            About Us
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
}
