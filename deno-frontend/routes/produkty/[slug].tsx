import { PageProps } from "$fresh/server.ts";
import Layout from "../../components/Layout.tsx";
import { getProductBySlug, products } from "../../data/products.ts";
import ProductGallery from "../../islands/ProductGallery.tsx";

export default function ProductPage(props: PageProps) {
  const product = getProductBySlug(props.params.slug);

  if (!product) {
    return (
      <Layout>
        <div class="min-h-screen bg-gray-50 py-16">
          <div class="container mx-auto px-4 text-center">
            <h1 class="text-4xl font-bold text-gray-800 mb-4">Produkt nie znaleziony</h1>
            <p class="text-gray-500 mb-8">Przepraszamy, nie znaleźliśmy szukanego produktu.</p>
            <a href="/produkty" class="inline-block px-6 py-3 rounded-lg btn-gradient text-white font-semibold">
              Wróć do produktów
            </a>
          </div>
        </div>
      </Layout>
    );
  }

  const relatedProducts = products.filter(p => p.categorySlug === product.categorySlug && p.id !== product.id).slice(0, 4);

  return (
    <Layout>
      <div class="min-h-screen bg-gray-50 py-8">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav class="mb-8">
            <ol class="flex items-center space-x-2 text-sm">
              <li><a href="/produkty" class="text-gray-500 hover:text-primary">Produkty</a></li>
              <li class="text-gray-400">/</li>
              <li><a href={`/kategorie/${product.categorySlug}`} class="text-gray-500 hover:text-primary">{product.category}</a></li>
              <li class="text-gray-400">/</li>
              <li class="text-primary font-medium">{product.name}</li>
            </ol>
          </nav>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image Gallery */}
            {product.images && product.images.length > 0 ? (
              <ProductGallery images={product.images} productName={product.name} />
            ) : (
              <div class="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                <div class="h-96 bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center">
                  <span class="text-9xl">
                    {product.categorySlug === "myszki" ? "🖱️" :
                     product.categorySlug === "klawiatury" ? "⌨️" :
                     product.categorySlug === "sluchawki" ? "🎧" :
                     product.categorySlug === "monitory" ? "🖥️" :
                     product.categorySlug === "tablety" ? "📱" :
                     product.categorySlug === "akcesoria" ? "🎮" :
                     product.categorySlug === "bezpieczenstwo" ? "🔐" : "📦"}
                  </span>
                </div>
              </div>
            )}

            {/* Product Info */}
            <div>
              <span class="text-sm text-primary font-semibold uppercase">{product.category}</span>
              <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">{product.name}</h1>

              <div class="flex items-center gap-4 mb-6">
                <span class="text-3xl font-bold text-gray-800">{product.price.toFixed(2)} zł</span>
                {product.oldPrice && (
                  <span class="text-xl text-gray-400 line-through">{product.oldPrice.toFixed(2)} zł</span>
                )}
                {product.oldPrice && (
                  <span class="px-3 py-1 bg-red-500 text-white text-sm font-bold rounded">
                    -{Math.round((1 - product.price / product.oldPrice) * 100)}%
                  </span>
                )}
              </div>

              <p class="text-gray-600 text-lg mb-8">{product.description}</p>

              <div class="space-y-4 mb-8">
                <div class="flex items-center gap-3 text-gray-600">
                  <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Dostępny w magazynie
                </div>
                <div class="flex items-center gap-3 text-gray-600">
                  <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Darmowa dostawa od 150 zł
                </div>
                <div class="flex items-center gap-3 text-gray-600">
                  <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  24 miesiące gwarancji
                </div>
              </div>

              <div class="flex gap-4">
                <button class="flex-1 px-6 py-4 rounded-lg btn-gradient text-white font-semibold text-lg">
                  Dodaj do koszyka
                </button>
                <button class="px-6 py-4 rounded-lg border border-gray-300 text-gray-600 hover:border-primary hover:text-primary transition-colors">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Full Description */}
          {product.fullDescription && (
            <section class="mt-16">
              <h2 class="text-2xl font-bold text-gray-800 mb-6">
                <span class="gradient-text">{product.name}</span> - przewaga, którą usłyszysz
              </h2>

              <div class="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                {/* Intro */}
                <p class="text-gray-600 text-lg leading-relaxed mb-8">
                  {product.fullDescription.intro}
                </p>

                {/* Section: Why choose */}
                <h3 class="text-xl font-bold text-gray-800 mb-6">
                  Dlaczego warto wybrać {product.name}?
                </h3>

                {/* Features */}
                <div class="space-y-6 mb-8">
                  {product.fullDescription.sections.map((section, index) => (
                    <div key={index} class="border-l-4 border-primary pl-6">
                      <h4 class="font-bold text-gray-800 mb-2">{section.title}</h4>
                      <p class="text-gray-600 leading-relaxed">{section.content}</p>
                    </div>
                  ))}
                </div>

                {/* Outro */}
                {product.fullDescription.outro && (
                  <div class="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 mt-8">
                    <h4 class="font-bold text-gray-800 mb-2">
                      {product.name} - wybór, który zrobi różnicę
                    </h4>
                    <p class="text-gray-700 leading-relaxed">
                      {product.fullDescription.outro}
                    </p>
                  </div>
                )}

                {/* Note */}
                {product.fullDescription.note && (
                  <div class="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mt-6 flex items-start gap-3">
                    <span class="text-yellow-600 text-xl">⚠️</span>
                    <p class="text-yellow-800 text-sm">
                      {product.fullDescription.note}
                    </p>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Specs Table */}
          {product.specs && product.specs.length > 0 && (
            <section class="mt-12">
              <h2 class="text-2xl font-bold text-gray-800 mb-6">Specyfikacja techniczna</h2>

              <div class="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                <table class="w-full">
                  <tbody>
                    {product.specs.map((spec, index) => (
                      <tr key={index} class={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                        <td class="px-6 py-4 font-semibold text-gray-800 w-1/3 border-r border-gray-200">
                          {spec.label}
                        </td>
                        <td class="px-6 py-4 text-gray-600">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section class="mt-16">
              <h2 class="text-2xl font-bold text-gray-800 mb-8">Podobne produkty</h2>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((p) => (
                  <a key={p.id} href={`/produkty/${p.slug}`} class="bg-white rounded-xl overflow-hidden border border-gray-200 card-hover block shadow-sm">
                    <div class="h-40 bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center">
                      {p.image && p.image.startsWith("/products/") ? (
                        <img src={p.image} alt={p.name} class="h-full w-full object-cover" />
                      ) : (
                        <span class="text-5xl">
                          {p.categorySlug === "myszki" ? "🖱️" :
                           p.categorySlug === "klawiatury" ? "⌨️" :
                           p.categorySlug === "sluchawki" ? "🎧" :
                           p.categorySlug === "monitory" ? "🖥️" :
                           p.categorySlug === "tablety" ? "📱" :
                           p.categorySlug === "akcesoria" ? "🎮" :
                           p.categorySlug === "bezpieczenstwo" ? "🔐" : "📦"}
                        </span>
                      )}
                    </div>
                    <div class="p-4">
                      <h3 class="font-bold text-gray-800 line-clamp-1">{p.name}</h3>
                      <span class="text-lg font-bold text-primary">{p.price.toFixed(2)} zł</span>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </Layout>
  );
}
