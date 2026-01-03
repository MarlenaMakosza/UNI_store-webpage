import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 bg-deep-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold bg-gradient-to-r from-neon-violet to-electric-blue bg-clip-text text-transparent mb-4">
              TechNest
            </h3>
            <p className="text-gray-400 text-sm">
              Twój sklep z elektroniką najwyższej jakości.
              Oferujemy szeroką gamę produktów w konkurencyjnych cenach.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Nawigacja</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-neon-violet text-sm transition-colors">
                  Strona główna
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-neon-violet text-sm transition-colors">
                  Produkty
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-400 hover:text-neon-violet text-sm transition-colors">
                  Kategorie
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-neon-violet text-sm transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-neon-violet text-sm transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Informacje</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/dostawa" className="text-gray-400 hover:text-neon-violet text-sm transition-colors">
                  Dostawa
                </Link>
              </li>
              <li>
                <Link href="/platnosci" className="text-gray-400 hover:text-neon-violet text-sm transition-colors">
                  Płatności
                </Link>
              </li>
              <li>
                <Link href="/regulamin" className="text-gray-400 hover:text-neon-violet text-sm transition-colors">
                  Regulamin
                </Link>
              </li>
              <li>
                <Link href="/polityka-prywatnosci" className="text-gray-400 hover:text-neon-violet text-sm transition-colors">
                  Polityka prywatności
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Kontakt</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-electric-blue text-sm transition-colors">
                  Formularz kontaktowy
                </Link>
              </li>
              <li className="text-gray-400 text-sm">Email: kontakt@technest.pl</li>
              <li className="text-gray-400 text-sm">Telefon: +48 123 456 789</li>
              <li className="text-gray-400 text-sm">Adres: ul. Przykładowa 1, Warszawa</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} TechNest. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}
