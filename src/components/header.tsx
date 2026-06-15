'use client'
import Link from 'next/link';
import { useState } from 'react'
import CatalogMenu from './Catalog';
import Cart from './Cart';

export default function Header() {
    const [catalogOpen, setCatalogOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);

    return (
        <header className="bg-white shadow px-8 py-4 flex justify-center items-center w-full relative">
            <div className="max-w-[1440px] w-full flex justify-center items-center">

                <nav className="flex gap-6 w-full items-center">

                    <Link href='/' className="w-[140px] h-[44px] flex items-center justify-center rounded text-sm font-bold">
                        <img src="/icons/logo.svg" alt="" />
                    </Link>

                    <button
                        onClick={() => setCatalogOpen(!catalogOpen)}
                        className={`
                            rounded-xl gap-4 p-2 w-40 h-11 text-white flex justify-center items-center flex-shrink-0
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

                    <form className="flex-grow flex items-center h-11 border-2 border-[#FFB800] rounded-xl overflow-hidden relative ">

                        <div className="pl-4 pr-2 flex items-center pointer-events-none ">
                            <img src='/icons/magnifying_glass.svg' alt="searchIcon" className="w-5 h-5 text-gray-500" />
                        </div>

                        <input
                            type="text"
                            placeholder="Пошук"
                            className="w-full h-full bg-transparent outline-none text-base text-black placeholder-gray-400"
                        />

                        <button
                            type="submit"
                            className="bg-[#FFB800] h-full px-8 text-white text-base font-medium hover:bg-[#e6a602] transition-colors flex-shrink-0">
                            Знайти
                        </button>

                    </form>

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