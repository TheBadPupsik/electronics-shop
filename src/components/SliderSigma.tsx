'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { EmblaCarouselType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const banners = [
    { id: 1, bg: '/images/PlayStation.png', href: '/consoles' },
    { id: 2, bg: '/images/Samsung TV.png', href: '/tvs' },
    { id: 3, bg: '/images/Phone.png', href: '/phones' },
    { id: 4, bg: '/images/Кондиціонери.png', href: '/appliances' },
    { id: 5, bg: '/images/Рассрочка.png', href: '/credits' },
    { id: 6, bg: '/images/товаридня.png', href: '/deals' },
]

export default function BannerSlider() {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: 'center' },
        [Autoplay({ delay: 3000, stopOnInteraction: false })]
    )
    const [current, setCurrent] = useState(0)

    const onSelect = useCallback((api: EmblaCarouselType | undefined) => {
        if (!api) return
        setCurrent(api.selectedScrollSnap())
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        onSelect(emblaApi)
        emblaApi.on('reInit', onSelect)
        emblaApi.on('select', onSelect)
    }, [emblaApi, onSelect])

    return (
        <div className="flex flex-col items-center gap-6 w-full mt-10">

            <div className="overflow-hidden cursor-grab active:cursor-grabbing w-full px-4" ref={emblaRef}>
                <div className="flex">
                    {banners.map((banner, index) => {
                        const isActive = index === current;

                        return (
                            <div
                                key={`${banner.id}-${index}`}
                                className="flex-shrink-0 w-[440px] px-3 transition-all duration-500 ease-out"
                            >
                                <Link
                                    href={banner.href}
                                    className={`relative h-[500px] w-full rounded-3xl overflow-hidden transition-all duration-500 ease-out shadow-sm block
                                        ${isActive
                                            ? 'scale-100 opacity-100 shadow-md'
                                            : 'scale-92 opacity-60 pointer-events-none'
                                        }`}
                                >
                                    <Image
                                        src={banner.bg}
                                        alt="Promo Banner"
                                        fill
                                        sizes="440px"
                                        className="object-cover pointer-events-none select-none"
                                        priority={index === 0}
                                    />
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Точки навигации */}
            <div className="flex gap-2.5 items-center mt-2">
                {banners.map((_, index) => {
                    const isActive = index === current;

                    return (
                        <button
                            key={index}
                            onClick={() => emblaApi?.scrollTo(index)}
                            className={`h-2 rounded-full transition-all duration-300 ease-in-out cursor-pointer
                                ${isActive
                                    ? 'bg-black w-7'
                                    : 'bg-neutral-300 w-2 hover:bg-neutral-400'
                                }`}
                        />
                    );
                })}
            </div>

        </div>
    )
}