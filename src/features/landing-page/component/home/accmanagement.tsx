import Image from 'next/image';

const AccManagement = () => {
    return (
        <div className='m-4 flex flex-col items-center justify-center gap-10 rounded-xl bg-[#FEE8C24D] p-6 sm:m-8 sm:p-8 md:m-10 md:flex-row md:p-10'>
            <div className='max-w-xl text-center md:text-left'>
                <h1 className='mb-3 text-3xl font-medium leading-9 md:text-4xl'>
                    Effortless Account <br className='hidden md:block' />{' '}
                    Management
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
    );
};

export default AccManagement;
