"use client"

import { Advantages } from "./advantages"

export function Hero() {
  const currentDate = new Date()
  const monthNames = [
    "január",
    "február",
    "március",
    "április",
    "május",
    "június",
    "július",
    "augusztus",
    "szeptember",
    "október",
    "november",
    "december",
  ]
  const currentMonth = monthNames[currentDate.getMonth()]
  const currentYear = currentDate.getFullYear()

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-7 md:py-12 min-h-[200px] sm:min-h-[280px] md:min-h-0 overflow-hidden"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 container mx-auto px-3 sm:px-4 text-center flex flex-col justify-center">
        <div className="mb-2 md:mb-6">
          <h1 className="font-bold drop-shadow-lg leading-snug md:leading-tight text-balance max-w-4xl mx-auto text-lg sm:text-3xl md:text-5xl lg:text-6xl">
            <span className="text-red-600">Legjobb online kaszinók</span>
            <span className="text-white"> Magyarországon </span>
          </h1>
        </div>

        <p className="text-xs sm:text-sm md:text-lg text-gray-200 max-w-3xl mx-auto drop-shadow-md mb-4 md:mb-8 leading-snug px-1">
          A legjobb bónuszok, a leggyorsabb kifizetések és a legmegbízhatóbb online kaszinók egy helyen.
        </p>

        <div className="block md:hidden mb-2">
          <Advantages />
        </div>

        <div className="hidden md:block mb-2">
          <Advantages />
        </div>

        <div className="mt-1 md:mt-4">
          <p className="text-[10px] sm:text-xs text-gray-400 px-1">
            Az értékelések havonta frissülnek • Utolsó frissítés: {currentMonth} {currentYear}
          </p>
        </div>
      </div>
    </section>
  )
}
