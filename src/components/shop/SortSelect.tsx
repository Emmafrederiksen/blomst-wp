import Dropdown from "@/components/shop/Dropdown"

// Sorterings-muligheder defineret udenfor komponenten
// så de ikke genskabes hver gang komponenten re-renderes
const sortOptions = [
  { value: "price-asc",  label: "Pris: lav til høj" },
  { value: "price-desc", label: "Pris: høj til lav" },
]

type Props = {
  value: string
  onChange: (value: string) => void
}

export default function SortSelect({ value, onChange }: Props) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-sans text-body-sm text-brand-muted font-medium">
        Sortér:
      </span>
      <Dropdown
        options={sortOptions}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}