"use client"

import { useEffect, useState } from "react"
import ProductCard from "@/components/products/ProductCard"
import CategoryFilter from "@/components/shop/CategoryFilter"
import Container from "@/layout/Container"
import { Product } from "@/types/product"
import { Category } from "@/types/category"

export default function ShopPage() {

    // Gemmer ALLE produkter — ændres aldrig efter første load
    const [allProducts, setAllProducts] = useState<Product[]>([])

    // Gemmer alle kategorier til filter-pills
    const [categories, setCategories] = useState<Category[]>([])

    // Hvilken kategori er aktiv? null = Alle
    const [activeCategory, setActiveCategory] = useState<number | null>(null)

    // Styrer om "Henter blomster..." vises
    const [loading, setLoading] = useState(true)

    // Henter produkter og kategorier samtidig og kører kun én gang ved load
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

    // BEREGNING – ingen useState, ingen fetch
    // Udregnes automatisk hver gang activeCategory ændrer sig
    // activeCategory er null → vis alle
    // activeCategory er et ID → filtrer produkterne
    // .filter() beholder kun produkter hvor betingelsen er sand
    // .some() tjekker om mindst én kategori på produktet matcher ID'et (der kan være flere kategorier på et produkt)
    const filteredProducts = activeCategory
        ? allProducts.filter(p => p.categories.some(c => c.id === activeCategory))
        : allProducts

    return (
        <main>
            <Container>
                <section className="py-14">

                    {/* Kategori-knap – activeCategory styrer hvilken der er aktiv
                        onCategoryChange opdaterer activeCategory når bruger trykker */}
                    <CategoryFilter
                        categories={categories}
                        activeCategory={activeCategory}
                        onCategoryChange={setActiveCategory}
                    />

                    {/* Viser antal produkter i den aktuelle filtrering */}
                    <p className="font-sans text-body-sm text-brand-muted mb-6">
                        Viser {filteredProducts.length} buketter
                    </p>

                    {/* Ternary operator – loading true → vis tekst, loading false → vis produkter */}
                    {loading ? (
                        <p className="font-sans text-body text-brand-muted">
                            Henter blomster...
                        </p>
                    ) : (
                        // Grid – responsivt layout: 1 kolonne mobil, 2 tablet, 3 desktop
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* .map() laver et ProductCard for hvert produkt i filteredProducts */}
                            {filteredProducts.map((product) => (
                                <ProductCard
                                    key={product.id}      // unikt ID så React kan holde styr på kortene
                                    product={product}     // sender produktdata ind i kortet
                                    onAddToCart={(p) => console.log("Tilføjet:", p.name)}
                                />
                            ))}
                        </div>
                    )}

                </section>
            </Container>
        </main>
    )
}