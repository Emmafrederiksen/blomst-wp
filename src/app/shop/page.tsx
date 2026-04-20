"use client"

import { useState } from "react"
import ProductCard from "@/components/products/ProductCard"
import CategoryFilter from "@/components/shop/CategoryFilter"
import SortSelect from "@/components/shop/SortSelect"
import Container from "@/layout/Container"
import ProductCardSkeleton from "@/components/products/ProductCardSkeleton"
import { useProducts } from "@/context/ProductContext"

export default function ShopPage() {

    // Henter produkter og kategorier fra global context – ingen fetch nødvendig
    const { products: allProducts, categories, loading } = useProducts()

    // Hvilken kategori er aktiv? null = Alle
    const [activeCategory, setActiveCategory] = useState<number | null>(null)

    // Hvilken sortering er aktiv?
    const [activeSort, setActiveSort] = useState("price-asc")

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
            return Number(a.prices.price) - Number(b.prices.price)
        }
        if (activeSort === "price-desc") {
            return Number(b.prices.price) - Number(a.prices.price)
        }
        return 0
    })

    return (
        <main>
            
            {/* Hero */}
            <div className="bg-hero-gradient py-16 px-6">
                <Container>
                    <h1 className="font-serif text-h1 text-brand-primary mb-2">
                        Alle buketter
                    </h1>
                    <p className="font-sans text-body text-brand-dark max-w-sm">
                        Håndplukkede buketter til enhver andledning – vælg kategori eller filtrér efter pris
                    </p>
                </Container>    
            </div>
                

            <Container>
                <section className="py-14">

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                        <CategoryFilter
                            categories={categories}
                            activeCategory={activeCategory}
                            onCategoryChange={setActiveCategory}
                        />
                        <div className="flex items-center gap-3 shrink-0">
                            <SortSelect
                                value={activeSort}
                                onChange={setActiveSort}
                            />
                        </div>
                    </div>

                    <p className="font-sans text-body-sm text-brand-muted mb-6">
                        Viser {sortedProducts.length} buketter
                    </p>

                    {loading ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {Array.from({ length: 6 }).map((_, i) => (
                                <ProductCardSkeleton key={i} />
                            ))}
                        </div>
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