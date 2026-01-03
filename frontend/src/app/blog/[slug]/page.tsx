import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articles } from '@/data/articles';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import { readFile } from 'fs/promises';
import { join } from 'path';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    return {
      title: 'Artykuł nie znaleziony - TechNest',
    };
  }

  return {
    title: `${article.title} - Blog TechNest`,
    description: article.excerpt,
  };
}

async function getArticleHTML(htmlFile: string): Promise<string> {
  try {
    const filePath = join(process.cwd(), 'public', 'articles', htmlFile);
    const html = await readFile(filePath, 'utf-8');

    // In Next.js, files from public/ are served directly without basePath
    // No need to modify paths - they work as-is
    return html;
  } catch (error) {
    console.error('Error reading HTML file:', error);
    return '<p>Nie udało się załadować artykułu.</p>';
  }
}

export default async function ArticlePage({ params }: PageProps) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const articleHTML = await getArticleHTML(article.htmlFile);

  return (
    <div className="min-h-screen bg-deep-black">
      {/* Article Header */}
      <article className="pb-16">
        <header className="relative bg-gradient-to-br from-deep-black via-gray-900 to-deep-black py-12 md:py-16 mb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Category Badge */}
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-neon-violet to-electric-blue text-white text-sm font-semibold">
                  <Tag className="w-4 h-4 mr-2" />
                  {article.category}
                </span>
                <div className="flex items-center text-gray-400">
                  <Calendar className="w-4 h-4 mr-2" />
                  <time dateTime={article.publishedAt}>
                    {new Date(article.publishedAt).toLocaleDateString('pl-PL', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {article.title}
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-gray-300 mb-6">{article.subtitle}</p>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {article.slug === 'poznaj-technest' || article.slug === 'technest-infografika' ? (
            // Video/Infographic articles - full width
            <div
              className="w-full"
              dangerouslySetInnerHTML={{ __html: articleHTML }}
            />
          ) : (
            // Email articles - contained width with shadow
            <div className="max-w-4xl mx-auto">
              <div
                className="rounded-lg shadow-2xl overflow-hidden"
                dangerouslySetInnerHTML={{ __html: articleHTML }}
              />
            </div>
          )}
        </div>
      </article>
    </div>
  );
}
