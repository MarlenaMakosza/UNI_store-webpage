import Layout from "../components/Layout.tsx";

export default function RegulationsPage() {
  return (
    <Layout>
      <div class="min-h-screen bg-deep-black">
        {/* Hero Section */}
        <section class="relative bg-gradient-to-br from-deep-black via-gray-900 to-deep-black py-16 md:py-24">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl mx-auto text-center">
              <div class="inline-flex items-center justify-center w-20 h-20 btn-gradient rounded-full mb-6">
                <span class="text-4xl">📋</span>
              </div>
              <h1 class="text-4xl md:text-5xl font-bold mb-6">
                <span class="gradient-text">Regulamin</span>
              </h1>
              <p class="text-xl text-gray-300">
                Regulamin sklepu internetowego TechNest
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section class="py-16">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div class="prose prose-invert prose-lg max-w-none">
              <div class="bg-gray-900 rounded-lg p-8 border border-gray-800 mb-8">
                <h2 class="text-2xl font-bold text-white mb-4">§1. Postanowienia ogolne</h2>
                <ol class="list-decimal list-inside space-y-3 text-gray-300">
                  <li>Sklep internetowy TechNest prowadzony jest przez TechNest Sp. z o.o. z siedziba w Warszawie.</li>
                  <li>Regulamin okresla zasady korzystania ze sklepu internetowego oraz warunki zawierania umow sprzedazy.</li>
                  <li>Kazdy Klient zobowiazany jest do zapoznania sie z regulaminem przed rozpoczeciem korzystania ze sklepu.</li>
                  <li>Korzystanie ze sklepu oznacza akceptacje niniejszego regulaminu.</li>
                </ol>
              </div>

              <div class="bg-gray-900 rounded-lg p-8 border border-gray-800 mb-8">
                <h2 class="text-2xl font-bold text-white mb-4">§2. Definicje</h2>
                <ul class="space-y-3 text-gray-300">
                  <li><strong class="text-white">Sklep</strong> - sklep internetowy dostepny pod adresem technest.pl</li>
                  <li><strong class="text-white">Sprzedawca</strong> - TechNest Sp. z o.o.</li>
                  <li><strong class="text-white">Klient</strong> - osoba fizyczna, prawna lub jednostka organizacyjna skladajaca zamowienie</li>
                  <li><strong class="text-white">Produkt</strong> - towar dostepny w ofercie sklepu</li>
                  <li><strong class="text-white">Zamowienie</strong> - oswiadczenie woli Klienta zmierzajace do zawarcia umowy sprzedazy</li>
                </ul>
              </div>

              <div class="bg-gray-900 rounded-lg p-8 border border-gray-800 mb-8">
                <h2 class="text-2xl font-bold text-white mb-4">§3. Skladanie zamowien</h2>
                <ol class="list-decimal list-inside space-y-3 text-gray-300">
                  <li>Zamowienia mozna skladac 24 godziny na dobe, 7 dni w tygodniu.</li>
                  <li>W celu zlozenia zamowienia nalezy dodac produkty do koszyka i przejsc przez proces zamowienia.</li>
                  <li>Zlozenie zamowienia stanowi oferte zawarcia umowy sprzedazy.</li>
                  <li>Potwierdzenie przyjecia zamowienia jest rownoznaczne z zawarciem umowy sprzedazy.</li>
                  <li>Sprzedawca zastrzega sobie prawo do odmowy realizacji zamowienia w uzasadnionych przypadkach.</li>
                </ol>
              </div>

              <div class="bg-gray-900 rounded-lg p-8 border border-gray-800 mb-8">
                <h2 class="text-2xl font-bold text-white mb-4">§4. Platnosci</h2>
                <ol class="list-decimal list-inside space-y-3 text-gray-300">
                  <li>Ceny produktow podane sa w zlotych polskich i zawieraja podatek VAT.</li>
                  <li>Dostepne metody platnosci: karta platnicza, przelew bankowy, BLIK, PayPal, platnosc za pobraniem.</li>
                  <li>Platnosc powinna zostac dokonana w ciagu 7 dni od zlozenia zamowienia.</li>
                  <li>W przypadku braku platnosci zamowienie moze zostac anulowane.</li>
                </ol>
              </div>

              <div class="bg-gray-900 rounded-lg p-8 border border-gray-800 mb-8">
                <h2 class="text-2xl font-bold text-white mb-4">§5. Dostawa</h2>
                <ol class="list-decimal list-inside space-y-3 text-gray-300">
                  <li>Dostawa realizowana jest na terenie Polski.</li>
                  <li>Czas dostawy wynosi od 1 do 3 dni roboczych.</li>
                  <li>Koszty dostawy zaleza od wybranej metody i sa podane przy skladaniu zamowienia.</li>
                  <li>Darmowa dostawa przy zamowieniach powyzej 150 zl.</li>
                </ol>
              </div>

              <div class="bg-gray-900 rounded-lg p-8 border border-gray-800 mb-8">
                <h2 class="text-2xl font-bold text-white mb-4">§6. Prawo do odstapienia od umowy</h2>
                <ol class="list-decimal list-inside space-y-3 text-gray-300">
                  <li>Klient bedacy konsumentem ma prawo odstapic od umowy w ciagu 14 dni bez podania przyczyny.</li>
                  <li>Termin do odstapienia od umowy wygasa po uplywie 14 dni od dnia odbioru produktu.</li>
                  <li>Aby skorzystac z prawa odstapienia, nalezy poinformowac Sprzedawce o swojej decyzji.</li>
                  <li>Zwrot srodkow nastapi w ciagu 14 dni od otrzymania oswiadczenia o odstapienia.</li>
                </ol>
              </div>

              <div class="bg-gray-900 rounded-lg p-8 border border-gray-800 mb-8">
                <h2 class="text-2xl font-bold text-white mb-4">§7. Reklamacje</h2>
                <ol class="list-decimal list-inside space-y-3 text-gray-300">
                  <li>Sprzedawca odpowiada za wady produktu na podstawie przepisow o rekojmi.</li>
                  <li>Reklamacje mozna skladac drogą elektroniczna lub pocztowa.</li>
                  <li>Reklamacja zostanie rozpatrzona w ciagu 14 dni od jej otrzymania.</li>
                  <li>Klient zostanie poinformowany o sposobie rozpatrzenia reklamacji.</li>
                </ol>
              </div>

              <div class="bg-gray-900 rounded-lg p-8 border border-gray-800">
                <h2 class="text-2xl font-bold text-white mb-4">§8. Postanowienia koncowe</h2>
                <ol class="list-decimal list-inside space-y-3 text-gray-300">
                  <li>Regulamin wchodzi w zycie z dniem opublikowania na stronie sklepu.</li>
                  <li>Sprzedawca zastrzega sobie prawo do zmiany regulaminu.</li>
                  <li>W sprawach nieuregulowanych zastosowanie maja przepisy prawa polskiego.</li>
                  <li>Spory beda rozstrzygane przez sad wlasciwy dla siedziby Sprzedawcy.</li>
                </ol>
              </div>
            </div>

            <div class="mt-8 text-center text-gray-400 text-sm">
              <p>Data ostatniej aktualizacji: 1 stycznia 2025</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
