import { Phone } from "@/data/phones";
import Image from "next/image";
import Link from "next/link";

export default function PhoneCard({ name, price, image, discount, stars, href }: Phone) {
    return (
        <div className="w-full max-w-[180px] md:max-w-none md:w-65 rounded-2xl border border-[#FFB800] p-2 md:p-3 hover:shadow-xl transition-all duration-300 bg-white flex flex-col justify-between">
            <div className="relative rounded-2xl overflow-hidden aspect-square w-full bg-[#FFB800]/50">
                <Link href={href}>
                    <Image
                        src={image}
                        alt={name}
                        fill
                        sizes="(max-width: 768px) 50vw, 224px"
                        className="object-contain p-3 md:p-4 z-0"
                    />
                </Link>
                {discount > 0 && (
                    <span className="absolute top-2 left-2 md:top-3 md:left-3 z-10 bg-white/80 text-black text-[10px] md:text-xs font-bold px-2 py-1 md:px-3 md:py-2 rounded-2xl shadow-sm leading-tight">
                        вигода<br />{discount * 100}₴
                    </span>
                )}

                <div className="absolute top-2 right-2 md:top-3 md:right-3 flex flex-col gap-1.5 md:gap-2 z-10">
                    <button className="bg-white/20 rounded-full w-7 h-7 md:w-9 md:h-9 flex items-center justify-center shadow-sm">
                        <img src="/icons/mdi_heart.svg" alt="wish" className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    </button>
                    <button className="bg-white/20 rounded-full w-7 h-7 md:w-9 md:h-9 flex items-center justify-center shadow-sm">
                        <img src="/icons/material-symbols_balance.svg" alt="balance" className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    </button>
                </div>
            </div>

            <div className="mt-2 md:mt-3 px-1">
                <h2 className="font-bold text-sm md:text-base text-black line-clamp-2 leading-tight min-h-[2.2rem] md:min-h-[2.5rem]">
                    {name}
                </h2>

                <div className="flex items-center gap-1 mt-1">
                    <span className="text-[#f3c969] text-base md:text-xl">★</span>
                    <span className="text-xs md:text-sm font-semibold">{stars}</span>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between mt-2 md:mt-3 px-1 gap-2">
                <span className="font-bold text-sm md:text-base text-black bg-[#fcf0d8] rounded-full px-3 py-1.5 whitespace-nowrap text-center">
                    {price} ₴
                </span>

                <button className="bg-black text-white rounded-full pl-3 pr-2 py-1.5 text-xs font-medium flex items-center justify-center gap-2 hover:bg-neutral-800 transition-colors shrink-0">
                    <span>Замовити</span>
                    <span className="bg-white text-black rounded-full w-5 h-5 flex items-center justify-center font-bold text-[10px]">
                        ↗
                    </span>
                </button>
            </div>

        </div>
    );
}