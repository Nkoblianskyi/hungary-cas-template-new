import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-8">Süti szabályzat</h1>

          <div className="prose prose-invert max-w-none">
            <div className="bg-gray-900 rounded-lg p-8 space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-yellow-500 mb-4">Mik azok a sütik?</h2>
                <p className="text-gray-300">
                  A sütik (cookie-k) kis szöveges fájlok, amelyek az Ön számítógépén vagy mobileszközén tárolódnak,
                  amikor meglátogatja weboldalunkat. Segítenek jobb élményt nyújtani: megjegyzik a beállításait, és
                  elemezzük, hogyan használja az oldalt.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-yellow-500 mb-4">Milyen sütiket használunk?</h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-red-500 mb-2">Szükséges sütik</h3>
                    <p className="text-gray-300">
                      Ezek elengedhetetlenek a weboldal megfelelő működéséhez. Lehetővé teszik az alapvető funkciókat,
                      például az oldalak közötti navigációt és a védett tartalmakhoz való hozzáférést.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-red-500 mb-2">Elemző sütik</h3>
                    <p className="text-gray-300">
                      Elemző sütikkel megértjük, a látogatók hogyan használják weboldalunkat. Ez segít fejleszteni a
                      tartalmat és a felhasználói élményt.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-red-500 mb-2">Marketing sütik</h3>
                    <p className="text-gray-300">
                      Ezek a böngészési szokások alapján releváns hirdetéseket jeleníthetnek meg, és mérik marketing
                      kampányaink hatékonyságát.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-yellow-500 mb-4">A sütik kezelése</h2>
                <p className="text-gray-300 mb-4">Többféleképpen szabályozhatja a sütiket:</p>
                <ul className="text-gray-300 space-y-2 ml-6">
                  <li>• A süti sáv segítségével elfogadhatja vagy elutasíthatja a nem alapvető sütiket</li>
                  <li>• A böngésző beállításaiban letilthatja vagy törölheti a sütiket</li>
                  <li>• Böngészőbővítményekkel kezelheti a sütiket</li>
                  <li>• Leiratkozhat harmadik felek hirdetési sütijeiről</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-yellow-500 mb-4">Harmadik felek sütijei</h2>
                <p className="text-gray-300">
                  Harmadik féltől származó szolgáltatásokat (például Google Analytics) is használhatunk, amelyek saját
                  sütiket helyezhetnek el. Ezeknek megvan a saját adatvédelmi és süti szabályzatuk.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-yellow-500 mb-4">Szabályzat frissítése</h2>
                <p className="text-gray-300">
                  Időnként frissíthetjük ezt a süti szabályzatot. A változások ezen az oldalon jelennek meg, frissített
                  keltezéssel.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
