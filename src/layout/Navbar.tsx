import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/logo.png";

export default function NavBar() {
  return (
    <nav className="bg-brand-primary">
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Venstre side */}
          <div className="flex items-center gap-3">
            <Image src={logo} alt="Blomst logo" className="w-14 h-auto" />
            <h1 className="text-brand-white text-xl font-semibold">Blomst</h1>
          </div>

          {/* Højre side */}
          <ul className="flex items-center gap-6 text-brand-white">
            <li>
              <Link href="/" className="py-3 block">
                Forside
              </Link>
            </li>
            <li>
              <Link href="/shop" className="py-3 block">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/" className="py-3 block">
                Om os
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="bg-brand-white text-brand-dark font-sans text-sm font-medium px-6 py-3 rounded-full hover:opacity-90 active:scale-95 transition-all duration-200 whitespace-nowrap"
              >
                Kurv
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}
