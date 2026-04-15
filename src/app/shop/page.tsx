"use client"

import { useEffect, useState } from "react"
import ProductCard from "@/components/products/ProductCard"
import Container from "@/layout/Container"
import { Product } from "@/types/product"

export default function ShopPage() {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/api/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setLoading(false)
            })
    }, [])

    return (
        <main>
            <Container>
                <section className="py-14">

                    {/* Antal produkter */}
                    <p className="font-sans text-body-sm text-brand-muted mb-6">
                        Viser {products.length} buketter
                    </p>

                    {/* Produktgrid */}
                    {loading ? (
                        // HVIS loading er true – vis denne tekst
                        <p className="font-sans text-body text-brand-muted">
                            Henter blomster...
                        </p>
                    ) : ( // ELLERS – vis produkterne
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {products.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
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