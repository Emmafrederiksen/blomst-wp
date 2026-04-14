"use client"

import { useEffect, useState } from "react"
import ProductCard from "@/components/products/ProductCard"
import Container from "@/layout/Container"
import { Product } from "@/types/product"

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('/api/featured')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <main>
      <Container>
        <section className="py-14">
          <h2 className="text-2xl font-medium text-brand-dark mb-8">
            Populære buketter
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={(p) => console.log("Tilføjet:", p.name)}
              />
            ))}
          </div>
        </section>
      </Container>
    </main>
  )
}