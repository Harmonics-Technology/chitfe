'use client';

export default function ContactForm() {
    return (
        <section className='flex min-h-screen flex-col items-center justify-center bg-white px-4 py-16'>
            {/* Heading */}
            <div className='mb-10 text-center'>
                <h2 className='mb-2 text-3xl font-extrabold text-gray-800 md:text-4xl'>
                    Still Need Help?{' '}
                    <span className='text-gray-500'>Contact Us</span>
                </h2>
                <p className='mx-auto max-w-md text-sm text-gray-600'>
                    Got a specific issue or request? Fill out the form, and
                    we’ll get back to you as soon as possible.
                </p>
            </div>

            {/* Form Container */}
            <form className='w-full max-w-xl space-y-4 rounded-lg border border-gray-200 bg-white p-8 shadow-md'>
                <div>
                    <label className='block text-sm font-semibold text-gray-700'>
                        Full Name
                    </label>
                    <input
                        type='text'
                        placeholder='Enter full name'
                        className='mt-1 w-full rounded-md border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-purple-400'
                    />
                </div>
                <div>
                    <label className='block text-sm font-semibold text-gray-700'>
                        Email Address
                    </label>
                    <input
                        type='email'
                        placeholder='Email Address'
                        className='mt-1 w-full rounded-md border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-purple-400'
                    />
                </div>
                <div>
                    <label className='block text-sm font-semibold text-gray-700'>
                        Subject
                    </label>
                    <input
                        type='text'
                        placeholder='Subject'
                        className='mt-1 w-full rounded-md border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-purple-400'
                    />
                </div>
                <div>
                    <label className='block text-sm font-semibold text-gray-700'>
                        Message
                    </label>
                    <textarea
                        placeholder='Type here...'
                        rows={4}
                        className='mt-1 w-full rounded-md border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-purple-400'
                    ></textarea>
                </div>
                <button
                    type='submit'
                    className='w-full rounded-md bg-purple-600 py-2 font-semibold text-white transition hover:bg-purple-700'
                >
                    Submit
                </button>
            </form>
        </section>
    );
}
