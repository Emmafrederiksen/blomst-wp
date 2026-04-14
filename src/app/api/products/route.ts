// Alle produkter til shop siden
export async function GET() {
    const res = await fetch('http://localhost:8002/wp-json/wc/store/v1/products')
    const data = await res.json()
    return Response.json(data)
}