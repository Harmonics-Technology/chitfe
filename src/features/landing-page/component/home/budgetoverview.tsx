import Image from 'next/image';
import { ChitContainer } from '../reuseables/ChitContainer';

export default function BudgetSection() {
    return (
        <ChitContainer>
            <div className='mt-20 flex w-full flex-col-reverse items-center justify-center gap-10 rounded-xl bg-[#DDF9DF4D] px-6 py-10 md:mt-27 md:flex-row md:gap-20 md:px-12 md:pt-12'>
                {/* Images on the left */}
                <div className='flex w-full flex-col gap-6 md:w-1/2'>
                    <div className='w-full overflow-hidden'>
                        <Image
                            src='/totalbudgetb.svg'
                            alt='budget'
                            width={0}
                            height={0}
                            className='h-auto w-full'
                        />
                    </div>
                    <div className='w-full overflow-hidden'>
                        <Image
                            src='/budgetplan.svg'
                            alt='budget plan'
                            width={550}
                            height={309}
                            className='h-auto w-full'
                        />
                    </div>
                </div>

                {/* Text on the right */}
                <div className='w-full max-w-xl text-center md:w-1/2 md:text-left'>
                    <h1 className='mb-3 text-2xl font-semibold leading-tight sm:text-3xl'>
                        Smart Budgeting Tools
                    </h1>
                    <p className='text-base font-normal leading-7 sm:w-11/12'>
                        Gain clarity on your spending habits, set achievable
                        goals, and make better financial decisions with insights
                        tailored just for you.
                    </p>
                </div>
            </div>
        </ChitContainer>
    );
}
