import { Product } from "@/src/types/product";

type Props = {
    product: Product
    onAddToCart: (product: Product) => void
}

export default function ProductCard({ product, onAddToCart }: Props) {
    const image = product.images[0]
    const category = product.categories[0]?.name ?? ""
    const description = product.short_description.replace(/<[^>]*>/g, "")

    return (
        
    )
}