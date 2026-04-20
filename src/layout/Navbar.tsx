"use client";

import { useState } from "react";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../../public/images/logo.png";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useMounted } from "@/hooks/useMounted";

export default function NavBar() {
  const pathname = usePathname();
  const mounted = useMounted();
  const [menuOpen, setMenuOpen] = useState(false);

  const { cart, openCart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const navLinks = [
    { name: "Forside", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Om os", href: "/about" },
  ];

  return (
    <nav className="bg-brand-primary shadow-lg relative">
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-90 transition-opacity duration-200"
          >
            <Image src={logo} alt="Blomst logo" className="w-12 h-auto" />
            <span className="text-brand-white text-h2 font-serif">Blomst</span>
          </Link>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center gap-8 font-sans">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-brand-white text-body pb-1 border-b-2 transition-all duration-200 ${
                    pathname === link.href
                      ? "border-brand-white font-bold"
                      : "border-transparent font-normal hover:border-brand-white/50"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            <li>
              <button
                onClick={openCart}
                className="flex items-center gap-2 bg-brand-white text-brand-dark font-sans text-body font-medium px-5 py-2.5 rounded-pill hover:opacity-90 active:scale-95 transition-all duration-200 whitespace-nowrap relative"
              >
                <ShoppingCart className="w-5 h-5" />
                Kurv
                {mounted && totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-brand-primary text-brand-white text-xs font-medium w-6 h-6 rounded-full flex items-center justify-center border-2 border-brand-white">
                    {totalItems}
                  </span>
                )}
              </button>
            </li>
          </ul>

          {/* Mobile actions */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={openCart}
              className="relative flex items-center justify-center bg-brand-white text-brand-dark p-2 rounded-full hover:opacity-90 active:scale-95 transition-all duration-200"
            >
              <ShoppingCart className="w-5 h-5" />

              {mounted && totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-primary text-brand-white text-xs font-medium w-5 h-5 rounded-full flex items-center justify-center border-2 border-brand-white">
                  {totalItems}
                </span>
              )}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-brand-white p-2"
              aria-label="Åbn menu"
            >
              {menuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden pb-4">
            <ul className="flex flex-col gap-3 font-sans bg-brand-primary">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-brand-white text-body pb-1 border-b-2 transition-all duration-200 ${
                      pathname === link.href
                        ? "border-brand-white font-bold"
                        : "border-transparent font-normal hover:border-brand-white/50"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </nav>
  );
}
