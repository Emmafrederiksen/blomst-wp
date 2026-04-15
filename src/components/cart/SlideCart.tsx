"use client"

import { useState } from "react"
import Link from "next/link"
import { useCart } from "@/context/CartContext"
import { useMounted } from "@/hooks/useMounted"
import { X, Trash2 } from "lucide-react"
import ConfirmDialog from "@/components/cart/ConfirmDialog"

export default function SlideCart() {

    const { cart, isOpen, closeCart, removeFromCart, updateQuantity } = useCart()

    // Styrer hvilken produkt confirm dialogen er åben for
    const [confirmId, setConfirmId] = useState<number | null>(null)
    const [confirmName, setConfirmName] = useState("")

    // Forhindrer hydration fejl — venter med at rendere cart indhold
    // indtil komponenten er mounted i browseren og localStorage er tilgængelig
    const mounted = useMounted()

    // Beregninger — pris er i øre så vi dividerer med 100
    const subtotal = cart.reduce((sum, item) =>
        sum + (item.price / 100) * item.quantity, 0
    )
    const delivery = 79
    const total = subtotal + delivery

    return (
        <>
            {/* Overlay — mørk baggrund bag slide-kurven */}
            <div
                onClick={closeCart}
                className={`
                    fixed inset-0 z-40 bg-black/30
                    transition-opacity duration-300
                    ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
                `}
            />

            {/* Selve slide-kurven — kommer ind fra højre */}
            <div className={`
                fixed top-0 right-0 z-50
                h-full w-full max-w-sm
                bg-white
                flex flex-col
                transition-transform duration-300 ease-in-out
                ${isOpen ? "translate-x-0" : "translate-x-full"}
            `}>

                {/* Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                    <h2 className="font-sans text-h2 font-medium text-brand-primary">
                        Din kurv
                    </h2>
                    <button
                        onClick={closeCart}
                        className="text-brand-muted hover:text-brand-dark transition-colors duration-200"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Venter med at vise indhold til mounted så vi undgår hydration fejl */}
                {!mounted ? null : cart.length === 0 ? (

                    <div className="flex flex-col items-center justify-center flex-1 gap-4 px-6">
                        <p className="font-sans text-body text-brand-dark font-medium">
                            Din kurv er tom
                        </p>
                        <p className="font-sans text-body-sm text-brand-muted">
                            Tilføj nogle smukke blomster!
                        </p>
                        <Link
                            href="/shop"
                            onClick={closeCart}
                            className="bg-brand-primary text-brand-white font-sans text-body-sm font-medium px-6 py-3 rounded-pill hover:opacity-90 transition-opacity duration-200"
                        >
                            Se alle buketter
                        </Link>
                    </div>

                ) : (

                    <>
                        {/* Produkter */}
                        <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-4">
                            {cart.map(item => (
                                <div key={item.product_id} className="flex gap-4 border border-brand-primary rounded-2xl p-4">

                                    {/* Billede */}
                                    <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Højre side */}
                                    <div className="flex-1 flex flex-col">

                                        {/* Navn og slet-knap */}
                                        <div className="flex items-start justify-between mb-1">
                                            <p className="font-sans text-body-sm font-medium text-brand-dark">
                                                {item.name}
                                            </p>
                                            <button
                                                onClick={() => {
                                                    setConfirmId(item.product_id)
                                                    setConfirmName(item.name)
                                                }}
                                                className="text-brand-muted hover:text-brand-primary transition-colors duration-200 ml-2"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>

                                        {/* Pris til venstre og antal-styring til højre — på samme linje */}
                                        <div className="flex items-center justify-between mt-auto">
                                            <p className="font-sans text-body-sm text-brand-muted">
                                                {(item.price / 100).toLocaleString("da-DK")} kr.
                                            </p>
                                            <div className="flex items-center gap-3">
                                                <button
                                                    onClick={() => updateQuantity(item.product_id, item.quantity - 1)}
                                                    className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center font-sans text-body-sm hover:border-brand-primary hover:text-brand-primary transition-colors duration-200"
                                                >
                                                    −
                                                </button>
                                                <span className="font-sans text-body-sm font-medium text-brand-dark w-4 text-center">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    onClick={() => updateQuantity(item.product_id, item.quantity + 1)}
                                                    className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center font-sans text-body-sm hover:border-brand-primary hover:text-brand-primary transition-colors duration-200"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Footer — totaler og bestil-knap */}
                        <div className="px-6 py-5 border-t border-gray-100 flex flex-col gap-3">

                            <div className="flex justify-between font-sans text-body-sm text-brand-muted">
                                <span>Subtotal:</span>
                                <span>{subtotal.toLocaleString("da-DK")} kr.</span>
                            </div>

                            <div className="flex justify-between font-sans text-body-sm text-brand-muted">
                                <span>Leveringsomkostning:</span>
                                <span>{delivery} kr.</span>
                            </div>

                            {/* Separator */}
                            <div className="border-t border-gray-100" />

                            <div className="flex justify-between font-sans text-body font-medium text-brand-dark">
                                <span>Total:</span>
                                <span>{total.toLocaleString("da-DK")} kr.</span>
                            </div>

                            <button className="w-full bg-brand-primary text-brand-white font-sans text-body-sm font-medium py-4 rounded-pill hover:opacity-90 transition-opacity duration-200 mt-2">
                                Bestil nu
                            </button>

                        </div>
                    </>
                )}

            </div>

            {/* ConfirmDialog ligger udenfor slide-kurven div */}
            {/* så den centrerer sig på hele skærmen og ikke kun kurven */}
            <ConfirmDialog
                isOpen={confirmId !== null}
                productName={confirmName}
                onConfirm={() => {
                    if (confirmId !== null) removeFromCart(confirmId)
                    setConfirmId(null)
                }}
                onCancel={() => setConfirmId(null)}
            />

        </>
    )
}