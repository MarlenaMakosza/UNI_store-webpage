'use client';

import { useState, useEffect } from 'react';
import { Cart, CartItem } from '@/types/product';

const CART_STORAGE_KEY = 'makosza-cart';

function getStoredCart(): Cart {
  if (typeof window === 'undefined') {
    return { items: [], total: 0, itemCount: 0 };
  }

  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Failed to load cart from localStorage:', error);
  }

  return { items: [], total: 0, itemCount: 0 };
}

function saveCart(cart: Cart): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch (error) {
    console.error('Failed to save cart to localStorage:', error);
  }
}

function calculateCart(items: CartItem[]): { total: number; itemCount: number } {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  return { total, itemCount };
}

export function useCart() {
  const [cart, setCart] = useState<Cart>(() => getStoredCart());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setCart(getStoredCart());
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      saveCart(cart);
    }
  }, [cart, isLoading]);

  const addItem = (item: Omit<CartItem, 'quantity'>) => {
    setCart((prevCart) => {
      const existingItem = prevCart.items.find(
        (i) => i.documentId === item.documentId
      );

      let newItems: CartItem[];

      if (existingItem) {
        if (existingItem.quantity >= item.stock) {
          alert('Maksymalna dostępna ilość produktu w magazynie');
          return prevCart;
        }

        newItems = prevCart.items.map((i) =>
          i.documentId === item.documentId
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      } else {
        newItems = [...prevCart.items, { ...item, quantity: 1 }];
      }

      const { total, itemCount } = calculateCart(newItems);
      return { items: newItems, total, itemCount };
    });
  };

  const removeItem = (documentId: string) => {
    setCart((prevCart) => {
      const newItems = prevCart.items.filter((i) => i.documentId !== documentId);
      const { total, itemCount } = calculateCart(newItems);
      return { items: newItems, total, itemCount };
    });
  };

  const updateQuantity = (documentId: string, quantity: number) => {
    if (quantity < 1) {
      removeItem(documentId);
      return;
    }

    setCart((prevCart) => {
      const item = prevCart.items.find((i) => i.documentId === documentId);

      if (!item) return prevCart;

      if (quantity > item.stock) {
        alert('Maksymalna dostępna ilość produktu w magazynie');
        return prevCart;
      }

      const newItems = prevCart.items.map((i) =>
        i.documentId === documentId ? { ...i, quantity } : i
      );

      const { total, itemCount } = calculateCart(newItems);
      return { items: newItems, total, itemCount };
    });
  };

  const clearCart = () => {
    setCart({ items: [], total: 0, itemCount: 0 });
  };

  const getItem = (documentId: string): CartItem | undefined => {
    return cart.items.find((item) => item.documentId === documentId);
  };

  return {
    cart,
    items: cart.items,
    total: cart.total,
    itemCount: cart.itemCount,
    isLoading,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    getItem,
  };
}
