"use client";

import Container from "./Container";
import Image from "next/image";
import logo from "../../public/images/logo.png";

export default function Footer() {
  return (
    <footer className="bg-brand-primary py-10">
      <Container>
        <div className="flex flex-col md:flex-row justify-between gap-10">
          
          {/* Venstre side */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <Image src={logo} alt="Blomst logo" className="w-14 h-auto" />
              <h2 className="text-brand-white text-h2 font-serif">
                Blomst
              </h2>
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
                <li>Alle buketter</li>
                <li>Fødselsdag</li>
                <li>Bryllup</li>
                <li>Kondolence</li>
                <li>Hverdagsbuket</li>
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

          <div className="flex gap-4 text-brand-white text-sm">
            <span className="flex items-center gap-2 bg-brand-white text-brand-primary font-bold px-6 py-3 rounded-full hover:opacity-90 active:scale-95 transition-all duration-200 whitespace-nowrap font-sans shadow-lg">MobilePay</span>
            <span className="flex items-center gap-2 bg-brand-white text-brand-primary font-bold px-6 py-3 rounded-full hover:opacity-90 active:scale-95 transition-all duration-200 whitespace-nowrap font-sans shadow-lg">Visa</span>
            <span className="flex items-center gap-2 bg-brand-white text-brand-primary font-bold px-6 py-3 rounded-full hover:opacity-90 active:scale-95 transition-all duration-200 whitespace-nowrap font-sans shadow-lg">Mastercard</span>
            <span className="flex items-center gap-2 bg-brand-white text-brand-primary font-bold px-6 py-3 rounded-full hover:opacity-90 active:scale-95 transition-all duration-200 whitespace-nowrap font-sans shadow-lg">Dankort</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}