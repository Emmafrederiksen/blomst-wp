import type { Metadata } from "next"
import { DM_Sans, DM_Serif_Display } from "next/font/google"
import "./globals.css"
import NavBar from "@/layout/Navbar"
import { CartProvider } from "@/context/CartContext"
import SlideCart from "@/components/cart/SlideCart"

// DM Sans — bruges til brødtekst og UI elementer
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
})

// DM Serif Display — bruges til elegante overskrifter
const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "Blomst",
  description: "Friske blomster leveret til din dør",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="da">
      <body className={`${dmSans.variable} ${dmSerif.variable}`}>
        {/* CartProvider wrapper alt indhold så kurven er tilgængelig overalt */}
        <CartProvider>
          <NavBar/>
          {children}
          {/* SlideCart ligger udenfor {children} så den vises på alle sider */}
          <SlideCart />
        </CartProvider>
      </body>
    </html>
  )
}