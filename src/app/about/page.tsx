import Hero from '@features/landing-page/component/about/hero';

import Purpose from '@features/landing-page/component/about/purpose';
import Mission from '@features/landing-page/component/about/mission';
import Vision from '@features/landing-page/component/about/vision';
import Solution from '@features/landing-page/component/about/solution';
import Feature from '@features/landing-page/component/about/feature';
import StartHere from '@features/landing-page/component/reuseables/starthere';

export default function Page() {
    return (
        <>
            <Hero />
            <Purpose />
            <Mission />
            <Vision />
            <Solution />
            <Feature />
            <StartHere />
        </>
    );
}
