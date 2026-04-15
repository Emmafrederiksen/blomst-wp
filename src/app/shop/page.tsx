"use client"

import { useEffect, useState } from "react"
import ProductCard from "@/components/products/ProductCard"
import CategoryFilter from "@/components/shop/CategoryFilter"
import SortSelect from "@/components/shop/SortSelect"
import Container from "@/layout/Container"
import { Product } from "@/types/product"
import { Category } from "@/types/category"

export default function ShopPage() {

    // Gemmer ALLE produkter — ændres aldrig efter første load
    const [allProducts, setAllProducts] = useState<Product[]>([])

    // Gemmer alle kategorier til filter-btns
    const [categories, setCategories] = useState<Category[]>([])

    // Hvilken kategori er aktiv? null = Alle
    const [activeCategory, setActiveCategory] = useState<number | null>(null)

    // Hvilken sortering er aktiv? default = ingen sortering
    const [activeSort, setActiveSort] = useState("price-asc")

    // Styrer om "Henter blomster..." vises
    const [loading, setLoading] = useState(true)

    // Henter produkter og kategorier samtidig — kører kun én gang ved load
    // Promise.all sender begge requests afsted parallelt så det går hurtigere
    useEffect(() => {
        Promise.all([
            fetch('/api/products').then(res => res.json()),
            fetch('/api/categories').then(res => res.json())
        ]).then(([productsData, categoriesData]) => {
            setAllProducts(productsData)
            setCategories(categoriesData)
            setLoading(false)
        })
    }, [])

    // BEREGNING 1 — filtrer produkter efter aktiv kategori
    // activeCategory er null → vis alle
    // activeCategory er et ID → filtrer med .filter() og .some()
    const filteredProducts = activeCategory
        ? allProducts.filter(p => p.categories.some(c => c.id === activeCategory))
        : allProducts

    // BEREGNING 2 — sortér de filtrerede produkter
    // [...filteredProducts] laver en kopi så vi ikke ændrer originalen
    // .sort() sammenligner to produkter ad gangen og bestemmer rækkefølgen
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (activeSort === "price-asc") {
            // Lav til høj – mindste pris først
            return Number(a.prices.price) - Number(b.prices.price)
        }
        if (activeSort === "price-desc") {
            // Høj til lav – største pris først
            return Number(b.prices.price) - Number(a.prices.price)
        }
        // default – behold original rækkefølge
        return 0
    })

    return (
        <main>
            <Container>
                <section className="py-14">

                    {/* Toolbar – staplet på mobil, side om side på desktop */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                        
                        {/* Kategori-btn */}
                        <CategoryFilter
                            categories={categories}
                            activeCategory={activeCategory}
                            onCategoryChange={setActiveCategory}
                        />

                        {/* Sortering – ligger under kategori-btn på mobil, til højre på desktop */}
                        <div className="flex items-center gap-3 shrink-0">
                            <SortSelect
                                value={activeSort}
                                onChange={setActiveSort}
                            />
                        </div>

                    </div>

                    {/* Antal produkter */}
                    <p className="font-sans text-body-sm text-brand-muted mb-6">
                        Viser {sortedProducts.length} buketter
                    </p>

                    {/* Produktgrid */}
                    {loading ? (
                        <p className="font-sans text-body text-brand-muted">
                            Henter blomster...
                        </p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {sortedProducts.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </div>
                    )}

                </section>
            </Container>
        </main>
    )
}