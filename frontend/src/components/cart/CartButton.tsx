'use client';

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/hooks/useCart';

export default function CartButton() {
  const { itemCount } = useCart();

  return (
    <Link
      href="/cart"
      className="relative p-2 text-gray-300 hover:text-neon-violet transition-colors"
      aria-label="Koszyk"
    >
      <ShoppingCart className="w-6 h-6" />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-neon-violet text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {itemCount > 9 ? '9+' : itemCount}
        </span>
      )}
    </Link>
  );
}
