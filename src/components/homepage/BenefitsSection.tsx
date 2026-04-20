import { Clock3, Gift, Truck } from "lucide-react";

export default function BenefitsSection() {
  return (
    <section className="py-8">
    
    {/*Mobil version – elementer stablet med vandrette streger */}
      <div className="flex flex-col sm:hidden">
        <div className="flex flex-col items-center gap-3 py-6 text-center">
          <Clock3 className="h-8 w-8 text-brand-primary" />
          <div className="flex flex-col items-center">
            <h3 className="text-h3 font-semibold text-brand-primary">Samme-dag levering</h3>
            <p className="text-body-sm text-brand-primary">
              Bestil inden kl. 13 og få leveret i dag
            </p>
          </div>
        </div>

        <div className="mx-auto h-px w-[280px] bg-brand-primary/30" />

        <div className="flex flex-col items-center gap-3 py-6 text-center">
          <Gift className="h-8 w-8 text-brand-primary" />
          <div className="flex flex-col items-center">
            <h3 className="text-h3 font-semibold text-brand-primary">Gratis indpakning</h3>
            <p className="text-body-sm text-brand-primary">
              Smuk indpakning inkluderet
            </p>
          </div>
        </div>

        <div className="mx-auto h-px w-[280px] bg-brand-primary/30" />

        <div className="flex flex-col items-center gap-3 py-6 text-center">
          <Truck className="h-8 w-8 text-brand-primary" />
          <div className="flex flex-col items-center">
            <h3 className="text-h3 font-semibold text-brand-primary">Levering kun 79 kr.</h3>
            <p className="text-body-sm text-brand-primary">
              Levering i hele Danmark
            </p>
          </div>
        </div>
      </div>



    {/*Desktop version – elementer stablet med vandrette streger */}
      <div className="hidden sm:grid sm:grid-cols-3">
        <div className="flex justify-center border-r border-brand-primary/30 px-6 py-6">
          <div className="flex w-full max-w-[280px] items-start gap-4">
            <Clock3 className="h-8 w-8 shrink-0 text-brand-primary" />
            <div className="flex flex-col">
              <h3 className="text-h3 font-semibold text-brand-primary">Samme-dag levering</h3>
              <p className="text-body-sm text-brand-primary">
                Bestil inden kl. 13 og få leveret i dag
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center border-r border-brand-primary/30 px-6 py-6">
          <div className="flex w-full max-w-[280px] items-start gap-4">
            <Gift className="h-8 w-8 shrink-0 text-brand-primary" />
            <div className="flex flex-col">
              <h3 className="text-h3 font-semibold text-brand-primary">Gratis indpakning</h3>
              <p className="text-body-sm text-brand-primary">
                Smuk indpakning inkluderet
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center px-6 py-6">
          <div className="flex w-full max-w-[280px] items-start gap-4">
            <Truck className="h-8 w-8 shrink-0 text-brand-primary" />
            <div className="flex flex-col">
              <h3 className="text-h3 font-semibold text-brand-primary">Levering kun 79 kr.</h3>
              <p className="text-body-sm text-brand-primary">
                Levering i hele Danmark
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}