import Link from "next/link";

export default function CallToActionSection() {
  return (
    <section className="bg-hero-gradient shadow py-16 px-6 mt-24 mb-24 rounded-card flex flex-col gap-10 sm:flex-row sm:items-center sm:justify-between sm:text-left sm:px-12 lg:px-24">
      
      {/* Tekst */}
      <div className="space-y-6 max-w-xl">
        <h2 className="text-hero text-brand-primary">
          Langt væk fra dem du <br /> holder af?
        </h2>

        <p className="text-body text-brand-primary max-w-[64ch]">
          Med Blomst. kan du sende en buket direkte til deres dør – uanset om de bor i Aarhus, Odense 
          eller helt i Sverige. Bestil på under 2 minutter.
        </p>

        <div className="pt-4">
          <Link
            href="/shop"
            className="inline-block bg-brand-primary text-brand-white font-sans text-ui font-medium px-6 py-3 rounded-full 
            hover:opacity-90 active:scale-95 transition-all duration-200 shadow"
          >
            Bestil nu
          </Link>
        </div>
      </div>

      {/* Logo */}
      <div className="flex justify-center">
        <img
          src="/images/logo.png"
          alt="Blomst logo"
          className="w-56 h-56 md:h-72 md:w-72 object-contain"
        />
      </div>

    </section>
  );
}