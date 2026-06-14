type CartProps = {
    onClose: () => void
}

export default function Cart({ onClose }: CartProps) {
    return (
        <div className="w-[800px] h-[400px] flex justify-center items-center p-10 border-2 border-[#FFB800] bg-[#FFF7ED] rounded-2xl relative shadow-xl">

            <button
                onClick={onClose}
                className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#FFB800]/20 transition-colors text-gray-500 hover:text-black text-xl"
            >
                ✕
            </button>

            <div className="flex flex-col items-center justify-center py-10">
                <h1 className="text-xl text-[#FFB800] font-bold mb-4">Ваш кошик порожній</h1>
                <p className="text-gray-600 mb-6 text-sm text-center">Додайте товари до кошика, щоб побачити їх тут.</p>
                <p className="text-xs font-semibold">Акціонні пропозиції</p>
            </div>
        </div>
    )
}