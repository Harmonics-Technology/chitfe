import HeroSection from '@features/landing-page/component/home/herosection';
import AccManagement from '@features/landing-page/component/home/accmanagement';
import BudgetOverview from '@features/landing-page/component/home/budgetoverview';
import Financial from '@features/landing-page/component/home/financial';
import Secure from '@features/landing-page/component/home/secure';
import Getstarted from '@features/landing-page/component/home/getstarted';
import User from '@features/landing-page/component/home/user';
import Security from '@features/landing-page/component/home/security';
import Starthere from '@features/landing-page/component/home/starthere';

import Download from '@features/landing-page/link/download';
export default function Main() {
    return (
        <>
            <HeroSection />
            <AccManagement />
            <BudgetOverview />
            <Financial />
            <Secure />
            <Getstarted />
            <User />
            <Security />
            <Starthere />
            <Download />
        </>
    );
}
