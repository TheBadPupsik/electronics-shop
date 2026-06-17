'use client'
import { useState } from 'react'

export default function CatalogBarPhone() {
    const [open, setOpen] = useState(false)

    const items = [
        { id: 1, name: 'Ноутбуки', hasArrow: false },
        { id: 2, name: 'Відновлені ноутбуки', hasArrow: true },
        { id: 3, name: 'Ноутбуки Asus', hasArrow: true },
        { id: 4, name: 'Ноутбуки Apple', hasArrow: true },
        { id: 5, name: 'Ноутбуки Acer', hasArrow: false },
        { id: 6, name: 'Ноутбуки Lenovo', hasArrow: false },
        { id: 7, name: 'Ноутбуки HP', hasArrow: false },
        { id: 8, name: 'Ноутбуки Dell', hasArrow: true },
        { id: 9, name: 'Аксесуари для ноутбуків', hasArrow: false },
        { id: 10, name: 'Ноутбуки для офісу', hasArrow: false },
        { id: 11, name: 'Стартові пакети', hasArrow: false },
    ]

    return (
        <div className="w-full md:w-72 bg-gray-100 rounded-2xl p-4 flex flex-col gap-3">

            <button onClick={() => setOpen(!open)} className="flex items-center justify-between md:cursor-default">
                <span className="font-bold text-base">Розділи</span>
                <span className={`w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center text-gray-400 transition-transform duration-300 ${open ? 'rotate-180' : ''} md:hidden`}>
                    ⌄
                </span>
                <span className="hidden md:flex w-8 h-8 rounded-full border border-gray-400 items-center justify-center text-gray-400">
                    ↑
                </span>
            </button>

            <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2 gap-2">
                <input
                    type="text"
                    placeholder="Пошук"
                    className="flex-1 bg-transparent outline-none text-sm placeholder-gray-400"
                />
                <img src="/icons/magnifying glass (1).svg" alt="searchIcon" className="w-4 h-4 text-gray-500" />
            </div>

            <ul className={`flex flex-col overflow-hidden transition-all duration-300
                md:max-h-none md:opacity-100
                ${open ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0 md:max-h-none md:opacity-100'}`}>
                {items.map(item => (
                    <li key={item.id}>
                        <a href="#" className="flex items-center justify-between py-2 text-sm hover:font-semibold transition-all duration-150">
                            <span>{item.name}</span>
                            {item.hasArrow && (
                                <span className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">
                                    ›
                                </span>
                            )}
                        </a>
                    </li>
                ))}
            </ul>

        </div>
    )
}