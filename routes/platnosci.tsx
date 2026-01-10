import Layout from "../components/Layout.tsx";

export default function PaymentsPage() {
  const paymentMethods = [
    {
      icon: "💳",
      name: "Karta płatnicza",
      description: "Visa, Mastercard, American Express",
      features: ["Szybka i bezpieczna płatność", "Szyfrowanie SSL", "Bez dodatkowych opłat"],
    },
    {
      icon: "🏦",
      name: "Przelew bankowy",
      description: "Tradycyjny przelew na konto",
      features: ["Dane do przelewu w potwierdzeniu", "Realizacja po zaksięgowaniu", "Bez prowizji"],
    },
    {
      icon: "📱",
      name: "BLIK",
      description: "Szybkie płatności mobilne",
      features: ["Płatność kodem z aplikacji", "Natychmiastowa realizacja", "Bez logowania"],
    },
    {
      icon: "🔄",
      name: "PayPal",
      description: "Międzynarodowy system płatności",
      features: ["Ochrona kupującego", "Płatność z konta PayPal", "Szybki zwrot środków"],
    },
    {
      icon: "🏠",
      name: "Za pobraniem",
      description: "Płatność przy odbiorze",
      features: ["Płacisz kurierowi", "Dodatkowy koszt 5 zł", "Gotówka lub karta"],
    },
    {
      icon: "📅",
      name: "Raty 0%",
      description: "Odroczona płatność",
      features: ["Do 12 rat bez odsetek", "Szybka decyzja online", "Minimum 300 zł"],
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
                <span class="text-4xl">💳</span>
              </div>
              <h1 class="text-4xl md:text-5xl font-bold mb-6">
                <span class="gradient-text">Płatności</span>
              </h1>
              <p class="text-xl text-gray-600">
                Bezpieczne i wygodne metody płatności
              </p>
            </div>
          </div>
        </section>

        {/* Payment Methods */}
        <section class="py-16">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {paymentMethods.map((method, index) => (
                <div key={index} class="bg-white rounded-xl p-6 border border-gray-200 card-hover shadow-sm">
                  <div class="text-5xl mb-4">{method.icon}</div>
                  <h3 class="text-xl font-bold text-gray-800 mb-2">{method.name}</h3>
                  <p class="text-gray-500 text-sm mb-4">{method.description}</p>
                  <ul class="space-y-2">
                    {method.features.map((feature, i) => (
                      <li key={i} class="flex items-center gap-2 text-gray-600 text-sm">
                        <span class="text-primary">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Installments Banner */}
        <section class="py-12 btn-gradient">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl font-bold text-white mb-4">Raty 0% - Kup teraz, płać później!</h2>
            <p class="text-white text-lg opacity-90 mb-6">
              Rozłóż płatność na wygodne raty bez żadnych dodatkowych kosztów
            </p>
            <a href="/produkty" class="inline-block px-8 py-4 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-colors">
              Zobacz produkty
            </a>
          </div>
        </section>

        {/* Security Info */}
        <section class="py-16 bg-white">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">Bezpieczeństwo płatności</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div class="text-3xl mb-4">🔒</div>
                <h3 class="text-xl font-semibold text-gray-800 mb-3">Szyfrowanie SSL</h3>
                <p class="text-gray-600">
                  Wszystkie transakcje są szyfrowane protokołem SSL, co gwarantuje pełne bezpieczeństwo Twoich danych.
                </p>
              </div>

              <div class="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div class="text-3xl mb-4">🛡️</div>
                <h3 class="text-xl font-semibold text-gray-800 mb-3">Certyfikat PCI DSS</h3>
                <p class="text-gray-600">
                  Nasz operator płatności posiada certyfikat PCI DSS, spełniający najwyższe standardy bezpieczeństwa.
                </p>
              </div>

              <div class="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div class="text-3xl mb-4">✅</div>
                <h3 class="text-xl font-semibold text-gray-800 mb-3">3D Secure</h3>
                <p class="text-gray-600">
                  Obsługujemy płatności z dodatkową autoryzacją 3D Secure dla jeszcze większego bezpieczeństwa.
                </p>
              </div>

              <div class="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div class="text-3xl mb-4">💰</div>
                <h3 class="text-xl font-semibold text-gray-800 mb-3">Gwarancja zwrotu</h3>
                <p class="text-gray-600">
                  W przypadku problemów z zamówieniem gwarantujemy szybki zwrot pieniędzy na Twoje konto.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
