'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Button from '@/components/ui/Button';
import { getProduct, getStrapiMediaUrl } from '@/lib/strapi';
import { formatPrice, calculateDiscount, getStockStatus, getStockStatusText } from '@/lib/utils';
import { Product } from '@/types/product';
import { StrapiResponse } from '@/types/strapi';
import { useCart } from '@/hooks/useCart';
import { ShoppingCart, ArrowLeft } from 'lucide-react';

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [product, setProduct] = useState<StrapiResponse<Product> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { addItem } = useCart();

  useEffect(() => {
    async function loadProduct() {
      try {
        setIsLoading(true);
        const response = await getProduct(slug);
        setProduct(response);

        // Support Strapi 5 flat structure
        const data = response.data.attributes || (response.data as any);
        const firstImage = data.images?.[0] || data.images?.data?.[0];
        const imageUrl = firstImage?.url || firstImage?.attributes?.url;
        const mainImageUrl = imageUrl ? getStrapiMediaUrl(imageUrl) : null;
        setSelectedImage(mainImageUrl);
        setError(null);
      } catch (err) {
        setError('Nie udało się załadować produktu');
        console.error('Failed to load product:', err);
      } finally {
        setIsLoading(false);
      }
    }

    loadProduct();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-deep-black flex items-center justify-center">
        <p className="text-gray-400">Ładowanie produktu...</p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-deep-black flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 mb-4">{error || 'Produkt nie został znaleziony'}</p>
          <Link href="/products">
            <Button variant="outline">Wróć do produktów</Button>
          </Link>
        </div>
      </div>
    );
  }

  // Support Strapi 5 flat structure
  const data = product.data.attributes || (product.data as any);
  const discount = calculateDiscount(data.price, data.compareAtPrice);
  const stockStatus = getStockStatus(data.stock, data.stock);
  const isOutOfStock = stockStatus === 'out-of-stock';

  const allImages = data.images || data.images?.data || [];

  const handleAddToCart = () => {
    const firstImage = data.images?.[0] || data.images?.data?.[0];
    const imageUrl = firstImage?.url || firstImage?.attributes?.url || null;

    addItem({
      productId: String(product.data.id),
      documentId: product.data.documentId,
      name: data.name,
      slug: data.slug,
      price: data.price,
      image: imageUrl,
      stock: data.stock,
    });
  };

  return (
    <div className="min-h-screen bg-deep-black py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/products" className="inline-flex items-center text-gray-400 hover:text-neon-violet mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Wróć do produktów
        </Link>

        {/* Product Title */}
        <h1 className="text-4xl font-bold text-white mb-6">
          {data.name}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="relative aspect-square bg-gray-900 rounded-lg overflow-hidden mb-4">
              {selectedImage ? (
                <Image
                  src={selectedImage}
                  alt={data.name}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-600">
                  Brak zdjęcia
                </div>
              )}

              {discount && (
                <div className="absolute top-4 right-4 bg-neon-violet text-white px-3 py-1.5 rounded-md text-sm font-bold">
                  -{discount}%
                </div>
              )}
            </div>

            {allImages.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {allImages.map((img: any, index: number) => {
                  const imgUrl = img?.url || img?.attributes?.url;
                  const imageUrl = imgUrl ? getStrapiMediaUrl(imgUrl) : null;
                  if (!imageUrl) return null;

                  return (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(imageUrl)}
                      className={`relative aspect-square bg-gray-900 rounded-lg overflow-hidden border-2 transition-colors ${
                        selectedImage === imageUrl
                          ? 'border-neon-violet'
                          : 'border-gray-800 hover:border-gray-700'
                      }`}
                    >
                      <Image
                        src={imageUrl}
                        alt={`${data.name} - zdjęcie ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <div>
            {data.category?.data && (
              <div className="flex flex-wrap gap-2 mb-6">
                <span
                  className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded"
                >
                  {data.category.data.attributes?.name || data.category.data.name}
                </span>
              </div>
            )}

            <div className="bg-gradient-to-r from-neon-violet/10 to-electric-blue/10 border border-neon-violet/30 rounded-lg p-6 mb-6">
              <div className="flex items-baseline space-x-3">
                <span className="text-5xl font-bold text-neon-violet">
                  {formatPrice(data.price)}
                </span>
                {data.compareAtPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    {formatPrice(data.compareAtPrice)}
                  </span>
                )}
              </div>
              {data.compareAtPrice && (
                <div className="mt-2">
                  <span className="text-sm text-electric-blue font-semibold">
                    Oszczędzasz {formatPrice(data.compareAtPrice - data.price)} ({calculateDiscount(data.price, data.compareAtPrice)}%)
                  </span>
                </div>
              )}
            </div>

            <div className="flex items-center gap-4 mb-6">
              <span
                className={`text-sm font-medium ${
                  stockStatus === 'in-stock'
                    ? 'text-green-500'
                    : stockStatus === 'low-stock'
                    ? 'text-yellow-500'
                    : 'text-red-500'
                }`}
              >
                {getStockStatusText(stockStatus)}
              </span>
              {data.sku && (
                <span className="text-sm text-gray-500">SKU: {data.sku}</span>
              )}
            </div>

            <Button
              onClick={(e) => e.preventDefault()}
              disabled={true}
              variant="primary"
              size="lg"
              className="w-full mb-6 cursor-not-allowed opacity-50"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Dodaj do koszyka
            </Button>

            {data.marketingDescription && (
              <div className="border-t border-gray-800 pt-6">
                <h2 className="text-xl font-semibold text-white mb-4">Opis produktu</h2>
                <div className="prose prose-invert prose-headings:text-white prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:text-gray-300 prose-strong:text-white prose-ul:text-gray-300 prose-ol:text-gray-300 prose-li:text-gray-300 max-w-none">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {data.marketingDescription}
                  </ReactMarkdown>
                </div>
              </div>
            )}

            {data.technicalDescription && (
              <div className="border-t border-gray-800 pt-6 mt-6">
                <h2 className="text-xl font-semibold text-white mb-4">Opis techniczny</h2>
                <div className="prose prose-invert prose-headings:text-white prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:text-gray-300 prose-strong:text-white prose-ul:text-gray-300 prose-ol:text-gray-300 prose-li:text-gray-300 max-w-none">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {data.technicalDescription}
                  </ReactMarkdown>
                </div>
              </div>
            )}

            {data.technicalSpecs && data.technicalSpecs.length > 0 && (
              <div className="border-t border-gray-800 pt-6 mt-6">
                <h2 className="text-xl font-semibold text-white mb-4">Specyfikacja techniczna</h2>
                <dl className="space-y-2">
                  {data.technicalSpecs.map((spec: any, index: number) => (
                    <div key={index} className="flex justify-between py-2 border-b border-gray-800">
                      <dt className="text-gray-400">{spec.name}</dt>
                      <dd className="text-white font-medium">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
