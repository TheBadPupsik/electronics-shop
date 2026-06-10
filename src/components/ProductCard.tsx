import { Product } from "@/data/products";
import Image from "next/image";

export default function ProductCard({ name, price, image, describe, discount }: Product) {
    return (
        <div className="w-56 rounded-2xl border border-gray-200 p-3 hover:shadow-xl transition-all duration-300 bg-white flex flex-col justify-between">

            <div className="relative rounded-xl overflow-hidden h-52 w-full bg-neutral-100">
                <Image
                    src={image}
                    alt={name}
                    fill
                    sizes="(max-w: 768px) 100vw, 224px"
                    className="object-cover z-0"
                />

                <span className="absolute top-2 left-2 z-10 bg-gray-500/70 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
                    -{discount}%
                </span>

                <div className="absolute top-2 right-2 flex flex-col gap-2 z-10">

                    <button className="backdrop-blur-md bg-gray-500/70 rounded-full w-9 h-9 flex items-center justify-center shadow-sm transition-all duration-200 group/btn">
                        <img
                            src="/icons/mdi_heart.svg"
                            alt="wish"
                            className="w-4 h-4 transition-transform group-hover/btn:scale-110"
                        />
                    </button>

                    <button className="backdrop-blur-md bg-gray-500/70 rounded-full w-9 h-9 flex items-center justify-center shadow-sm transition-all duration-200 group/btn">
                        <img
                            src="/icons/material-symbols_balance.svg"
                            alt="balance"
                            className="w-4 h-4 transition-transform group-hover/btn:scale-110"
                        />
                    </button>

                </div>
            </div>

            <div className="mt-3 px-1 flex-grow">
                <h2 className="font-bold text-base text-[#8C9DAD] line-clamp-2 leading-tight min-h-[2.5rem]">{name}</h2>
                <p className="text-gray-400 text-xs mt-1 line-clamp-2">{describe}</p>
            </div>

            <div className="flex items-center justify-between mt-4 px-1 gap-2">
                <span className="font-bold text-base text-black bg-neutral-50 border border-neutral-200 rounded-full px-3 py-1 whitespace-nowrap">
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