export default function Header() {
    return (
        <header className="bg-white shadow px-8 py-4 flex justify-center items-center">
            <nav className="flex gap-6">
                <img className="h-44px" src="/" alt="" />
                <a href="/" className="bg-black rounded-lg gap-4 p-2 w-40 h-10 text-white flex justify-center items-center">
                    <img src="/icons/shopping-catalog.svg" alt='catalog'></img>
                    <p>Каталог</p>
                </a>

                <span>
                    <span>

                    </span>
                    <label>

                    </label>
                    <span> 

                    </span>
                </span>

                <a href="/" className="bg-black rounded-lg gap-4 p-2 w-40 h-10 text-white flex justify-center items-center">
                    <img src="/icons/mdi_heart.svg" alt='wish'></img>
                </a>

                <a href="/" className="bg-black rounded-lg gap-4 p-2 w-40 h-10 text-white flex justify-center items-center">
                    <img src="/icons/material-symbols_balance.svg" alt='catalog'></img>
                </a>

                <a href="/" className="bg-black rounded-lg gap-4 p-2 w-40 h-10 text-white flex justify-center items-center">
                    <img src="/icons/iconamoon_profile-fill.svg" alt='profileIcon'></img>
                </a>


            </nav>
        </header>
    );
}