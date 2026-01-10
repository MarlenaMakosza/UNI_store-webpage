import { PageProps } from "$fresh/server.ts";
import Layout from "../../components/Layout.tsx";
import { getCategoryBySlug } from "../../data/categories.ts";
import { getProductsByCategory } from "../../data/products.ts";

export default function CategoryPage(props: PageProps) {
  const category = getCategoryBySlug(props.params.slug);
  const categoryProducts = getProductsByCategory(props.params.slug);

  if (!category) {
    return (
      <Layout>
        <div class="min-h-screen bg-gray-50 py-16">
          <div class="container mx-auto px-4 text-center">
            <h1 class="text-4xl font-bold text-gray-800 mb-4">Kategoria nie znaleziona</h1>
            <p class="text-gray-500 mb-8">Przepraszamy, nie znaleźliśmy szukanej kategorii.</p>
            <a href="/kategorie" class="inline-block px-6 py-3 rounded-lg btn-gradient text-white font-semibold">
              Wróć do kategorii
            </a>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div class="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section class="relative bg-gradient-to-br from-purple-50 via-white to-blue-50 py-16">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav class="mb-6">
              <ol class="flex items-center space-x-2 text-sm">
                <li><a href="/" class="text-gray-500 hover:text-primary">Strona główna</a></li>
                <li class="text-gray-400">/</li>
                <li><a href="/kategorie" class="text-gray-500 hover:text-primary">Kategorie</a></li>
                <li class="text-gray-400">/</li>
                <li class="text-primary font-medium">{category.name}</li>
              </ol>
            </nav>

            <div class="flex items-center gap-6">
              <div class="w-20 h-20 btn-gradient rounded-2xl flex items-center justify-center">
                <span class="text-4xl">
                  {category.slug === "myszki" ? "🖱️" : category.slug === "klawiatury" ? "⌨️" : category.slug === "sluchawki" ? "🎧" : "🖥️"}
                </span>
              </div>
              <div>
                <h1 class="text-4xl font-bold text-gray-800">{category.name}</h1>
                <p class="text-gray-500 mt-2">{category.description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section class="py-12">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <p class="text-gray-500 mb-8">{categoryProducts.length} produktów w kategorii</p>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categoryProducts.map((product) => (
                <a key={product.id} href={`/produkty/${product.slug}`} class="bg-white rounded-xl overflow-hidden border border-gray-200 card-hover block shadow-sm">
                  <div class="h-48 bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center relative">
                    {product.isNew && (
                      <span class="absolute top-3 left-3 px-2 py-1 bg-blue-500 text-white text-xs font-bold rounded">NOWOŚĆ</span>
                    )}
                    {product.oldPrice && (
                      <span class="absolute top-3 right-3 px-2 py-1 bg-red-500 text-white text-xs font-bold rounded">PROMOCJA</span>
                    )}
                    <span class="text-6xl">
                      {product.category === "Myszki" ? "🖱️" : product.category === "Klawiatury" ? "⌨️" : product.category === "Sluchawki" ? "🎧" : "🖥️"}
                    </span>
                  </div>
                  <div class="p-4">
                    <h3 class="text-lg font-bold text-gray-800 line-clamp-1">{product.name}</h3>
                    <p class="text-sm text-gray-500 mt-1 line-clamp-2">{product.description}</p>
                    <div class="flex items-center justify-between mt-4">
                      <div>
                        <span class="text-xl font-bold text-gray-800">{product.price.toFixed(2)} zł</span>
                        {product.oldPrice && (
                          <span class="ml-2 text-sm text-gray-400 line-through">{product.oldPrice.toFixed(2)} zł</span>
                        )}
                      </div>
                      <button class="px-4 py-2 rounded-lg btn-gradient text-white text-sm font-semibold">
                        Do koszyka
                      </button>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
