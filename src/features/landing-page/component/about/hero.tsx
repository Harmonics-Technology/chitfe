'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const initialImages = [
    '/aboutus-hero-img.svg',
    '/aboutus-hero-img2.svg',
    '/aboutus-hero-img3.svg',
];

const Hero = () => {
    const [images, setImages] = useState(initialImages);
    const [isSliding, setIsSliding] = useState(false);
    const slideRef = useRef<HTMLDivElement>(null);

    const nextSlide = () => {
        if (isSliding) return;
        setIsSliding(true);
        setTimeout(() => {
            setImages((prev) => [...prev.slice(1), prev[0]]);
            setIsSliding(false);
        }, 700);
    };

    const prevSlide = () => {
        if (isSliding) return;
        setIsSliding(true);
        setImages((prev) => {
            const last = prev[prev.length - 1];
            return [last, ...prev.slice(0, prev.length - 1)];
        });
        setTimeout(() => {
            setIsSliding(false);
        }, 700);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='w-full py-10'>
            {/* Title */}
            <h1 className='text-center text-2xl font-semibold sm:text-4xl md:text-5xl lg:text-5xl'>
                Simplifying <span className='text-[#5539D0]'>Finances</span>{' '}
                <br /> for a Better Tomorrow
            </h1>

            {/* Carousel */}
            <div className='relative mx-auto mt-10 flex max-w-6xl items-center justify-center overflow-hidden px-4'>
                {/* Slide Container */}
                <div
                    ref={slideRef}
                    className={`flex w-full transition-transform duration-700 ease-in-out ${
                        isSliding ? '-translate-x-[33.3333%]' : ''
                    }`}
                >
                    {images.map((src, idx) => (
                        <div key={idx} className='shrink-0 basis-1/3 px-2'>
                            <div className='overflow-hidden rounded-2xl shadow-md'>
                                <Image
                                    src={src}
                                    alt={`Hero ${idx + 1}`}
                                    width={450}
                                    height={400}
                                    className='h-auto w-full object-cover'
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className='absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 text-black hover:bg-white'
                >
                    <ChevronLeft />
                </button>
                <button
                    onClick={nextSlide}
                    className='absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 text-black hover:bg-white'
                >
                    <ChevronRight />
                </button>
            </div>
        </div>
    );
};

export default Hero;
