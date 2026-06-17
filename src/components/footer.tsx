export default function Footer() {
    return (
        <footer className="bg-white md:bg-gray-100 py-6 mt-5 text-gray-500">
            <div className="max-w-[1440px] w-full mx-auto px-4 md:px-6">

                <div className="block md:hidden bg-[#FFB800] rounded-3xl p-6 text-center shadow-sm w-full max-w-sm mx-auto mb-6">
                    <h2 className="text-white font-bold text-2xl mb-4 leading-tight">
                        Встановлюй додаток
                    </h2>
                    <div className="flex justify-center mb-6">
                        <video
                            src="/Untitled_Artwork.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-58 h-58 object-contain"
                        />
                    </div>
                    <a
                        href="https://www.apple.com/app-store/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 bg-black text-white rounded-xl py-3 px-4 hover:bg-neutral-900 transition w-full"
                    >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.21.67-2.93 1.49-.63.73-1.18 1.87-1.03 2.97 1.12.09 2.27-.57 2.97-1.4z" />
                        </svg>
                        <div className="text-left leading-tight">
                            <p className="text-[10px] uppercase text-neutral-400">Download on the</p>
                            <p className="text-sm font-semibold -mt-0.5">App Store</p>
                        </div>
                    </a>
                </div>

                <div className="hidden md:flex justify-center items-center bg-[#FFB800] md:rounded-2xl w-full p-6 flex-row gap-8 shadow-sm mb-10">
                    <video
                        src="/Untitled_Artwork.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-50 h-50 object-contain"
                    />
                    <div className="flex flex-col text-left text-gray-800">
                        <h2 className="text-3xl font-extrabold leading-tight">
                            Скануй QR code<br />та встановлюй додаток
                        </h2>
                        <p className="text-sm text-gray-700 mt-2 font-medium">
                            Доступно для завантаження на платформах: Android, iOS
                        </p>
                    </div>
                    <img
                        src='/images/QR_code_for_mobile_English_Wikipedia.svg'
                        alt='qr_code'
                        className="w-36 h-36 bg-white p-3 rounded-2xl shadow-inner select-none pointer-events-none"
                    />
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-8 mt-4 md:mt-10">

                    <div className="bg-[#FFF7ED] rounded-3xl p-6 w-full md:w-80 flex flex-col gap-3 text-left">
                        <div>
                            <p className="text-gray-800 font-bold text-base">Підписуйтесь на знижки!</p>
                            <p className="text-gray-500 text-xs mt-1">Не турбуйтесь, ми не спамимо</p>
                        </div>
                        <input
                            type="email"
                            placeholder="email@email.com"
                            className="w-full bg-white border border-gray-100 rounded-xl px-4 py-3 text-sm outline-none placeholder-gray-400 text-amber-500"
                        />
                        <button className="w-full bg-neutral-800 text-white rounded-xl py-3 text-sm font-medium hover:bg-black transition">
                            Відправити
                        </button>
                        <div className="flex justify-center mt-2">
                            <img src="/images/Untitled_Artwork 4 1.png" alt="Newsletter" className="w-48 h-auto object-contain" />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-3 md:gap-8 w-full md:w-auto flex-1 md:justify-center px-1 md:px-0">

                        <div className="w-full md:w-auto bg-[#FFF7ED] md:bg-transparent rounded-2xl px-5 py-4 md:p-0 text-left">
                            <p className="font-bold text-gray-800 text-base mb-1">Cursor</p>
                            <div className="hidden md:flex flex-col gap-2.5 mt-3">
                                {['Про компанію', 'Магазини', 'Контакти', 'Прес-центр', 'Робота в CURSOR', 'Безпека та застереження', 'Тендер', 'Партнерам', 'Каталог товарів', 'CURSOR допомагає'].map(item => (
                                    <a key={item} href="#" className="text-gray-400 text-sm hover:text-black transition">{item}</a>
                                ))}
                            </div>
                        </div>

                        <div className="w-full md:w-auto bg-[#FFF7ED] md:bg-transparent rounded-2xl px-5 py-4 md:p-0 text-left">
                            <p className="font-bold text-gray-800 text-base mb-1">Допомога покупцеві</p>
                            <div className="hidden md:flex flex-col gap-2.5 mt-3">
                                {['Центр допомоги клієнтам', 'Знайти замовлення', 'Умови доставки', 'Обмін і повернення товару', 'Гарантія', 'Правила користування сайтом'].map(item => (
                                    <a key={item} href="#" className="text-gray-400 text-sm hover:text-black transition">{item}</a>
                                ))}
                            </div>
                        </div>

                        <div className="w-full md:w-auto bg-[#FFF7ED] md:bg-transparent rounded-2xl px-5 py-4 md:p-0 text-left">
                            <p className="font-bold text-gray-800 text-base mb-1">Наші переваги</p>
                        </div>

                        <div className="w-full md:w-auto bg-[#FFF7ED] md:bg-transparent rounded-2xl px-5 py-4 md:p-0 text-left">
                            <p className="font-bold text-gray-800 text-base mb-1">Категорії</p>
                        </div>

                    </div>

                    <div className="bg-[#FFF7ED] md:bg-transparent rounded-3xl p-6 md:p-0 flex flex-col gap-2 text-left w-full md:w-auto">
                        <p className="font-bold text-gray-800 text-base mb-1">Консультація</p>
                        <div className="flex flex-col gap-1">
                            <span className="font-extrabold text-2xl md:text-3xl text-gray-900 tracking-tight">0-800-303-505</span>
                            <span className="font-extrabold text-2xl md:text-3xl text-gray-900 tracking-tight">0-800-600-506</span>
                        </div>
                        <p className="text-gray-500 text-xs mt-1">Безкоштовно по Україні</p>
                        <p className="text-gray-500 text-xs mb-3">08:00 - 21:00 Пн-Нд</p>
                        <div className="flex items-center gap-2 mb-4">
                            <img src='/icons/Email.svg' alt='email' className="w-4 h-4 text-gray-800" />
                            <a href="mailto:info@cursor.ua" className="text-gray-800 font-medium text-sm hover:underline">info@cursor.ua</a>
                        </div>

                        <div className="flex flex-col gap-2.5 w-full md:hidden">
                            {['Центр допомоги', 'Чат на сайті', 'Telegram', 'Viber', 'Messenger', 'Apple Messages'].map((label) => (
                                <a
                                    key={label}
                                    href="#"
                                    className="border border-[#FFB800] bg-white text-gray-800 rounded-xl text-center py-3 text-sm font-semibold transition"
                                >
                                    {label}
                                </a>
                            ))}
                        </div>

                        <div className="hidden md:flex flex-col gap-1 mt-2">
                            <a href="#" className="text-gray-400 text-sm hover:text-black transition">Центр допомоги</a>
                            <a href="#" className="text-gray-400 text-sm hover:text-black transition">Чат на сайті</a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between mt-8 md:mt-12 pt-6 border-t border-gray-100 gap-5">

                    <div className="flex items-center justify-center gap-4 order-1 md:order-2 w-full md:w-auto">
                        {['instagram', 'facebook F', 'youtube', 'Telegram App', 'Ringer Volume'].map((icon) => (
                            <a
                                key={icon}
                                href="#"
                                className="w-12 h-12 bg-[#FFF7ED] md:bg-transparent rounded-full flex items-center justify-center hover:opacity-80 transition"
                            >
                                <img src={`/icons/${icon}.svg`} alt={icon} className="w-5 h-5 object-contain" />
                            </a>
                        ))}
                    </div>

                    <p className="text-xs font-bold text-gray-900 order-2 md:order-1 text-center md:text-left mt-2 md:mt-0">
                        © Всі права захищені ТОВ «КУРСОР», 2010–2026
                    </p>
                </div>

            </div>
        </footer>
    )
}