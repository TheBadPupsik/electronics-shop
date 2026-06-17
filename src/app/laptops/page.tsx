import CatalogBarPhone from "@/components/CatalogBarPhone";
import Link from "next/link";
import PhoneCard from "@/components/PhoneCards";
import { laptops } from "@/data/laptops";
import CatalogBarLaptop from "@/components/CatalogBarLaptop";

export default function LaptopPage() {
    return (
        <div className="max-w-[1440px] w-full mx-auto mt-10 px-4">

            <div className="flex items-center gap-2">
                <Link href='/'><img src='/icons/HomeBack.svg' /></Link>
                <p className="text-[#7E7E7E] text-xs">-</p>
                <p className="text-[#7E7E7E] text-xs">Ноутбуки, планшети та комп’ютерна техніка</p>
            </div>

            <div className="mt-6">
                <h2 className="text-black text-xl font-semibold">Ноутбуки, планшети та комп’ютерна техніка</h2>
            </div>

            <div className="flex flex-col md:flex-row gap-6 mt-6">

                <div className="md:flex-shrink-0">
                    <CatalogBarLaptop />
                </div>

                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                        <h1 className="text-xl md:text-2xl font-bold">Ноутбуки</h1>
                        <p className="font-bold text-[#FFB800] cursor-pointer hover:text-[#FFB800]/50 text-sm md:text-base">
                            Дивитися всі &gt;
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 justify-items-center">
                        {laptops.map(product => (
                            <PhoneCard key={product.id} {...product} />
                        ))}
                    </div>
                </div>

            </div>

        </div>
    )
}