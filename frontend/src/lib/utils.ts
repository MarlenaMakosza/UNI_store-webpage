import { type ClassValue, clsx } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('pl-PL', {
    style: 'currency',
    currency: 'PLN',
  }).format(price);
}

export function calculateDiscount(price: number, compareAtPrice: number | null): number | null {
  if (!compareAtPrice || compareAtPrice <= price) return null;
  return Math.round(((compareAtPrice - price) / compareAtPrice) * 100);
}

export function getStockStatus(stock: number, lowStockThreshold: number): 'in-stock' | 'low-stock' | 'out-of-stock' {
  if (stock === 0) return 'out-of-stock';
  if (stock <= lowStockThreshold) return 'low-stock';
  return 'in-stock';
}

export function getStockStatusText(status: 'in-stock' | 'low-stock' | 'out-of-stock'): string {
  switch (status) {
    case 'in-stock':
      return 'Dostępny';
    case 'low-stock':
      return 'Ostatnie sztuki';
    case 'out-of-stock':
      return 'Niedostępny';
  }
}

export function getStrapiMediaUrl(url: string | null | undefined): string | null {
  if (!url) return null;
  if (url.startsWith('http')) return url;
  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
  return `${STRAPI_URL}${url}`;
}
