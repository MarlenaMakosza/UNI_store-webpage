'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';
import { StrapiResponseData } from '@/types/strapi';
import { formatPrice, calculateDiscount, getStockStatus, getStockStatusText, getStrapiMediaUrl } from '@/lib/utils';
import Button from '@/components/ui/Button';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: StrapiResponseData<Product>;
  onAddToCart?: (productId: string, documentId: string) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  console.log('ProductCard rendering:', product);

  // Support both Strapi 4 (with attributes) and Strapi 5 (flat structure)
  const data = product.attributes || (product as any);

  console.log('Product data:', data);
  console.log('Images:', data.images);

  // Strapi 5 returns images as flat array, not data.attributes structure
  const firstImage = data.images?.[0] || data.images?.data?.[0];
  const mainImageUrl = firstImage?.url || firstImage?.attributes?.url;
  const imageUrl = mainImageUrl ? getStrapiMediaUrl(mainImageUrl) : null;
  const discount = calculateDiscount(data.price, data.compareAtPrice);
  const stockStatus = getStockStatus(data.stock, data.stock);
  const isOutOfStock = stockStatus === 'out-of-stock';

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onAddToCart && !isOutOfStock) {
      onAddToCart(String(product.id), product.documentId);
    }
  };

  return (
    <div className="group relative bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-neon-violet transition-all duration-300">
      <Link href={`/products/${data.slug}`}>
        <div className="relative aspect-square overflow-hidden bg-gray-800">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={firstImage?.alternativeText || data.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-600">
              Brak zdjęcia
            </div>
          )}

          {discount && (
            <div className="absolute top-2 right-2 bg-neon-violet text-white px-2 py-1 rounded-md text-xs font-bold">
              -{discount}%
            </div>
          )}

          {data.featured && (
            <div className="absolute top-2 left-2 bg-electric-blue text-white px-2 py-1 rounded-md text-xs font-bold">
              Wyróżnione
            </div>
          )}
        </div>

        <div className="p-4">
          {data.brand?.data && (
            <p className="text-xs text-gray-400 mb-1">
              {data.brand.data.attributes?.name || data.brand.data.name}
            </p>
          )}

          <h3 className="font-semibold text-white mb-2 line-clamp-2 group-hover:text-neon-violet transition-colors">
            {data.name}
          </h3>

          {data.shortDescription && (
            <p className="text-sm text-gray-400 line-clamp-2 mb-3">
              {data.shortDescription}
            </p>
          )}

          <div className="flex items-baseline space-x-2 mb-3">
            <span className="text-xl font-bold text-white">
              {formatPrice(data.price)}
            </span>
            {data.compareAtPrice && (
              <span className="text-sm text-gray-500 line-through">
                {formatPrice(data.compareAtPrice)}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between">
            <span
              className={`text-xs font-medium ${
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
              <span className="text-xs text-gray-500">SKU: {data.sku}</span>
            )}
          </div>
        </div>
      </Link>

      <div className="px-4 pb-4">
        <Button
          onClick={handleAddToCart}
          disabled={isOutOfStock}
          variant="primary"
          size="sm"
          className="w-full"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          {isOutOfStock ? 'Niedostępny' : 'Do koszyka'}
        </Button>
      </div>
    </div>
  );
}
