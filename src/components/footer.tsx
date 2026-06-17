export default function Footer() {
    return (
        <footer className="bg-gray-100 text-center py-6 mt-5 text-gray-500">

            <div className="max-w-[1440px] bg-[#FFB800] w-full p-4 md:p-6 flex flex-col md:flex-row justify-center items-center gap-4 mx-auto">
                <video src="/Untitled_Artwork.mp4" autoPlay muted loop className="w-32 h-32 md:w-55 md:h-55" />

                <div className="flex flex-col text-center md:text-left">
                    <h2 className="text-xl md:text-4xl font-bold text-gray-800">Скануй QR code та встановлюй додаток</h2>
                    <p className="text-sm md:text-base">Доступно для завантаження на платформах: Android, iOS</p>
                </div>

                <img src='/images/QR_code_for_mobile_English_Wikipedia.svg' alt='qr_code' className="hidden md:block w-50 h-50 bg-white" />
            </div>

            <div className="max-w-[1440px] w-full flex flex-col md:flex-row justify-between items-start gap-6 md:gap-8 mx-auto mt-8 md:mt-10 px-4">
                <div className="flex flex-col text-left flex-1 min-w-[250px]">
                    <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Доставка</h2>
                    <p className="text-sm text-gray-500 leading-relaxed">
                        Самовивіз із магазину "Cursor", доставка за адресою або у відділення "Нова Пошта" і "Meest".
                    </p>
                </div>
                <div className="flex flex-col text-left flex-1 min-w-[250px]">
                    <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Гарантія</h2>
                    <p className="text-sm text-gray-500 leading-relaxed">
                        Сертифікована техніка з офіційною гарантією від виробника.
                    </p>
                </div>
                <div className="flex flex-col text-left flex-1 min-w-[250px]">
                    <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Оплата</h2>
                    <p className="text-sm text-gray-500 leading-relaxed">
                        Оплатити покупку можливо готівкою, карткою чи безготівковим розрахунком.
                    </p>
                </div>
                <div className="flex flex-col text-left flex-1 min-w-[250px]">
                    <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Повернення</h2>
                    <p className="text-sm text-gray-500 leading-relaxed">
                        Повернення товару протягом 14 днів після покупки відповідно до чинного законодавства.
                    </p>
                </div>
            </div>

            <div className="max-w-[1440px] w-full mx-auto mt-8 md:mt-10 px-4">

                <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-8">

                    <div className="bg-[#FFF7ED] md:bg-[#FFB800] rounded-2xl p-6 w-full md:w-80 flex flex-col gap-3">
                        <div>
                            <p className="text-gray-800 md:text-white font-bold text-lg">Підписуйтесь на знижки!</p>
                            <p className="text-gray-500 md:text-white/70 text-sm">Не турбуйтесь, ми не спамимо</p>
                        </div>
                        <input
                            type="email"
                            placeholder="email@email.com"
                            className="w-full bg-white md:bg-[#f5f0e8] border border-gray-200 md:border-none rounded-lg px-4 py-3 text-sm outline-none placeholder-gray-400"
                        />
                        <button className="w-full bg-black text-white rounded-lg py-3 text-sm font-medium hover:bg-gray-800 transition">
                            Відправити
                        </button>
                        <img src="/images/Untitled_Artwork 4 1.png" alt="Newsletter" className="w-full h-full object-contain" />
                    </div>

                    <div className="flex flex-col md:flex-row gap-0 md:gap-8 w-full md:w-auto">

                        <div className="border-b border-gray-200 md:border-none py-4 md:py-0">
                            <div className="flex items-center justify-between md:block">
                                <p className="font-bold text-base mb-0 md:mb-1">Cursor</p>
                                <span className="md:hidden">⌄</span>
                            </div>
                            <div className="hidden md:flex flex-col gap-2 mt-1">
                                {['Про компанію', 'Магазини', 'Контакти', 'Прес-центр', 'Робота в CURSOR', 'Безпека та застереження', 'Тендер', 'Партнерам', 'Каталог товарів', 'CURSOR допомагає'].map(item => (
                                    <a key={item} href="#" className="text-gray-400 text-sm hover:text-black transition">{item}</a>
                                ))}
                            </div>
                        </div>

                        <div className="border-b border-gray-200 md:border-none py-4 md:py-0">
                            <div className="flex items-center justify-between md:block">
                                <p className="font-bold text-base mb-0 md:mb-1">Допомога покупцеві</p>
                                <span className="md:hidden">⌄</span>
                            </div>
                            <div className="hidden md:flex flex-col gap-2 mt-1">
                                {['Центр допомоги клієнтам', 'Знайти замовлення', 'Умови доставки', 'Обмін і повернення товару', 'Гарантія', 'Правила користування сайтом'].map(item => (
                                    <a key={item} href="#" className="text-gray-400 text-sm hover:text-black transition">{item}</a>
                                ))}
                            </div>
                        </div>

                        <div className="border-b border-gray-200 md:border-none py-4 md:py-0 md:hidden">
                            <div className="flex items-center justify-between">
                                <p className="font-bold text-base">Наші переваги</p>
                                <span>⌄</span>
                            </div>
                        </div>

                        <div className="border-b border-gray-200 md:border-none py-4 md:py-0 md:hidden">
                            <div className="flex items-center justify-between">
                                <p className="font-bold text-base">Категорії</p>
                                <span>⌄</span>
                            </div>
                        </div>

                    </div>

                    <div className="flex flex-col gap-2 text-left mt-4 md:mt-0">
                        <p className="font-bold text-base mb-1">Консультація</p>
                        <div className="flex items-center gap-2">
                            <img src='/icons/line-md_phone-filled.svg' alt='phone' className="w-5 h-5" />
                            <span className="font-bold text-xl md:text-2xl">0-800-303-505</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src='/icons/line-md_phone-filled.svg' alt='phone' className="w-5 h-5" />
                            <span className="font-bold text-xl md:text-2xl">0-800-600-506</span>
                        </div>
                        <p className="text-gray-400 text-sm">Безкоштовно по Україні</p>
                        <p className="text-gray-400 text-sm mb-2">08:00 - 21:00 Пн-Нд</p>
                        <div className="flex items-center gap-2">
                            <img src='/icons/Email.svg' alt='email' className="w-5 h-5" />
                            <a href="mailto:info@cursor.ua" className="text-gray-400 text-sm hover:text-black transition">info@cursor.ua</a>
                        </div>

                        <div className="flex flex-col gap-2 mt-3 md:hidden">
                            <a href="#" className="border border-[#FFB800] rounded-full text-center py-2.5 text-sm font-medium">Центр допомоги</a>
                            <a href="#" className="border border-[#FFB800] rounded-full text-center py-2.5 text-sm font-medium">Чат на сайту</a>
                            <a href="#" className="border border-[#FFB800] rounded-full text-center py-2.5 text-sm font-medium flex items-center justify-center gap-2">Telegram</a>
                            <a href="#" className="border border-[#FFB800] rounded-full text-center py-2.5 text-sm font-medium flex items-center justify-center gap-2">Viber</a>
                            <a href="#" className="border border-[#FFB800] rounded-full text-center py-2.5 text-sm font-medium flex items-center justify-center gap-2">Messenger</a>
                            <a href="#" className="border border-[#FFB800] rounded-full text-center py-2.5 text-sm font-medium flex items-center justify-center gap-2">Apple Messages</a>
                        </div>

                        <div className="hidden md:flex flex-col gap-1 mt-2">
                            <a href="#" className="text-gray-400 text-sm hover:text-black transition">Центр допомоги</a>
                            <a href="#" className="text-gray-400 text-sm hover:text-black transition">Чат на сайті</a>
                        </div>
                        <div className="hidden md:flex flex-col gap-1 mt-1">
                            <a href="#" className="text-gray-400 text-sm hover:text-black transition flex items-center gap-2"><span>•</span> Telegram</a>
                            <a href="#" className="text-gray-400 text-sm hover:text-black transition flex items-center gap-2"><span>•</span> Viber</a>
                            <a href="#" className="text-gray-400 text-sm hover:text-black transition flex items-center gap-2"><span>•</span> Messenger</a>
                            <a href="#" className="text-gray-400 text-sm hover:text-black transition flex items-center gap-2"><span>•</span> Apple Messages</a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between mt-8 md:mt-10 pt-6 border-t border-gray-200 gap-4">
                    <p className="text-sm text-gray-500 order-2 md:order-1">© Всі права захищені ТОВ «КУРСОР», 2010–2026</p>

                    <div className="flex items-center gap-4 order-1 md:order-2">
                        <a href="#" className="hover:opacity-70 transition">
                            <img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6" />
                        </a>
                        <a href="#" className="hover:opacity-70 transition">
                            <img src="/icons/facebook F.svg" alt="Facebook" className="w-6 h-6" />
                        </a>
                        <a href="#" className="hover:opacity-70 transition">
                            <img src="/icons/youtube.svg" alt="YouTube" className="w-6 h-6" />
                        </a>
                        <a href="#" className="hover:opacity-70 transition">
                            <img src="/icons/Telegram App.svg" alt="Telegram App" className="w-6 h-6" />
                        </a>
                        <a href="#" className="hover:opacity-70 transition">
                            <img src="/icons/Ringer Volume.svg" alt="Viber" className="w-6 h-6" />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    )
}