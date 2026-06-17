'use client'
import { useState } from 'react'
import Comments from '@/components/Comments'

const Pictures = [
    "/images/iphonePink.png",
    "/images/iphonePink2.png",
    "/images/iphonePink3.png",
]

const PaymentMethod = [
    { id: 1, name: "Apple Pay", image: "/images/apple_pay.png" },
    { id: 2, name: "Google Pay", image: "/images/Google_Pay.png" },
    { id: 3, name: "24 Private", image: "/images/private_24.png" },
    { id: 4, name: "Mastercard", image: "/images/Mastercard.png" },
    { id: 5, name: "Visa", image: "/images/visa.png" },
]

const colors = [
    { name: 'Блакитний', hex: '#A8C5D9' },
    { name: 'Рожевий', hex: '#F2B8C6' },
    { name: 'Чорний', hex: '#2B2B2B' },
    { name: 'Зелений', hex: '#A8C5A0' },
    { name: 'Жовтий', hex: '#F2D88A' },
]

const series = ['Apple Iphone 15', 'Apple Iphone 15 Plus']
const storage = ['128 ГБ', '256 ГБ', '512 ГБ']

const specs = [
    { label: 'Діагонал дисплея:', value: '6,1"' },
    { label: 'Тип екрану:', value: 'Super Retina XDR' },
    { label: 'Модель процесора:', value: 'Apple A16 Bionic' },
    { label: 'Основна камера:', value: '48+12 Мп' },
    { label: 'Ємність акумулятора:', value: '3349 mAr' },
]

export default function IphonePink() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [selectedSeries, setSelectedSeries] = useState(series[0])
    const [selectedStorage, setSelectedStorage] = useState(storage[1])

    const prev = () => setCurrentIndex((currentIndex - 1 + Pictures.length) % Pictures.length)
    const next = () => setCurrentIndex((currentIndex + 1) % Pictures.length)

    return (
        <div className="max-w-[1440px] w-full mx-auto mt-6 md:mt-10 px-4">
            <div className="flex flex-col md:flex-row gap-6 md:gap-16">

                <div className="flex flex-col">
                    <div className="flex items-center justify-center gap-4 bg-[#FFB800]/50 rounded-[32px] w-full md:w-[500px] h-[320px] md:h-[500px] p-4 md:p-6 relative">
                        <img
                            src={Pictures[currentIndex]}
                            alt="iPhone Pink"
                            className="w-full h-full object-contain"
                        />

                        <button onClick={prev}
                            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#FFB800] flex items-center justify-center text-white font-bold hover:bg-[#e6a602] transition-colors">
                            &lt;
                        </button>

                        <button onClick={next}
                            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#FFB800] flex items-center justify-center text-white font-bold hover:bg-[#e6a602] transition-colors">
                            &gt;
                        </button>
                    </div>

                    <div className="flex md:hidden items-center justify-between gap-3 mt-4">
                        <span className="text-2xl font-bold text-[#FFB800] bg-[#FFF7ED] rounded-xl px-4 py-2">35 999 ₴</span>
                        <button className="flex-1 bg-[#FFB800] text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-[#e6a602] transition-colors">
                            🛒 Купити
                        </button>
                    </div>

                    <div className="flex items-center justify-between text-sm mt-3 md:hidden">
                        <span className="flex items-center gap-1 text-green-600 font-medium">✓ В наявності</span>
                        <span className="text-[#FFB800]">★★★★★</span>
                        <span className="text-gray-500">111</span>
                        <span className="text-gray-400 text-xs">Код: 2600807</span>
                    </div>

                    <div className="md:hidden mt-4">
                        <div className="flex items-center justify-between mb-2">
                            <p className="font-bold text-base">Характеристики</p>
                            <a href="#" className="text-xs text-gray-400">Всі характеристики</a>
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed">
                            {specs.map(s => `${s.label} ${s.value}`).join(' - ')}
                        </p>
                    </div>

                    <div className="md:hidden mt-4">
                        <p className="font-bold text-base mb-2">Інші моделі, кольори</p>
                        <div className="flex gap-2 mb-3">
                            {colors.map(color => (
                                <button key={color.name} className="w-8 h-8 rounded-full border-2 border-gray-200" style={{ backgroundColor: color.hex }} />
                            ))}
                        </div>
                        <div className="flex flex-col gap-2">
                            {series.map(s => (
                                <button key={s} onClick={() => setSelectedSeries(s)}
                                    className={`px-4 py-2 rounded-lg border text-sm text-left transition-colors
                                        ${selectedSeries === s ? 'border-[#FFB800] bg-[#FFF7ED]' : 'border-gray-200'}`}>
                                    {s}
                                </button>
                            ))}
                        </div>
                        <div className="flex gap-2 mt-2">
                            {storage.map(s => (
                                <button key={s} onClick={() => setSelectedStorage(s)}
                                    className={`px-4 py-2 rounded-lg border text-sm transition-colors
                                        ${selectedStorage === s ? 'border-[#FFB800] bg-[#FFF7ED]' : 'border-gray-200'}`}>
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 md:gap-8 mt-6">
                        <div className="hidden md:flex gap-4">
                            {Pictures.map((pic, i) => (
                                <img key={i} src={pic} alt={`iPhone Pink ${i + 1}`}
                                    onClick={() => setCurrentIndex(i)}
                                    className={`w-20 h-20 object-contain rounded-lg cursor-pointer border-2 transition-all
                                        ${i === currentIndex ? 'border-[#FFB800]' : 'border-gray-200 hover:border-[#FFB800]/50'}`}
                                />
                            ))}
                        </div>

                        <p className="text-sm md:text-base text-left">
                            Оплачуйте покупку готівкою, карткою або перерахунком на банківські реквізити (безготівкою)
                        </p>

                        <div className="flex gap-3 md:gap-4 flex-wrap">
                            {PaymentMethod.map((method) => (
                                <span key={method.id} className="w-14 h-8 md:w-18 md:h-10 rounded-full bg-[#FFB800] flex items-center justify-center">
                                    <img src={method.image} alt={method.name} className="w-9 h-9 md:w-12 md:h-12 object-contain" />
                                </span>
                            ))}
                        </div>

                        <p className="text-sm md:text-base text-left">
                            Всі товари мають сертифікати та гарантії від виробника. Повернути їх можна протягом 14 днів після покупки.
                        </p>
                    </div>
                </div>

                <div className="hidden md:flex flex-col gap-6 flex-1">
                    <h1 className="text-3xl font-bold">Смартфон Apple iPhone 15 Pink</h1>

                    <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1 text-green-600 font-medium">✓ В наявності</span>
                        <span className="text-[#FFB800]">★★★★★</span>
                        <span className="text-gray-500">111</span>
                        <span className="text-gray-400">Код: 2600807</span>
                    </div>

                    <div className="bg-[#FFF7ED] rounded-2xl p-6 flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                            <span className="text-3xl font-bold text-[#FFB800]">35 999 ₴</span>
                            <div className="flex gap-2">
                                <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center">♡</button>
                                <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center">⚖</button>
                            </div>
                        </div>
                        <button className="bg-[#FFB800] text-white font-bold py-3 rounded-xl hover:bg-[#e6a602] transition-colors">
                            Купити
                        </button>
                    </div>

                    <div className="bg-[#FFF7ED] rounded-2xl p-6 flex flex-col gap-3">
                        <p className="font-bold text-base">Доставка</p>
                        <div className="flex items-center justify-between">
                            <span className="text-[#FFB800] font-medium">Одеса</span>
                            <span>⌄</span>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-600">
                            <p>До відділення Нова пошта<br />11 липня</p>
                            <span className="font-bold">1₴</span>
                        </div>
                    </div>

                    <div>
                        <p className="font-bold text-base mb-3">Інший колір</p>
                        <div className="flex gap-3">
                            {colors.map(color => (
                                <button key={color.name} className="flex flex-col items-center gap-1">
                                    <span className="w-10 h-10 rounded-full border-2 border-gray-200" style={{ backgroundColor: color.hex }} />
                                    <span className="text-xs text-gray-500">{color.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-8">
                        <div>
                            <p className="font-bold text-base mb-2">Серія</p>
                            <div className="flex gap-2">
                                {series.map(s => (
                                    <button key={s} onClick={() => setSelectedSeries(s)}
                                        className={`px-4 py-2 rounded-lg border text-sm transition-colors
                                            ${selectedSeries === s ? 'border-[#FFB800] bg-[#FFF7ED]' : 'border-gray-200'}`}>
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <p className="font-bold text-base mb-2">Пам'ять</p>
                            <div className="flex gap-2">
                                {storage.map(s => (
                                    <button key={s} onClick={() => setSelectedStorage(s)}
                                        className={`px-4 py-2 rounded-lg border text-sm transition-colors
                                            ${selectedStorage === s ? 'border-[#FFB800] bg-[#FFF7ED]' : 'border-gray-200'}`}>
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between mb-3">
                            <p className="font-bold text-base">Характеристики</p>
                            <a href="#" className="text-sm text-gray-400 hover:text-black">Всі характеристики ›</a>
                        </div>
                        <div className="flex flex-col gap-2">
                            {specs.map(spec => (
                                <div key={spec.label} className="flex justify-between text-sm border-b border-gray-100 pb-2">
                                    <span className="text-gray-500">{spec.label}</span>
                                    <span className="font-medium">{spec.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            <div className="md:hidden bg-[#FFF7ED] rounded-2xl p-6 flex flex-col gap-3 mt-8">
                <p className="font-bold text-base">Доставка</p>
                <div className="flex items-center justify-between">
                    <span className="text-[#FFB800] font-medium">Одеса</span>
                    <span>⌄</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                    <p>До відділення Нова пошта<br />11 липня</p>
                    <span className="font-bold">1₴</span>
                </div>
            </div>

            <Comments />
        </div>
    )
}