import { PageProps } from "$fresh/server.ts";
import Layout from "../../components/Layout.tsx";
import { getArticleBySlug } from "../../data/articles.ts";

export default function ArticlePage(props: PageProps) {
  const article = getArticleBySlug(props.params.slug);

  if (!article) {
    return (
      <Layout>
        <div class="min-h-screen bg-gray-50 py-16">
          <div class="container mx-auto px-4 text-center">
            <h1 class="text-4xl font-bold text-gray-800 mb-4">Artykuł nie znaleziony</h1>
            <p class="text-gray-500 mb-8">Przepraszamy, nie znaleźliśmy szukanego artykułu.</p>
            <a href="/blog" class="inline-block px-6 py-3 rounded-lg btn-gradient text-white font-semibold">
              Wróć do bloga
            </a>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div class="min-h-screen bg-gray-50">
        {/* Article Header */}
        <article class="pb-16">
          <header class="relative bg-gradient-to-br from-purple-50 via-white to-blue-50 py-12 md:py-16 mb-12">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
              <div class="max-w-4xl mx-auto">
                {/* Category Badge & Date */}
                <div class="flex items-center gap-4 mb-6">
                  <span class="inline-flex items-center px-4 py-2 rounded-full btn-gradient text-white text-sm font-semibold">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    {article.category}
                  </span>
                  <div class="flex items-center text-gray-500">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <time dateTime={article.publishedAt}>
                      {new Date(article.publishedAt).toLocaleDateString("pl-PL", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                </div>

                {/* Title */}
                <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                  {article.title}
                </h1>

                {/* Subtitle */}
                <p class="text-xl text-gray-600 mb-6">{article.subtitle}</p>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            {article.mediaType === "video" && article.mediaFile ? (
              // Video article
              <div class="max-w-4xl mx-auto">
                <div class="w-full rounded-2xl shadow-2xl bg-gray-100 flex flex-col items-center justify-center py-16 px-8 text-center">
                  <span class="text-5xl mb-4">🎬</span>
                  <p class="text-xl font-semibold text-gray-700 mb-2">Film niedostępny</p>
                  <p class="text-gray-500">Ze względu na ograniczenia hostingu materiał wideo nie jest obecnie dostępny. Przepraszamy za utrudnienia.</p>
                </div>
              </div>
            ) : article.mediaType === "image" && article.mediaFile ? (
              // Image/Infographic article
              <div class="max-w-4xl mx-auto">
                <img
                  src={article.mediaFile}
                  alt={article.title}
                  class="w-full rounded-2xl shadow-2xl"
                />
              </div>
            ) : article.htmlFile ? (
              // HTML email article - display in iframe
              <div class="max-w-3xl mx-auto">
                <iframe
                  src={article.htmlFile}
                  class="w-full border-0 rounded-2xl shadow-2xl"
                  style={`min-height: ${article.htmlHeight || 2500}px;`}
                  title={article.title}
                />
              </div>
            ) : null}
          </div>
        </article>
      </div>
    </Layout>
  );
}
