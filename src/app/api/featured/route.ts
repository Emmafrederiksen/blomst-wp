// Kun 3 produkter til forsiden
export async function GET() {
    const res = await fetch('http://localhost:8002/wp-json/wc/store/v1/products?per_page=3')
    const data = await res.json()
    return Response.json(data)
}