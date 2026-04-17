import { Crown } from "lucide-react"
import Link from "next/link"

const authorityLinkClass =
  "bg-transparent hover:bg-white/10 border border-yellow-400/30 rounded-xl px-4 py-3 text-sm font-semibold text-yellow-400 hover:text-yellow-300 transition-all duration-300 hover:border-yellow-400 hover:scale-105"

export function Footer() {
  return (
    <footer className="bg-black border-t border-red-900/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 sm:gap-3 mb-4 min-w-0 hover:opacity-80 transition-opacity"
            >
              <Crown className="h-7 w-7 sm:h-8 sm:w-8 text-yellow-500 shrink-0" />
              <span className="font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent whitespace-nowrap text-[clamp(0.75rem,3.2vw,1.25rem)] sm:text-xl tracking-tight">
                Legjobb Kaszinók Magyarország
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              Megbízható útmutató a legjobb online kaszinókhoz Magyarországon. Csak ellenőrzött, biztonságos
              szolgáltatókat értékelünk és rangsorolunk.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-wrap justify-center items-center gap-3 mb-6">
            <Link
              href="https://sztfh.gov.hu/hu"
              target="_blank"
              rel="noopener noreferrer"
              className={authorityLinkClass}
            >
              SZTFH
            </Link>
            <Link
              href="https://www.felelossegteljesjatek.hu/"
              target="_blank"
              rel="noopener noreferrer"
              className={authorityLinkClass}
            >
              Felelős játék
            </Link>
            <Link
              href="https://www.gamcare.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-white/10 border border-gray-500 rounded-xl px-4 py-3 text-sm font-semibold text-gray-900 hover:text-black transition-all duration-300 hover:border-yellow-400"
            >
              GamCare
            </Link>
            <Link
              href="https://www.gambleaware.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-white/10 border border-gray-500 rounded-xl px-4 py-3 text-sm font-semibold text-gray-900 hover:text-black transition-all duration-300 hover:border-yellow-400"
            >
              GambleAware
            </Link>
            <div className="flex justify-center">
              <div className="bg-red-600 text-white px-2 py-2 rounded-full font-bold text-lg border-2 border-yellow-500">
                18+
              </div>
            </div>
          </div>

          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Legjobb Kaszinók Magyarország. Minden jog fenntartva. | Felelős szerencsejáték
          </p>
        </div>
      </div>
    </footer>
  )
}
