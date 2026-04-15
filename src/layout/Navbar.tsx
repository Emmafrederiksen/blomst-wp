"use client";

import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../../public/images/logo.png";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useMounted } from "@/hooks/useMounted";

export default function NavBar() {
  const pathname = usePathname();
  const mounted = useMounted();

  // Henter cart data og openCart funktionen fra CartContext
  const { cart, openCart } = useCart();

  // Beregner det samlede antal varer i kurven
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  const navLinks = [
    { name: "Forside", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Om os", href: "/about" },
  ];

  return (
    <nav className="bg-brand-primary">
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Venstre side */}
          <div className="flex items-center gap-3">
            <Image src={logo} alt="Blomst logo" className="w-14 h-auto" />
            <h1 className="text-brand-white text-h2 font-serif">Blomst</h1>
          </div>

          {/* Højre side */}
          <ul className="flex items-center gap-6 text-brand-white font-sans">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`py-3 block ${
                    pathname === link.href ? "font-bold" : "font-normal"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {/* Kurv-knap — åbner slide-kurven og viser antal varer */}
            <li>
              <button
                onClick={openCart}
                className="flex items-center gap-2 bg-brand-white text-brand-dark font-medium px-6 py-3 rounded-full hover:opacity-90 active:scale-95 transition-all duration-200 whitespace-nowrap relative"
              >
                <ShoppingCart className="w-5 h-5" />
                Kurv
                {/* Badge — vises kun når mounted OG der er varer i kurven */}
                {mounted && totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-brand-primary text-brand-white text-xs font-medium w-6 h-6 rounded-full flex items-center justify-center border-2 border-brand-white">
                    {totalItems}
                  </span>
                )}
              </button>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}
