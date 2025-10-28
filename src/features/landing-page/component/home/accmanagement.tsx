import Image from 'next/image';
import { ChitContainer } from '../reuseables/ChitContainer';

const AccManagement = () => {
    return (
        <>
            <div className='mb-16 mt-20 px-4 text-center sm:mb-20 sm:mt-24 lg:mb-24 lg:mt-32'>
                <h2 className='mb-5 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-4xl font-black leading-tight tracking-tight text-transparent sm:text-5xl lg:text-6xl'>
                    Smarter Finance, Simplified.
                </h2>
                <p className='mx-auto max-w-2xl font-[poppins] text-base leading-relaxed text-gray-600 sm:text-lg lg:text-xl'>
                    Everything you need to manage your money with ease.
                </p>
            </div>
            <ChitContainer>
                <div className='group relative flex flex-col items-center justify-center gap-8 overflow-hidden rounded-2xl border border-orange-200/50 bg-gradient-to-br from-orange-50 via-amber-50/50 to-yellow-50/30 p-6 shadow-xl shadow-orange-100/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-200/60 sm:gap-10 sm:p-8 md:flex-row md:p-12 lg:rounded-3xl lg:p-16'>
                    {/* Decorative gradient orb */}
                    <div className='pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-gradient-to-br from-orange-200/40 to-amber-200/30 blur-3xl transition-all duration-500 group-hover:scale-110' />
                    <div className='pointer-events-none absolute -bottom-20 -left-20 size-64 rounded-full bg-gradient-to-tr from-yellow-200/30 to-orange-200/30 blur-3xl transition-all duration-500 group-hover:scale-110' />

                    <div className='relative z-10 max-w-xl text-center md:text-left'>
                        <div className='mb-4 inline-flex items-center gap-2 rounded-full bg-orange-100/80 px-4 py-1.5 text-sm font-semibold text-orange-800 backdrop-blur-sm'>
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
                            Account Management
                        </div>
                        <h3 className='mb-4 bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-3xl font-bold leading-tight text-transparent sm:text-4xl lg:text-5xl'>
                            Effortless Account Management
                        </h3>
                        <p className='font-[poppins] text-base leading-relaxed text-gray-700 sm:text-lg lg:text-xl lg:leading-relaxed'>
                            Link and monitor all your bank accounts in one app.
                            With everything in one place, managing your finances
                            has never been easier or more convenient.
                        </p>
                    </div>

                    <div className='relative z-10 w-full max-w-lg transition-transform duration-500 group-hover:scale-105'>
                        <div className='absolute inset-0 rounded-xl bg-gradient-to-br from-orange-300/20 to-transparent blur-xl' />
                        <Image
                            src='/graph.svg'
                            alt='Financial graph visualization'
                            width={582}
                            height={480}
                            className='relative h-auto w-full drop-shadow-2xl'
                        />
                    </div>
                </div>
            </ChitContainer>
        </>
    );
};

export default AccManagement;
