import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import CategoriesGrid from "@/components/CategoriesCard";
import BannerSlider from "@/components/SliderSigma";

const promoCards = [
  { id: 1, title: "Здай стару техніку та отримай до 5000 грн виходи", daysLeft: 5, image: "/images/обміняй старе на нове.png" },
  { id: 2, title: "Обирай будь-які товари зі спеціальною позначкою", daysLeft: 3, image: "/images/другий товар дешевше.png" },
  { id: 3, title: "Ноутбики, планшети та телефони Apple", daysLeft: 7, image: "/images/тиждень apple.png" },
];

export default function Home() {
  return (
    <div>

      <CategoriesGrid></CategoriesGrid>

      <BannerSlider></BannerSlider>

      <div className="max-w-[1440px] w-full mx-auto mt-10">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold">Фоворити</h1>
          <p className="font-bold text-gray-500 cursor-pointer hover:text-gray-700">Дивитися всі &gt;</p>
        </div>

        <div className="grid grid-cols-6 gap-5 justify-items-center mt-5">
          {products.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      <section className="max-w-[1440px] w-full mx-auto  mt-16 flex flex-col md:flex-row gap-10 items-start">
        <div className="w-full md:w-[320px] flex flex-col gap-6 shrink-0 mt-2">
          <h2 className="text-4xl font-extrabold text-black tracking-tight">
            Останні акції
          </h2>
          <p className="text-neutral-900 text-base font-medium leading-relaxed max-w-[280px]">
            Хітові товари за зниженими цінами. Перегляньте топ пропозиції, поки вони не зникли.
          </p>
          <button className="bg-[#FFB800] hover:bg-[#e6a602] text-white font-bold text-sm rounded-full py-3.5 px-6 w-fit transition-colors duration-200 cursor-pointer">
            Дивитися всі
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {promoCards.map((card) => (
            <article key={card.id} className="flex flex-col w-full group cursor-pointer">

              <div className="relative w-full h-[180px] bg-[#d9d9d9] rounded-[32px] overflow-hidden transition-shadow duration-300 group-hover:shadow-md">
                {card.image && (
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-w: 768px) 100vw, (max-w: 1200px) 33vw, 300px"
                    className="object-cover group-hover:scale-102 transition-transform duration-500 ease-out"
                  />
                )}
              </div>

              <div className="mt-4 bg-[#FFB800] text-black text-base font-semibold p-2.5   py-1.5 rounded-full w-fit">
                Залишилося {card.daysLeft} днів
              </div>

              <h3 className="mt-3 text-sm font-bold text-black px-1 capitalize">
                {card.title}
              </h3>

            </article>
          ))}
        </div>
      </section>



    </div>
  );
}
