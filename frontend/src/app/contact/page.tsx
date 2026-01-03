import ContactForm from '@/components/contact/ContactForm';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, Clock } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'Kontakt - TechNest',
  description: 'Skontaktuj się z nami. Jesteśmy dostępni od poniedziałku do piątku w godzinach 9:00-17:00.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-deep-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-neon-violet/20 to-electric-blue/20 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Skontaktuj się z nami
            </h1>
            <p className="text-lg text-gray-300">
              Masz pytania? Chętnie pomożemy! Wypełnij formularz lub skontaktuj się z nami telefonicznie.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info Sidebar - LEFT - 1/3 width */}
            <div className="space-y-6">
              {/* Zasada 1: Zdjęcie osoby odpowiedzialnej za kontakt */}
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Osoba kontaktowa
                </h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden bg-gradient-to-br from-neon-violet to-electric-blue flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">MM</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Marlena Mąkosza</p>
                    <p className="text-sm text-gray-400">Dział obsługi klienta</p>
                  </div>
                </div>
                <p className="text-sm text-gray-300">
                  Z przyjemnością odpowiem na wszystkie Twoje pytania dotyczące produktów i zamówień.
                </p>
              </div>

              {/* Zasada 4 & 5: Wyeksponowanie najważniejszych informacji + Widoczność danych firmowych */}
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Dane kontaktowe
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-neon-violet mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-400">E-mail</p>
                      <a
                        href="mailto:kontakt@technest.pl"
                        className="text-white hover:text-neon-violet transition-colors"
                      >
                        kontakt@technest.pl
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-electric-blue mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-400">Telefon</p>
                      <a
                        href="tel:+48123456789"
                        className="text-white hover:text-electric-blue transition-colors"
                      >
                        +48 123 456 789
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-neon-violet mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-400">Godziny pracy</p>
                      <p className="text-white">Pon-Pt: 9:00 - 17:00</p>
                      <p className="text-white">Sob: 10:00 - 14:00</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-electric-blue mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-400">Adres</p>
                      <p className="text-white">ul. Elektroniczna 123</p>
                      <p className="text-white">00-001 Warszawa</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-800">
                  <p className="text-sm text-gray-400 mb-2">Dane firmowe</p>
                  <p className="text-white text-sm">TechNest Sp. z o.o.</p>
                  <p className="text-white text-sm">NIP: 123-456-78-90</p>
                  <p className="text-white text-sm">REGON: 123456789</p>
                </div>
              </div>

              {/* Zasada 2: Odnośniki do profili w social mediach */}
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Śledź nas w social media
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors group"
                  >
                    <Facebook className="w-5 h-5 text-electric-blue group-hover:text-neon-violet transition-colors" />
                    <span className="text-sm text-white">Facebook</span>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors group"
                  >
                    <Instagram className="w-5 h-5 text-neon-violet group-hover:text-electric-blue transition-colors" />
                    <span className="text-sm text-white">Instagram</span>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors group"
                  >
                    <Twitter className="w-5 h-5 text-electric-blue group-hover:text-neon-violet transition-colors" />
                    <span className="text-sm text-white">Twitter</span>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors group"
                  >
                    <Linkedin className="w-5 h-5 text-neon-violet group-hover:text-electric-blue transition-colors" />
                    <span className="text-sm text-white">LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Zasada 6: Odnośniki do wybranych informacji */}
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Przydatne linki
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/faq"
                      className="text-gray-300 hover:text-neon-violet transition-colors text-sm flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-neon-violet rounded-full"></span>
                      Najczęściej zadawane pytania
                    </a>
                  </li>
                  <li>
                    <a
                      href="/dostawa"
                      className="text-gray-300 hover:text-electric-blue transition-colors text-sm flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-electric-blue rounded-full"></span>
                      Informacje o dostawie
                    </a>
                  </li>
                  <li>
                    <a
                      href="/returns"
                      className="text-gray-300 hover:text-neon-violet transition-colors text-sm flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-neon-violet rounded-full"></span>
                      Zwroty i reklamacje
                    </a>
                  </li>
                  <li>
                    <a
                      href="/warranty"
                      className="text-gray-300 hover:text-electric-blue transition-colors text-sm flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-electric-blue rounded-full"></span>
                      Informacje o gwarancji
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form - RIGHT - 2/3 width */}
            <div className="lg:col-span-2">
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 md:p-8">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Formularz kontaktowy
                </h2>
                <p className="text-gray-400 mb-6">
                  Wypełnij formularz poniżej, a my skontaktujemy się z Tobą najszybciej jak to możliwe.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-12 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Jak możemy Ci pomóc?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-neon-violet to-electric-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">Wsparcie telefoniczne</h3>
                <p className="text-sm text-gray-400">
                  Zadzwoń do nas w godzinach pracy i uzyskaj natychmiastową pomoc
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-electric-blue to-neon-violet rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">Kontakt e-mail</h3>
                <p className="text-sm text-gray-400">
                  Odpowiadamy na e-maile w ciągu 24 godzin w dni robocze
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-neon-violet to-electric-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">Odwiedź nas</h3>
                <p className="text-sm text-gray-400">
                  Zapraszamy do naszego salonu stacjonarnego w Warszawie
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
