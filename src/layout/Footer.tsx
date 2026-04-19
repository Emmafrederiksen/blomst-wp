"use client";

import Container from "./Container";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-primary py-10">
      <Container>
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Venstre side */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <Image src={logo} alt="Blomst logo" className="w-14 h-auto" />
              <h2 className="text-brand-white text-h2 font-serif">Blomst</h2>
            </div>

            <p className="text-brand-white mt-4 font-sans">
              Friske blomster leveret med omsorg - til enhver anledning, hele
              Danmark over
            </p>
          </div>

          {/* Højre side */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-brand-white">
            <div>
              <h3 className="text-h3 mb-3 font-serif">Shop</h3>
              <ul className="space-y-2 font-sans">
                <li>
                  <Link href="/shop" className="hover:underline">
                    Alle buketter
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=1" className="hover:underline">
                    Fødselsdag
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=2" className="hover:underline">
                    Bryllup
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=3" className="hover:underline">
                    Kondolence
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=4" className="hover:underline">
                    Hverdagsbuket
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-h3 mb-3 font-serif">Informationer</h3>
              <ul className="space-y-2 font-sans">
                <li>Om os</li>
                <li>Levering & fragt</li>
                <li>Friskhedsgaranti</li>
                <li>Kontakt</li>
              </ul>
            </div>

            <div>
              <h3 className="text-h3 mb-3 font-serif">Hjælp</h3>
              <ul className="space-y-2 font-sans">
                <li>FAQ</li>
                <li>Returpolitik</li>
                <li>Handelsbetingelser</li>
                <li>Privatlivspolitik</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bund */}
        <div className="mt-10 pt-6 border-t border-white flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-white text-sm font-sans">
            Copyright &copy; 2026 Blomst - Alle rettigheder forbeholdes
          </p>

          <div className="grid grid-cols-2 md:flex gap-4 text-brand-white text-sm">
            <span className="flex items-center gap-2 font-bold px-6 py-3 font-sans">
              MobilePay
            </span>
            <span className="flex items-center gap-2 font-bold px-6 py-3 font-sans">
              Visa
            </span>
            <span className="flex items-center gap-2 font-bold px-6 py-3 font-sans">
              Mastercard
            </span>
            <span className="flex items-center gap-2 font-bold px-6 py-3 font-sans">
              Dankort
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
