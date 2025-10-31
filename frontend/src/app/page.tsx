'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import ProductGrid from '@/components/product/ProductGrid';
import Button from '@/components/ui/Button';
import BannerCarousel from '@/components/home/BannerCarousel';
import { getProducts } from '@/lib/strapi';
import { Product } from '@/types/product';
import { StrapiCollectionResponse } from '@/types/strapi';
import { useCart } from '@/hooks/useCart';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  const [featuredProducts, setFeaturedProducts] = useState<StrapiCollectionResponse<Product> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addItem } = useCart();

  useEffect(() => {
    async function loadFeaturedProducts() {
      try {
        setIsLoading(true);
        const response = await getProducts({ pageSize: 8 });
        setFeaturedProducts(response);
      } catch (err) {
        setError('Nie udało się załadować produktów');
        console.error('Failed to load featured products:', err);
      } finally {
        setIsLoading(false);
      }
    }

    loadFeaturedProducts();
  }, []);

  const handleAddToCart = async (productId: string, documentId: string) => {
    if (!featuredProducts) return;

    const product = featuredProducts.data.find((p) => p.documentId === documentId);
    if (!product) return;

    // Support both Strapi 4 and Strapi 5 structure
    const data = product.attributes || (product as any);
    const imageUrl = data.images?.data?.[0]?.attributes?.url || null;

    addItem({
      productId,
      documentId,
      name: data.name,
      slug: data.slug,
      price: data.price,
      image: imageUrl,
      stock: data.stock,
    });
  };

  return (
    <div className="min-h-screen">
      <BannerCarousel />

      <section className="relative bg-gradient-to-br from-deep-black via-gray-900 to-deep-black py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-neon-violet to-electric-blue bg-clip-text text-transparent">
                Elektronika
              </span>
              <br />
              <span className="text-white">najwyższej jakości</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Odkryj najnowsze produkty z świata elektroniki w konkurencyjnych cenach.
              Gwarantujemy wysoką jakość i szybką dostawę.
            </p>
            <Link href="/products">
              <Button size="lg" variant="primary">
                Zobacz produkty
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-deep-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">Wyróżnione produkty</h2>
            <Link href="/products">
              <Button variant="outline" size="sm">
                Zobacz wszystkie
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          {isLoading && (
            <div className="text-center py-12">
              <p className="text-gray-400">Ładowanie produktów...</p>
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <p className="text-red-500">{error}</p>
            </div>
          )}

          {!isLoading && !error && featuredProducts && (
            <ProductGrid
              products={featuredProducts.data}
              onAddToCart={handleAddToCart}
            />
          )}
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Dlaczego my?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-neon-violet to-electric-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">📦</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Szybka dostawa</h3>
              <p className="text-gray-400">
                Realizujemy zamówienia w 24 godziny
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-neon-violet to-electric-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Gwarancja jakości</h3>
              <p className="text-gray-400">
                Wszystkie produkty objęte gwarancją producenta
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-neon-violet to-electric-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">💳</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Bezpieczne płatności</h3>
              <p className="text-gray-400">
                Akceptujemy wszystkie najpopularniejsze metody płatności
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
