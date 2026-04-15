"use client"

import { createContext, useContext, useState, useEffect } from "react"
import { Product } from "@/types/product"
import { Category } from "@/types/category"

type ProductContextType = {
    products: Product[]
    featured: Product[]
    categories: Category[]
    loading: boolean
}

const ProductContext = createContext<ProductContextType | null>(null)

export function ProductProvider({ children }: { children: React.ReactNode }) {

    const [products, setProducts] = useState<Product[]>([])
    const [categories, setCategories] = useState<Category[]>([])
    const [loading, setLoading] = useState(true)

    // Henter produkter og kategorier samtidig — én gang for hele appen
    // Promise.all sender begge requests parallelt så det går hurtigere
    useEffect(() => {
        Promise.all([
            fetch('/api/products').then(res => res.json()),
            fetch('/api/categories').then(res => res.json())
        ]).then(([productsData, categoriesData]) => {
            setProducts(productsData)
            setCategories(categoriesData)
            setLoading(false)
        })
    }, [])

    // De 3 første produkter til forsiden
    const featured = products.slice(0, 3)

    return (
        <ProductContext.Provider value={{ products, featured, categories, loading }}>
            {children}
        </ProductContext.Provider>
    )
}

export function useProducts() {
    const context = useContext(ProductContext)
    if (!context) {
        throw new Error("useProducts skal bruges inden i en ProductProvider")
    }
    return context
}