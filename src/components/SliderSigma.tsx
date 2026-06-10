'use client'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const banners = [
    { id: 1, bg: 'bg-black' },
    { id: 2, bg: 'bg-pink-500' },
    { id: 3, bg: 'bg-yellow-400' },
    { id: 4, bg: 'bg-red-500' },
    { id: 5, bg: 'bg-blue-500' },
    { id: 6, bg: 'bg-black' },
    { id: 7, bg: 'bg-pink-500' },
    { id: 8, bg: 'bg-yellow-400' },
    { id: 9, bg: 'bg-red-500' },
    { id: 10, bg: 'bg-blue-500' },
]

export default function BannerSlider() {
    const [emblaRef] = useEmblaCarousel(
        { loop: true, align: 'center', dragFree: true },
        [Autoplay({ delay: 3000, stopOnInteraction: false })]
    )

    return (
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex gap-4 px-8">
                {banners.map(banner => (
                    <div
                        key={banner.id}
                        className={`${banner.bg} flex-shrink-0 w-[400px] h-[500px] rounded-2xl transition-all duration-700 ease-in-out`}
                    />
                ))}
            </div>
        </div>
    )
}