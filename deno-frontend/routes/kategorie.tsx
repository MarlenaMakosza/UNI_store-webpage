import Layout from "../components/Layout.tsx";
import { categories } from "../data/categories.ts";
import { products } from "../data/products.ts";

export default function CategoriesPage() {
  return (
    <Layout>
      <div class="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section class="relative bg-gradient-to-br from-purple-50 via-white to-blue-50 py-16 md:py-24">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl mx-auto text-center">
              <h1 class="text-4xl md:text-5xl font-bold mb-6">
                <span class="gradient-text">Kategorie produktow</span>
              </h1>
              <p class="text-xl text-gray-600">
                Przegladaj nasze produkty wedlug kategorii
              </p>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section class="py-16">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {categories.map((category) => {
                const categoryProducts = products.filter(p => p.categorySlug === category.slug);
                return (
                  <a
                    key={category.id}
                    href={`/kategorie/${category.slug}`}
                    class="bg-white rounded-xl overflow-hidden border border-gray-200 card-hover block group shadow-sm"
                  >
                    <div class="h-48 bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center">
                      <span class="text-7xl group-hover:scale-110 transition-transform">
                        {category.slug === "myszki" ? "🖱️" : category.slug === "klawiatury" ? "⌨️" : category.slug === "sluchawki" ? "🎧" : "🖥️"}
                      </span>
                    </div>
                    <div class="p-6">
                      <h3 class="text-xl font-bold text-gray-800 mb-2">{category.name}</h3>
                      <p class="text-gray-500 text-sm mb-4">{category.description}</p>
                      <div class="flex items-center justify-between">
                        <span class="text-primary font-semibold">{categoryProducts.length} produktow</span>
                        <svg class="w-5 h-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
