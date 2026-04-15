export default function ProductCardSkeleton() {
    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col animate-pulse">

            {/* Billede placeholder — samme højde som det rigtige billede */}
            <div className="bg-gray-200 h-[600px] w-full" />

            {/* Kortets indhold */}
            <div className="p-5 flex flex-col flex-1 gap-3">

                {/* Kategori-label placeholder */}
                <div className="bg-gray-200 rounded-full h-3 w-24" />

                {/* Produktnavn placeholder */}
                <div className="bg-gray-200 rounded-full h-5 w-3/4" />

                {/* Beskrivelse placeholder — to linjer */}
                <div className="flex flex-col gap-2 flex-1">
                    <div className="bg-gray-200 rounded-full h-4 w-full" />
                    <div className="bg-gray-200 rounded-full h-4 w-2/3" />
                </div>

                {/* Pris og knap placeholder */}
                <div className="flex items-center justify-between mt-4">
                    <div className="bg-gray-200 rounded-full h-5 w-16" />
                    <div className="bg-gray-200 rounded-full h-10 w-32" />
                </div>

            </div>
        </div>
    )
}