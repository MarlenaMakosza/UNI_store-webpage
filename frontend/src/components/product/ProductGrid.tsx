'use client';

import { Product } from '@/types/product';
import { StrapiResponseData } from '@/types/strapi';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: StrapiResponseData<Product>[];
  onAddToCart?: (productId: string, documentId: string) => void;
}

export default function ProductGrid({ products, onAddToCart }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400 text-lg">Nie znaleziono produktów</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.documentId}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}
