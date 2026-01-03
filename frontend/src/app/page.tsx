'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import ProductGrid from '@/components/product/ProductGrid';
import ProductCarousel from '@/components/product/ProductCarousel';
import Button from '@/components/ui/Button';
import BannerCarousel from '@/components/home/BannerCarousel';
import NewsletterSection from '@/components/home/NewsletterSection';
import NewsletterPopup from '@/components/ui/NewsletterPopup';
import { getProducts } from '@/lib/strapi';
import { Product } from '@/types/product';
import { StrapiCollectionResponse } from '@/types/strapi';
import { useCart } from '@/hooks/useCart';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  const [featuredProducts, setFeaturedProducts] = useState<StrapiCollectionResponse<Product> | null>(null);
  const [carouselProducts, setCarouselProducts] = useState<StrapiCollectionResponse<Product> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addItem } = useCart();

  useEffect(() => {
    async function loadProducts() {
      try {
        setIsLoading(true);
        // Load all available products (up to 20)
        const allProducts = await getProducts({ pageSize: 20 });

        // First 8 for featured section
        setFeaturedProducts({
          ...allProducts,
          data: allProducts.data.slice(0, 8),
        });

        // If we have more than 8 products, use remaining for carousel
        // Otherwise, duplicate the products for carousel
        if (allProducts.data.length > 8) {
          setCarouselProducts({
            ...allProducts,
            data: allProducts.data.slice(8),
          });
        } else if (allProducts.data.length > 0) {
          // Duplicate products if we have less than 8
          setCarouselProducts(allProducts);
        }
      } catch (err) {
        setError('Nie udało się załadować produktów');
        console.error('Failed to load products:', err);
      } finally {
        setIsLoading(false);
      }
    }

    loadProducts();
  }, []);

  const handleAddToCart = async (productId: string, documentId: string) => {
    // Find product in either featured or carousel products
    const allProducts = [
      ...(featuredProducts?.data || []),
      ...(carouselProducts?.data || []),
    ];

    const product = allProducts.find((p) => p.documentId === documentId);
    if (!product) return;

    // Support both Strapi 4 and Strapi 5 structure
    const data = product.attributes || (product as any);
    const firstImage = data.images?.[0] || data.images?.data?.[0];
    const imageUrl = firstImage?.url || firstImage?.attributes?.url || null;

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

      {/* Product Carousel Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-neon-violet to-electric-blue bg-clip-text text-transparent">
                Polecane dla Ciebie
              </span>
            </h2>
            <p className="text-gray-400">
              Automatycznie dobrane produkty dostosowane do Twoich potrzeb
            </p>
          </div>

          {isLoading && (
            <div className="text-center py-12">
              <p className="text-gray-400">Ładowanie produktów...</p>
            </div>
          )}

          {!isLoading && carouselProducts && carouselProducts.data.length > 0 && (
            <ProductCarousel
              products={carouselProducts.data}
              onAddToCart={handleAddToCart}
            />
          )}

          {!isLoading && (!carouselProducts || carouselProducts.data.length === 0) && (
            <div className="text-center py-12">
              <p className="text-gray-400">Brak dostępnych produktów</p>
            </div>
          )}
        </div>
      </section>

      <NewsletterSection />

      <section className="py-16 bg-deep-black">
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

      <NewsletterPopup />
    </div>
  );
}
