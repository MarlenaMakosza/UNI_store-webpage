import Layout from "../components/Layout.tsx";

export default function RegulationsPage() {
  return (
    <Layout>
      <div class="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section class="relative bg-gradient-to-br from-purple-50 via-white to-blue-50 py-16 md:py-24">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl mx-auto text-center">
              <div class="inline-flex items-center justify-center w-20 h-20 btn-gradient rounded-full mb-6">
                <span class="text-4xl">📋</span>
              </div>
              <h1 class="text-4xl md:text-5xl font-bold mb-6">
                <span class="gradient-text">Regulamin</span>
              </h1>
              <p class="text-xl text-gray-600">
                Regulamin sklepu internetowego TechNest
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section class="py-16">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div class="prose prose-lg max-w-none">
              <div class="bg-white rounded-lg p-8 border border-gray-200 mb-8 shadow-sm">
                <h2 class="text-2xl font-bold text-gray-800 mb-4">§1. Postanowienia ogólne</h2>
                <ol class="list-decimal list-inside space-y-3 text-gray-600">
                  <li>Sklep internetowy TechNest prowadzony jest przez TechNest Sp. z o.o. z siedzibą w Warszawie.</li>
                  <li>Regulamin określa zasady korzystania ze sklepu internetowego oraz warunki zawierania umów sprzedaży.</li>
                  <li>Każdy Klient zobowiązany jest do zapoznania się z regulaminem przed rozpoczęciem korzystania ze sklepu.</li>
                  <li>Korzystanie ze sklepu oznacza akceptację niniejszego regulaminu.</li>
                </ol>
              </div>

              <div class="bg-white rounded-lg p-8 border border-gray-200 mb-8 shadow-sm">
                <h2 class="text-2xl font-bold text-gray-800 mb-4">§2. Definicje</h2>
                <ul class="space-y-3 text-gray-600">
                  <li><strong class="text-gray-800">Sklep</strong> - sklep internetowy dostępny pod adresem technest.pl</li>
                  <li><strong class="text-gray-800">Sprzedawca</strong> - TechNest Sp. z o.o.</li>
                  <li><strong class="text-gray-800">Klient</strong> - osoba fizyczna, prawna lub jednostka organizacyjna składająca zamówienie</li>
                  <li><strong class="text-gray-800">Produkt</strong> - towar dostępny w ofercie sklepu</li>
                  <li><strong class="text-gray-800">Zamówienie</strong> - oświadczenie woli Klienta zmierzające do zawarcia umowy sprzedaży</li>
                </ul>
              </div>

              <div class="bg-white rounded-lg p-8 border border-gray-200 mb-8 shadow-sm">
                <h2 class="text-2xl font-bold text-gray-800 mb-4">§3. Składanie zamówień</h2>
                <ol class="list-decimal list-inside space-y-3 text-gray-600">
                  <li>Zamówienia można składać 24 godziny na dobę, 7 dni w tygodniu.</li>
                  <li>W celu złożenia zamówienia należy dodać produkty do koszyka i przejść przez proces zamówienia.</li>
                  <li>Złożenie zamówienia stanowi ofertę zawarcia umowy sprzedaży.</li>
                  <li>Potwierdzenie przyjęcia zamówienia jest równoznaczne z zawarciem umowy sprzedaży.</li>
                  <li>Sprzedawca zastrzega sobie prawo do odmowy realizacji zamówienia w uzasadnionych przypadkach.</li>
                </ol>
              </div>

              <div class="bg-white rounded-lg p-8 border border-gray-200 mb-8 shadow-sm">
                <h2 class="text-2xl font-bold text-gray-800 mb-4">§4. Płatności</h2>
                <ol class="list-decimal list-inside space-y-3 text-gray-600">
                  <li>Ceny produktów podane są w złotych polskich i zawierają podatek VAT.</li>
                  <li>Dostępne metody płatności: karta płatnicza, przelew bankowy, BLIK, PayPal, płatność za pobraniem.</li>
                  <li>Płatność powinna zostać dokonana w ciągu 7 dni od złożenia zamówienia.</li>
                  <li>W przypadku braku płatności zamówienie może zostać anulowane.</li>
                </ol>
              </div>

              <div class="bg-white rounded-lg p-8 border border-gray-200 mb-8 shadow-sm">
                <h2 class="text-2xl font-bold text-gray-800 mb-4">§5. Dostawa</h2>
                <ol class="list-decimal list-inside space-y-3 text-gray-600">
                  <li>Dostawa realizowana jest na terenie Polski.</li>
                  <li>Czas dostawy wynosi od 1 do 3 dni roboczych.</li>
                  <li>Koszty dostawy zależą od wybranej metody i są podane przy składaniu zamówienia.</li>
                  <li>Darmowa dostawa przy zamówieniach powyżej 150 zł.</li>
                </ol>
              </div>

              <div class="bg-white rounded-lg p-8 border border-gray-200 mb-8 shadow-sm">
                <h2 class="text-2xl font-bold text-gray-800 mb-4">§6. Prawo do odstąpienia od umowy</h2>
                <ol class="list-decimal list-inside space-y-3 text-gray-600">
                  <li>Klient będący konsumentem ma prawo odstąpić od umowy w ciągu 14 dni bez podania przyczyny.</li>
                  <li>Termin do odstąpienia od umowy wygasa po upływie 14 dni od dnia odbioru produktu.</li>
                  <li>Aby skorzystać z prawa odstąpienia, należy poinformować Sprzedawcę o swojej decyzji.</li>
                  <li>Zwrot środków nastąpi w ciągu 14 dni od otrzymania oświadczenia o odstąpienia.</li>
                </ol>
              </div>

              <div class="bg-white rounded-lg p-8 border border-gray-200 mb-8 shadow-sm">
                <h2 class="text-2xl font-bold text-gray-800 mb-4">§7. Reklamacje</h2>
                <ol class="list-decimal list-inside space-y-3 text-gray-600">
                  <li>Sprzedawca odpowiada za wady produktu na podstawie przepisów o rękojmi.</li>
                  <li>Reklamacje można składać drogą elektroniczną lub pocztową.</li>
                  <li>Reklamacja zostanie rozpatrzona w ciągu 14 dni od jej otrzymania.</li>
                  <li>Klient zostanie poinformowany o sposobie rozpatrzenia reklamacji.</li>
                </ol>
              </div>

              <div class="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
                <h2 class="text-2xl font-bold text-gray-800 mb-4">§8. Postanowienia końcowe</h2>
                <ol class="list-decimal list-inside space-y-3 text-gray-600">
                  <li>Regulamin wchodzi w życie z dniem opublikowania na stronie sklepu.</li>
                  <li>Sprzedawca zastrzega sobie prawo do zmiany regulaminu.</li>
                  <li>W sprawach nieuregulowanych zastosowanie mają przepisy prawa polskiego.</li>
                  <li>Spory będą rozstrzygane przez sąd właściwy dla siedziby Sprzedawcy.</li>
                </ol>
              </div>
            </div>

            <div class="mt-8 text-center text-gray-500 text-sm">
              <p>Data ostatniej aktualizacji: 1 stycznia 2025</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
