'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { useCart } from '@/hooks/useCart';
import { formatPrice, getStrapiMediaUrl } from '@/lib/utils';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react';

export default function CartPage() {
  const { items, total, removeItem, updateQuantity } = useCart();
  const [updatingItems, setUpdatingItems] = useState<Set<string>>(new Set());

  const handleUpdateQuantity = (documentId: string, newQuantity: number) => {
    setUpdatingItems((prev) => new Set(prev).add(documentId));
    updateQuantity(documentId, newQuantity);
    setTimeout(() => {
      setUpdatingItems((prev) => {
        const next = new Set(prev);
        next.delete(documentId);
        return next;
      });
    }, 300);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-deep-black flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-2">Twój koszyk jest pusty</h1>
          <p className="text-gray-400 mb-6">
            Dodaj produkty do koszyka, aby kontynuować zakupy
          </p>
          <Link href="/products">
            <Button variant="primary" size="lg">
              Przeglądaj produkty
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-deep-black py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/products" className="inline-flex items-center text-gray-400 hover:text-neon-violet mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kontynuuj zakupy
        </Link>

        <h1 className="text-4xl font-bold text-white mb-8">Koszyk</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => {
              const imageUrl = getStrapiMediaUrl(item.image);
              const isUpdating = updatingItems.has(item.documentId);

              return (
                <div
                  key={item.documentId}
                  className="bg-gray-900 border border-gray-800 rounded-lg p-4 flex gap-4"
                >
                  <Link
                    href={`/products/${item.slug}`}
                    className="relative w-24 h-24 bg-gray-800 rounded-md overflow-hidden flex-shrink-0"
                  >
                    {imageUrl ? (
                      <Image
                        src={imageUrl}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-600 text-xs">
                        Brak zdjęcia
                      </div>
                    )}
                  </Link>

                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/products/${item.slug}`}
                      className="font-semibold text-white hover:text-neon-violet line-clamp-2 mb-2"
                    >
                      {item.name}
                    </Link>

                    <p className="text-lg font-bold text-white mb-3">
                      {formatPrice(item.price)}
                    </p>

                    <div className="flex items-center gap-2">
                      <Button
                        onClick={() => handleUpdateQuantity(item.documentId, item.quantity - 1)}
                        disabled={isUpdating}
                        variant="outline"
                        size="sm"
                        className="w-8 h-8 p-0"
                      >
                        <Minus className="w-4 h-4" />
                      </Button>

                      <Input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => {
                          const value = parseInt(e.target.value);
                          if (!isNaN(value) && value >= 0) {
                            handleUpdateQuantity(item.documentId, value);
                          }
                        }}
                        disabled={isUpdating}
                        className="w-16 text-center"
                        min="1"
                        max={item.stock}
                      />

                      <Button
                        onClick={() => handleUpdateQuantity(item.documentId, item.quantity + 1)}
                        disabled={isUpdating || item.quantity >= item.stock}
                        variant="outline"
                        size="sm"
                        className="w-8 h-8 p-0"
                      >
                        <Plus className="w-4 h-4" />
                      </Button>

                      <Button
                        onClick={() => removeItem(item.documentId)}
                        disabled={isUpdating}
                        variant="ghost"
                        size="sm"
                        className="ml-auto text-red-500 hover:text-red-400"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>

                    {item.quantity >= item.stock && (
                      <p className="text-xs text-yellow-500 mt-2">
                        Maksymalna dostępna ilość
                      </p>
                    )}
                  </div>

                  <div className="text-right">
                    <p className="text-lg font-bold text-white">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 sticky top-20">
              <h2 className="text-xl font-semibold text-white mb-4">
                Podsumowanie zamówienia
              </h2>

              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-gray-400">
                  <span>Produkty ({items.length})</span>
                  <span>{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Dostawa</span>
                  <span>Obliczana w następnym kroku</span>
                </div>
              </div>

              <div className="border-t border-gray-800 pt-4 mb-6">
                <div className="flex justify-between text-xl font-bold text-white">
                  <span>Razem</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>

              <Link href="/checkout">
                <Button variant="primary" size="lg" className="w-full">
                  Przejdź do kasy
                </Button>
              </Link>

              <Link href="/products" className="block mt-4">
                <Button variant="outline" size="md" className="w-full">
                  Kontynuuj zakupy
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
