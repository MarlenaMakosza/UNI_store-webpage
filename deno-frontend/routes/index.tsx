import Layout from "../components/Layout.tsx";
import { products, getFeaturedProducts } from "../data/products.ts";
import NewsletterPopup from "../islands/NewsletterPopup.tsx";

function BannerCarousel() {
  const banners = [
    {
      id: 1,
      badge: "HOT DEAL",
      title: "POWER UP YOUR",
      highlight: "GEAR!",
      text: "Zgarnij do -30% na myszki, klawiatury i sluchawki gamingowe",
      cta: "Kup teraz",
      href: "/produkty",
    },
    {
      id: 2,
      badge: "0% OPROCENTOWANIA",
      title: "KUP TERAZ PLAC",
      highlight: "POZNIEJ",
      text: "Odroczona platnosc do 12 miesiecy bez dodatkowych kosztow",
      cta: "Zobacz warunki",
      href: "/platnosci",
    },
    {
      id: 3,
      badge: "DARMOWA USLUGA",
      title: "DOSTAWA",
      highlight: "GRATIS!",
      text: "Darmowy transport + wniesienie przy zakupach powyzej 500 zl",
      cta: "Sprawdz oferte",
      href: "/produkty",
    },
  ];

  return (
    <section class="py-8 md:py-12 bg-deep-black">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-deep-black border border-gray-800 p-8 md:p-16">
          <div class="absolute w-96 h-96 rounded-full -top-48 -right-24 bg-neon-violet/10 blur-3xl pointer-events-none" />
          <div class="absolute w-64 h-64 rounded-full -bottom-32 -left-16 bg-electric-blue/10 blur-3xl pointer-events-none" />

          <div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div class="flex-1 text-center md:text-left max-w-xl">
              <span class="inline-block px-4 py-2 rounded-full text-sm font-bold text-white btn-gradient mb-4">
                {banners[0].badge}
              </span>
              <h2 class="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4">
                <span class="text-white">{banners[0].title} </span>
                <span class="gradient-text">{banners[0].highlight}</span>
              </h2>
              <p class="text-gray-300 text-lg mb-6">{banners[0].text}</p>
              <a href={banners[0].href} class="inline-block px-8 py-4 rounded-full text-white font-bold btn-gradient">
                {banners[0].cta} &rarr;
              </a>
            </div>

            <div class="grid grid-cols-2 gap-4">
              {["Myszki", "Klawiatury", "Sluchawki", "Monitory"].map((item) => (
                <div class="w-32 h-32 rounded-xl bg-gray-800/50 border border-gray-700 flex flex-col items-center justify-center gap-2 hover:border-neon-violet transition-colors">
                  <div class="w-12 h-12 rounded-lg btn-gradient flex items-center justify-center text-2xl">
                    {item === "Myszki" ? "🎮" : item === "Klawiatury" ? "⌨️" : item === "Sluchawki" ? "🎧" : "🖥️"}
                  </div>
                  <span class="text-xs font-semibold text-white uppercase">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroSection() {
  return (
    <section class="relative bg-gradient-to-br from-deep-black via-gray-900 to-deep-black py-20 md:py-32">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            <span class="gradient-text">Elektronika</span>
            <br />
            <span class="text-white">najwyzszej jakosci</span>
          </h1>
          <p class="text-xl text-gray-300 mb-8">
            Odkryj najnowsze produkty z swiata elektroniki w konkurencyjnych cenach.
            Gwarantujemy wysoka jakosc i szybka dostawe.
          </p>
          <a href="/produkty" class="inline-flex items-center px-6 py-3 rounded-lg btn-gradient text-white font-semibold">
            Zobacz produkty
            <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: typeof products[0] }) {
  return (
    <div class="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 card-hover">
      <div class="h-48 bg-gradient-to-br from-neon-violet/20 to-electric-blue/20 flex items-center justify-center relative">
        {product.isNew && (
          <span class="absolute top-3 left-3 px-2 py-1 bg-electric-blue text-white text-xs font-bold rounded">NOWOŚĆ</span>
        )}
        {product.oldPrice && (
          <span class="absolute top-3 right-3 px-2 py-1 bg-red-500 text-white text-xs font-bold rounded">PROMOCJA</span>
        )}
        <span class="text-6xl">
          {product.category === "Myszki" ? "🖱️" : product.category === "Klawiatury" ? "⌨️" : product.category === "Sluchawki" ? "🎧" : "🖥️"}
        </span>
      </div>
      <div class="p-4">
        <span class="text-xs text-neon-violet font-semibold uppercase">{product.category}</span>
        <h3 class="text-lg font-bold text-white mt-1 line-clamp-1">{product.name}</h3>
        <p class="text-sm text-gray-400 mt-1 line-clamp-2">{product.description}</p>
        <div class="flex items-center justify-between mt-4">
          <div>
            <span class="text-xl font-bold text-white">{product.price.toFixed(2)} zl</span>
            {product.oldPrice && (
              <span class="ml-2 text-sm text-gray-500 line-through">{product.oldPrice.toFixed(2)} zl</span>
            )}
          </div>
          <button class="px-4 py-2 rounded-lg btn-gradient text-white text-sm font-semibold">
            Do koszyka
          </button>
        </div>
      </div>
    </div>
  );
}

function FeaturedProducts() {
  const featured = getFeaturedProducts().slice(0, 8);

  return (
    <section class="py-16 bg-deep-black">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between mb-8">
          <h2 class="text-3xl font-bold text-white">Wyroznione produkty</h2>
          <a href="/produkty" class="inline-flex items-center px-4 py-2 rounded-lg border border-gray-700 text-gray-300 hover:border-neon-violet hover:text-neon-violet transition-colors">
            Zobacz wszystkie
            <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RecommendedSection() {
  const recommended = products.slice(0, 4);

  return (
    <section class="py-16 bg-gray-900">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">
            <span class="gradient-text">Polecane dla Ciebie</span>
          </h2>
          <p class="text-gray-400">Automatycznie dobrane produkty dostosowane do Twoich potrzeb</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommended.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsletterSection() {
  return (
    <section class="py-16 bg-gray-800">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
          <div class="inline-flex items-center justify-center w-16 h-16 btn-gradient rounded-full mb-6">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>

          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
            Badz na biezaco
          </h2>

          <p class="text-gray-300 mb-8">
            Zapisz sie do naszego newslettera i otrzymuj informacje o nowosciach,
            promocjach i ekskluzywnych ofertach prosto na swoja skrzynke.
          </p>

          <form class="max-w-md mx-auto">
            <div class="flex flex-col sm:flex-row gap-3">
              <div class="flex-1 relative">
                <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <input
                  type="email"
                  placeholder="Twoj adres e-mail"
                  class="w-full pl-12 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-violet transition-colors"
                />
              </div>
              <button type="submit" class="px-6 py-3 rounded-lg btn-gradient text-white font-semibold">
                Zapisz sie
              </button>
            </div>
            <p class="text-xs text-gray-500 mt-3">
              Szanujemy Twoja prywatnosc. Mozesz zrezygnowac z subskrypcji w kazdej chwili.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function WhyUsSection() {
  return (
    <section class="py-16 bg-deep-black">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-white text-center mb-12">
          Dlaczego my?
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 btn-gradient rounded-full mx-auto mb-4 flex items-center justify-center">
              <span class="text-2xl">📦</span>
            </div>
            <h3 class="text-xl font-semibold text-white mb-2">Szybka dostawa</h3>
            <p class="text-gray-400">Realizujemy zamowienia w 24 godziny</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 btn-gradient rounded-full mx-auto mb-4 flex items-center justify-center">
              <span class="text-2xl">✓</span>
            </div>
            <h3 class="text-xl font-semibold text-white mb-2">Gwarancja jakosci</h3>
            <p class="text-gray-400">Wszystkie produkty objete gwarancja producenta</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 btn-gradient rounded-full mx-auto mb-4 flex items-center justify-center">
              <span class="text-2xl">💳</span>
            </div>
            <h3 class="text-xl font-semibold text-white mb-2">Bezpieczne platnosci</h3>
            <p class="text-gray-400">Akceptujemy wszystkie najpopularniejsze metody platnosci</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout>
      <BannerCarousel />
      <HeroSection />
      <FeaturedProducts />
      <RecommendedSection />
      <NewsletterSection />
      <WhyUsSection />
      <NewsletterPopup />
    </Layout>
  );
}
