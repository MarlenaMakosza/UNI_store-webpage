export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer class="border-t border-gray-200 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div class="col-span-1 md:col-span-2">
            <h3 class="text-xl font-bold gradient-text mb-4">
              TechNest
            </h3>
            <p class="text-gray-600 text-sm">
              Twój sklep z elektroniką najwyższej jakości.
              Oferujemy szeroką gamę produktów w konkurencyjnych cenach.
            </p>
          </div>

          <div>
            <h4 class="font-semibold text-gray-800 mb-4">Nawigacja</h4>
            <ul class="space-y-2">
              <li>
                <a href="/" class="text-gray-600 hover:text-primary text-sm transition-colors">
                  Strona główna
                </a>
              </li>
              <li>
                <a href="/produkty" class="text-gray-600 hover:text-primary text-sm transition-colors">
                  Produkty
                </a>
              </li>
              <li>
                <a href="/kategorie" class="text-gray-600 hover:text-primary text-sm transition-colors">
                  Kategorie
                </a>
              </li>
              <li>
                <a href="/blog" class="text-gray-600 hover:text-primary text-sm transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/kontakt" class="text-gray-600 hover:text-primary text-sm transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="font-semibold text-gray-800 mb-4">Informacje</h4>
            <ul class="space-y-2">
              <li>
                <a href="/dostawa" class="text-gray-600 hover:text-primary text-sm transition-colors">
                  Dostawa
                </a>
              </li>
              <li>
                <a href="/platnosci" class="text-gray-600 hover:text-primary text-sm transition-colors">
                  Płatności
                </a>
              </li>
              <li>
                <a href="/regulamin" class="text-gray-600 hover:text-primary text-sm transition-colors">
                  Regulamin
                </a>
              </li>
              <li>
                <a href="/polityka-prywatnosci" class="text-gray-600 hover:text-primary text-sm transition-colors">
                  Polityka prywatności
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="font-semibold text-gray-800 mb-4">Kontakt</h4>
            <ul class="space-y-2">
              <li>
                <a href="/kontakt" class="text-gray-600 hover:text-secondary text-sm transition-colors">
                  Formularz kontaktowy
                </a>
              </li>
              <li class="text-gray-600 text-sm">Email: kontakt@technest.pl</li>
              <li class="text-gray-600 text-sm">Telefon: +48 123 456 789</li>
              <li class="text-gray-600 text-sm">Adres: ul. Przykładowa 1, Warszawa</li>
            </ul>
          </div>
        </div>

        <div class="border-t border-gray-200 mt-8 pt-8 text-center">
          <p class="text-gray-500 text-sm">
            &copy; {currentYear} TechNest. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}
