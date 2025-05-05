'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface CustomDisclosureProps {
    question: string;
    answer: string;
}

export default function CustomDisclosure({
    question,
    answer,
}: CustomDisclosureProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='w-full'>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className='flex w-full items-center justify-between rounded-lg border bg-white px-4 py-3 text-left text-sm font-medium text-gray-900 hover:bg-gray-50'
            >
                <span>{question}</span>
                {isOpen ? (
                    <ChevronUp className='text-purple-500' />
                ) : (
                    <ChevronDown className='text-purple-500' />
                )}
            </button>

            {isOpen && (
                <div className='rounded-b-lg border border-t-0 bg-purple-50 px-4 pb-4 pt-2 text-sm text-gray-600'>
                    {answer}
                </div>
            )}
        </div>
    );
}
