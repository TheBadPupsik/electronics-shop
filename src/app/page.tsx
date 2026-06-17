import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import CategoriesGrid from "@/components/CategoriesCard";
import BannerSlider from "@/components/SliderSigma";

const promoCards = [
  { id: 1, title: "Здай стару техніку та отримай до 5000 грн виходи", daysLeft: 5, image: "/images/tradeoffer.png" },
  { id: 2, title: "Обирай будь-які товари зі спеціальною позначкою", daysLeft: 3, image: "/images/seconditemcheeper.png" },
  { id: 3, title: "Ноутбики, планшети та телефони Apple", daysLeft: 7, image: "/images/weekapple.png" },
];

export default function Home() {
  return (
    <div>

      <CategoriesGrid></CategoriesGrid>

      <BannerSlider></BannerSlider>

      <div className="max-w-[1440px] w-full mx-auto mt-8 sm:mt-10 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          <h1 className="text-xl sm:text-2xl font-bold">Фоворити</h1>
          <img src="/icons/material-symbols_crown.svg" alt="Favorites" className="w-5 h-5 sm:w-6 sm:h-6" />
          <p className="font-bold text-sm sm:text-base text-gray-500 cursor-pointer hover:text-gray-700 ml-auto">Дивитися всі &gt;</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-5 mt-5">
          {products.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      <section className="max-w-[1440px] w-full mx-auto mt-12 sm:mt-16 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-6 sm:gap-10 items-center md:items-start">
        <div className="w-full md:w-[320px] flex flex-col items-center md:items-start gap-4 sm:gap-6 shrink-0 mt-2 text-center md:text-left">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-black tracking-tight">
            Останні акції
          </h2>
          <p className="text-neutral-900 text-sm sm:text-base font-medium leading-relaxed max-w-[280px]">
            Хітові товари за зниженими цінами. Перегляньте топ пропозиції, поки вони не зникли.
          </p>
          <button className="bg-[#FFB800] hover:bg-[#e6a602] text-white font-bold text-sm rounded-full py-3 sm:py-3.5 px-6 w-fit transition-colors duration-200 cursor-pointer">
            Дивитися всі
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 w-full">
          {promoCards.map((card) => (
            <article key={card.id} className="flex flex-col w-full group cursor-pointer">

              <div className="relative w-full h-[160px] sm:h-[180px] bg-[#d9d9d9] rounded-[32px] overflow-hidden transition-shadow duration-300 group-hover:shadow-md">
                {card.image && (
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 300px"
                    className="object-cover group-hover:scale-102 transition-transform duration-500 ease-out"
                  />
                )}
              </div>

              <div className="mt-3 sm:mt-4 bg-[#FFB800] text-black text-sm sm:text-base font-semibold p-2 sm:p-2.5 py-1.5 rounded-full w-fit">
                Залишилося {card.daysLeft} днів
              </div>

              <h3 className="mt-2.5 sm:mt-3 text-sm font-bold text-black px-1 capitalize">
                {card.title}
              </h3>

            </article>
          ))}
        </div>
      </section>

    </div>
  );
}