import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 bg-deep-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold bg-gradient-to-r from-neon-violet to-electric-blue bg-clip-text text-transparent mb-4">
              MAKOSZA
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
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Kontakt</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Email: kontakt@makosza.pl</li>
              <li>Telefon: +48 123 456 789</li>
              <li>Adres: ul. Przykładowa 1, Warszawa</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} MAKOSZA. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}
