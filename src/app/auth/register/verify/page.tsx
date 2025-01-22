// import React from 'react';
import Link from 'next/link';

import BVNVerification from '@features/auth/components/bvn/BVNVerification';
import { ArrowLeft } from 'lucide-react';

// const steps = [
//   {
//     label: "Email",
//     description: "An email with verification code will be sent to chu******ess@gmail.com"
//   }
// ]

export default function page() {
    return (
        <div>
            <div>
                <Link href='/auth/register'>
                    <ArrowLeft />
                </Link>
            </div>
            <BVNVerification />
        </div>
    );
}
