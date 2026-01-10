import Layout from "../components/Layout.tsx";

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      <div class="min-h-screen bg-deep-black">
        {/* Hero Section */}
        <section class="relative bg-gradient-to-br from-deep-black via-gray-900 to-deep-black py-16 md:py-24">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl mx-auto text-center">
              <div class="inline-flex items-center justify-center w-20 h-20 btn-gradient rounded-full mb-6">
                <span class="text-4xl">🔒</span>
              </div>
              <h1 class="text-4xl md:text-5xl font-bold mb-6">
                <span class="gradient-text">Polityka prywatnosci</span>
              </h1>
              <p class="text-xl text-gray-300">
                Informacje o przetwarzaniu danych osobowych
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section class="py-16">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div class="prose prose-invert prose-lg max-w-none">
              <div class="bg-gray-900 rounded-lg p-8 border border-gray-800 mb-8">
                <h2 class="text-2xl font-bold text-white mb-4">1. Administrator danych</h2>
                <p class="text-gray-300">
                  Administratorem danych osobowych jest TechNest Sp. z o.o. z siedziba w Warszawie,
                  ul. Elektroniczna 123, 00-001 Warszawa, NIP: 123-456-78-90, REGON: 123456789.
                </p>
                <p class="text-gray-300 mt-4">
                  Kontakt z administratorem: <a href="mailto:dane@technest.pl" class="text-neon-violet hover:text-electric-blue">dane@technest.pl</a>
                </p>
              </div>

              <div class="bg-gray-900 rounded-lg p-8 border border-gray-800 mb-8">
                <h2 class="text-2xl font-bold text-white mb-4">2. Zakres zbieranych danych</h2>
                <p class="text-gray-300 mb-4">Zbieramy nastepujace dane osobowe:</p>
                <ul class="list-disc list-inside space-y-2 text-gray-300">
                  <li>Imie i nazwisko</li>
                  <li>Adres e-mail</li>
                  <li>Numer telefonu</li>
                  <li>Adres dostawy</li>
                  <li>Dane do faktury (opcjonalnie)</li>
                  <li>Historia zamowien</li>
                </ul>
              </div>

              <div class="bg-gray-900 rounded-lg p-8 border border-gray-800 mb-8">
                <h2 class="text-2xl font-bold text-white mb-4">3. Cel przetwarzania danych</h2>
                <p class="text-gray-300 mb-4">Dane osobowe przetwarzamy w celu:</p>
                <ul class="list-disc list-inside space-y-2 text-gray-300">
                  <li>Realizacji zamowien i umow sprzedazy</li>
                  <li>Obslugi klienta i odpowiedzi na zapytania</li>
                  <li>Wysylki newslettera (za zgoda)</li>
                  <li>Marketingu bezposredniego (za zgoda)</li>
                  <li>Realizacji obowiazkow prawnych (np. ksiegowosc)</li>
                  <li>Dochodzenia roszczen</li>
                </ul>
              </div>

              <div class="bg-gray-900 rounded-lg p-8 border border-gray-800 mb-8">
                <h2 class="text-2xl font-bold text-white mb-4">4. Podstawa prawna przetwarzania</h2>
                <ul class="list-disc list-inside space-y-2 text-gray-300">
                  <li><strong class="text-white">Art. 6 ust. 1 lit. b RODO</strong> - wykonanie umowy</li>
                  <li><strong class="text-white">Art. 6 ust. 1 lit. a RODO</strong> - zgoda (newsletter, marketing)</li>
                  <li><strong class="text-white">Art. 6 ust. 1 lit. c RODO</strong> - obowiazek prawny</li>
                  <li><strong class="text-white">Art. 6 ust. 1 lit. f RODO</strong> - prawnie uzasadniony interes</li>
                </ul>
              </div>

              <div class="bg-gray-900 rounded-lg p-8 border border-gray-800 mb-8">
                <h2 class="text-2xl font-bold text-white mb-4">5. Odbiorcy danych</h2>
                <p class="text-gray-300 mb-4">Dane moga byc przekazywane:</p>
                <ul class="list-disc list-inside space-y-2 text-gray-300">
                  <li>Firmom kurierskim (realizacja dostawy)</li>
                  <li>Operatorom platnosci (obsluga transakcji)</li>
                  <li>Dostawcom uslug IT (hosting, systemy)</li>
                  <li>Biurom rachunkowym (ksiegowosc)</li>
                  <li>Organom panstwowym (na zadanie)</li>
                </ul>
              </div>

              <div class="bg-gray-900 rounded-lg p-8 border border-gray-800 mb-8">
                <h2 class="text-2xl font-bold text-white mb-4">6. Okres przechowywania danych</h2>
                <ul class="list-disc list-inside space-y-2 text-gray-300">
                  <li>Dane zwiazane z zamowieniami - 5 lat od konca roku kalendarzowego</li>
                  <li>Dane do celow marketingowych - do wycofania zgody</li>
                  <li>Dane do celow reklamacyjnych - 2 lata od zakupu</li>
                  <li>Dane konta uzytkownika - do usuniecia konta</li>
                </ul>
              </div>

              <div class="bg-gray-900 rounded-lg p-8 border border-gray-800 mb-8">
                <h2 class="text-2xl font-bold text-white mb-4">7. Prawa uzytkownikow</h2>
                <p class="text-gray-300 mb-4">Przysluguja Ci nastepujace prawa:</p>
                <ul class="list-disc list-inside space-y-2 text-gray-300">
                  <li><strong class="text-white">Prawo dostepu</strong> - uzyskanie informacji o przetwarzaniu</li>
                  <li><strong class="text-white">Prawo do sprostowania</strong> - poprawienie blednych danych</li>
                  <li><strong class="text-white">Prawo do usuniecia</strong> - "prawo do bycia zapomnianym"</li>
                  <li><strong class="text-white">Prawo do ograniczenia</strong> - ograniczenie przetwarzania</li>
                  <li><strong class="text-white">Prawo do przenoszenia</strong> - otrzymanie danych w formacie</li>
                  <li><strong class="text-white">Prawo do sprzeciwu</strong> - wobec marketingu bezposredniego</li>
                  <li><strong class="text-white">Prawo do skargi</strong> - do Prezesa UODO</li>
                </ul>
              </div>

              <div class="bg-gray-900 rounded-lg p-8 border border-gray-800 mb-8">
                <h2 class="text-2xl font-bold text-white mb-4">8. Pliki cookies</h2>
                <p class="text-gray-300 mb-4">Nasz sklep wykorzystuje pliki cookies w celach:</p>
                <ul class="list-disc list-inside space-y-2 text-gray-300">
                  <li>Niezbednych do dzialania strony (sesja, koszyk)</li>
                  <li>Analitycznych (Google Analytics)</li>
                  <li>Marketingowych (reklamy, remarketing)</li>
                  <li>Funkcjonalnych (preferencje uzytkownika)</li>
                </ul>
                <p class="text-gray-300 mt-4">
                  Mozesz zarzadzac plikami cookies w ustawieniach przegladarki.
                </p>
              </div>

              <div class="bg-gray-900 rounded-lg p-8 border border-gray-800">
                <h2 class="text-2xl font-bold text-white mb-4">9. Bezpieczenstwo danych</h2>
                <p class="text-gray-300">
                  Stosujemy odpowiednie srodki techniczne i organizacyjne w celu ochrony danych osobowych,
                  w tym szyfrowanie SSL, kontrole dostepu, regularne kopie zapasowe oraz szkolenia pracownikow
                  z zakresu ochrony danych osobowych.
                </p>
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
