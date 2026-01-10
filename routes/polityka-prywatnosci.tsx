import Layout from "../components/Layout.tsx";

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      <div class="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section class="relative bg-gradient-to-br from-purple-50 via-white to-blue-50 py-16 md:py-24">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl mx-auto text-center">
              <div class="inline-flex items-center justify-center w-20 h-20 btn-gradient rounded-full mb-6">
                <span class="text-4xl">🔒</span>
              </div>
              <h1 class="text-4xl md:text-5xl font-bold mb-6">
                <span class="gradient-text">Polityka prywatności</span>
              </h1>
              <p class="text-xl text-gray-600">
                Informacje o przetwarzaniu danych osobowych
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section class="py-16">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div class="prose prose-lg max-w-none">
              <div class="bg-white rounded-lg p-8 border border-gray-200 mb-8 shadow-sm">
                <h2 class="text-2xl font-bold text-gray-800 mb-4">1. Administrator danych</h2>
                <p class="text-gray-600">
                  Administratorem danych osobowych jest TechNest Sp. z o.o. z siedzibą w Warszawie,
                  ul. Elektroniczna 123, 00-001 Warszawa, NIP: 123-456-78-90, REGON: 123456789.
                </p>
                <p class="text-gray-600 mt-4">
                  Kontakt z administratorem: <a href="mailto:dane@technest.pl" class="text-primary hover:text-secondary">dane@technest.pl</a>
                </p>
              </div>

              <div class="bg-white rounded-lg p-8 border border-gray-200 mb-8 shadow-sm">
                <h2 class="text-2xl font-bold text-gray-800 mb-4">2. Zakres zbieranych danych</h2>
                <p class="text-gray-600 mb-4">Zbieramy następujące dane osobowe:</p>
                <ul class="list-disc list-inside space-y-2 text-gray-600">
                  <li>Imię i nazwisko</li>
                  <li>Adres e-mail</li>
                  <li>Numer telefonu</li>
                  <li>Adres dostawy</li>
                  <li>Dane do faktury (opcjonalnie)</li>
                  <li>Historia zamówień</li>
                </ul>
              </div>

              <div class="bg-white rounded-lg p-8 border border-gray-200 mb-8 shadow-sm">
                <h2 class="text-2xl font-bold text-gray-800 mb-4">3. Cel przetwarzania danych</h2>
                <p class="text-gray-600 mb-4">Dane osobowe przetwarzamy w celu:</p>
                <ul class="list-disc list-inside space-y-2 text-gray-600">
                  <li>Realizacji zamówień i umów sprzedaży</li>
                  <li>Obsługi klienta i odpowiedzi na zapytania</li>
                  <li>Wysyłki newslettera (za zgodą)</li>
                  <li>Marketingu bezpośredniego (za zgodą)</li>
                  <li>Realizacji obowiązków prawnych (np. księgowość)</li>
                  <li>Dochodzenia roszczeń</li>
                </ul>
              </div>

              <div class="bg-white rounded-lg p-8 border border-gray-200 mb-8 shadow-sm">
                <h2 class="text-2xl font-bold text-gray-800 mb-4">4. Podstawa prawna przetwarzania</h2>
                <ul class="list-disc list-inside space-y-2 text-gray-600">
                  <li><strong class="text-gray-800">Art. 6 ust. 1 lit. b RODO</strong> - wykonanie umowy</li>
                  <li><strong class="text-gray-800">Art. 6 ust. 1 lit. a RODO</strong> - zgoda (newsletter, marketing)</li>
                  <li><strong class="text-gray-800">Art. 6 ust. 1 lit. c RODO</strong> - obowiązek prawny</li>
                  <li><strong class="text-gray-800">Art. 6 ust. 1 lit. f RODO</strong> - prawnie uzasadniony interes</li>
                </ul>
              </div>

              <div class="bg-white rounded-lg p-8 border border-gray-200 mb-8 shadow-sm">
                <h2 class="text-2xl font-bold text-gray-800 mb-4">5. Odbiorcy danych</h2>
                <p class="text-gray-600 mb-4">Dane mogą być przekazywane:</p>
                <ul class="list-disc list-inside space-y-2 text-gray-600">
                  <li>Firmom kurierskim (realizacja dostawy)</li>
                  <li>Operatorom płatności (obsługa transakcji)</li>
                  <li>Dostawcom usług IT (hosting, systemy)</li>
                  <li>Biurom rachunkowym (księgowość)</li>
                  <li>Organom państwowym (na żądanie)</li>
                </ul>
              </div>

              <div class="bg-white rounded-lg p-8 border border-gray-200 mb-8 shadow-sm">
                <h2 class="text-2xl font-bold text-gray-800 mb-4">6. Okres przechowywania danych</h2>
                <ul class="list-disc list-inside space-y-2 text-gray-600">
                  <li>Dane związane z zamówieniami - 5 lat od końca roku kalendarzowego</li>
                  <li>Dane do celów marketingowych - do wycofania zgody</li>
                  <li>Dane do celów reklamacyjnych - 2 lata od zakupu</li>
                  <li>Dane konta użytkownika - do usunięcia konta</li>
                </ul>
              </div>

              <div class="bg-white rounded-lg p-8 border border-gray-200 mb-8 shadow-sm">
                <h2 class="text-2xl font-bold text-gray-800 mb-4">7. Prawa użytkowników</h2>
                <p class="text-gray-600 mb-4">Przysługują Ci następujące prawa:</p>
                <ul class="list-disc list-inside space-y-2 text-gray-600">
                  <li><strong class="text-gray-800">Prawo dostępu</strong> - uzyskanie informacji o przetwarzaniu</li>
                  <li><strong class="text-gray-800">Prawo do sprostowania</strong> - poprawienie błędnych danych</li>
                  <li><strong class="text-gray-800">Prawo do usunięcia</strong> - "prawo do bycia zapomnianym"</li>
                  <li><strong class="text-gray-800">Prawo do ograniczenia</strong> - ograniczenie przetwarzania</li>
                  <li><strong class="text-gray-800">Prawo do przenoszenia</strong> - otrzymanie danych w formacie</li>
                  <li><strong class="text-gray-800">Prawo do sprzeciwu</strong> - wobec marketingu bezpośredniego</li>
                  <li><strong class="text-gray-800">Prawo do skargi</strong> - do Prezesa UODO</li>
                </ul>
              </div>

              <div class="bg-white rounded-lg p-8 border border-gray-200 mb-8 shadow-sm">
                <h2 class="text-2xl font-bold text-gray-800 mb-4">8. Pliki cookies</h2>
                <p class="text-gray-600 mb-4">Nasz sklep wykorzystuje pliki cookies w celach:</p>
                <ul class="list-disc list-inside space-y-2 text-gray-600">
                  <li>Niezbędnych do działania strony (sesja, koszyk)</li>
                  <li>Analitycznych (Google Analytics)</li>
                  <li>Marketingowych (reklamy, remarketing)</li>
                  <li>Funkcjonalnych (preferencje użytkownika)</li>
                </ul>
                <p class="text-gray-600 mt-4">
                  Możesz zarządzać plikami cookies w ustawieniach przeglądarki.
                </p>
              </div>

              <div class="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
                <h2 class="text-2xl font-bold text-gray-800 mb-4">9. Bezpieczeństwo danych</h2>
                <p class="text-gray-600">
                  Stosujemy odpowiednie środki techniczne i organizacyjne w celu ochrony danych osobowych,
                  w tym szyfrowanie SSL, kontrolę dostępu, regularne kopie zapasowe oraz szkolenia pracowników
                  z zakresu ochrony danych osobowych.
                </p>
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
