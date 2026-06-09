export default function Footer() {
    return (
        <footer className="bg-gray-100 text-center py-6 mt-5 text-gray-500">
            <div className="max-w-[1440px] bg-[#D9D9D9] w-full p-6 flex justify-center items-center gap-4 mx-auto">
                
                <img src='' alt='' className="w-12 h-12 bg-gray-300" />

                <div className="flex flex-col text-left">
                    <h2 className="text-4xl font-bold text-gray-800">Скануй QR code та встановлюй додаток</h2>
                    <p>Доступно для завантаження на платформах: Android, iOS</p>
                </div>
            </div>

            <div className="max-w-[1440px] w-full flex flex-col md:flex-row justify-between items-start gap-8 mx-auto mt-10">
                <div className="flex flex-col text-left flex-1 min-w-[250px]">
                    <h2 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                        Доставка
                    </h2>
                    <p className="text-sm text-gray-500 leading-relaxed">
                        Самовивіз із магазину “Cursor”, доставка за адресою або у відділення “Нова Пошта” і “Meest”.
                    </p>
                </div>

                <div className="flex flex-col text-left flex-1 min-w-[250px]">
                    <h2 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                        Гарантія
                    </h2>
                    <p className="text-sm text-gray-500 leading-relaxed">
                        Сертифікована техніка з офіційною гарантією від виробника.
                    </p>
                </div>

                <div className="flex flex-col text-left flex-1 min-w-[250px]">
                    <h2 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                        Оплата
                    </h2>
                    <p className="text-sm text-gray-500 leading-relaxed">
                        Оплатити покупку можливо готівкою, карткою чи безготівковим розрахунком.
                    </p>
                </div>

                <div className="flex flex-col text-left flex-1 min-w-[250px]">
                    <h2 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                        Повернення
                    </h2>
                    <p className="text-sm text-gray-500 leading-relaxed">
                        Повернення товару протягом 14 днів після покупки відповідно до чинного законодавства.
                    </p>
                </div>
            </div>

            <div className="max-w-[1440px] w-full mx-auto mt-10">

                <div className="flex flex-row justify-between items-start gap-8">

                    <div className="bg-[#8a9bb5] rounded-2xl p-6 w-80 flex flex-col gap-3">
                        <div>
                            <p className="text-white font-bold text-lg">Підписуйтесь на знижки!</p>
                            <p className="text-white/70 text-sm">Не турбуйтесь, ми не спамимо</p>
                        </div>
                        <input
                            type="email"
                            placeholder="email@email.com"
                            className="w-full bg-[#f5f0e8] rounded-lg px-4 py-3 text-sm outline-none placeholder-gray-400"
                        />
                        <button className="w-full bg-black text-white rounded-lg py-3 text-sm font-medium hover:bg-gray-800 transition">
                            Відправити
                        </button>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="font-bold text-base mb-1">Cursor</p>
                        {['Про компанію', 'Магазини', 'Контакти', 'Прес-центр', 'Робота в CURSOR', 'Безпека та застереження', 'Тендер', 'Партнерам', 'Каталог товарів', 'CURSOR допомагає'].map(item => (
                            <a key={item} href="#" className="text-gray-400 text-sm hover:text-black transition">{item}</a>
                        ))}
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="font-bold text-base mb-1">Допомога покупцеві</p>
                        {['Центр допомоги клієнтам', 'Знайти замовлення', 'Умови доставки', 'Обмін і повернення товару', 'Гарантія', 'Правила користування сайтом'].map(item => (
                            <a key={item} href="#" className="text-gray-400 text-sm hover:text-black transition">{item}</a>
                        ))}
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="font-bold text-base mb-1">Консультація</p>
                        <div className="flex items-center gap-2">
                            <span>📞</span>
                            <span className="font-bold text-2xl">0-800-303-505</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>📞</span>
                            <span className="font-bold text-2xl">0-800-600-506</span>
                        </div>
                        <p className="text-gray-400 text-sm">Безкоштовно по Україні</p>
                        <p className="text-gray-400 text-sm">08:00 - 21:00 Пн-Нд</p>
                        <div className="flex items-center gap-2 mt-1">
                            <span>✉️</span>
                            <a href="mailto:info@cursor.ua" className="text-gray-400 text-sm hover:text-black transition">info@cursor.ua</a>
                        </div>
                        <div className="flex flex-col gap-1 mt-2">
                            {['Центр допомоги', 'Чат на сайті'].map(item => (
                                <a key={item} href="#" className="text-gray-400 text-sm hover:text-black transition">{item}</a>
                            ))}
                        </div>
                        <div className="flex flex-col gap-1 mt-1">
                            {['Telegram', 'Viber', 'Messenger', 'Apple Messages'].map(item => (
                                <a key={item} href="#" className="text-gray-400 text-sm hover:text-black transition flex items-center gap-2">
                                    <span>•</span> {item}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-10 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-500">© Всі права захищені ТОВ «КУРСОР», 2010–2026</p>

                    <div className="flex items-center gap-4">
                        <a href="#" className="hover:opacity-70 transition">
                            <img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6" />
                        </a>
                        <a href="#" className="hover:opacity-70 transition">
                            <img src="/icons/facebook.svg" alt="Facebook" className="w-6 h-6" />
                        </a>
                        <a href="#" className="hover:opacity-70 transition">
                            <img src="/icons/youtube.svg" alt="YouTube" className="w-6 h-6" />
                        </a>
                        <a href="#" className="hover:opacity-70 transition">
                            <img src="/icons/telegram.svg" alt="Telegram" className="w-6 h-6" />
                        </a>
                        <a href="#" className="hover:opacity-70 transition">
                            <img src="/icons/viber.svg" alt="Viber" className="w-6 h-6" />
                        </a>
                    </div>
                </div>

            </div>

        </footer>
    );
}