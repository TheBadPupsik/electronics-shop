import { Phone } from "@/data/phones";
import Image from "next/image";
import Link from "next/link";

export default function PhoneCard({ name, price, image, discount, stars, href }: Phone) {
    return (
        <div className="w-65 rounded-2xl border border-[#FFB800] p-3 hover:shadow-xl transition-all duration-300 bg-white flex flex-col justify-between">
            <div className="relative rounded-2xl overflow-hidden aspect-square h-70 w-full bg-[#FFB800]/50">
                <Link href={href}>
                    <Image
                        src={image}
                        alt={name}
                        fill
                        sizes="(max-width: 768px) 100vw, 224px"
                        className="object-contain p-4 z-0"
                    />
                </Link>
                {discount > 0 && (
                    <span className="absolute top-3 left-3 z-10 bg-white/80 text-black text-xs font-bold px-3 py-2 rounded-2xl shadow-sm leading-tight">
                        вигода<br />{discount * 100}₴
                    </span>
                )}

                <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
                    <button className="bg-white/20 rounded-full w-9 h-9 flex items-center justify-center shadow-sm ">
                        <img src="/icons/mdi_heart.svg" alt="wish" className="w-4 h-4" />
                    </button>
                    <button className="bg-white/20 rounded-full w-9 h-9 flex items-center justify-center shadow-sm ">
                        <img src="/icons/material-symbols_balance.svg" alt="balance" className="w-4 h-4" />
                    </button>
                </div>
            </div>

            <div className="mt-3 px-1">
                <h2 className="font-bold text-base text-black line-clamp-2 leading-tight min-h-[2.5rem]">
                    {name}
                </h2>

                <div className="flex items-center gap-1 mt-1">
                    <span className="text-[#f3c969] text-xl">★</span>
                    <span className="text-sm font-semibold">{stars}</span>
                </div>
            </div>

            <div className="flex items-center justify-between mt-3 px-1 gap-2">
                <span className="font-bold text-base text-black bg-[#fcf0d8] rounded-full px-3 py-1.5 whitespace-nowrap">
                    {price} ₴
                </span>

                <button className="bg-black text-white rounded-full pl-3 pr-2 py-1.5 text-xs font-medium flex items-center gap-2 hover:bg-neutral-800 transition-colors shrink-0">
                    <span>Замовити</span>
                    <span className="bg-white text-black rounded-full w-5 h-5 flex items-center justify-center font-bold text-[10px]">
                        ↗
                    </span>
                </button>
            </div>

        </div>
    );
}