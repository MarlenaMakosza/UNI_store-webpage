'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getCategories, getStrapiMediaUrl } from '@/lib/strapi';
import { ProductCategory } from '@/types/product';
import { StrapiCollectionResponse } from '@/types/strapi';
import { ArrowRight } from 'lucide-react';

export default function CategoriesPage() {
  const [categories, setCategories] = useState<StrapiCollectionResponse<ProductCategory> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadCategories() {
      try {
        setIsLoading(true);
        const response = await getCategories();
        console.log('Categories response:', response);
        setCategories(response);
        setError(null);
      } catch (err) {
        setError('Nie udało się załadować kategorii');
        console.error('Failed to load categories:', err);
      } finally {
        setIsLoading(false);
      }
    }

    loadCategories();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-deep-black flex items-center justify-center">
        <p className="text-gray-400">Ładowanie kategorii...</p>
      </div>
    );
  }

  if (error || !categories) {
    return (
      <div className="min-h-screen bg-deep-black flex items-center justify-center">
        <p className="text-red-500">{error || 'Nie znaleziono kategorii'}</p>
      </div>
    );
  }

  // Filter only parent categories (no parent)
  const parentCategories = categories.data.filter((cat) => {
    const data = cat.attributes || (cat as any);
    return !data.parent || !data.parent.data;
  });

  return (
    <div className="min-h-screen bg-deep-black py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Kategorie produktów</h1>
          <p className="text-gray-400">Wybierz kategorię aby przeglądać produkty</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {parentCategories.map((category) => {
            const data = category.attributes || (category as any);
            const image = data.image || data.image?.data;
            const imageUrl = image?.url || image?.attributes?.url;
            const imageSrc = imageUrl ? getStrapiMediaUrl(imageUrl) : null;

            return (
              <Link
                key={category.documentId}
                href={`/products?category=${data.slug}`}
                className="group relative bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-neon-violet transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-800">
                  {imageSrc ? (
                    <Image
                      src={imageSrc}
                      alt={image?.alternativeText || data.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-6xl">{data.icon || '📦'}</div>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h2 className="text-xl font-bold text-white mb-1 group-hover:text-neon-violet transition-colors">
                      {data.name}
                    </h2>
                    {data.description && (
                      <p className="text-sm text-gray-300 line-clamp-2">
                        {data.description}
                      </p>
                    )}
                  </div>
                </div>

                {data.children && data.children.data && data.children.data.length > 0 && (
                  <div className="p-4 border-t border-gray-800">
                    <p className="text-xs text-gray-400 mb-2">Podkategorie:</p>
                    <div className="flex flex-wrap gap-1">
                      {data.children.data.slice(0, 3).map((child: any) => {
                        const childData = child.attributes || child;
                        return (
                          <span
                            key={child.documentId}
                            className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded"
                          >
                            {childData.name}
                          </span>
                        );
                      })}
                      {data.children.data.length > 3 && (
                        <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded">
                          +{data.children.data.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                )}

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-neon-violet text-white rounded-full p-2">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {parentCategories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">Brak kategorii do wyświetlenia</p>
          </div>
        )}
      </div>
    </div>
  );
}
