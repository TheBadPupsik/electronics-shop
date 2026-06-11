import CatalogBarPhone from "@/components/CatalogBarPhone";
import Link from "next/link";

export default function PhonePage() {
    return (
        <div className="max-w-[1440px] w-full mx-auto mt-10">
            <div className="flex align-center gap-2">
                <Link href='/'><img src='/icons/HomeBack.svg' /></Link>
                <p className="text-[#7E7E7E] text-xs">-</p>
                <p className="text-[#7E7E7E] text-xs">Смартфони та телефони</p>
            </div>

            <div className="flex align-center mt-10">
                <h2 className="text-[#000000] text-xl font-semibold">Смартфони та телефони</h2>
            </div>

            <div className="flex flex-col justify-between mt-20">
                <CatalogBarPhone />
            </div>
        </div>
    );
}