export interface Category {
  id: number;
  slug: string;
  name: string;
  description: string;
  icon: string;
  productCount: number;
}

export const categories: Category[] = [
  {
    id: 1,
    slug: "myszki",
    name: "Myszki",
    description: "Profesjonalne myszki gamingowe i biurowe",
    icon: "mouse",
    productCount: 3,
  },
  {
    id: 2,
    slug: "klawiatury",
    name: "Klawiatury",
    description: "Mechaniczne i membranowe klawiatury",
    icon: "keyboard",
    productCount: 3,
  },
  {
    id: 3,
    slug: "sluchawki",
    name: "Sluchawki",
    description: "Bezprzewodowe i przewodowe sluchawki",
    icon: "headphones",
    productCount: 3,
  },
  {
    id: 4,
    slug: "monitory",
    name: "Monitory",
    description: "Monitory gamingowe i do pracy",
    icon: "monitor",
    productCount: 3,
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
