'use client';

import React, { useState } from 'react';

const SupportHero = () => {
    const [query, setQuery] = useState('');
    const [searchResult, setSearchResult] = useState<string | null>(null);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();

        // Example: simple keyword match
        if (query.trim().toLowerCase() === 'refund') {
            setSearchResult('Here’s info about refunds.');
        } else if (query.trim().toLowerCase() === 'contact') {
            setSearchResult('You can contact us via support@domain.com');
        } else {
            setSearchResult('No results found.');
        }
    };

    return (
        <div className='bg-gradient-to-b from-violet-500 to-violet-800 px-4 py-20 text-center text-white'>
            <h1 className='mb-4 text-3xl font-bold sm:text-4xl'>
                Need Help? We’ve Got You Covered
            </h1>
            <p className='mb-8 text-lg'>
                We're here to assist you every step of the way. Find answers,
                chat with us, or send a message.
            </p>

            <form
                onSubmit={handleSearch}
                className='mx-auto flex max-w-xl items-center overflow-hidden rounded-xl bg-white shadow-md'
            >
                <input
                    type='text'
                    placeholder='Search...'
                    className='flex-1 px-4 py-3 text-gray-800 focus:outline-none'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </form>

            {searchResult && (
                <div className='mt-6 text-base text-white'>{searchResult}</div>
            )}
        </div>
    );
};

export default SupportHero;
