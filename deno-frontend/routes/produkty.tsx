import Layout from "../components/Layout.tsx";
import { products } from "../data/products.ts";

function ProductCard({ product }: { product: typeof products[0] }) {
  return (
    <a href={`/produkty/${product.slug}`} class="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 card-hover block">
      <div class="h-48 bg-gradient-to-br from-neon-violet/20 to-electric-blue/20 flex items-center justify-center relative">
        {product.isNew && (
          <span class="absolute top-3 left-3 px-2 py-1 bg-electric-blue text-white text-xs font-bold rounded">NOWOSC</span>
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
    </a>
  );
}

export default function ProductsPage() {
  return (
    <Layout>
      <div class="min-h-screen bg-deep-black py-8">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="mb-8">
            <h1 class="text-4xl font-bold text-white mb-4">Produkty</h1>

            <form class="max-w-md">
              <div class="flex gap-2">
                <div class="flex-1 relative">
                  <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="search"
                    placeholder="Szukaj produktow..."
                    class="w-full pl-12 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-violet transition-colors"
                  />
                </div>
                <button type="submit" class="px-4 py-3 rounded-lg btn-gradient text-white">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </form>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
