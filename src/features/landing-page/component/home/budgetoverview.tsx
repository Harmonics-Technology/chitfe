import Image from 'next/image';
import { ChitContainer } from '../reuseables/ChitContainer';

export default function BudgetSection() {
    return (
        <ChitContainer>
            <div className='group relative mt-16 flex w-full flex-col-reverse items-center justify-center gap-10 overflow-hidden rounded-2xl border border-emerald-200/50 bg-gradient-to-br from-emerald-50 via-teal-50/50 to-green-50/30 px-6 py-10 shadow-xl shadow-emerald-100/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-200/60 md:mt-24 md:flex-row md:gap-16 md:p-12 lg:rounded-3xl lg:p-16'>
                {/* Decorative gradient orbs */}
                <div className='pointer-events-none absolute -left-20 -top-20 size-64 rounded-full bg-gradient-to-br from-emerald-200/40 to-teal-200/30 blur-3xl transition-all duration-500 group-hover:scale-110' />
                <div className='pointer-events-none absolute -bottom-20 -right-20 size-64 rounded-full bg-gradient-to-tr from-green-200/30 to-emerald-200/30 blur-3xl transition-all duration-500 group-hover:scale-110' />

                {/* Images on the left */}
                <div className='relative z-10 flex w-full flex-col gap-6 md:w-1/2'>
                    <div className='group/img relative w-full overflow-hidden rounded-xl border border-emerald-100/50 bg-white/60 p-3 shadow-lg backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-xl'>
                        <div className='absolute inset-0 bg-gradient-to-br from-emerald-200/20 to-transparent opacity-0 transition-opacity duration-500 group-hover/img:opacity-100' />
                        <Image
                            src='/totalbudgetb.svg'
                            alt='Total budget overview'
                            width={550}
                            height={200}
                            className='relative h-auto w-full'
                        />
                    </div>
                    <div className='group/img relative w-full overflow-hidden rounded-xl border border-emerald-100/50 bg-white/60 p-3 shadow-lg backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-xl'>
                        <div className='absolute inset-0 bg-gradient-to-br from-teal-200/20 to-transparent opacity-0 transition-opacity duration-500 group-hover/img:opacity-100' />
                        <Image
                            src='/budgetplan.svg'
                            alt='Budget planning interface'
                            width={550}
                            height={309}
                            className='relative h-auto w-full'
                        />
                    </div>
                </div>

                {/* Text on the right */}
                <div className='relative z-10 w-full max-w-xl text-center md:w-1/2 md:text-left'>
                    <div className='mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100/80 px-4 py-1.5 text-sm font-semibold text-emerald-800 backdrop-blur-sm'>
                        <svg
                            className='size-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                        >
                            <path
                                fillRule='evenodd'
                                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                                clipRule='evenodd'
                            />
                        </svg>
                        Budget Planning
                    </div>
                    <h3 className='mb-4 bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-3xl font-bold leading-tight text-transparent sm:text-4xl lg:text-5xl'>
                        Smart Budgeting Tools
                    </h3>
                    <p className='font-[poppins] text-base leading-relaxed text-gray-700 sm:text-lg lg:text-xl lg:leading-relaxed'>
                        Gain clarity on your spending habits, set achievable
                        goals, and make better financial decisions with insights
                        tailored just for you.
                    </p>
                </div>
            </div>
        </ChitContainer>
    );
}
