import React from 'react';
import BVNVerification from '@features/auth/components/BVNVerification';

// const steps = [
//   {
//     label: "Email",
//     description: "An email with verification code will be sent to chu******ess@gmail.com"
//   }
// ]

export default function page() {
    return (
        <div>
            <BVNVerification />
        </div>
    );
}
