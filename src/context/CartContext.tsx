/* Global state management for kurv */

"use client"

import { createContext, useContext, useState, useEffect } from "react"

// Et produkt i kurven
export type CartItem = {
    product_id: number
    name: string
    price: number        // i øre – fx 16900 = 169 kr.
    image: string
    quantity: number
}

type CartContextType = {
    cart: CartItem[]
    addToCart: (item: CartItem) => void
    removeFromCart: (id: number) => void
    updateQuantity: (id: number, quantity: number) => void
    isOpen: boolean
    openCart: () => void
    closeCart: () => void
    clearCart: () => void
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {

    // Henter kurv fra localStorage hvis den findes — ellers tom
    const [cart, setCart] = useState<CartItem[]>(() => {
        if (typeof window === "undefined") return []
        const saved = localStorage.getItem("blomst-cart")
        return saved ? JSON.parse(saved) : []
    })

    // Gemmer kurv i localStorage hver gang den ændrer sig
    useEffect(() => {
        localStorage.setItem("blomst-cart", JSON.stringify(cart))
    }, [cart])

    const addToCart = (item: CartItem) => {
        setCart(prev => {
            // Hvis produktet allerede er i kurven — øg antal
            const existing = prev.find(p => p.product_id === item.product_id)
            if (existing) {
                return prev.map(p =>
                    p.product_id === item.product_id
                        ? { ...p, quantity: p.quantity + 1 }
                        : p
                )
            }
            // Ellers tilføj som nyt item med antal 1
            return [...prev, { ...item, quantity: 1 }]
        })
        // Åbn kurven automatisk når et produkt tilføjes
        openCart()
    }

    const removeFromCart = (id: number) => {
        setCart(prev => prev.filter(item => item.product_id !== id))
    }

    const updateQuantity = (id: number, quantity: number) => {
        setCart(prev => {
            // Hvis antal er 0 eller mindre — fjern produktet
            if (quantity <= 0) {
                return prev.filter(item => item.product_id !== id)
            }
            return prev.map(item =>
                item.product_id === id
                    ? { ...item, quantity }
                    : item
            )
        })
    }

    const clearCart = () => setCart([])

    // Styrer om slide-kurven er åben eller lukket
    const [isOpen, setIsOpen] = useState(false)
    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            updateQuantity,
            isOpen,
            openCart,
            closeCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

// Hook til at bruge kurven i andre komponenter
export function useCart() {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error("useCart skal bruges inden i en CartProvider")
    }
    return context
}