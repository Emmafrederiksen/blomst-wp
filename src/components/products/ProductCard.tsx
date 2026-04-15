"use client"

import { Product } from "@/types/product"

type Props = {
    product: Product
    onAddToCart: (product: Product) => void
}

export default function ProductCard({ product, onAddToCart }: Props) {

    // WooCommerce sender et array af billeder — vi bruger kun det første
    const image = product.images[0]

    // Første kategori-navn — ?. undgår fejl hvis arrayet er tomt
    // ?? "" betyder brug tom string hvis der ingen kategori er
    const category = product.categories[0]?.name ?? ""

    // WooCommerce sender beskrivelsen med HTML-tags som <p> og <br>
    // .replace() fjerner alle HTML-tags så vi kun får ren tekst
    const description = product.short_description.replace(/<[^>]*>/g, "")

    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col">

            {/* Billede */}
            {image && (
                <div className="overflow-hidden h-[600px]">
                    <img
                        src={image.src}
                        alt={image.alt || product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                </div>
            )}

            {/* Kortets indhold */}
            <div className="p-5 flex flex-col flex-1" >

                {/* Kategori-label */}
                {category && (
                    <span className="font-sans text-label font-medium tracking-widest text-brand-primary uppercase mb-2">
                        {category}
                    </span>
                )}

                {/* Produktnavn */}
                <h3 className="font-sans text-h3 font-medium text-brand-dark mb-1">
                    {product.name}
                </h3>

                {/* Beskrivelse — flex-1 pusher knap og pris til bunden */}
                <p className="font-sans text-body-sm text-brand-muted line-clamp-2 flex-1 mb-6">
                    {description}
                </p>

                {/* Pris og kurv-knap */}
                <div className="flex items-center justify-between">
                    <span className="font-sans text-ui font-medium text-brand-dark">
                        {(Number(product.prices.price) / Math.pow(10, product.prices.currency_minor_unit)).toLocaleString("da-DK")} kr.
                    </span>
                    {/* cursor-pointer */}
                    <button
                        type="button"
                        onClick={() => onAddToCart(product)}
                        className="cursor-pointer bg-brand-primary text-brand-white font-sans text-ui font-medium px-6 py-3 rounded-full hover:opacity-90 active:scale-95 transition-all duration-200 whitespace-nowrap"
                    >
                        Tilføj til kurv
                    </button>
                </div>

            </div>
        </div>
    )
}