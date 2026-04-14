export type Product = {
    id: number
    name: string
    price: string
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