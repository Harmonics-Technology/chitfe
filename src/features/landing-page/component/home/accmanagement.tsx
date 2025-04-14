import Image from 'next/image';
import { ChitContainer } from '../reuseables/ChitContainer';

const AccManagement = () => {
    return (
        <>
            <div className='mb-28 mt-27 px-4 text-center'>
                <h2 className='mb-4 text-4xl font-bold leading-10'>
                    Smarter Finance, Simplified.
                </h2>
                <p className='text-lg font-normal'>
                    Everything you need to manage your money with ease.
                </p>
            </div>
            <ChitContainer>
                <div className='flex flex-col items-center justify-center gap-10 rounded-xl bg-[#FEE8C24D] p-6 sm:p-8 md:flex-row md:p-10'>
                    <div className='max-w-xl text-center md:text-left'>
                        <h1 className='mb-3 text-3xl font-medium leading-9 md:text-4xl'>
                            Effortless Account{' '}
                            <br className='hidden md:block' /> Management
                        </h1>
                        <p className='text-lg font-normal leading-7'>
                            Link and monitor all your bank accounts in one app.{' '}
                            <br className='hidden sm:inline' />
                            With everything in one place, managing your finances{' '}
                            <br className='hidden sm:inline' />
                            has never been easier or more convenient.
                        </p>
                    </div>

                    <div className='w-full max-w-lg'>
                        <Image
                            src='/graph.svg'
                            alt='graph'
                            width={582}
                            height={480}
                            className='h-auto w-full'
                        />
                    </div>
                </div>
            </ChitContainer>
        </>
    );
};

export default AccManagement;
