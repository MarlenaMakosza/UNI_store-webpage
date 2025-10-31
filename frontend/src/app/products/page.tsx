'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductGrid from '@/components/product/ProductGrid';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { getProducts } from '@/lib/strapi';
import { Product } from '@/types/product';
import { StrapiCollectionResponse } from '@/types/strapi';
import { useCart } from '@/hooks/useCart';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<StrapiCollectionResponse<Product> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const { addItem } = useCart();

  const categorySlug = searchParams.get('category') || undefined;
  const brandSlug = searchParams.get('brand') || undefined;

  useEffect(() => {
    async function loadProducts() {
      try {
        setIsLoading(true);
        const response = await getProducts({
          page: currentPage,
          pageSize: 12,
          categorySlug,
          brandSlug,
          search: searchQuery || undefined,
        });
        console.log('API Response:', response);
        console.log('Products data:', response?.data);
        console.log('Products length:', response?.data?.length);
        setProducts(response);
        setError(null);
      } catch (err) {
        setError('Nie udało się załadować produktów');
        console.error('Failed to load products:', err);
      } finally {
        setIsLoading(false);
      }
    }

    loadProducts();
  }, [currentPage, categorySlug, brandSlug, searchQuery]);

  const handleAddToCart = async (productId: string, documentId: string) => {
    if (!products) return;

    const product = products.data.find((p) => p.documentId === documentId);
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

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
  };

  const totalPages = products?.meta?.pagination?.pageCount || 1;

  return (
    <div className="min-h-screen bg-deep-black py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Produkty</h1>

          <form onSubmit={handleSearch} className="max-w-md">
            <div className="flex gap-2">
              <Input
                type="search"
                placeholder="Szukaj produktów..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button type="submit" variant="primary">
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </form>
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

        {!isLoading && !error && products && (
          <>
            <ProductGrid
              products={products.data}
              onAddToCart={handleAddToCart}
            />

            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-8">
                <Button
                  onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  variant="outline"
                  size="sm"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>

                <span className="text-white text-sm">
                  Strona {currentPage} z {totalPages}
                </span>

                <Button
                  onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  variant="outline"
                  size="sm"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
