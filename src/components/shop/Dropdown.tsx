"use client"

import { useState, useRef, useEffect } from "react"

type Option = {
  value: string
  label: string
}

type Props = {
  options: Option[]
  value: string
  onChange: (value: string) => void
}

export default function Dropdown({ options, value, onChange }: Props) {

  // Styrer om dropdown listen er synlig eller ej
  const [isOpen, setIsOpen] = useState(false)

  // Ref til at registrere klik udenfor dropdown — lukker den automatisk
  const ref = useRef<HTMLDivElement>(null)

  // Finder den option der matcher den nuværende value – vises i knappen
  const current = options.find(o => o.value === value)

  // Lytter efter klik udenfor dropdown og lukker den
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div ref={ref} className="relative">

      {/* Trigger knap – viser nuværende valg og pil */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 border border-gray-200 rounded-pill px-4 py-2 bg-white font-sans text-body-sm text-brand-dark cursor-pointer hover:border-brand-primary transition-colors duration-200 focus:outline-none min-w-[180px] justify-between"
      >
        <span>{current?.label}</span>
        {/* Pil roterer når dropdown er åben */}
        <span className={`text-brand-muted transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>

      {/* Dropdown liste – vises kun når isOpen er true */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 z-10 bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden min-w-full">
          {options.map(option => (
            <button
              key={option.value}
              onClick={() => {
                onChange(option.value)
                setIsOpen(false)
              }}
              className={`w-full text-left px-4 py-2 font-sans text-body-sm transition-colors duration-200 hover:bg-brand-primary hover:text-brand-white ${
                value === option.value
                  ? "text-brand-primary font-medium bg-gray-50"
                  : "text-brand-dark"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}

    </div>
  )
}