'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
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

        const mainImageUrl = getStrapiMediaUrl(response.data.attributes.images?.data?.[0]?.attributes?.url);
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

  const { attributes } = product.data;
  const discount = calculateDiscount(attributes.price, attributes.compareAtPrice);
  const stockStatus = getStockStatus(attributes.stock, attributes.stock);
  const isOutOfStock = stockStatus === 'out-of-stock';

  const allImages = attributes.images?.data || [];

  const handleAddToCart = () => {
    const imageUrl = attributes.images?.data?.[0]?.attributes?.url || null;

    addItem({
      productId: String(product.data.id),
      documentId: product.data.documentId,
      name: attributes.name,
      slug: attributes.slug,
      price: attributes.price,
      image: imageUrl,
      stock: attributes.stock,
    });
  };

  return (
    <div className="min-h-screen bg-deep-black py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/products" className="inline-flex items-center text-gray-400 hover:text-neon-violet mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Wróć do produktów
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="relative aspect-square bg-gray-900 rounded-lg overflow-hidden mb-4">
              {selectedImage ? (
                <Image
                  src={selectedImage}
                  alt={attributes.name}
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
                  const imageUrl = getStrapiMediaUrl(img.attributes?.url);
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
                        alt={`${attributes.name} - zdjęcie ${index + 1}`}
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
            {attributes.brand?.data && (
              <p className="text-sm text-gray-400 mb-2">
                {attributes.brand.data.attributes.name}
              </p>
            )}

            <h1 className="text-4xl font-bold text-white mb-4">
              {attributes.name}
            </h1>

            {attributes.category?.data && (
              <div className="flex flex-wrap gap-2 mb-4">
                <span
                  className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded"
                >
                  {attributes.category.data.attributes.name}
                </span>
              </div>
            )}

            <div className="flex items-baseline space-x-3 mb-6">
              <span className="text-4xl font-bold text-white">
                {formatPrice(attributes.price)}
              </span>
              {attributes.compareAtPrice && (
                <span className="text-xl text-gray-500 line-through">
                  {formatPrice(attributes.compareAtPrice)}
                </span>
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
              {attributes.sku && (
                <span className="text-sm text-gray-500">SKU: {attributes.sku}</span>
              )}
            </div>

            <Button
              onClick={handleAddToCart}
              disabled={isOutOfStock}
              variant="primary"
              size="lg"
              className="w-full mb-6"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              {isOutOfStock ? 'Niedostępny' : 'Dodaj do koszyka'}
            </Button>

            {attributes.description && (
              <div className="border-t border-gray-800 pt-6">
                <h2 className="text-xl font-semibold text-white mb-4">Opis produktu</h2>
                <div
                  className="text-gray-300 prose prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: attributes.description }}
                />
              </div>
            )}

            {attributes.technicalSpecs && attributes.technicalSpecs.length > 0 && (
              <div className="border-t border-gray-800 pt-6 mt-6">
                <h2 className="text-xl font-semibold text-white mb-4">Specyfikacja techniczna</h2>
                <dl className="space-y-2">
                  {attributes.technicalSpecs.map((spec, index) => (
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
