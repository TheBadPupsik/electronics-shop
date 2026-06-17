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
        <div className="max-w-[1100px] mt-10 md:mt-16">

            <h1 className="text-xl md:text-3xl font-bold mb-1">Відгуки та питання</h1>
            <p className="text-[#FFB800] font-medium mb-4 md:mb-6 text-sm md:text-base">Смартфон Apple Iphone 15 256Gb Pink</p>

            <div className="flex gap-2 md:gap-3 mb-4 md:mb-6">
                <button onClick={() => setActiveTab('reviews')}
                    className={`flex-1 md:flex-none px-4 md:px-6 py-2.5 md:py-3 rounded-full font-medium text-xs md:text-sm transition-colors
                        ${activeTab === 'reviews' ? 'bg-[#FFB800] text-white' : 'border border-gray-300 text-black'}`}>
                    Відгуки (5)
                </button>
                <button onClick={() => setActiveTab('questions')}
                    className={`flex-1 md:flex-none px-4 md:px-6 py-2.5 md:py-3 rounded-full font-medium text-xs md:text-sm transition-colors
                        ${activeTab === 'questions' ? 'bg-[#FFB800] text-white' : 'border border-gray-300 text-black'}`}>
                    Питання (2)
                </button>
            </div>

            {activeTab === 'reviews' && (
                <>
                    <button className="w-full bg-[#FFB800] text-white font-medium px-6 py-3 rounded-full hover:bg-[#e6a602] transition-colors mb-6 md:mb-8">
                        Залишите відгук
                    </button>

                    <div className="mb-6 md:mb-8">
                        <p className="font-bold text-sm md:text-base mb-3">
                            Фотографії покупців <span className="text-[#FFB800]">{reviewPhotos.length}</span>
                        </p>
                        <div className="flex gap-2 md:gap-3 overflow-x-auto">
                            {reviewPhotos.map((photo, i) => (
                                <img key={i} src={photo} alt={`review ${i + 1}`}
                                    className="w-16 h-16 md:w-24 md:h-24 rounded-xl object-cover flex-shrink-0" />
                            ))}
                        </div>
                    </div>

                    <div className="border border-gray-200 rounded-2xl p-4 md:p-8 flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-16 mb-6">
                        <div className="flex flex-col items-center">
                            <span className="text-4xl md:text-5xl font-bold">4.8</span>
                            <span className="text-gray-400 text-xs">(5 відгуків)</span>
                            <span className="text-[#FFB800] text-lg md:text-xl mt-1">★★★★★</span>
                        </div>

                        <div className="flex flex-col gap-2 w-full md:w-auto">
                            {ratingBreakdown.map(row => (
                                <div key={row.stars} className="flex items-center gap-3 text-sm">
                                    <div className="flex-1 md:w-40 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-[#FFB800]" style={{ width: `${(row.count / 5) * 100}%` }} />
                                    </div>
                                    <span className="text-gray-500 w-4 text-right">{row.count}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-2 mb-6 md:mb-8 overflow-x-auto">
                        {[5, 4, 3, 2, 1].map(star => (
                            <button key={star} onClick={() => setStarFilter(starFilter === star ? null : star)}
                                className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full border font-medium text-xs md:text-sm flex items-center gap-1 transition-colors flex-shrink-0
                                    ${starFilter === star ? 'border-[#FFB800] bg-[#FFF7ED]' : 'border-gray-300'}`}>
                                <span className="text-[#FFB800]">★</span>{star}
                            </button>
                        ))}
                    </div>

                    <div className="flex flex-col gap-6 md:gap-8">
                        {filteredReviews.map(review => (
                            <div key={review.id} className="border-b border-gray-100 pb-5 md:pb-6">
                                <div className="flex items-start justify-between mb-2">
                                    <div>
                                        <p className="text-[#FFB800] text-sm">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</p>
                                        <p className="font-bold text-sm md:text-base mt-1">{review.name}</p>
                                        <p className="text-gray-400 text-xs md:text-sm">{review.date}</p>
                                    </div>
                                    <div className="flex flex-col gap-1 text-xs md:text-sm text-gray-400 text-right">
                                        <a href="#" className="hover:text-black transition-colors">Поділитись</a>
                                        <a href="#" className="hover:text-black transition-colors">Відпости</a>
                                    </div>
                                </div>
                                <p className="text-xs md:text-sm text-gray-700 mt-2">{review.text}</p>
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