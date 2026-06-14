'use client'
import { useState } from 'react'

type AccordionProps = {
    title: string
    children: React.ReactNode
}

export default function Accordion({ title, children }: AccordionProps) {
    const [open, setOpen] = useState(false)

    return (
        <div className="rounded-2xl border border-gray-300 overflow-hidden mt-10">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between px-6 py-5 bg-white"
            >
                <span className="font-bold text-base">{title}</span>
                <span className={`text-[#FFB800] text-xl transition-transform duration-300 ${open ? 'rotate-90' : ''}`}>

                </span>
            </button>

            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${open ? 'max-h-96' : 'max-h-0'}`}>
                <div className="bg-[#FFF7ED] p-6">
                    {children}
                </div>
            </div>
        </div>
    )
}