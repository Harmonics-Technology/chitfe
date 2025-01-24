import Image from 'next/image';
import Link from 'next/link';

import ChitLogo from '~/public/chit.svg';

export default function AppLogo() {
    return (
        <Link href='/' as='image'>
            <Image
                priority
                src={ChitLogo}
                alt='Chit brand logo'
                className='w-20 lg:w-36'
            />
        </Link>
    );
}
