'use client'
import { useState } from 'react'

const reviewPhotos = [
    "/images/Rectangle 191.png",
    "/images/Rectangle 192.png",
    "/images/Rectangle 196.png",
    "/images/Rectangle 197.png",
    "/images/Rectangle 198.png",
]

const ratingBreakdown = [
    { stars: 5, count: 3 },
    { stars: 4, count: 2 },
    { stars: 3, count: 0 },
    { stars: 2, count: 0 },
    { stars: 1, count: 1 },
]

const reviews = [
    { id: 1, name: 'Ренат', date: '19 квітня 2026', rating: 5, text: 'все сподобалося! Обслуговують професіонали!' },
    { id: 2, name: 'Богдан', date: '31 березня 2026', rating: 5, text: 'супер телефон, усім задоволен' },
    { id: 3, name: 'Сергій', date: '1 лютого 2026', rating: 5, text: 'Купував як подарунок. Дівчині все сподобалося. Незважаючи на те, що в телефоні частота кадрів 60 Гц, працювати з ним дуже зручно і дискомфорту не викликає.' },
    { id: 4, name: 'Діана', date: '27 грудня 2026', rating: 4, text: 'Користюсь рік. Задоволена телефона. Але батерея слабенька.' },
    { id: 5, name: 'Інна', date: '27 грудня 2026', rating: 4, text: 'Це мій перший айфон, відчувається якісь і зовні і в користуванні. Ніби все налаштувала, але за ніч з\'їло 10% заряду, мене просто уважу як це засмутило. Та і в загальному швидко сідає, хоча в відгуках бачу шо у людей навпаки тримає довго' },
    { id: 6, name: 'Олена', date: '10 травня 2024', rating: 1, text: 'продовжую свої правдиві відгуки... повне розчарування так і залишилось... пройшло трохи більше пів року користування, перестав заряжатися через шнур, везу в сервісний центр. По телефону сказали, що така лажа існує в них, деколи допомагає, якщо скинути телефон до заводських налаштувань... Побачимо, що з цього вийде' },
]

export default function ReviewsSection() {
    const [activeTab, setActiveTab] = useState<'reviews' | 'questions'>('reviews')
    const [starFilter, setStarFilter] = useState<number | null>(null)

    const filteredReviews = starFilter
        ? reviews.filter(r => r.rating === starFilter)
        : reviews

    return (
        <div className="max-w-[1100px] mt-16">

            <h1 className="text-3xl font-bold mb-1">Відгуки та питання</h1>
            <p className="text-[#FFB800] font-medium mb-6">Смартфон Apple Iphone 15 256Gb Pink</p>

            <div className="flex gap-3 mb-6">
                <button onClick={() => setActiveTab('reviews')}
                    className={`px-6 py-3 rounded-full font-medium text-sm transition-colors
                        ${activeTab === 'reviews' ? 'bg-[#FFB800] text-white' : 'border border-gray-300 text-black'}`}>
                    Відгуки (5)
                </button>
                <button onClick={() => setActiveTab('questions')}
                    className={`px-6 py-3 rounded-full font-medium text-sm transition-colors
                        ${activeTab === 'questions' ? 'bg-[#FFB800] text-white' : 'border border-gray-300 text-black'}`}>
                    Питання (0)
                </button>
            </div>

            {activeTab === 'reviews' && (
                <>
                    <div className="bg-gray-50 rounded-2xl px-6 py-5 flex items-center justify-between mb-8">
                        <p className="font-bold text-base">Залишите свій відгук про цей товар</p>
                        <button className="bg-[#FFB800] text-white font-medium px-6 py-3 rounded-full hover:bg-[#e6a602] transition-colors">
                            Залишите відгук
                        </button>
                    </div>

                    <div className="mb-8">
                        <p className="font-bold text-base mb-3">
                            Фотографії покупців <span className="text-[#FFB800]">{reviewPhotos.length}</span>
                        </p>
                        <div className="flex gap-3 overflow-x-auto">
                            {reviewPhotos.map((photo, i) => (
                                <img key={i} src={photo} alt={`review ${i + 1}`}
                                    className="w-24 h-24 rounded-xl object-cover flex-shrink-0" />
                            ))}
                        </div>
                    </div>

                    <div className="border border-gray-200 rounded-2xl p-8 flex items-center justify-center gap-16 mb-6">
                        <div className="flex flex-col items-center">
                            <span className="text-5xl font-bold">4.8</span>
                            <span className="text-[#FFB800] text-xl mt-1">★★★★★</span>
                        </div>

                        <div className="flex flex-col gap-2">
                            {ratingBreakdown.map(row => (
                                <div key={row.stars} className="flex items-center gap-3 text-sm">
                                    <span className="text-[#FFB800] w-20">{'★'.repeat(row.stars)}</span>
                                    <div className="w-40 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-[#FFB800]" style={{ width: `${(row.count / 5) * 100}%` }} />
                                    </div>
                                    <span className="text-gray-500 w-4">{row.count}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-3 mb-8">
                        {[5, 4, 3, 2, 1].map(star => (
                            <button key={star} onClick={() => setStarFilter(starFilter === star ? null : star)}
                                className={`px-4 py-2 rounded-full border font-medium text-sm flex items-center gap-1 transition-colors
                                    ${starFilter === star ? 'border-[#FFB800] bg-[#FFF7ED]' : 'border-gray-300'}`}>
                                <span className="text-[#FFB800]">★</span>{star}
                            </button>
                        ))}
                    </div>

                    <div className="flex flex-col gap-8">
                        {filteredReviews.map(review => (
                            <div key={review.id} className="border-b border-gray-100 pb-6">
                                <div className="flex items-start justify-between mb-2">
                                    <div>
                                        <p className="text-[#FFB800] text-sm">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</p>
                                        <p className="font-bold text-base mt-1">{review.name}</p>
                                        <p className="text-gray-400 text-sm">{review.date}</p>
                                    </div>
                                    <div className="flex flex-col gap-1 text-sm text-gray-400 text-right">
                                        <a href="#" className="hover:text-black transition-colors">Поділитись</a>
                                        <a href="#" className="hover:text-black transition-colors">Відпости</a>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-700 mt-2">{review.text}</p>
                            </div>
                        ))}
                    </div>
                </>
            )}

            {activeTab === 'questions' && (
                <p className="text-gray-500">Тут будуть питання покупців.</p>
            )}

        </div>
    )
}