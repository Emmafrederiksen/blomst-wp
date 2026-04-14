// Hent produkter baseret på kategori
export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    const res = await fetch(`http://localhost:8002/wp-json/wc/store/v1/products?category=${params.id}`)
    const data = await res.json()
    return Response.json(data)
}