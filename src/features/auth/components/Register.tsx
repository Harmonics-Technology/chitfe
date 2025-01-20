import Link from 'next/link';

import { Button } from '@components/ui/button';

export default function Register() {
    return (
        <div className='h-full rounded-t-3xl bg-chit-milk-white'>
            <div className='grid grid-cols-1 gap-4 px-5 pt-16'>
                <Button className='w-full font-semibold'>
                    Sign Up with Email
                </Button>
                <Button
                    variant='outline'
                    className='font-semibold text-chit-primary'
                >
                    Sign Up with BVN
                </Button>
            </div>

            <p className='mb-0 mt-6 text-center text-sm text-chit-ship-gray'>
                Already have an account? <Link href='/auth/login'>Login</Link>
            </p>
        </div>
    );
}
