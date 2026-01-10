import Layout from "../components/Layout.tsx";

export default function DeliveryPage() {
  const deliveryMethods = [
    {
      icon: "🚚",
      name: "Kurier InPost",
      price: "14,99 zł",
      time: "1-2 dni robocze",
      description: "Dostawa pod wskazany adres",
      features: [
        "Śledzenie przesyłki online",
        "Powiadomienia SMS",
        "Dostawa od poniedziałku do piątku",
        "Możliwość wyboru godzin dostawy",
      ],
    },
    {
      icon: "📦",
      name: "Paczkomat InPost",
      price: "11,99 zł",
      time: "1-2 dni robocze",
      description: "Odbiór z paczkomatu 24/7",
      features: [
        "Ponad 20 000 paczkomatów w Polsce",
        "Odbiór w dowolnym momencie",
        "Powiadomienie SMS o dostawie",
        "Bezpieczne przechowanie przez 48h",
      ],
    },
    {
      icon: "📍",
      name: "Poczta Polska",
      price: "13,99 zł",
      time: "2-3 dni robocze",
      description: "Tradycyjna przesyłka pocztowa",
      features: [
        "Dostawa do skrzynki pocztowej lub oddziału",
        "Szeroka sieć placówek",
        "Możliwość pobrania",
        "Ubezpieczenie przesyłki",
      ],
    },
    {
      icon: "🏠",
      name: "Odbiór osobisty",
      price: "Gratis",
      time: "Tego samego dnia",
      description: "Odbierz w naszym sklepie",
      features: [
        "Brak kosztów dostawy",
        "Możliwość sprawdzenia towaru",
        "Pomoc przy wyborze produktu",
        "Warszawa, ul. Przykładowa 123",
      ],
    },
  ];

  return (
    <Layout>
      <div class="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section class="relative bg-gradient-to-br from-purple-50 via-white to-blue-50 py-16 md:py-24">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl mx-auto text-center">
              <div class="inline-flex items-center justify-center w-20 h-20 btn-gradient rounded-full mb-6">
                <span class="text-4xl">🚚</span>
              </div>
              <h1 class="text-4xl md:text-5xl font-bold mb-6">
                <span class="gradient-text">Dostawa</span>
              </h1>
              <p class="text-xl text-gray-600">
                Wybierz najwygodniejszą dla Ciebie metodę dostawy
              </p>
            </div>
          </div>
        </section>

        {/* Delivery Methods */}
        <section class="py-16">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {deliveryMethods.map((method, index) => (
                <div key={index} class="bg-white rounded-xl p-8 border border-gray-200 card-hover shadow-sm">
                  <div class="flex items-start gap-4 mb-6">
                    <div class="text-5xl flex-shrink-0">{method.icon}</div>
                    <div class="flex-grow">
                      <h3 class="text-2xl font-bold text-gray-800 mb-2">{method.name}</h3>
                      <p class="text-gray-500">{method.description}</p>
                    </div>
                  </div>

                  <div class="flex items-center gap-6 mb-6 pb-6 border-b border-gray-200">
                    <div>
                      <div class="text-sm text-gray-500 mb-1">Koszt</div>
                      <div class="text-2xl font-bold text-primary">{method.price}</div>
                    </div>
                    <div>
                      <div class="text-sm text-gray-500 mb-1">Czas dostawy</div>
                      <div class="text-lg font-semibold text-gray-800 flex items-center gap-2">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {method.time}
                      </div>
                    </div>
                  </div>

                  <ul class="space-y-3">
                    {method.features.map((feature, i) => (
                      <li key={i} class="flex items-start gap-3 text-gray-600">
                        <span class="text-primary mt-1">✓</span>
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
        <section class="py-12 btn-gradient">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl font-bold text-white mb-4">Darmowa dostawa od 150 zł!</h2>
            <p class="text-white text-lg opacity-90">
              Przy zamówieniach powyżej 150 zł dostawa kurierem InPost jest całkowicie bezpłatna
            </p>
          </div>
        </section>

        {/* Additional Info */}
        <section class="py-16 bg-white">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">Dodatkowe informacje</h2>

            <div class="space-y-6">
              <div class="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 class="text-xl font-semibold text-gray-800 mb-3">📦 Czas realizacji zamówienia</h3>
                <p class="text-gray-600">
                  Zamówienia złożone do godziny 14:00 wysyłamy tego samego dnia roboczego.
                  Zamówienia złożone po tej godzinie wysyłamy następnego dnia roboczego.
                </p>
              </div>

              <div class="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 class="text-xl font-semibold text-gray-800 mb-3">🔍 Śledzenie przesyłki</h3>
                <p class="text-gray-600">
                  Po nadaniu przesyłki otrzymasz numer śledzenia na podany adres e-mail.
                  Będziesz mógł sprawdzić status dostawy w dowolnym momencie.
                </p>
              </div>

              <div class="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 class="text-xl font-semibold text-gray-800 mb-3">🌍 Wysyłka międzynarodowa</h3>
                <p class="text-gray-600">
                  Obecnie obsługujemy wysyłkę tylko na terenie Polski.
                  Planujemy wkrótce rozszerzyć naszą ofertę o dostawy międzynarodowe.
                </p>
              </div>

              <div class="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 class="text-xl font-semibold text-gray-800 mb-3">📞 Kontakt</h3>
                <p class="text-gray-600">
                  Masz pytania dotyczące dostawy? Skontaktuj się z nami:
                  <br />
                  📧 <a href="mailto:dostawa@technest.pl" class="text-primary hover:text-secondary">dostawa@technest.pl</a>
                  <br />
                  📞 +48 123 456 789
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
