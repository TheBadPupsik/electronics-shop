export default function Header() {
    return (
        <header className="bg-white shadow px-8 py-4 flex justify-center items-center w-full">
            <div className="max-w-[1440px] w-full flex justify-center items-center">

                <nav className="flex gap-6 w-full items-center">
                    
                    <div className="w-[140px] h-[44px] bg-gray-200 flex items-center justify-center rounded text-sm font-bold">
                        Лого
                    </div>

                    <a href="/" className="bg-black rounded-xl gap-4 p-2 w-40 h-11 text-white flex justify-center items-center flex-shrink-0">
                        <img src="/icons/shopping-catalog.svg" alt='catalog' />
                        <p>Каталог</p>
                    </a>


                    <form className="flex-grow flex items-center h-11 border border-black rounded-xl overflow-hidden relative ">
                        
                        <div className="pl-4 pr-2 flex items-center pointer-events-none ">
                            <img src='/icons/magnifying_glass.svg' alt="searchIcon" className="w-5 h-5 text-gray-500"/>
                        </div>
                        
                        <input 
                            type="text" 
                            placeholder="Пошук" 
                            className="w-full h-full bg-transparent outline-none text-base text-black placeholder-gray-400"
                        />
                        
                        <button 
                            type="submit" 
                            className="bg-black h-full px-8 text-white text-base font-medium hover:bg-neutral-800 transition-colors flex-shrink-0">
                            Знайти
                        </button>
                        
                    </form>

                    <a href="/" className="bg-black rounded-xl p-2 w-11 h-11 text-white flex justify-center items-center flex-shrink-0">
                        <img src="/icons/mdi_heart.svg" alt='wish' />
                    </a>

                    <a href="/" className="bg-black rounded-xl p-2 w-11 h-11 text-white flex justify-center items-center flex-shrink-0">
                        <img src="/icons/material-symbols_balance.svg" alt='balance' />
                    </a>

                    <a href="/" className="bg-black rounded-xl p-2 w-11 h-11 text-white flex justify-center items-center flex-shrink-0">
                        <img src="/icons/iconamoon_profile-fill.svg" alt='profileIcon' />
                    </a>

                    <a href="/" className="bg-black rounded-xl gap-4 p-2 w-36 h-11 text-white flex justify-center items-center flex-shrink-0">
                        <img src="/icons/mdi_cart.svg" alt='cartIcon' />
                        <p>Кошик</p>
                    </a>

                </nav>
            </div>
        </header>
    );
}