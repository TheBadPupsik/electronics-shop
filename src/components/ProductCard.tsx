import { Product } from "@/data/products";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ name, price, image, discount, stars, href }: Product) {
    return (
        <div className="w-full rounded-2xl border border-[#FFB800] p-2.5 sm:p-3 hover:shadow-xl transition-all duration-300 bg-white flex flex-col justify-between">

            <div className="relative rounded-2xl overflow-hidden aspect-square w-full bg-[#FFB800]/50">
                <Link href={href}>
                    <Image
                        src={image}
                        alt={name}
                        fill
                        sizes="(max-width: 640px) 45vw, (max-width: 768px) 30vw, 224px"
                        className="object-contain p-3 sm:p-4 z-0"
                    />
                </Link>

                {discount > 0 && (
                    <span className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10 bg-white/80 text-black text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1.5 sm:py-2 rounded-2xl shadow-sm leading-tight">
                        вигода<br />{discount * 100}₴
                    </span>
                )}

                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 flex flex-col gap-1.5 sm:gap-2 z-10">
                    <button className="bg-white/20 rounded-full w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center shadow-sm ">
                        <img src="/icons/mdi_heart.svg" alt="wish" className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </button>
                    <button className="bg-white/20 rounded-full w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center shadow-sm ">
                        <img src="/icons/material-symbols_balance.svg" alt="balance" className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </button>
                </div>
            </div>

            <div className="mt-2.5 sm:mt-3 px-1">
                <h2 className="font-bold text-sm sm:text-base text-black line-clamp-2 leading-tight min-h-[2rem] sm:min-h-[2.5rem]">
                    {name}
                </h2>

                <div className="flex items-center gap-1 mt-1">
                    <span className="text-[#f3c969] text-lg sm:text-xl">★</span>
                    <span className="text-xs sm:text-sm font-semibold">{stars}</span>
                </div>
            </div>

            <div className="flex items-center justify-between mt-2.5 sm:mt-3 px-1 gap-2">
                <span className="font-bold text-sm sm:text-base text-black bg-[#fcf0d8] rounded-full px-2.5 sm:px-3 py-1 sm:py-1.5 whitespace-nowrap">
                    {price} ₴
                </span>

                <button className="bg-black text-white rounded-full pl-2.5 sm:pl-3 pr-1.5 sm:pr-2 py-1 sm:py-1.5 text-[11px] sm:text-xs font-medium flex items-center gap-1.5 sm:gap-2 hover:bg-neutral-800 transition-colors shrink-0">
                    <span>Замовити</span>
                    <span className="bg-white text-black rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center font-bold text-[9px] sm:text-[10px]">
                        ↗
                    </span>
                </button>
            </div>

        </div>
    );
}