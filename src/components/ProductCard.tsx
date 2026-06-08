import { Product } from "@/data/products";

export default function ProductCard({ name, price, image, category }: Product) {
    return (
        <div className="border w-70 rounded-xl p-4 hover:shadow-lg transition">
            <img src={image} alt={name} className="w-full h-48 object-cover rounded-lg" />
            <p className="text-sm text-gray-400 mt-2">{category}</p>
            <h2 className="font-semibold text-lg">{name}</h2>
            <p className="text-blue-600 font-bold">{price} ₴</p>
        </div>
    );
}