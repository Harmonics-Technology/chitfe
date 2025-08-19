'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

import SignUpPhoto from '~/public/assets/images/sign-up.svg';

import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
} from '@components/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselApi,
} from '@components/ui/carousel';

const SLIDES = [
    {
        title: 'Aggregated Banking',
        illustration: SignUpPhoto,
        description:
            'Connect all your bank accounts, mobile money services, and other financial accounts in one place.',
    },
    {
        title: 'Aggregated Banking',
        illustration: SignUpPhoto,
        description:
            'Connect all your bank accounts, mobile money services, and other financial accounts in one place.',
    },
    {
        title: 'Aggregated Banking',
        illustration: SignUpPhoto,
        description:
            'Connect all your bank accounts, mobile money services, and other financial accounts in one place.',
    },
];

export default function AuthCarousel() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) return;

        // set initial index
        setCurrent(api.selectedScrollSnap());

        // listen to manual change
        api.on('select', () => setCurrent(api.selectedScrollSnap()));

        // autoplay interval
        const interval = setInterval(() => {
            if (!api) return;
            if (api.canScrollNext()) {
                api.scrollNext();
            } else {
                api.scrollTo(0); // loop back to first slide
            }
        }, 3000); // change every 3s

        return () => clearInterval(interval);
    }, [api]);

    return (
        <Carousel
            setApi={setApi}
            opts={{
                loop: true,
                align: 'start',
            }}
            className='w-full max-w-xs'
        >
            <CarouselContent>
                {SLIDES.map(({ title, illustration, description }, index) => (
                    <CarouselItem key={index}>
                        <div className='space-y-5 p-1'>
                            <div className='flex items-center justify-center'>
                                <Image
                                    src={illustration}
                                    alt='a phone screen showing a list of banks'
                                    className='h-[282px] w-[213px] sm:w-full'
                                />
                            </div>
                            {/* Dots */}
                            <div className='mt-4 flex items-center justify-center space-x-2'>
                                {SLIDES.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`h-2 cursor-pointer rounded-xl transition-all duration-300 ${
                                            current === idx
                                                ? 'w-10 bg-[#8D7BE0]'
                                                : 'w-2.5 bg-chit-milk-white'
                                        }`}
                                        onClick={() => api?.scrollTo(idx)}
                                    />
                                ))}
                            </div>
                            <Card className='border-none bg-transparent text-chit-milk-white shadow-none'>
                                <CardHeader className='space-y-3 p-0 text-center'>
                                    <CardTitle className='text-lg font-medium'>
                                        {title}
                                    </CardTitle>
                                    <CardDescription className='text-sm font-normal text-chit-link-water'>
                                        {description}
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}
