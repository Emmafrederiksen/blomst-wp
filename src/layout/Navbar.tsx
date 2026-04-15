"use client";

import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../../public/images/logo.png";
import { ShoppingCart } from "lucide-react";

export default function NavBar() {
  const pathname = usePathname();

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

            <li>
              <Link
                href="/"
                className="flex items-center gap-2 bg-brand-white text-brand-dark font-medium px-6 py-3 rounded-full hover:opacity-90 active:scale-95 transition-all duration-200 whitespace-nowrap"
              >
                <ShoppingCart className="w-6 h-6" />
                Kurv
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}
