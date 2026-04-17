import { Crown } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="bg-black border-b border-red-900/50">
      <div className="mx-auto w-full max-w-screen-2xl px-2 sm:px-4 py-2 sm:py-4">
        <div className="flex items-center justify-center w-full min-w-0">
          <Link
            href="/"
            className="inline-flex flex-nowrap items-center justify-center gap-1.5 sm:gap-2 min-w-0 max-w-full hover:opacity-80 transition-opacity"
          >
            <Crown className="h-5 w-5 sm:h-7 sm:w-7 text-yellow-500 shrink-0" aria-hidden />
            <span className="font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent whitespace-nowrap leading-none tracking-tight text-[10px] min-[360px]:text-xs sm:text-base md:text-xl lg:text-2xl">
              Legjobb Kaszinók Magyarország
            </span>
          </Link>
        </div>
      </div>
    </header>
  )
}
