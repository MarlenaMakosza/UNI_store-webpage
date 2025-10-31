export interface StrapiMedia {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail?: StrapiMediaFormat;
    small?: StrapiMediaFormat;
    medium?: StrapiMediaFormat;
    large?: StrapiMediaFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  createdAt: string;
  updatedAt: string;
}

export interface StrapiMediaFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  url: string;
}

export interface StrapiResponseData<T> {
  id: number;
  documentId: string;
  attributes: T;
}

export interface StrapiResponse<T> {
  data: StrapiResponseData<T>;
  meta: Record<string, unknown>;
}

export interface StrapiCollectionResponse<T> {
  data: StrapiResponseData<T>[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiRelation<T> {
  data: StrapiResponseData<T> | null;
}

export interface StrapiRelationCollection<T> {
  data: StrapiResponseData<T>[];
}
