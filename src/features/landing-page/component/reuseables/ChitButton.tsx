import React from 'react';
interface buttonType {
    prefix?: JSX.Element;
    suffix?: JSX.Element;
    label: string;
    variant: 'filled' | 'outline';
}

const Button = ({ prefix, suffix, label, variant }: buttonType) => {
    return (
        <button
            className={`${variant == 'filled' ? 'bg-[#3A2A7E] text-white' : 'text-[#3A2A7E]'} h-14 w-full min-w-[160px] whitespace-nowrap rounded-lg border-2 border-[#3A2A7E] px-6 font-medium transition-colors md:w-auto`}
        >
            <div className='flex items-center gap-2'>
                {' '}
                {prefix && prefix} <div>{label}</div>
                {suffix && suffix}{' '}
            </div>
        </button>
    );
};

export default Button;
