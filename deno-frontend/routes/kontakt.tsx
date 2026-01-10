import Layout from "../components/Layout.tsx";

export default function ContactPage() {
  return (
    <Layout>
      <div class="min-h-screen bg-deep-black">
        {/* Hero Section */}
        <section class="bg-gradient-to-r from-neon-violet/20 to-electric-blue/20 py-12 md:py-20">
          <div class="container mx-auto px-4">
            <div class="max-w-3xl mx-auto text-center">
              <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
                Skontaktuj sie z nami
              </h1>
              <p class="text-lg text-gray-300">
                Masz pytania? Chetnie pomozemy! Wypelnij formularz lub skontaktuj sie z nami telefonicznie.
              </p>
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section class="py-12 md:py-16">
          <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Info Sidebar */}
              <div class="space-y-6">
                {/* Contact Person */}
                <div class="bg-gray-900 border border-gray-800 rounded-lg p-6">
                  <h3 class="text-lg font-semibold text-white mb-4">Osoba kontaktowa</h3>
                  <div class="flex items-center gap-4 mb-4">
                    <div class="w-20 h-20 rounded-full btn-gradient flex items-center justify-center">
                      <span class="text-2xl font-bold text-white">MM</span>
                    </div>
                    <div>
                      <p class="font-semibold text-white">Marlena Makosza</p>
                      <p class="text-sm text-gray-400">Dzial obslugi klienta</p>
                    </div>
                  </div>
                  <p class="text-sm text-gray-300">
                    Z przyjemnoscia odpowiem na wszystkie Twoje pytania dotyczace produktow i zamowien.
                  </p>
                </div>

                {/* Contact Details */}
                <div class="bg-gray-900 border border-gray-800 rounded-lg p-6">
                  <h3 class="text-lg font-semibold text-white mb-4">Dane kontaktowe</h3>
                  <div class="space-y-4">
                    <div class="flex items-start gap-3">
                      <svg class="w-5 h-5 text-neon-violet mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <div>
                        <p class="text-sm text-gray-400">E-mail</p>
                        <a href="mailto:kontakt@technest.pl" class="text-white hover:text-neon-violet transition-colors">
                          kontakt@technest.pl
                        </a>
                      </div>
                    </div>

                    <div class="flex items-start gap-3">
                      <svg class="w-5 h-5 text-electric-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <div>
                        <p class="text-sm text-gray-400">Telefon</p>
                        <a href="tel:+48123456789" class="text-white hover:text-electric-blue transition-colors">
                          +48 123 456 789
                        </a>
                      </div>
                    </div>

                    <div class="flex items-start gap-3">
                      <svg class="w-5 h-5 text-neon-violet mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p class="text-sm text-gray-400">Godziny pracy</p>
                        <p class="text-white">Pon-Pt: 9:00 - 17:00</p>
                        <p class="text-white">Sob: 10:00 - 14:00</p>
                      </div>
                    </div>

                    <div class="flex items-start gap-3">
                      <svg class="w-5 h-5 text-electric-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <p class="text-sm text-gray-400">Adres</p>
                        <p class="text-white">ul. Elektroniczna 123</p>
                        <p class="text-white">00-001 Warszawa</p>
                      </div>
                    </div>
                  </div>

                  <div class="mt-6 pt-6 border-t border-gray-800">
                    <p class="text-sm text-gray-400 mb-2">Dane firmowe</p>
                    <p class="text-white text-sm">TechNest Sp. z o.o.</p>
                    <p class="text-white text-sm">NIP: 123-456-78-90</p>
                    <p class="text-white text-sm">REGON: 123456789</p>
                  </div>
                </div>

                {/* Social Media */}
                <div class="bg-gray-900 border border-gray-800 rounded-lg p-6">
                  <h3 class="text-lg font-semibold text-white mb-4">Sledz nas w social media</h3>
                  <div class="grid grid-cols-2 gap-3">
                    <a href="#" class="flex items-center gap-2 p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors group">
                      <span class="text-electric-blue group-hover:text-neon-violet">📘</span>
                      <span class="text-sm text-white">Facebook</span>
                    </a>
                    <a href="#" class="flex items-center gap-2 p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors group">
                      <span class="text-neon-violet group-hover:text-electric-blue">📸</span>
                      <span class="text-sm text-white">Instagram</span>
                    </a>
                    <a href="#" class="flex items-center gap-2 p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors group">
                      <span class="text-electric-blue group-hover:text-neon-violet">🐦</span>
                      <span class="text-sm text-white">Twitter</span>
                    </a>
                    <a href="#" class="flex items-center gap-2 p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors group">
                      <span class="text-neon-violet group-hover:text-electric-blue">💼</span>
                      <span class="text-sm text-white">LinkedIn</span>
                    </a>
                  </div>
                </div>

                {/* Useful Links */}
                <div class="bg-gray-900 border border-gray-800 rounded-lg p-6">
                  <h3 class="text-lg font-semibold text-white mb-4">Przydatne linki</h3>
                  <ul class="space-y-2">
                    <li>
                      <a href="/dostawa" class="text-gray-300 hover:text-neon-violet transition-colors text-sm flex items-center gap-2">
                        <span class="w-1 h-1 bg-neon-violet rounded-full"></span>
                        Informacje o dostawie
                      </a>
                    </li>
                    <li>
                      <a href="/platnosci" class="text-gray-300 hover:text-electric-blue transition-colors text-sm flex items-center gap-2">
                        <span class="w-1 h-1 bg-electric-blue rounded-full"></span>
                        Metody platnosci
                      </a>
                    </li>
                    <li>
                      <a href="/regulamin" class="text-gray-300 hover:text-neon-violet transition-colors text-sm flex items-center gap-2">
                        <span class="w-1 h-1 bg-neon-violet rounded-full"></span>
                        Regulamin sklepu
                      </a>
                    </li>
                    <li>
                      <a href="/polityka-prywatnosci" class="text-gray-300 hover:text-electric-blue transition-colors text-sm flex items-center gap-2">
                        <span class="w-1 h-1 bg-electric-blue rounded-full"></span>
                        Polityka prywatnosci
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div class="lg:col-span-2">
                <div class="bg-gray-900 border border-gray-800 rounded-lg p-6 md:p-8">
                  <h2 class="text-2xl font-bold text-white mb-2">Formularz kontaktowy</h2>
                  <p class="text-gray-400 mb-6">
                    Wypelnij formularz ponizej, a my skontaktujemy sie z Toba najszybciej jak to mozliwe.
                  </p>

                  <form class="space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label class="block text-sm font-medium text-gray-300 mb-2">Imie i nazwisko *</label>
                        <input
                          type="text"
                          required
                          class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-violet transition-colors"
                          placeholder="Jan Kowalski"
                        />
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-300 mb-2">Adres e-mail *</label>
                        <input
                          type="email"
                          required
                          class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-violet transition-colors"
                          placeholder="jan@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label class="block text-sm font-medium text-gray-300 mb-2">Telefon (opcjonalnie)</label>
                      <input
                        type="tel"
                        class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-violet transition-colors"
                        placeholder="+48 123 456 789"
                      />
                    </div>

                    <div>
                      <label class="block text-sm font-medium text-gray-300 mb-2">Temat *</label>
                      <select class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-neon-violet transition-colors">
                        <option value="">Wybierz temat</option>
                        <option value="zamowienie">Pytanie o zamowienie</option>
                        <option value="produkt">Pytanie o produkt</option>
                        <option value="zwrot">Zwrot/Reklamacja</option>
                        <option value="wspolpraca">Wspolpraca</option>
                        <option value="inne">Inne</option>
                      </select>
                    </div>

                    <div>
                      <label class="block text-sm font-medium text-gray-300 mb-2">Wiadomosc *</label>
                      <textarea
                        rows={6}
                        required
                        class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-violet transition-colors resize-none"
                        placeholder="Twoja wiadomosc..."
                      ></textarea>
                    </div>

                    <div class="flex items-start gap-3">
                      <input type="checkbox" required class="mt-1" />
                      <label class="text-sm text-gray-400">
                        Akceptuje <a href="/regulamin" class="text-neon-violet hover:text-electric-blue">regulamin</a> oraz <a href="/polityka-prywatnosci" class="text-neon-violet hover:text-electric-blue">polityke prywatnosci</a> *
                      </label>
                    </div>

                    <button type="submit" class="w-full px-6 py-4 rounded-lg btn-gradient text-white font-semibold text-lg">
                      Wyslij wiadomosc
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Info Section */}
        <section class="py-12 bg-gray-900/50">
          <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto">
              <h2 class="text-2xl font-bold text-white mb-6 text-center">Jak mozemy Ci pomoc?</h2>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-gray-900 border border-gray-800 rounded-lg p-6 text-center">
                  <div class="w-12 h-12 btn-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 class="font-semibold text-white mb-2">Wsparcie telefoniczne</h3>
                  <p class="text-sm text-gray-400">Zadzwon do nas w godzinach pracy i uzyskaj natychmiastowa pomoc</p>
                </div>

                <div class="bg-gray-900 border border-gray-800 rounded-lg p-6 text-center">
                  <div class="w-12 h-12 btn-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 class="font-semibold text-white mb-2">Kontakt e-mail</h3>
                  <p class="text-sm text-gray-400">Odpowiadamy na e-maile w ciagu 24 godzin w dni robocze</p>
                </div>

                <div class="bg-gray-900 border border-gray-800 rounded-lg p-6 text-center">
                  <div class="w-12 h-12 btn-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 class="font-semibold text-white mb-2">Odwiedz nas</h3>
                  <p class="text-sm text-gray-400">Zapraszamy do naszego salonu stacjonarnego w Warszawie</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
