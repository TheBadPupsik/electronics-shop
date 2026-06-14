import Accordion from '@/components/Accordion'

export default function ProfilePage() {
    return (
        <div className="max-w-[1440px] w-full mx-auto mt-10">

            <Accordion title="Мій аккаунт Cursor">
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="font-bold text-base mb-2">Мій аккаунт Cursor</h3>
                        <div className="flex flex-row items-start gap-8 text-sm">
                            <div className="flex flex-col">
                                <p className="text-gray-500">Логін (телефон)</p>
                                <p className="font-medium">+38 (068) 087 07 51</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-gray-500">Прізвище</p>
                                <p className="font-medium">Кішковіч</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-gray-500">Ім'я</p>
                                <p className="font-medium">Мафаня</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-gray-500">По батькові</p>
                                <p className="font-medium">Мишковіч</p>
                            </div>
                        </div>
                        <button className="mt-4 bg-[#FFB800] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#e6a602] transition-colors">
                            Редагувати
                        </button>
                    </div>
                    <img src="/images/profileAva.png" alt="Profile Image" className="w-25 h-25 rounded-full bg-orange-300" />
                </div>
            </Accordion>

            <Accordion title="Особисті данні">
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="font-bold text-base mb-2">Особисті данні</h3>
                        <div className="grid grid-cols-3 gap-x-8 text-sm">
                            <div>
                                <p className="text-gray-500">Дата народження</p>
                                <p className="font-medium">12.08.2002</p>
                            </div>
                            <div>
                                <p className="text-gray-500">Стать</p>
                                <p className="font-medium">Чоловік</p>
                            </div>
                        </div>
                        <button className="mt-4 bg-[#FFB800] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#e6a602] transition-colors">
                            Редагувати
                        </button>
                    </div>
                </div>
            </Accordion>

            <Accordion title="Мої отримувачі замовлень">
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="font-bold text-base mb-2">Мої отримувачі замовлень</h3>

                        <button className="mt-4 bg-[#FFB800] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#e6a602] transition-colors">
                            Редагувати
                        </button>
                    </div>
                </div>
            </Accordion>

            <Accordion title="Контакти">
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="font-bold text-base mb-2">Контакти</h3>
                        <div className="flex flex-row items-start gap-8 text-sm">
                            <div className="flex flex-col">
                                <p className="text-gray-500">Електронна пошта (логін)</p>
                                <p className="font-medium">mafanya@gmail.com</p>
                            </div>
                        </div>
                        <button className="mt-4 bg-[#FFB800] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#e6a602] transition-colors">
                            Редагувати
                        </button>
                    </div>
                </div>
            </Accordion>

            <Accordion title="Адреса доставки">
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="font-bold text-base mb-2">Адреса доставки</h3>

                        <div className="flex flex-row items-start gap-8 text-sm">
                            <div className="flex flex-col">
                                <p className="text-gray-500">Країна</p>
                                <p className="font-medium">Україна</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-gray-500">Місто</p>
                                <p className="font-medium">Одеса</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-gray-500">Адреса</p>
                                <p className="font-medium">вул. Садова, буд.7</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-gray-500">Поштовий індекс</p>
                                <p className="font-medium">06500</p>
                            </div>
                        </div>
                        <button className="mt-4 bg-[#FFB800] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#e6a602] transition-colors">
                            Редагувати
                        </button>
                    </div>
                </div>
            </Accordion>

        </div>
    )
}