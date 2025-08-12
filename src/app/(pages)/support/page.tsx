import React from 'react';
import SupportHero from '@features/landing-page/component/support/supporthero';
import Onboardingfaq from '@features/landing-page/component/support/onboardingfaq';
import Contactform from '@features/landing-page/component/support/contactform';
import StartHere from '@features/landing-page/component/reuseables/starthere';
const Page = () => {
    return (
        <div>
            <SupportHero />
            <Onboardingfaq />
            <Contactform />
            <StartHere />
        </div>
    );
};

export default Page;
