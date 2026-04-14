export type Product = {
    id: number
    name: string
    prices: {
        price: string
        currency_minor_unit: number
    }
    short_description: string
    images: {
        src: string
        alt: string
    }[]
    categories: {
        id: number
        name: string
    }[]
}