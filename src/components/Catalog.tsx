import Link from "next/link";

const catalogChoise = [
    { id: 1, title: "Смартфони та телефони", image: "/icons/gridicons_phone.svg", href: "/phones" },
    { id: 2, title: "Ноутбуки, планшети та комп’ютерна техніка", image: "/icons/ic_baseline-laptop.svg", href: "/laptops" },
    { id: 3, title: "Техніка для кухні", image: "/icons/material-symbols_kitchen.svg", href: "/kitchen" },
    { id: 4, title: "Техніка для дому", image: "/icons/material-symbols_home.svg", href: "/home" },
    { id: 5, title: "Телевізори та мультимедіа", image: "/icons/material-symbols_tv-outline.svg", href: "/tv" },
    { id: 6, title: "Смарт-годинники та гаджети", image: "/icons/material-symbols_watch.svg", href: "/smartwatches" },
    { id: 7, title: "Аудіо, фото та відео", image: "/icons/gridicons_audio.svg", href: "/audio" },
    { id: 8, title: "Ігрові консолі та геймінг", image: "/icons/mdi_controller.svg", href: "/gaming" },
];

const subCategories = {
    col1: [
        { title: "Смартфони", isHeader: true, href: "/smartphones" },
        { title: "Відновлені смартфони", isHeader: true, href: "/refurbished" },
        { title: "Смартфони Apple", isHeader: true, href: "/apple" },
        { title: "Apple iPhone 17 Pro Max", isHeader: false, href: "/iphone17promax" },
        { title: "Apple iPhone 17 Pro", isHeader: false, href: "/iphone17pro" },
        { title: "Apple iPhone Air", isHeader: false, href: "/iphoneair" },
        { title: "Apple iPhone 17", isHeader: false, href: "/iphone17" },
        { title: "Apple iPhone 16", isHeader: false, href: "/iphone16" },
        { title: "Всі категорії", isHeader: true, href: "/all" },
    ],
    col2: [
        { title: "Смартфони Samsung", isHeader: true, href: "/samsung" },
        { title: "Samsung Galaxy S26 Ultra", isHeader: false, href: "/s26ultra" },
        { title: "Samsung Galaxy S26+", isHeader: false, href: "/s26plus" },
        { title: "Samsung Galaxy S26", isHeader: false, href: "/s26" },
        { title: "Samsung Galaxy S25", isHeader: false, href: "/s25" },
        { title: "Смартфони Xiaomi", isHeader: true, href: "/xiaomi" },
        { title: "Xiaomi 17 Ultra", isHeader: false, href: "/17ultra" },
        { title: "Xiaomi 17", isHeader: false, href: "/17" },
    ],
    col3: [
        { title: "Смартфони Motorola", isHeader: true, href: "/motorola" },
        { title: "Смартфони OPPO", isHeader: true, href: "/oppo" },
        { title: "Мобільні телефони", isHeader: true, href: "/basic-phones" },
        { title: "Аксесуари для смартфонів", isHeader: true, href: "/accessories" },
        { title: "Телефони для дому та офісу", isHeader: true, href: "/office-phones" },
        { title: "Стартові пакети", isHeader: true, href: "/sim-cards" },
    ]
};

export default function CatalogMenu() {
    return (
        <div className="bg-white shadow-xl border-t border-neutral-100 px-8 py-8 w-full">
            <div className="max-w-[1440px] w-full mx-auto grid grid-cols-5 gap-8">

                <div className="flex flex-col gap-1 border-r border-neutral-100 pr-4">
                    {catalogChoise.map((item) => (
                        <Link
                            key={item.id}
                            href={item.href}
                            className="flex items-center gap-4 px-3 py-2.5 rounded-xl hover:bg-neutral-100 transition-colors duration-150 group"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-5 h-5 object-contain shrink-0 opacity-80"
                            />
                            <h3 className="font-futura font-bold text-[15px] text-black leading-tight">
                                {item.title}
                            </h3>
                        </Link>
                    ))}
                </div>

                {Object.values(subCategories).map((column, colIndex) => (
                    <div key={colIndex} className="flex flex-col gap-3">
                        {column.map((sub, itemIndex) => (
                            <Link
                                key={itemIndex}
                                href={sub.href}
                                className={`font-futura transition-colors duration-150 block leading-tight ${sub.isHeader
                                    ? "text-black font-bold text-[16px] hover:text-neutral-600 mt-2 first:mt-0"
                                    : "text-neutral-400 font-medium text-[13px] hover:text-black pl-1"
                                    }`}
                            >
                                {sub.title}
                            </Link>
                        ))}
                    </div>
                ))}

                <img src="/images/BannerCatalog.png" alt="Catalog Ad" className="w-full h-80 object-contain" />

            </div>
        </div>
    );
}