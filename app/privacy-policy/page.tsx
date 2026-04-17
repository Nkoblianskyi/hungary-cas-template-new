import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-8">Adatvédelmi tájékoztató</h1>

          <div className="prose prose-invert max-w-none">
            <div className="bg-gray-900 rounded-lg p-8 space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-yellow-500 mb-4">1. Milyen adatokat gyűjtünk?</h2>
                <p className="text-gray-300 mb-4">
                  Olyan információkat gyűjtünk, amelyeket Ön közvetlenül megad, például ha fiókot hoz létre,
                  feliratkozik hírlevelünkre, vagy ügyfélszolgálathoz fordul.
                </p>
                <ul className="text-gray-300 space-y-2 ml-6">
                  <li>• Személyes adatok (név, e-mail cím)</li>
                  <li>• Használati és elemzési adatok</li>
                  <li>• Eszköz- és böngészőinformációk</li>
                  <li>• Sütik és követési technológiák</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-yellow-500 mb-4">2. Hogyan használjuk fel az adatait?</h2>
                <p className="text-gray-300 mb-4">A gyűjtött információkat többek között erre használjuk:</p>
                <ul className="text-gray-300 space-y-2 ml-6">
                  <li>• Szolgáltatásaink nyújtása és fejlesztése</li>
                  <li>• Frissítések és marketing anyagok küldése</li>
                  <li>• Használati minták és trendek elemzése</li>
                  <li>• Biztonság és csalás megelőzése</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-yellow-500 mb-4">3. Adatmegosztás</h2>
                <p className="text-gray-300">
                  Nem értékesítjük, nem adjuk el és nem adjuk át személyes adatait harmadik félnek az Ön hozzájárulása
                  nélkül, kivéve, ha ebben a tájékoztatóban másként szerepel.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-yellow-500 mb-4">4. Adatbiztonság</h2>
                <p className="text-gray-300">
                  Megfelelő biztonsági intézkedéseket alkalmazunk személyes adatai jogosulatlan hozzáférése, módosítása,
                  nyilvánosságra hozatala vagy megsemmisítése ellen.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-yellow-500 mb-4">5. Az Ön jogai</h2>
                <p className="text-gray-300 mb-4">Önnek joga van többek között:</p>
                <ul className="text-gray-300 space-y-2 ml-6">
                  <li>• Hozzáférni személyes adataihoz</li>
                  <li>• Hibás adatok helyesbítését kérni</li>
                  <li>• Személyes adatai törlését kérni</li>
                  <li>• Leiratkozni marketing üzenetekről</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-yellow-500 mb-4">6. Kapcsolat</h2>
                <p className="text-gray-300">
                  Ha kérdése van ezzel az adatvédelmi tájékoztatóval kapcsolatban, vegye fel velünk a kapcsolatot a
                  weboldalon feltüntetett elérhetőségen.
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
