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
    productCount: 1,
  },
  {
    id: 2,
    slug: "klawiatury",
    name: "Klawiatury",
    description: "Mechaniczne i membranowe klawiatury",
    icon: "keyboard",
    productCount: 1,
  },
  {
    id: 3,
    slug: "sluchawki",
    name: "Słuchawki",
    description: "Słuchawki gamingowe i douszne TWS dla każdego",
    icon: "headphones",
    productCount: 2,
  },
  {
    id: 5,
    slug: "tablety",
    name: "Tablety",
    description: "Tablety graficzne dla artystów i projektantów",
    icon: "tablet",
    productCount: 1,
  },
  {
    id: 6,
    slug: "akcesoria",
    name: "Akcesoria",
    description: "Stream Decki, kontrolery i inne akcesoria",
    icon: "accessories",
    productCount: 1,
  },
  {
    id: 7,
    slug: "bezpieczenstwo",
    name: "Bezpieczeństwo",
    description: "Klucze bezpieczeństwa i uwierzytelniania",
    icon: "security",
    productCount: 1,
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
