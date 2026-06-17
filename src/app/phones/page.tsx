import CatalogBarPhone from "@/components/CatalogBarPhone";
import Link from "next/link";
import PhoneCard from "@/components/PhoneCards";
import { phones } from "@/data/phones";

export default function PhonePage() {
    return (
        <div className="max-w-[1440px] w-full mx-auto mt-10 px-4">

            <div className="flex items-center gap-2">
                <Link href='/'><img src='/icons/HomeBack.svg' /></Link>
                <p className="text-[#7E7E7E] text-xs">-</p>
                <p className="text-[#7E7E7E] text-xs">Смартфони та телефони</p>
            </div>

            <div className="mt-6">
                <h2 className="text-black text-xl font-semibold">Смартфони та телефони</h2>
            </div>

            <div className="flex flex-col md:flex-row gap-6 mt-6">

                <div className="md:flex-shrink-0">
                    <CatalogBarPhone />
                </div>

                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                        <h1 className="text-xl md:text-2xl font-bold">Смартфони</h1>
                        <p className="font-bold text-gray-500 cursor-pointer hover:text-gray-700 text-sm md:text-base">
                            Дивитися всі &gt;
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 justify-items-center">
                        {phones.map(product => (
                            <PhoneCard key={product.id} {...product} />
                        ))}
                    </div>
                </div>

            </div>

        </div>
    )
}