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
  const { attributes } = product;
  const mainImageUrl = getStrapiMediaUrl(attributes.images?.data?.[0]?.attributes?.url);
  const discount = calculateDiscount(attributes.price, attributes.compareAtPrice);
  const stockStatus = getStockStatus(attributes.stock, attributes.stock);
  const isOutOfStock = stockStatus === 'out-of-stock';

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onAddToCart && !isOutOfStock) {
      onAddToCart(String(product.id), product.documentId);
    }
  };

  return (
    <div className="group relative bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-neon-violet transition-all duration-300">
      <Link href={`/products/${attributes.slug}`}>
        <div className="relative aspect-square overflow-hidden bg-gray-800">
          {mainImageUrl ? (
            <Image
              src={mainImageUrl}
              alt={attributes.images?.data?.[0]?.attributes?.alternativeText || attributes.name}
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

          {attributes.featured && (
            <div className="absolute top-2 left-2 bg-electric-blue text-white px-2 py-1 rounded-md text-xs font-bold">
              Wyróżnione
            </div>
          )}
        </div>

        <div className="p-4">
          {attributes.brand?.data && (
            <p className="text-xs text-gray-400 mb-1">
              {attributes.brand.data.attributes.name}
            </p>
          )}

          <h3 className="font-semibold text-white mb-2 line-clamp-2 group-hover:text-neon-violet transition-colors">
            {attributes.name}
          </h3>

          {attributes.shortDescription && (
            <p className="text-sm text-gray-400 line-clamp-2 mb-3">
              {attributes.shortDescription}
            </p>
          )}

          <div className="flex items-baseline space-x-2 mb-3">
            <span className="text-xl font-bold text-white">
              {formatPrice(attributes.price)}
            </span>
            {attributes.compareAtPrice && (
              <span className="text-sm text-gray-500 line-through">
                {formatPrice(attributes.compareAtPrice)}
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

            {attributes.sku && (
              <span className="text-xs text-gray-500">SKU: {attributes.sku}</span>
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
