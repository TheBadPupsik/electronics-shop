export default function CatalogBarPhone() {
    const items = [
        { id: 1, name: 'Смартфони', hasArrow: false },
        { id: 2, name: 'Відновлені смартфони', hasArrow: true },
        { id: 3, name: 'Смартфони Apple', hasArrow: true },
        { id: 4, name: 'Смартфони Samsung', hasArrow: true },
        { id: 5, name: 'Смартфони Xiaomi', hasArrow: false },
        { id: 6, name: 'Смартфони Motorola', hasArrow: false },
        { id: 7, name: 'Смартфони OPPO', hasArrow: false },
        { id: 8, name: 'Мобільні телефони', hasArrow: true },
        { id: 9, name: 'Аксесуари для смартфонів', hasArrow: false },
        { id: 10, name: 'Телефони для дому та офісу', hasArrow: false },
        { id: 11, name: 'Стартові пакети', hasArrow: false },
    ]

    return (
        <div className="w-72 bg-gray-100 rounded-2xl p-4 flex flex-col gap-3">

            <div className="flex items-center justify-between">
                <span className="font-bold text-base">Розділи</span>
                <button className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center text-gray-400">
                    ↑
                </button>
            </div>

            <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2 gap-2">
                <input
                    type="text"
                    placeholder="Пошук"
                    className="flex-1 bg-transparent outline-none text-sm placeholder-gray-400"
                />
                <span className="text-gray-400 text-sm">🔍</span>
            </div>

            <ul className="flex flex-col">
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