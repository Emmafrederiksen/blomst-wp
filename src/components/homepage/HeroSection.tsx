import Container from "@/layout/Container";
import Link from "next/link";

export default function HeroSection () {
    return (
        <section className="bg-hero-gradient py-24">
            <Container>
                <div className="flex flex-col sm:flex-row justify-between gap-8">

                    {/*Venstre side med tekster*/}
                    <div className="flex-1">
                       <div className="space-y-8">
                            <p className="text-brand-primary text-body">
                                FRISKE BLOMSTER • LEVERING SAMME DAG
                            </p>

                            <h1 className="text-brand-primary text-hero">
                                Send kærlighed, <br />uanset afstanden
                            </h1>

                            <p className="text-brand-primary text-body max-w-[46ch]">
                                Vælg en buket, angiv en adresse – så klarer vi resten. 
                                Perfekt til dig der vil overraske en du holder af, selvom du er langt væk.
                            </p>
                        </div>
                
                        <div className="flex flex-wrap gap-4 pt-8">
                            <Link 
                                href="/shop"
                                className="cursor-pointer bg-brand-primary text-brand-white font-sans text-ui font-medium px-6 py-3 rounded-full hover:opacity-90 active:scale-95 transition-all duration-200 whitespace-nowrap shadow"
                            >
                                Se alle buketter
                            </Link>

                            <button className="cursor-pointer bg-brand-white border border-brand-primary text-brand-primary font-sans text-ui font-medium px-6 py-3 rounded-full hover:opacity-90 active:scale-95 transition-all duration-200 whitespace-nowrap shadow">
                                Vælg efter anledning
                            </button>
                        </div>  
                    </div>

                     {/*Højre side med HeroImage*/}
                     <div className="flex-1 flex justify-center lg:justify-end">
                        <div className="w-full sm:w-[80%] md:w-[70%] lg:w-full max-w-lg aspect-[16/10] overflow-hidden">
                            <img
                            src="/images/hero_img.jpg"
                            alt="Farverig blomsterbuket holdt i hånden"
                            className="w-full h-full object-cover rounded-card shadow"
                            />
                        </div>
                    </div>
                </div>
            </Container>
            
        </section>
    );
}