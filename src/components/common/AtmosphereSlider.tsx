'use client';

import Image from 'next/image';
import {Swiper, SwiperSlide} from 'swiper/react';
import {A11y, Autoplay, Navigation, Pagination} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type Slide = {
    src: string;
    alt: string;
};

type Props = {
    slides: Slide[];
    className?: string;
    aspect?: '16/9' | '4/3' | '1/1';
    autoplay?: boolean;
};

const getAspectClass = (aspect: Props['aspect']) => {
    if (aspect === '1/1') return 'aspect-square';
    if (aspect === '4/3') return 'aspect-[4/3]';
    return 'aspect-[16/9]';
};

export const AtmosphereSlider = ({
                                     slides,
                                     className,
                                     aspect = '16/9',
                                     autoplay = true,
                                 }: Props) => {
    return (
        <div className={className}>
            <Swiper
                modules={[Navigation, Pagination, A11y, Autoplay]}
                navigation
                pagination={{clickable: true}}
                loop
                // autoplay={autoplay ? {delay: 4500, disableOnInteraction: false} : false}
                spaceBetween={16}
                slidesPerView={1}
            >
                {slides.map((s) => (
                    <SwiperSlide key={s.src}>
                        <div className={`relative w-full overflow-hidden rounded-2xl ${getAspectClass(aspect)}`}>
                            <Image
                                src={s.src}
                                alt={s.alt}
                                fill
                                sizes="(max-width: 768px) 100vw, 800px"
                                className="object-cover"
                                priority={false}
                            />
                            {/* мягкая барная затемнялка */}
                            <div className="pointer-events-none absolute inset-0 bg-black/15"/>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
