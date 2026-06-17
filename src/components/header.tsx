'use client'
import Link from 'next/link';
import { useState } from 'react'
import CatalogMenu from './Catalog';
import Cart from './Cart';

export default function Header() {
    const [catalogOpen, setCatalogOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);

    return (
        <header className="bg-white shadow px-4 sm:px-8 py-3 sm:py-4 flex justify-center items-center w-full relative">
            <div className="max-w-[1440px] w-full flex justify-center items-center">

                <nav className="flex gap-3 sm:gap-6 w-full items-center">

                    <Link href='/' className="w-[100px] h-9 sm:w-[140px] sm:h-11 flex items-center justify-center rounded text-sm font-bold flex-shrink-0">
                        <img src="/icons/logo.svg" alt="" className="w-full h-full object-contain" />
                    </Link>

                    <button
                        onClick={() => setCatalogOpen(!catalogOpen)}
                        className={`
                            hidden sm:flex
                            rounded-xl gap-4 p-2 w-40 h-11 text-white justify-center items-center flex-shrink-0
                            transition-all duration-200 ease-in-out cursor-pointer select-none
                            hover:bg-[#FFB800] active:scale-95 active:shadow-inner
                            ${catalogOpen ? 'bg-[#e6a602] scale-95' : 'bg-[#FFB800]'}
                        `}>
                        <img
                            src="/icons/shopping-catalog.svg"
                            alt='catalog'
                        />
                        <p className="font-medium text-sm">Каталог</p>
                    </button>

                    <form className="flex-grow flex items-center h-10 sm:h-11 border-2 border-[#FFB800] rounded-full sm:rounded-xl overflow-hidden relative ">

                        <div className="pl-3 sm:pl-4 pr-1.5 sm:pr-2 flex items-center pointer-events-none ">
                            <img src='/icons/magnifying_glass.svg' alt="searchIcon" className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                        </div>

                        <input
                            type="text"
                            placeholder="Пошук"
                            className="w-full h-full bg-transparent outline-none text-sm sm:text-base text-black placeholder-gray-400 min-w-0"
                        />

                        <button
                            type="submit"
                            className="bg-[#FFB800] h-full px-5 sm:px-8 text-white text-sm sm:text-base font-medium hover:bg-[#e6a602] transition-colors flex-shrink-0">
                            Знайти
                        </button>

                    </form>

                    <div className="hidden sm:flex items-center gap-6 flex-shrink-0">

                        <Link href="/favorite" className="bg-[#FFB800] rounded-xl p-2 w-11 h-11 text-white flex justify-center items-center flex-shrink-0 transition-all duration-200 ease-in-out hover:bg-[#e6a602] active:scale-90">
                            <img src="/icons/mdi_heart.svg" alt='wish' />
                        </Link>

                        <Link href="/comparison" className="bg-[#FFB800] rounded-xl p-2 w-11 h-11 text-white flex justify-center items-center flex-shrink-0 transition-all duration-200 ease-in-out hover:bg-[#e6a602] active:scale-90">
                            <img src="/icons/material-symbols_balance.svg" alt='balance' />
                        </Link>

                        <Link href="/profile" className="bg-[#FFB800] rounded-xl p-2 w-11 h-11 text-white flex justify-center items-center flex-shrink-0 transition-all duration-200 ease-in-out hover:bg-[#e6a602] active:scale-90">
                            <img src="/icons/iconamoon_profile-fill.svg" alt='profileIcon' />
                        </Link>

                        <button onClick={() => setCartOpen(!cartOpen)}
                            className={`
                                rounded-xl gap-4 p-2 w-36 h-11 text-white flex justify-center items-center flex-shrink-0
                                transition-all duration-200 ease-in-out cursor-pointer select-none
                                hover:bg-[#e6a602] active:scale-95 active:shadow-inner
                                ${cartOpen ? 'bg-[#e6a602] scale-95' : 'bg-[#FFB800]'}
                            `}>
                            <img src="/icons/mdi_cart.svg" alt='cartIcon' />
                            <p>Кошик</p>
                        </button>

                    </div>

                </nav>
            </div>

            {catalogOpen && (
                <div className="absolute top-full left-0 w-full z-50 animate-dropdown origin-top">
                    <CatalogMenu />
                </div>
            )}

            {cartOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
                    onClick={() => setCartOpen(false)}>
                    <div onClick={e => e.stopPropagation()}>
                        <Cart onClose={() => setCartOpen(false)} />
                    </div>
                </div>
            )}
        </header>
    );
}
