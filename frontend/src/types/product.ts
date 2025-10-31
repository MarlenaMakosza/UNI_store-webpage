import { StrapiMedia, StrapiRelation, StrapiRelationCollection } from './strapi';

export interface Brand {
  name: string;
  slug: string;
  description: string | null;
  logo: StrapiRelation<StrapiMedia>;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ProductCategory {
  name: string;
  slug: string;
  description: string | null;
  parent: StrapiRelation<ProductCategory>;
  children: StrapiRelationCollection<ProductCategory>;
  image: StrapiRelation<StrapiMedia>;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ProductTag {
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface TechnicalSpec {
  name: string;
  value: string;
}

export interface Review {
  rating: number;
  title: string;
  comment: string;
  authorName: string;
  authorEmail: string;
  isVerifiedPurchase: boolean;
  product: StrapiRelation<Product>;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Product {
  name: string;
  slug: string;
  description: string | null;
  shortDescription: string | null;
  price: number;
  compareAtPrice: number | null;
  sku: string;
  stock: number;
  stockStatus: string;
  weight: number | null;
  isActive: boolean;
  featured: boolean;
  bestseller: boolean;
  newArrival: boolean;
  brand: StrapiRelation<Brand>;
  category: StrapiRelation<ProductCategory>;
  tags: StrapiRelationCollection<ProductTag>;
  images: StrapiRelationCollection<StrapiMedia>;
  technicalSpecs: TechnicalSpec[];
  manufacturer: string | null;
  warranty: number | null;
  warrantyUnit: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface CartItem {
  productId: string;
  documentId: string;
  name: string;
  slug: string;
  price: number;
  quantity: number;
  image: string | null;
  stock: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
  itemCount: number;
}
