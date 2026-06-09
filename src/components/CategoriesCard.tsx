import Image from 'next/image'
import { categories, Category } from '@/data/catalog'

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
            <div className="grid gap-4 auto-rows-[130px]"
                style={{ gridTemplateColumns: 'repeat(6, 1fr)' }}>
                {visibleCategories.map((category) => {
                    const gridClass = gridStylesMap[category.id] || 'col-span-1 row-span-1'
                    return (
                        <a href='/'
                            key={category.id}
                            className={`${gridClass} relative bg-[#D9D9D9] rounded-[32px] p-6 overflow-hidden flex flex-col justify-between group cursor-pointer hover:shadow-md transition-all duration-300`}
                        >
                            <h3 className="relative z-10 text-[18px] font-bold text-neutral-800 max-w-[160px] leading-tight">
                                {category.name}
                            </h3>

                            {category.image && (
                                <div className="absolute inset-0 z-0 opacity-40 group-hover:scale-105 transition-transform duration-500 ease-out">
                                    <Image
                                        src={category.image}
                                        alt={category.name}
                                        fill
                                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 30vw, 20vw"
                                        className="object-cover"
                                        priority={category.id === 1 || category.id === 2}
                                    />
                                </div>
                            )}
                        </a>
                    )
                })}
            </div>
        </section>
    )
}