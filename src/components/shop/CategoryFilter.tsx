"use client"

import { Category } from "@/types/category"

type Props = {
    categories: Category[]
    activeCategory: number | null
    onCategoryChange: (id: number | null) => void
}

export default function CategoryFilter({ categories, activeCategory, onCategoryChange }: Props) {
    return (
        <div className="flex gap-2 flex-wrap mb-6">

            {/* Alle – starter som aktiv som default */}
            <button
                onClick={() => onCategoryChange(null)}
                className={`
                    font-sans text-body-sm font-medium
                    px-5 py-2 rounded-pill border
                    transition-all duration-200
                    ${activeCategory === null
                        ? 'bg-brand-primary text-brand-white border-brand-primary'
                        : 'bg-white text-brand-dark border-gray-200 hover:border-brand-primary'
                    }
                `}
            >
                Alle
            </button>

            {categories.map((cat) => (
                <button
                    key={cat.id}
                    onClick={() => onCategoryChange(cat.id)}
                    className={`
                        font-sans text-body-sm font-medium
                        px-5 py-2 rounded-pill border
                        transition-all duration-200
                        ${activeCategory === cat.id
                            ? 'bg-brand-primary text-brand-white border-brand-primary'
                            : 'bg-white text-brand-dark border-gray-200 hover:border-brand-primary'
                        }
                    `}
                >
                    {cat.name}
                </button>
            ))}

        </div>
    )
}