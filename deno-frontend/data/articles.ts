export interface Article {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  publishedAt: string;
  category: string;
  featuredImage: string;
  htmlFile?: string;
  htmlHeight?: number;
  mediaType?: "image" | "video";
  mediaFile?: string;
}

export const articles: Article[] = [
  {
    id: 1,
    slug: "technest-infografika",
    title: "TechNest w liczbach",
    subtitle: "Poznaj nasze osiagniecia i oferte",
    excerpt: "Odkryj TechNest w pigulce! Zobacz nasza infografike przedstawiajaca najwazniejsze informacje o naszym sklepie, ofercie i osiagnieciach.",
    publishedAt: "2025-01-03",
    category: "O nas",
    featuredImage: "chart",
    mediaType: "image",
    mediaFile: "/articles/technest-infografika.png",
  },
  {
    id: 2,
    slug: "poznaj-technest",
    title: "Poznaj TechNest",
    subtitle: "Twoje gniazdo w swiecie technologii",
    excerpt: "TechNest to miejsce, gdzie technologia spotyka sie z pasja! Odkryj najnowsze produkty elektroniczne, sprawdzone przez profesjonalistow.",
    publishedAt: "2025-01-03",
    category: "O nas",
    featuredImage: "video",
    mediaType: "video",
    mediaFile: "/articles/technest-reklama.mp4",
  },
  {
    id: 3,
    slug: "witaj-w-technest",
    title: "Witaj w TechNest!",
    subtitle: "Twoje konto zostalo pomyslnie utworzone",
    excerpt: "Dziekujemy za dolaczenie do rodziny TechNest! Z okazji zalozenia konta przygotowalismy dla Ciebie ekskluzywny rabat 15% na pierwsze zakupy.",
    publishedAt: "2025-01-01",
    category: "Promocje",
    featuredImage: "gift",
    htmlFile: "/articles/witaj-w-technest.html",
    htmlHeight: 2200,
  },
  {
    id: 4,
    slug: "dzien-informatyka-2025",
    title: "Dzien Informatyka w TechNest",
    subtitle: "Swietujemy technologie i pasje!",
    excerpt: "Z okazji Dnia Informatyka przygotowalismy ekskluzywne rabaty -35% na profesjonalny sprzet IT.",
    publishedAt: "2025-06-08",
    category: "Wydarzenia",
    featuredImage: "computer",
    htmlFile: "/articles/dzien-informatyka.html",
    htmlHeight: 3500,
  },
  {
    id: 5,
    slug: "mega-wyprzedaz-ostatnie-sztuki",
    title: "Mega Wyprzedaz - Ostatnie sztuki!",
    subtitle: "Ostatnie sztuki w niebywalych cenach!",
    excerpt: "Nie przegap! Mega wyprzedaz do -70% na ostatnie sztuki. Oferta ograniczona czasowo!",
    publishedAt: "2025-01-15",
    category: "Wyprzedaz",
    featuredImage: "sale",
    htmlFile: "/articles/mega-wyprzedaz.html",
    htmlHeight: 2500,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
