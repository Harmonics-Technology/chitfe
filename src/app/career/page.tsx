import Careershero from '@features/landing-page/component/career/careershero';
import Corevalues from '@features/landing-page/component/career/corevalues';
import WhyJoinUs from '@features/landing-page/component/career/whyjoinus';
import OpenRoles from '@features/landing-page/component/career/open';
import Inclusion from '@features/landing-page/component/career/inclusion';
import RecruitmentFAQs from '@features/landing-page/component/career/recruitmentgaqs';

export default function Page() {
    return (
        <>
            <Careershero />
            <Corevalues />
            <WhyJoinUs />
            <OpenRoles />
            <Inclusion />
            <RecruitmentFAQs />
        </>
    );
}
