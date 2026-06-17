import Image from 'next/image'
import { categories, Category } from '@/data/catalog'
import Link from 'next/link'

const gridStylesMap: Record<number, string> = {
    1: 'col-start-1 row-start-1 col-span-1 row-span-1',
    2: 'col-start-2 row-start-1 col-span-1 row-span-1',
    3: 'col-start-3 row-start-1 col-span-1 row-span-2',
    4: 'col-start-4 row-start-1 col-span-2 row-span-1',
    5: 'col-start-6 row-start-1 col-span-1 row-span-2',
    6: 'col-start-1 row-start-2 col-span-2 row-span-1',
    7: 'col-start-4 row-start-2 col-span-1 row-span-1',
    8: 'col-start-5 row-start-2 col-span-1 row-span-1',
}

export default function CategoriesGrid() {
    const visibleCategories = categories.filter(cat => gridStylesMap[cat.id])

    return (
        <section className="max-w-[1440px] w-full mx-auto py-6">

            {/* Мобильная версия: горизонтальный скролл круглых иконок */}
            <div className="flex sm:hidden gap-5 overflow-x-auto px-4 pb-1 -mx-4">
                <Link href="/favorites" className="flex flex-col items-center gap-2 shrink-0 w-16">
                    <div className="w-14 h-14 rounded-full bg-[#FFB800] flex items-center justify-center shadow-sm">
                        <img src="/icons/material-symbols_crown.svg" alt="Фаворити" className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-medium text-center text-black leading-tight">Фаворити</span>
                </Link>

                {visibleCategories.map((category) => (
                    <Link href={category.href} key={category.id} className="flex flex-col items-center gap-2 shrink-0 w-16">
                        <div className="relative w-14 h-14 rounded-full bg-white shadow-sm overflow-hidden">
                            {category.image && (
                                <Image
                                    src={category.image}
                                    alt={category.name}
                                    fill
                                    sizes="56px"
                                    className="object-cover"
                                />
                            )}
                        </div>
                        <span className="text-[11px] font-medium text-center text-black leading-tight line-clamp-1">
                            {category.name}
                        </span>
                    </Link>
                ))}
            </div>

            {/* Планшет / десктоп: bento-грид */}
            <div
                className="hidden sm:grid gap-4 auto-rows-[130px]"
                style={{ gridTemplateColumns: 'repeat(6, 1fr)' }}
            >
                {visibleCategories.map((category) => {
                    const gridClass = gridStylesMap[category.id] || 'col-span-1 row-span-1'
                    return (
                        <Link href={category.href}
                            key={category.id}
                            className={`${gridClass} relative bg-gradient-to-br from-[#FFF7ED] to-[#FFE5B4] rounded-[32px] p-6 overflow-hidden flex flex-col justify-between group cursor-pointer shadow-[0_8px_30px_rgba(255,184,0,0.25)] hover:shadow-[0_12px_40px_rgba(255,184,0,0.4)] transition-all duration-300`}
                        >
                            <h3 className="relative z-10 text-[16px] text-black font-bold max-w-[140px] leading-tight">
                                {category.name}
                            </h3>

                            {category.image && (
                                <div className="absolute bottom-0 right-0 w-3/5 h-full z-0">
                                    <Image
                                        src={category.image}
                                        alt={category.name}
                                        fill
                                        sizes="300px"
                                        className="object-contain object-right-bottom group-hover:scale-105 transition-transform duration-500"
                                        priority={category.id === 1 || category.id === 2}
                                    />
                                </div>
                            )}
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}