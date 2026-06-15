'use client'
import { useState } from 'react'

const menuItems = [
    { title: 'Мої замовлення', href: '/orders' },
    { title: 'Гаманець', href: '/wallet' },
    { title: 'Обрані товари', href: '/favorites' },
    { title: 'Історія бонусів', href: '/bonuses' },
    { title: 'Історія коммунікацій', href: '/communications' },
    { title: 'Ремонт', href: '/repair' },
    { title: 'Персональні данні', href: '/personal' },
    { title: 'Відгуки та питання', href: '/reviews' },
]

export default function FavoritePage() {
    const [activeTab, setActiveTab] = useState(0)
    const balance = 0

    return (
        <div className="max-w-[1440px] w-full mx-auto mt-10 px-4">
            <div className="flex gap-16">

                <div className="flex flex-col gap-6 w-64 flex-shrink-0">

                    <div className="flex items-center gap-4">
                        <img src="/images/profileAva.png" alt="avatar" className="w-20 h-20 rounded-full object-cover bg-[#FFB800]" />
                        <div>
                            <p className="font-semibold text-base">Номер телефону</p>
                            <p className="text-sm text-gray-500">+38 (068) 087 07 51</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                            <span className="text-[#FFB800] text-2xl font-bold">$</span>
                        </div>
                        <div>
                            <p className="font-bold text-lg">На рахунку</p>
                            <p className="text-[#FFB800] font-bold text-base">{balance}₴</p>
                        </div>
                    </div>

                    <nav className="flex flex-col gap-4 mt-4">
                        {menuItems.map(item => (
                            <a key={item.href} href={item.href}
                                className="font-bold text-base hover:text-[#FFB800] transition-colors">
                                {item.title}
                            </a>
                        ))}
                    </nav>
                </div>

                <div className="flex-1">
                    <h1 className="text-2xl font-bold mb-6">Обранні товари</h1>

                    <div className="flex gap-3 mb-8">
                        {['Вибрані товари (0)', 'Очікувані товари (0)'].map((tab, i) => (
                            <button key={i} onClick={() => setActiveTab(i)}
                                className={`px-5 py-2 rounded-full font-medium text-sm transition-colors
                                    ${activeTab === i
                                        ? 'bg-[#FFB800] text-white'
                                        : 'border border-gray-300 text-black hover:border-[#FFB800]'
                                    }`}>
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-4 cursor-pointer group">
                        <div className="w-12 h-12 bg-[#FFB800] rounded-lg flex items-center justify-center group-hover:bg-[#e6a602] transition-colors">
                            <span className="text-white text-2xl font-bold">+</span>
                        </div>
                        <p className="font-bold text-base">Створити новий список</p>
                    </div>
                </div>

            </div>
        </div>
    )
}