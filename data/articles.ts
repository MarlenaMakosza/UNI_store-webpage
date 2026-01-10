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
    subtitle: "Uwaga na debloatery systemowe!",
    excerpt: "Ostrzeżenie: debloatery systemowe typu revisionOS i AtlasOS reklamują się jako cudowny lek na wolny system, ale są podejrzane i nie do końca otwartoźródłowe. Poznaj fakty i zagrożenia!",
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
    subtitle: "Twoje gniazdo w świecie technologii",
    excerpt: "TechNest to miejsce, gdzie technologia spotyka się z pasją! Odkryj najnowsze produkty elektroniczne, sprawdzone przez profesjonalistów.",
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
    subtitle: "Twoje konto zostało pomyślnie utworzone",
    excerpt: "Dziękujemy za dołączenie do rodziny TechNest! Z okazji założenia konta przygotowaliśmy dla Ciebie ekskluzywny rabat 15% na pierwsze zakupy.",
    publishedAt: "2025-01-01",
    category: "Promocje",
    featuredImage: "gift",
    htmlFile: "/articles/witaj-w-technest.html",
    htmlHeight: 2200,
  },
  {
    id: 4,
    slug: "dzien-informatyka-2025",
    title: "Dzień Informatyka w TechNest",
    subtitle: "Świętujemy technologię i pasję!",
    excerpt: "Z okazji Dnia Informatyka przygotowaliśmy ekskluzywne rabaty -35% na profesjonalny sprzęt IT.",
    publishedAt: "2025-06-08",
    category: "Wydarzenia",
    featuredImage: "computer",
    htmlFile: "/articles/dzien-informatyka.html",
    htmlHeight: 3500,
  },
  {
    id: 5,
    slug: "mega-wyprzedaz-ostatnie-sztuki",
    title: "Mega Wyprzedaż - Ostatnie sztuki!",
    subtitle: "Ostatnie sztuki w niebywalych cenach!",
    excerpt: "Nie przegap! Mega wyprzedaż do -70% na ostatnie sztuki. Oferta ograniczona czasowo!",
    publishedAt: "2025-01-15",
    category: "Wyprzedaż",
    featuredImage: "sale",
    htmlFile: "/articles/mega-wyprzedaz.html",
    htmlHeight: 2500,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
