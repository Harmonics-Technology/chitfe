import Image from 'next/image';
import { ChitContainer } from '../reuseables/ChitContainer';

export default function BudgetSection() {
    return (
        <ChitContainer>
            <div className='mt-27 flex w-full flex-row items-center justify-center gap-20 rounded-xl bg-[#DDF9DF4D] px-16 pt-12'>
                {/* Images on the left */}
                <div className='flex w-1/2 flex-col gap-4'>
                    <div className='h-auto w-full overflow-hidden'>
                        <Image
                            src='/totalbudgetb.svg'
                            alt='budget'
                            width={0}
                            height={0}
                            className='h-auto w-full'
                        />
                    </div>
                    <div className='h-auto w-full overflow-hidden'>
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
                <div className='w-1/2 max-w-xl text-center md:text-left'>
                    <h1 className='mb-3 text-3xl font-medium leading-10 md:text-3xl'>
                        Smart Budgeting Tools
                    </h1>
                    <p className='text-base font-normal leading-7 lg:w-11/12'>
                        Gain clarity on your spending habits, set achievable
                        goals, and make better financial decisions with insights
                        tailored just for you.
                    </p>
                </div>
            </div>
        </ChitContainer>
    );
}
