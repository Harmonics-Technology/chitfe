import Image from 'next/image';

export default function BudgetSection() {
    return (
        <div className='mx-auto w-11/12'>
            <div className='mt-20 flex w-full flex-row items-center justify-center gap-10 rounded-xl bg-[#DDF9DF4D] p-8 sm:m-8 md:m-10 md:flex-row'>
                {/* Images on the left */}
                <div className='w-full max-w-xl'>
                    <div className='h-auto w-full overflow-hidden'>
                        <Image
                            src='/totalbudget.svg'
                            alt='budget'
                            width={0}
                            height={0}
                            className='h-auto w-full'
                        />
                    </div>
                    <Image
                        src='/budgetplan.svg'
                        alt='budget plan'
                        width={550}
                        height={309}
                        className='h-auto w-full'
                    />
                </div>

                {/* Text on the right */}
                <div className='max-w-xl text-center md:text-left'>
                    <h1 className='mb-3 text-3xl font-medium leading-10 md:text-4xl'>
                        Smart Budgeting Tools
                    </h1>
                    <p className='text-lg font-normal leading-7'>
                        Gain clarity on your spending habits, set achievable{' '}
                        <br className='hidden sm:inline' />
                        goals, and make better financial decisions with{' '}
                        <br className='hidden sm:inline' />
                        insights tailored just for you.
                    </p>
                </div>
            </div>
        </div>
    );
}
