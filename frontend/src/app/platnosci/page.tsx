import { CreditCard, Smartphone, Building2, Wallet, Shield, Lock } from 'lucide-react';

export const metadata = {
  title: 'Płatności - TechNest',
  description: 'Dostępne metody płatności w TechNest',
};

export default function PaymentPage() {
  const paymentMethods = [
    {
      icon: <CreditCard className="w-12 h-12" />,
      name: 'Karta płatnicza',
      description: 'Visa, Mastercard, Maestro',
      features: [
        'Natychmiastowa realizacja',
        'Bezpieczne połączenie SSL',
        'Obsługa kart debetowych i kredytowych',
        'Brak dodatkowych opłat',
      ],
      popular: true,
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      name: 'BLIK',
      description: 'Szybka płatność kodem z aplikacji',
      features: [
        'Płatność w 30 sekund',
        'Bez podawania danych karty',
        'Dostępne w aplikacjach bankowych',
        'Maksymalne bezpieczeństwo',
      ],
      popular: true,
    },
    {
      icon: <Building2 className="w-12 h-12" />,
      name: 'Przelew bankowy',
      description: 'Tradycyjny przelew',
      features: [
        'Wszystkie banki w Polsce',
        'Szybkie przelewy (do 24h)',
        'Dane do przelewu w mailu',
        'Bez prowizji',
      ],
      popular: false,
    },
    {
      icon: <Wallet className="w-12 h-12" />,
      name: 'Przelewy24',
      description: 'Szybkie płatności online',
      features: [
        'Ponad 50 banków',
        'Apple Pay i Google Pay',
        'Natychmiastowa weryfikacja',
        'Zwroty online',
      ],
      popular: false,
    },
    {
      icon: <CreditCard className="w-12 h-12" />,
      name: 'PayPal',
      description: 'Międzynarodowy system płatności',
      features: [
        'Ochrona kupujących',
        'Płatność bez podawania danych',
        'Obsługa walut obcych',
        'Szybkie zwroty',
      ],
      popular: false,
    },
    {
      icon: <Wallet className="w-12 h-12" />,
      name: 'Za pobraniem',
      description: 'Zapłać przy odbiorze',
      features: [
        'Płatność gotówką kurierowi',
        'Dodatkowa opłata 5 zł',
        'Sprawdzenie przed zapłatą',
        'Dostępne dla kuriera InPost',
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-deep-black">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-deep-black via-gray-900 to-deep-black py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-neon-violet to-electric-blue rounded-full mb-6">
              <CreditCard className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-neon-violet to-electric-blue bg-clip-text text-transparent">
                Płatności
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              Bezpieczne i wygodne metody płatności dostosowane do Twoich potrzeb
            </p>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {paymentMethods.map((method, index) => (
              <div
                key={index}
                className={`bg-gray-900 rounded-xl p-8 border transition-all duration-300 ${
                  method.popular
                    ? 'border-neon-violet ring-2 ring-neon-violet/20'
                    : 'border-gray-800 hover:border-neon-violet'
                }`}
              >
                {/* Popular Badge */}
                {method.popular && (
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-neon-violet to-electric-blue text-white text-xs font-semibold rounded-full">
                      Popularne
                    </span>
                  </div>
                )}

                {/* Icon and Header */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center text-neon-violet mb-4">
                    {method.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {method.name}
                  </h3>
                  <p className="text-gray-400">{method.description}</p>
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {method.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <span className="text-neon-violet mt-1 flex-shrink-0">✓</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-12 bg-gradient-to-r from-neon-violet to-electric-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6">
              <Shield className="w-8 h-8 text-neon-violet" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Twoje płatności są bezpieczne
            </h2>
            <p className="text-white text-lg opacity-90 mb-8">
              Stosujemy najnowsze standardy bezpieczeństwa i szyfrowania danych
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Lock className="w-8 h-8 text-white mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Szyfrowanie SSL</h3>
                <p className="text-white/80 text-sm">
                  256-bitowe szyfrowanie połączenia
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Shield className="w-8 h-8 text-white mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">PCI DSS</h3>
                <p className="text-white/80 text-sm">
                  Zgodność z międzynarodowymi standardami
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <CreditCard className="w-8 h-8 text-white mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">3D Secure</h3>
                <p className="text-white/80 text-sm">
                  Dodatkowa weryfikacja płatności
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Najczęściej zadawane pytania
          </h2>

          <div className="space-y-6">
            <div className="bg-deep-black rounded-lg p-6 border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-3">
                💳 Czy mogę zapłacić kartą zagraniczną?
              </h3>
              <p className="text-gray-300">
                Tak, akceptujemy wszystkie karty Visa i Mastercard, również te
                wydane przez banki zagraniczne.
              </p>
            </div>

            <div className="bg-deep-black rounded-lg p-6 border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-3">
                🔄 Jak długo trwa zwrot środków?
              </h3>
              <p className="text-gray-300">
                Po zaakceptowaniu zwrotu, środki wracają na Twoje konto w ciągu
                5-7 dni roboczych, w zależności od metody płatności.
              </p>
            </div>

            <div className="bg-deep-black rounded-lg p-6 border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-3">
                🧾 Czy otrzymam fakturę?
              </h3>
              <p className="text-gray-300">
                Tak, fakturę VAT otrzymasz automatycznie na podany adres e-mail po
                zrealizowaniu zamówienia. Możesz też pobrać ją z panelu klienta.
              </p>
            </div>

            <div className="bg-deep-black rounded-lg p-6 border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-3">
                ⚡ Czy mogę płacić w ratach?
              </h3>
              <p className="text-gray-300">
                Pracujemy nad wprowadzeniem płatności ratalnych. Wkrótce będziesz
                mógł rozłożyć zakupy na wygodne raty 0%.
              </p>
            </div>

            <div className="bg-deep-black rounded-lg p-6 border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-3">
                📞 Potrzebujesz pomocy?
              </h3>
              <p className="text-gray-300">
                Skontaktuj się z nami:
                <br />
                📧 <a href="mailto:platnosci@technest.pl" className="text-neon-violet hover:text-electric-blue">platnosci@technest.pl</a>
                <br />
                📞 +48 123 456 789
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
