import { Product, ProductCategory, Brand } from '@/types/product';
import { StrapiResponse, StrapiCollectionResponse } from '@/types/strapi';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const STRAPI_API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

interface FetchAPIOptions extends RequestInit {
  params?: Record<string, string | number | boolean | undefined>;
}

export async function fetchAPI<T>(
  endpoint: string,
  options: FetchAPIOptions = {}
): Promise<T> {
  const { params, ...fetchOptions } = options;

  const queryString = params
    ? '?' +
      Object.entries(params)
        .filter(([_, value]) => value !== undefined)
        .map(([key, value]) => `${key}=${encodeURIComponent(String(value))}`)
        .join('&')
    : '';

  const url = `${STRAPI_URL}/api${endpoint}${queryString}`;

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(fetchOptions.headers as Record<string, string>),
  };

  if (STRAPI_API_TOKEN) {
    headers['Authorization'] = `Bearer ${STRAPI_API_TOKEN}`;
  }

  const response = await fetch(url, {
    ...fetchOptions,
    headers,
  });

  if (!response.ok) {
    throw new Error(`Strapi API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

export interface GetProductsOptions {
  page?: number;
  pageSize?: number;
  categorySlug?: string;
  brandSlug?: string;
  tagSlug?: string;
  isFeatured?: boolean;
  search?: string;
  sort?: string;
}

export async function getProducts(
  options: GetProductsOptions = {}
): Promise<StrapiCollectionResponse<Product>> {
  const {
    page = 1,
    pageSize = 12,
    categorySlug,
    brandSlug,
    tagSlug,
    isFeatured,
    search,
    sort = 'createdAt:desc',
  } = options;

  const filters: string[] = [];

  if (categorySlug) {
    filters.push(`filters[category][slug][$eq]=${categorySlug}`);
  }

  if (brandSlug) {
    filters.push(`filters[brand][slug][$eq]=${brandSlug}`);
  }

  if (tagSlug) {
    filters.push(`filters[tags][slug][$eq]=${tagSlug}`);
  }

  if (isFeatured !== undefined) {
    filters.push(`filters[featured][$eq]=${isFeatured}`);
  }

  if (search) {
    filters.push(`filters[name][$containsi]=${encodeURIComponent(search)}`);
  }

  filters.push(`filters[isActive][$eq]=true`);

  const populate = [
    'populate[images][fields][0]=url',
    'populate[images][fields][1]=alternativeText',
    'populate[images][fields][2]=width',
    'populate[images][fields][3]=height',
    'populate[brand][fields][0]=name',
    'populate[brand][fields][1]=slug',
    'populate[category][fields][0]=name',
    'populate[category][fields][1]=slug',
    'populate[tags][fields][0]=name',
    'populate[tags][fields][1]=slug',
  ].join('&');

  const queryParams = [
    `pagination[page]=${page}`,
    `pagination[pageSize]=${pageSize}`,
    `sort=${sort}`,
    ...filters,
    populate,
  ].join('&');

  return fetchAPI<StrapiCollectionResponse<Product>>(
    `/products?${queryParams}`
  );
}

export async function getProduct(slug: string): Promise<StrapiResponse<Product>> {
  const populate = [
    'populate[images][fields][0]=url',
    'populate[images][fields][1]=alternativeText',
    'populate[images][fields][2]=width',
    'populate[images][fields][3]=height',
    'populate[brand][fields][0]=name',
    'populate[brand][fields][1]=slug',
    'populate[brand][populate][logo][fields][0]=url',
    'populate[category][fields][0]=name',
    'populate[category][fields][1]=slug',
    'populate[tags][fields][0]=name',
    'populate[tags][fields][1]=slug',
    'populate[technicalSpecs]=*',
  ].join('&');

  const queryParams = [
    `filters[slug][$eq]=${slug}`,
    `filters[isActive][$eq]=true`,
    populate,
  ].join('&');

  const response = await fetchAPI<StrapiCollectionResponse<Product>>(
    `/products?${queryParams}`
  );

  if (!response.data || response.data.length === 0) {
    throw new Error('Product not found');
  }

  return {
    data: response.data[0],
    meta: response.meta,
  };
}

export async function getCategories(): Promise<StrapiCollectionResponse<ProductCategory>> {
  const populate = [
    'populate[image][fields][0]=url',
    'populate[image][fields][1]=alternativeText',
    'populate[parent][fields][0]=name',
    'populate[parent][fields][1]=slug',
    'populate[children][fields][0]=name',
    'populate[children][fields][1]=slug',
  ].join('&');

  return fetchAPI<StrapiCollectionResponse<ProductCategory>>(
    `/product-categories?${populate}`
  );
}

export async function getCategory(slug: string): Promise<StrapiResponse<ProductCategory>> {
  const populate = [
    'populate[image][fields][0]=url',
    'populate[image][fields][1]=alternativeText',
    'populate[parentCategory][fields][0]=name',
    'populate[parentCategory][fields][1]=slug',
    'populate[childCategories][fields][0]=name',
    'populate[childCategories][fields][1]=slug',
  ].join('&');

  const queryParams = [
    `filters[slug][$eq]=${slug}`,
    populate,
  ].join('&');

  const response = await fetchAPI<StrapiCollectionResponse<ProductCategory>>(
    `/product-categories?${queryParams}`
  );

  if (!response.data || response.data.length === 0) {
    throw new Error('Category not found');
  }

  return {
    data: response.data[0],
    meta: response.meta,
  };
}

export async function getBrands(): Promise<StrapiCollectionResponse<Brand>> {
  const populate = [
    'populate[logo][fields][0]=url',
    'populate[logo][fields][1]=alternativeText',
  ].join('&');

  return fetchAPI<StrapiCollectionResponse<Brand>>(
    `/brands?${populate}`
  );
}

export function getStrapiMediaUrl(url: string | null | undefined): string | null {
  if (!url) return null;
  if (url.startsWith('http')) return url;
  return `${STRAPI_URL}${url}`;
}
