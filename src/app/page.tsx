import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import CategoriesGrid from "@/components/CategoriesCard";

export default function Home() {
  return (
    <div>

      <CategoriesGrid></CategoriesGrid>

      <div className="p-8 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Популярные товары</h1>
        <div className="grid grid-cols-3 justify-items-center">
          {products.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      

    </div>
  );
}
