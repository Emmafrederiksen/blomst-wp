"use client"

import { Trash2 } from "lucide-react"

type Props = {
  isOpen: boolean
  productName: string
  onConfirm: () => void
  onCancel: () => void
}

export default function ConfirmDialog({ isOpen, productName, onConfirm, onCancel }: Props) {

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onCancel}
        className="fixed inset-0 z-[60] bg-black/30"
      />

      {/* Dialog boks */}
      <div className="
        fixed top-1/2 left-1/2 z-[70]
        -translate-x-1/2 -translate-y-1/2
        bg-white rounded-2xl shadow-2xl
        p-6 w-80
        flex flex-col gap-4
      ">

        {/* Ikon — Trash2 fra lucide-react */}
        <div className="flex justify-center">
          <Trash2 className="w-8 h-8 text-brand-muted" />
        </div>

        {/* Tekst */}
        <div className="text-center">
          <h3 className="font-sans text-h3 font-medium text-brand-dark mb-1">
            Fjern produkt?
          </h3>
          <p className="font-sans text-body-sm text-brand-muted">
            Er du sikker på du vil fjerne{" "}
            <span className="font-medium text-brand-dark">{productName}</span>{" "}
            fra din kurv?
          </p>
        </div>

        {/* Knapper */}
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 py-2.5 rounded-pill border border-gray-200 font-sans text-body-sm text-brand-muted hover:border-brand-primary hover:text-brand-primary transition-colors duration-200"
          >
            Annuller
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 py-2.5 rounded-pill bg-red-600 text-white font-sans text-body-sm font-medium hover:opacity-90 transition-opacity duration-200"
          >
            Fjern
          </button>
        </div>

      </div>
    </>
  )
}