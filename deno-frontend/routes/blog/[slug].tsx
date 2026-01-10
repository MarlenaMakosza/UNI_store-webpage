import { PageProps } from "$fresh/server.ts";
import Layout from "../../components/Layout.tsx";
import { getArticleBySlug, articles } from "../../data/articles.ts";

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

export default function ArticlePage(props: PageProps) {
  const article = getArticleBySlug(props.params.slug);

  if (!article) {
    return (
      <Layout>
        <div class="min-h-screen bg-gray-50 py-16">
          <div class="container mx-auto px-4 text-center">
            <h1 class="text-4xl font-bold text-gray-800 mb-4">Artykul nie znaleziony</h1>
            <p class="text-gray-500 mb-8">Przepraszamy, nie znalezlismy szukanego artykulu.</p>
            <a href="/blog" class="inline-block px-6 py-3 rounded-lg btn-gradient text-white font-semibold">
              Wroc do bloga
            </a>
          </div>
        </div>
      </Layout>
    );
  }

  const otherArticles = articles.filter(a => a.id !== article.id).slice(0, 3);

  return (
    <Layout>
      <div class="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section class="relative bg-gradient-to-br from-purple-50 via-white to-blue-50 py-16">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav class="mb-6">
              <ol class="flex items-center space-x-2 text-sm">
                <li><a href="/" class="text-gray-500 hover:text-primary">Strona glowna</a></li>
                <li class="text-gray-400">/</li>
                <li><a href="/blog" class="text-gray-500 hover:text-primary">Blog</a></li>
                <li class="text-gray-400">/</li>
                <li class="text-primary line-clamp-1">{article.title}</li>
              </ol>
            </nav>

            <div class="max-w-4xl">
              <div class="flex items-center gap-4 mb-4">
                <span class="text-xs font-semibold text-primary uppercase tracking-wider bg-purple-100 px-3 py-1 rounded-full">
                  {article.category}
                </span>
                <span class="text-gray-500 text-sm flex items-center">
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {new Date(article.publishedAt).toLocaleDateString("pl-PL", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>

              <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{article.title}</h1>
              <p class="text-xl text-gray-600">{article.subtitle}</p>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section class="py-8">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl mx-auto">
              <div class="h-64 md:h-96 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center text-9xl">
                {getIcon(article.featuredImage)}
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section class="py-8">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl mx-auto">
              <div
                class="prose prose-lg max-w-none
                  prose-headings:text-gray-800 prose-headings:font-bold
                  prose-h2:text-3xl prose-h2:mt-8 prose-h2:mb-4
                  prose-h3:text-2xl prose-h3:mt-6 prose-h3:mb-3
                  prose-p:text-gray-600 prose-p:leading-relaxed
                  prose-li:text-gray-600
                  prose-a:text-primary prose-a:no-underline hover:prose-a:text-secondary
                  prose-strong:text-gray-800
                "
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </div>
          </div>
        </section>

        {/* Other Articles */}
        {otherArticles.length > 0 && (
          <section class="py-16 bg-white">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 class="text-2xl font-bold text-gray-800 mb-8">Inne artykuly</h2>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                {otherArticles.map((a) => (
                  <a key={a.id} href={`/blog/${a.slug}`} class="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 card-hover block shadow-sm">
                    <div class="h-32 bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center text-4xl">
                      {getIcon(a.featuredImage)}
                    </div>
                    <div class="p-4">
                      <span class="text-xs text-primary font-semibold uppercase">{a.category}</span>
                      <h3 class="font-bold text-gray-800 mt-1 line-clamp-2">{a.title}</h3>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
}
