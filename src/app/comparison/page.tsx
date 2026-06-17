export default function ComparisonPage() {
    return (
        <div className="max-w-[1440px] w-full mx-auto mt-10 px-4 md:px-0">
            <div className="flex items-center justify-center flex-col gap-4 max-md:text-center">

                <h1 className="text-2xl md:text-4xl font-bold">Ваш список порівняння порожній</h1>

                <img src="/images/Rectangle 208.svg" alt="Comparison Image" className="w-full md:w-1000 h-auto object-contain" />

                <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-2">
                    <p className="text-base md:text-lg font-semibold">На сторінках товарів, які сподобалися, натисніть на</p>
                    <span className="bg-[#FFB800] rounded-xl p-2 w-11 h-11 text-white flex justify-center items-center flex-shrink-0 transition-all duration-200 ease-in-out cursor-pointer hover:bg-[#e6a602] active:scale-90">
                        <img src="/icons/material-symbols_balance.svg" alt='balance' />
                    </span>
                </div>

                <p className="text-base md:text-lg font-semibold">Додайте, порівняйте та обирайте краще</p>

                <div className="bg-[#FFB800] rounded-xl p-2 w-full max-w-[208px] md:w-52 h-13 text-white flex justify-center items-center flex-shrink-0 transition-all duration-200 ease-in-out cursor-pointer hover:bg-[#e6a602] active:scale-90">
                    <p className="text-base md:text-lg font-semibold">Додати товари</p>
                </div>

            </div>
        </div>
    )
}