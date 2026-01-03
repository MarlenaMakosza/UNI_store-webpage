export interface Article {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  publishedAt: string;
  category: string;
  featuredImage: string;
  htmlFile: string;
}

export const articles: Article[] = [
  {
    id: 1,
    slug: 'technest-infografika',
    title: 'TechNest w liczbach',
    subtitle: 'Poznaj nasze osiągnięcia i ofertę',
    excerpt:
      'Odkryj TechNest w pigułce! Zobacz naszą infografikę przedstawiającą najważniejsze informacje o naszym sklepie, ofercie i osiągnięciach.',
    publishedAt: '2025-01-03',
    category: 'O nas',
    featuredImage: '📊',
    htmlFile: 'technest-infografika.html',
  },
  {
    id: 2,
    slug: 'poznaj-technest',
    title: 'Poznaj TechNest',
    subtitle: 'Twoje gniazdo w świecie technologii',
    excerpt:
      'TechNest to miejsce, gdzie technologia spotyka się z pasją! Odkryj najnowsze produkty elektroniczne, sprawdzone przez profesjonalistów i dostępne w konkurencyjnych cenach. Zobacz naszą reklamę!',
    publishedAt: '2025-01-03',
    category: 'O nas',
    featuredImage: '🎬',
    htmlFile: 'poznaj-technest-reklama.html',
  },
  {
    id: 3,
    slug: 'witaj-w-technest',
    title: 'Witaj w TechNest!',
    subtitle: 'Twoje konto zostało pomyślnie utworzone',
    excerpt:
      'Dziękujemy za dołączenie do rodziny TechNest! Z okazji założenia konta przygotowaliśmy dla Ciebie ekskluzywny rabat 15% na pierwsze zakupy.',
    publishedAt: '2025-01-01',
    category: 'Promocje',
    featuredImage: '🎉',
    htmlFile: 'witaj-w-technest.html',
  },
  {
    id: 4,
    slug: 'dzien-informatyka-2025',
    title: 'Dzień Informatyka w TechNest',
    subtitle: 'Świętujemy technologię i pasję!',
    excerpt:
      'Z okazji Dnia Informatyka przygotowaliśmy ekskluzywne rabaty -35% na profesjonalny sprzęt IT. Monitory, klawiatury mechaniczne, myszki i stacje dokujące w promocyjnych cenach!',
    publishedAt: '2025-06-08',
    category: 'Wydarzenia',
    featuredImage: '💻',
    htmlFile: 'dzien-informatyka.html',
  },
  {
    id: 5,
    slug: 'mega-wyprzedaz-ostatnie-sztuki',
    title: 'Mega Wyprzedaż - Ostatnie sztuki!',
    subtitle: 'Ostatnie sztuki w niebywałych cenach!',
    excerpt:
      'Nie przegap! Mega wyprzedaż do -70% na ostatnie sztuki. Logitech G502, HyperX Alloy Origins, SteelSeries Arctis 7 i więcej w promocyjnych cenach. Oferta ograniczona czasowo!',
    publishedAt: '2025-01-15',
    category: 'Wyprzedaż',
    featuredImage: '⚡',
    htmlFile: 'mega-wyprzedaz.html',
  },
];
