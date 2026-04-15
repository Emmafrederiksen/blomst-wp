import type { Metadata } from "next"
import { DM_Sans, DM_Serif_Display } from "next/font/google"
import "./globals.css"
import NavBar from "@/layout/Navbar"

// DM Sans – bruges til brødtekst og UI elementer
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
})

// DM Serif Display – bruges til overskrifter
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
        <NavBar/>
        {children}
      </body>
    </html>
  )
}