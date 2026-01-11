import Layout from "../components/Layout.tsx";
import { products, getFeaturedProducts } from "../data/products.ts";
import NewsletterPopup from "../islands/NewsletterPopup.tsx";
import BannerCarousel from "../islands/BannerCarousel.tsx";

function HeroSection() {
  return (
    <section class="relative bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20 md:py-32">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            <span class="gradient-text">Elektronika</span>
            <br />
            <span class="text-gray-800">najwyższej jakości</span>
          </h1>
          <p class="text-xl text-gray-600 mb-8">
            Odkryj najnowsze produkty ze świata elektroniki w konkurencyjnych cenach.
            Gwarantujemy wysoką jakość i szybką dostawę.
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
    <a href={`/produkty/${product.slug}`} class="bg-white rounded-xl overflow-hidden border border-gray-200 card-hover block shadow-sm">
      <div class="h-48 bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center relative">
        {product.isNew && (
          <span class="absolute top-3 left-3 px-2 py-1 bg-blue-500 text-white text-xs font-bold rounded z-10">NOWOŚĆ</span>
        )}
        {product.oldPrice && (
          <span class="absolute top-3 right-3 px-2 py-1 bg-red-500 text-white text-xs font-bold rounded z-10">PROMOCJA</span>
        )}
        {product.image && product.image.startsWith("/products/") ? (
          <img src={product.image} alt={product.name} class="h-full w-full object-cover" />
        ) : (
          <span class="text-6xl">
            {product.categorySlug === "myszki" ? "🖱️" :
             product.categorySlug === "klawiatury" ? "⌨️" :
             product.categorySlug === "sluchawki" ? "🎧" :
             product.categorySlug === "tablety" ? "📱" :
             product.categorySlug === "akcesoria" ? "🎮" :
             product.categorySlug === "bezpieczenstwo" ? "🔐" : "📦"}
          </span>
        )}
      </div>
      <div class="p-4">
        <span class="text-xs text-primary font-semibold uppercase">{product.category}</span>
        <h3 class="text-lg font-bold text-gray-800 mt-1 line-clamp-1">{product.name}</h3>
        <p class="text-sm text-gray-500 mt-1 line-clamp-2">{product.description}</p>
        <div class="flex items-center justify-between mt-4">
          <div>
            <span class="text-xl font-bold text-gray-800">{product.price.toFixed(2)} zł</span>
            {product.oldPrice && (
              <span class="ml-2 text-sm text-gray-400 line-through">{product.oldPrice.toFixed(2)} zł</span>
            )}
          </div>
          <span class="px-4 py-2 rounded-lg btn-gradient text-white text-sm font-semibold">
            Zobacz
          </span>
        </div>
      </div>
    </a>
  );
}

function FeaturedProducts() {
  const featured = getFeaturedProducts().slice(0, 8);

  return (
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between mb-8">
          <h2 class="text-3xl font-bold text-gray-800">Wyróżnione produkty</h2>
          <a href="/produkty" class="inline-flex items-center px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:border-primary hover:text-primary transition-colors">
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
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">
            <span class="gradient-text">Polecane dla Ciebie</span>
          </h2>
          <p class="text-gray-500">Automatycznie dobrane produkty dostosowane do Twoich potrzeb</p>
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
    <section class="py-16 bg-gradient-to-r from-purple-100 to-blue-100">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
          <div class="inline-flex items-center justify-center w-16 h-16 btn-gradient rounded-full mb-6">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>

          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Bądź na bieżąco
          </h2>

          <p class="text-gray-600 mb-8">
            Zapisz się do naszego newslettera i otrzymuj informacje o nowościach,
            promocjach i ekskluzywnych ofertach prosto na swoją skrzynkę.
          </p>

          <form class="max-w-md mx-auto">
            <div class="flex flex-col sm:flex-row gap-3">
              <div class="flex-1 relative">
                <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <input
                  type="email"
                  placeholder="Twój adres e-mail"
                  class="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <button type="submit" class="px-6 py-3 rounded-lg btn-gradient text-white font-semibold">
                Zapisz się
              </button>
            </div>
            <p class="text-xs text-gray-500 mt-3">
              Szanujemy Twoją prywatność. Możesz zrezygnować z subskrypcji w każdej chwili.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function WhyUsSection() {
  return (
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-800 text-center mb-12">
          Dlaczego my?
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 btn-gradient rounded-full mx-auto mb-4 flex items-center justify-center">
              <span class="text-2xl">📦</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Szybka dostawa</h3>
            <p class="text-gray-500">Realizujemy zamówienia w 24 godziny</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 btn-gradient rounded-full mx-auto mb-4 flex items-center justify-center">
              <span class="text-2xl">✓</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Gwarancja jakości</h3>
            <p class="text-gray-500">Wszystkie produkty objęte gwarancją producenta</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 btn-gradient rounded-full mx-auto mb-4 flex items-center justify-center">
              <span class="text-2xl">💳</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Bezpieczne płatności</h3>
            <p class="text-gray-500">Akceptujemy wszystkie najpopularniejsze metody płatności</p>
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
