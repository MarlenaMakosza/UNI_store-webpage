import Layout from "../components/Layout.tsx";
import { products } from "../data/products.ts";

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
             product.categorySlug === "monitory" ? "🖥️" :
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
          <button disabled class="px-4 py-2 rounded-lg bg-gray-300 text-gray-500 text-sm font-semibold cursor-not-allowed">
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
      <div class="min-h-screen bg-gray-50 py-8">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="mb-8">
            <h1 class="text-4xl font-bold text-gray-800 mb-4">Produkty</h1>

            <form class="max-w-md">
              <div class="flex gap-2">
                <div class="flex-1 relative">
                  <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="search"
                    placeholder="Szukaj produktów..."
                    class="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
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
