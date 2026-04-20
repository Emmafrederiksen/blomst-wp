"use client"

import { useEffect } from "react"
import { useCart } from "@/context/CartContext"

type Props = {
    isOpen: boolean
    onClose: () => void
}

export default function OrderSuccess({ isOpen, onClose }: Props) {

    const { clearCart, closeCart } = useCart()

    // Luk automatisk efter 5 sekunder
    useEffect(() => {
        if (!isOpen) return
        const timer = setTimeout(() => {
            onClose()
        }, 5000)
        return () => clearTimeout(timer)
    }, [isOpen, onClose])

    if (!isOpen) return null

    return (
        <>
            {/* Overlay */}
            <div className="fixed inset-0 z-[60] bg-black/30" />

            {/* Modal */}
            <div className="
                fixed top-1/2 left-1/2 z-[70]
                -translate-x-1/2 -translate-y-1/2
                bg-white rounded-2xl shadow-2xl
                p-8 w-80
                flex flex-col items-center gap-4
                animate-fade-in
            ">

                {/* Checkmark cirkel */}
                <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center">
                    <svg className="w-10 h-10 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path className="animate-draw" d="M5 13l4 4L19 7"/>
                    </svg>
                </div>

                {/* Tekst */}
                <div className="text-center">
                    <h3 className="font-sans text-h3 font-medium text-brand-dark mb-2">
                        Tak for din bestilling!
                    </h3>
                    <p className="font-sans text-body-sm text-brand-muted">
                        Dine blomster er på vej. Vi sender en bekræftelse snarest.
                    </p>
                </div>

                {/* Luk knap */}
                <button
                    onClick={() => {
                        clearCart()
                        closeCart()
                        onClose()
                    }}
                    className="w-full bg-brand-primary text-brand-white font-sans text-body-sm font-medium py-3 rounded-pill hover:opacity-90 transition-opacity duration-200"
                >
                    Fortsæt med at shoppe
                </button>

                {/* Auto-luk indikator */}
                <p className="font-sans text-xs text-brand-muted">
                    Lukker automatisk om få sekunder...
                </p>

            </div>
        </>
    )
}