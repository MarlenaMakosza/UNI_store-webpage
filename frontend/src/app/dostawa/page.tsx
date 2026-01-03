import { Package, Truck, Clock, MapPin, Shield } from 'lucide-react';

export const metadata = {
  title: 'Dostawa - TechNest',
  description: 'Informacje o dostępnych metodach dostawy w TechNest',
};

export default function DeliveryPage() {
  const deliveryMethods = [
    {
      icon: <Truck className="w-12 h-12" />,
      name: 'Kurier InPost',
      price: '14,99 zł',
      time: '1-2 dni robocze',
      description: 'Dostawa pod wskazany adres',
      features: [
        'Śledzenie przesyłki online',
        'Powiadomienia SMS',
        'Dostawa od poniedziałku do piątku',
        'Możliwość wyboru godzin dostawy',
      ],
    },
    {
      icon: <Package className="w-12 h-12" />,
      name: 'Paczkomat InPost',
      price: '11,99 zł',
      time: '1-2 dni robocze',
      description: 'Odbiór z paczkomatu 24/7',
      features: [
        'Ponad 20 000 paczkomatów w Polsce',
        'Odbiór w dowolnym momencie',
        'Powiadomienie SMS o dostawie',
        'Bezpieczne przechowanie przez 48h',
      ],
    },
    {
      icon: <MapPin className="w-12 h-12" />,
      name: 'Poczta Polska',
      price: '13,99 zł',
      time: '2-3 dni robocze',
      description: 'Tradycyjna przesyłka pocztowa',
      features: [
        'Dostawa do skrzynki pocztowej lub oddziału',
        'Szeroka sieć placówek',
        'Możliwość pobrania',
        'Ubezpieczenie przesyłki',
      ],
    },
    {
      icon: <Shield className="w-12 h-12" />,
      name: 'Odbiór osobisty',
      price: 'Gratis',
      time: 'Tego samego dnia',
      description: 'Odbierz w naszym sklepie',
      features: [
        'Brak kosztów dostawy',
        'Możliwość sprawdzenia towaru',
        'Pomoc przy wyborze produktu',
        'Warszawa, ul. Przykładowa 123',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-deep-black">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-deep-black via-gray-900 to-deep-black py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-neon-violet to-electric-blue rounded-full mb-6">
              <Truck className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-neon-violet to-electric-blue bg-clip-text text-transparent">
                Dostawa
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              Wybierz najwygodniejszą dla Ciebie metodę dostawy
            </p>
          </div>
        </div>
      </section>

      {/* Delivery Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {deliveryMethods.map((method, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl p-8 border border-gray-800 hover:border-neon-violet transition-all duration-300"
              >
                {/* Icon and Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 text-neon-violet">
                    {method.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {method.name}
                    </h3>
                    <p className="text-gray-400">{method.description}</p>
                  </div>
                </div>

                {/* Price and Time */}
                <div className="flex items-center gap-6 mb-6 pb-6 border-b border-gray-800">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Koszt</div>
                    <div className="text-2xl font-bold text-neon-violet">
                      {method.price}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">
                      Czas dostawy
                    </div>
                    <div className="text-lg font-semibold text-white flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {method.time}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {method.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <span className="text-neon-violet mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Shipping Banner */}
      <section className="py-12 bg-gradient-to-r from-neon-violet to-electric-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Darmowa dostawa od 150 zł!
          </h2>
          <p className="text-white text-lg opacity-90">
            Przy zamówieniach powyżej 150 zł dostawa kurierem InPost jest całkowicie
            bezpłatna
          </p>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Dodatkowe informacje
          </h2>

          <div className="space-y-6">
            <div className="bg-deep-black rounded-lg p-6 border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-3">
                📦 Czas realizacji zamówienia
              </h3>
              <p className="text-gray-300">
                Zamówienia złożone do godziny 14:00 wysyłamy tego samego dnia
                roboczego. Zamówienia złożone po tej godzinie wysyłamy następnego
                dnia roboczego.
              </p>
            </div>

            <div className="bg-deep-black rounded-lg p-6 border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-3">
                🔍 Śledzenie przesyłki
              </h3>
              <p className="text-gray-300">
                Po nadaniu przesyłki otrzymasz numer śledzenia na podany adres
                e-mail. Będziesz mógł sprawdzić status dostawy w dowolnym momencie.
              </p>
            </div>

            <div className="bg-deep-black rounded-lg p-6 border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-3">
                🌍 Wysyłka międzynarodowa
              </h3>
              <p className="text-gray-300">
                Obecnie obsługujemy wysyłkę tylko na terenie Polski. Planujemy
                wkrótce rozszerzyć naszą ofertę o dostawy międzynarodowe.
              </p>
            </div>

            <div className="bg-deep-black rounded-lg p-6 border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-3">
                📞 Kontakt
              </h3>
              <p className="text-gray-300">
                Masz pytania dotyczące dostawy? Skontaktuj się z nami:
                <br />
                📧 <a href="mailto:dostawa@technest.pl" className="text-neon-violet hover:text-electric-blue">dostawa@technest.pl</a>
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
