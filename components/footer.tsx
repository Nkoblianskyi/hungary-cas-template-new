import { Crown } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black border-t border-red-900/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Site Info */}
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-4 hover:opacity-80 transition-opacity">
              <Crown className="h-8 w-8 text-yellow-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
                Melhores Casinos Portugal
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              O seu guia confiável para os melhores casinos online em Portugal. Avaliamos e classificamos apenas
              operadores licenciados e seguros.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#rankings" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Avaliações de Casinos
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          {/* Organization Logos */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
            <Link
              href="https://www.sicad.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-slate-700/50 rounded-lg p-2 md:p-4 flex items-center justify-center transition-colors bg-slate-50"
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icad-FfeiLmNc2Ag2xKW03ngHTdFldxyzf1.png"
                alt="ICAD"
                className="h-8 md:h-12 w-auto object-contain"
              />
            </Link>
            <Link
              href="https://www.gamcare.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-slate-700/50 rounded-lg p-2 md:p-4 flex items-center justify-center transition-colors bg-slate-50"
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gamecare-LtS86QNPP02NevvJ00SBxNtsnV8TpX.svg"
                alt="GamCare"
                className="h-8 md:h-12 w-auto object-contain"
              />
            </Link>
            <Link
              href="https://www.srij.turismodeportugal.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-slate-700/50 rounded-lg p-2 md:p-4 flex items-center justify-center transition-colors bg-slate-100"
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/srij-KVwkemHOVmr9M9sBTzRTE9poGfKBdY.svg"
                alt="SRIJ - Serviço de Regulação e Inspeção de Jogos"
                className="h-8 md:h-12 w-auto object-contain"
              />
            </Link>
            <Link
              href="https://www.gambleaware.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-slate-700/50 rounded-lg p-2 md:p-4 flex items-center justify-center transition-colors bg-slate-100"
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gamble-ENaNmaq07PBtZWQHNXwVjnLBrAGuaL.webp"
                alt="GambleAware"
                className="h-8 md:h-12 w-auto object-contain"
              />
            </Link>
            <Link
              href="https://www.jogoresponsavel.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-slate-700/50 rounded-lg p-2 md:p-4 flex items-center justify-center transition-colors"
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jogo2-4mZ5RwAWv2B99sjJpLSzIGxeqWCyYH.png"
                alt="Jogo Responsável"
                className="h-8 md:h-12 w-auto object-contain"
              />
            </Link>
            {/* 18+ Badge */}
            <div className="flex justify-center">
              <div className="bg-red-600 text-white px-2 py-2 rounded-full font-bold text-lg border-2 border-yellow-500">
                18+
              </div>
            </div>
          </div>

          <p className="text-gray-500 text-sm text-center">
            © 2025 Melhores Casinos Portugal. Todos os direitos reservados. | Jogo Responsável
          </p>
        </div>
      </div>
    </footer>
  )
}
