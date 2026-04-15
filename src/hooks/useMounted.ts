import { useState, useEffect } from "react"

// Custom hook der returnerer true når komponenten er mounted i browseren
// Bruges til at forhindre hydration fejl med localStorage og cart data
export function useMounted() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return mounted
}