"use client"

import ProductCard from "@/components/products/ProductCard"
import Container from "@/layout/Container"
import ProductCardSkeleton from "@/components/products/ProductCardSkeleton"
import { useProducts } from "@/context/ProductContext"

export default function HomePage() {
  
  const { featured, loading } = useProducts()

  return (
    <main>
      <Container>
        <section className="py-14">
          <h2 className="text-h2 font-bold text-brand-primary mb-8">
            Populære buketter
          </h2>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Vis 3 skeletons mens produkterne hentes */}
              {Array.from({ length: 3 }).map((_, i) => (
                <ProductCardSkeleton key={i} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featured.map((product) => (
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