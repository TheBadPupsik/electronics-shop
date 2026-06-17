'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, ShoppingBasket, Scale, Star, User } from 'lucide-react'

const navItems = [
    { href: '/', label: 'Головна', icon: Home },
    { href: '/cart', label: 'Кошик', icon: ShoppingBasket },
    { href: '/comparison', label: 'Порівняння', icon: Scale },
    { href: '/favorite', label: 'Обране', icon: Star },
    { href: '/profile', label: 'Кабінет', icon: User },
]

export default function BottomNav() {
    const pathname = usePathname()

    return (
        <nav
            className="sm:hidden fixed inset-x-3 bottom-3 z-50 bg-[#FFF7ED] rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.18)] px-2 py-2 flex items-center justify-between"
            style={{ paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom))' }}
        >
            {navItems.map(({ href, label, icon: Icon }) => {
                const isActive = pathname === href

                return (
                    <Link
                        key={href}
                        href={href}
                        className="flex flex-col items-center justify-center gap-1 flex-1 py-1 transition-transform active:scale-90"
                    >
                        <Icon
                            className={isActive ? 'w-5 h-5 text-[#FFB800]' : 'w-5 h-5 text-black'}
                            strokeWidth={2}
                        />
                        <span className={isActive ? 'text-[10px] font-medium leading-none text-[#FFB800]' : 'text-[10px] font-medium leading-none text-black'}>
                            {label}
                        </span>
                    </Link>
                )
            })}
        </nav>
    )
}