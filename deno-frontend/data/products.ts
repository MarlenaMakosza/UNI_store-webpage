export interface Product {
  id: number;
  slug: string;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
  categorySlug: string;
  isNew?: boolean;
  isFeatured?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    slug: "logitech-g502-hero",
    name: "Logitech G502 HERO",
    description: "Profesjonalna mysz gamingowa z sensorem HERO 25K",
    price: 249.99,
    oldPrice: 349.99,
    image: "/images/mouse.svg",
    category: "Myszki",
    categorySlug: "myszki",
    isFeatured: true,
  },
  {
    id: 2,
    slug: "hyperx-alloy-origins",
    name: "HyperX Alloy Origins",
    description: "Mechaniczna klawiatura gamingowa z przełącznikami HyperX Red",
    price: 399.99,
    image: "/images/keyboard.svg",
    category: "Klawiatury",
    categorySlug: "klawiatury",
    isNew: true,
  },
  {
    id: 3,
    slug: "steelseries-arctis-7",
    name: "SteelSeries Arctis 7+",
    description: "Bezprzewodowe słuchawki gamingowe z dźwiękiem przestrzennym",
    price: 599.99,
    oldPrice: 749.99,
    image: "/images/headphones.svg",
    category: "Słuchawki",
    categorySlug: "sluchawki",
    isFeatured: true,
  },
  {
    id: 4,
    slug: "samsung-odyssey-g5",
    name: "Samsung Odyssey G5 27\"",
    description: "Monitor gamingowy 144Hz z zakrzywionym ekranem WQHD",
    price: 1299.99,
    image: "/images/monitor.svg",
    category: "Monitory",
    categorySlug: "monitory",
    isNew: true,
    isFeatured: true,
  },
  {
    id: 5,
    slug: "razer-deathadder-v3",
    name: "Razer DeathAdder V3",
    description: "Ergonomiczna mysz gamingowa z sensorem Focus Pro 30K",
    price: 349.99,
    image: "/images/mouse.svg",
    category: "Myszki",
    categorySlug: "myszki",
  },
  {
    id: 6,
    slug: "corsair-k70-rgb",
    name: "Corsair K70 RGB PRO",
    description: "Klawiatura mechaniczna z przełącznikami Cherry MX",
    price: 549.99,
    oldPrice: 649.99,
    image: "/images/keyboard.svg",
    category: "Klawiatury",
    categorySlug: "klawiatury",
    isFeatured: true,
  },
  {
    id: 7,
    slug: "sony-wh-1000xm5",
    name: "Sony WH-1000XM5",
    description: "Bezprzewodowe słuchawki z aktywną redukcją szumów",
    price: 1499.99,
    image: "/images/headphones.svg",
    category: "Słuchawki",
    categorySlug: "sluchawki",
    isNew: true,
  },
  {
    id: 8,
    slug: "lg-ultragear-32",
    name: "LG UltraGear 32\"",
    description: "Monitor gamingowy 4K 144Hz z panelem Nano IPS",
    price: 2499.99,
    oldPrice: 2999.99,
    image: "/images/monitor.svg",
    category: "Monitory",
    categorySlug: "monitory",
  },
  {
    id: 9,
    slug: "logitech-g-pro-x",
    name: "Logitech G PRO X",
    description: "Profesjonalna mysz e-sportowa z sensorem HERO 25K",
    price: 449.99,
    image: "/images/mouse.svg",
    category: "Myszki",
    categorySlug: "myszki",
  },
  {
    id: 10,
    slug: "keychron-q1",
    name: "Keychron Q1 Pro",
    description: "Premium klawiatura mechaniczna 75% z Gateron G Pro",
    price: 699.99,
    image: "/images/keyboard.svg",
    category: "Klawiatury",
    categorySlug: "klawiatury",
    isNew: true,
    isFeatured: true,
  },
  {
    id: 11,
    slug: "bose-qc45",
    name: "Bose QuietComfort 45",
    description: "Słuchawki z najlepszą redukcją szumów na rynku",
    price: 1299.99,
    oldPrice: 1499.99,
    image: "/images/headphones.svg",
    category: "Słuchawki",
    categorySlug: "sluchawki",
  },
  {
    id: 12,
    slug: "asus-rog-swift",
    name: "ASUS ROG Swift PG32UQ",
    description: "Monitor gamingowy 4K 144Hz z HDMI 2.1",
    price: 3999.99,
    image: "/images/monitor.svg",
    category: "Monitory",
    categorySlug: "monitory",
    isFeatured: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isFeatured);
}
