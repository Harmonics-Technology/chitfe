import Image from 'next/image';
import Link from 'next/link';

import ChitLogo from '~/public/chit.svg';
import ChitIcon from '~/public/chit-icon.svg';

interface IAppLogoProps {
    isIcon?: boolean;
}
export default function AppLogo({ isIcon }: IAppLogoProps) {
    return (
        <Link href='/' as='image'>
            {isIcon ? (
                <Image
                    priority
                    src={ChitIcon}
                    alt='Chit brand icon'
                    className='w-12'
                />
            ) : (
                <Image
                    priority
                    src={ChitLogo}
                    alt='Chit brand logo'
                    className='w-20 lg:w-36'
                />
            )}
        </Link>
    );
}
