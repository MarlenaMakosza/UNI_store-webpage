import Link from 'next/link';
import { articles } from '@/data/articles';
import { Calendar, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Blog - TechNest',
  description: 'Najnowsze artykuły, promocje i nowości ze świata elektroniki',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-deep-black">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-deep-black via-gray-900 to-deep-black py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-neon-violet to-electric-blue bg-clip-text text-transparent">
                Blog TechNest
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              Najnowsze artykuły, promocje i nowości ze świata elektroniki
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article
                key={article.id}
                className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-neon-violet transition-all duration-300 hover:shadow-lg hover:shadow-neon-violet/20"
              >
                {/* Featured Image */}
                <div className="h-48 bg-gradient-to-br from-neon-violet/20 to-electric-blue/20 flex items-center justify-center text-6xl">
                  {article.featuredImage}
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category & Date */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-neon-violet uppercase tracking-wider">
                      {article.category}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(article.publishedAt).toLocaleDateString('pl-PL', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-white mb-2 line-clamp-2">
                    {article.title}
                  </h2>

                  {/* Subtitle */}
                  <p className="text-gray-400 text-sm mb-3 line-clamp-1">
                    {article.subtitle}
                  </p>

                  {/* Excerpt */}
                  <p className="text-gray-300 mb-4 line-clamp-3">{article.excerpt}</p>

                  {/* Read More Link */}
                  <Link
                    href={`/blog/${article.slug}`}
                    className="inline-flex items-center text-neon-violet hover:text-electric-blue font-semibold transition-colors"
                  >
                    Czytaj więcej
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
