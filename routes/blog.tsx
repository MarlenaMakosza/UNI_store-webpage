import Layout from "../components/Layout.tsx";
import { articles } from "../data/articles.ts";

function getIcon(featuredImage: string) {
  switch (featuredImage) {
    case "chart": return "📊";
    case "video": return "🎬";
    case "gift": return "🎉";
    case "computer": return "💻";
    case "sale": return "⚡";
    default: return "📝";
  }
}

export default function BlogPage() {
  return (
    <Layout>
      <div class="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section class="relative bg-gradient-to-br from-purple-50 via-white to-blue-50 py-16 md:py-24">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl mx-auto text-center">
              <h1 class="text-4xl md:text-5xl font-bold mb-6">
                <span class="gradient-text">Blog TechNest</span>
              </h1>
              <p class="text-xl text-gray-600">
                Najnowsze artykuly, promocje i nowosci ze swiata elektroniki
              </p>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section class="py-16">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <article
                  key={article.id}
                  class="bg-white rounded-xl overflow-hidden border border-gray-200 card-hover shadow-sm"
                >
                  {/* Featured Image */}
                  <div class="h-48 bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center text-6xl">
                    {getIcon(article.featuredImage)}
                  </div>

                  {/* Content */}
                  <div class="p-6">
                    {/* Category & Date */}
                    <div class="flex items-center justify-between mb-3">
                      <span class="text-xs font-semibold text-primary uppercase tracking-wider">
                        {article.category}
                      </span>
                      <div class="flex items-center text-gray-500 text-sm">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {new Date(article.publishedAt).toLocaleDateString("pl-PL", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                    </div>

                    {/* Title */}
                    <h2 class="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                      {article.title}
                    </h2>

                    {/* Subtitle */}
                    <p class="text-gray-500 text-sm mb-3 line-clamp-1">
                      {article.subtitle}
                    </p>

                    {/* Excerpt */}
                    <p class="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>

                    {/* Read More Link */}
                    <a
                      href={`/blog/${article.slug}`}
                      class="inline-flex items-center text-primary hover:text-secondary font-semibold transition-colors"
                    >
                      Czytaj wiecej
                      <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
