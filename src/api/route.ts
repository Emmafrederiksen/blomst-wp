
// Alle produkter til shop siden
export async function getProducts() {
    const res = await fetch('http://localhost:8002/wp-json/wc/store/v1/products')
    const data = await res.json()
    return Response.json(data)
}


// Kun 3 produkter til forsiden
export async function getFeaturedProducts() {
    const res = await fetch('http://localhost:8002/wp-json/wc/store/v1/products?per_page=3')
    const data = await res.json()
    return Response.json(data)
}


// Hent alle kategorier
export async function getCategories() {
    const res = await fetch('http://localhost:8002/wp-json/wc/store/v1/products/categories')
    const data = await res.json()
    return Response.json(data)    
}


// Hent produkter baseret på kategori
export async function getByCategory(categoryId: string) {
  const res = await fetch(`http://localhost:8002/wp-json/wc/store/v1/products?category=${categoryId}`)
  const data = await res.json()
  return Response.json(data)
}

