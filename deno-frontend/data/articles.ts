export interface Article {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  category: string;
  featuredImage: string;
}

export const articles: Article[] = [
  {
    id: 1,
    slug: "technest-infografika",
    title: "TechNest w liczbach",
    subtitle: "Poznaj nasze osiagniecia i oferte",
    excerpt: "Odkryj TechNest w pigulce! Zobacz nasza infografike przedstawiajaca najwazniejsze informacje o naszym sklepie, ofercie i osiagnieciach.",
    content: `
      <h2>TechNest - Twoje gniazdo technologii</h2>
      <p>Jestesmy jednym z najszybciej rozwijajacych sie sklepow z elektronika w Polsce.</p>
      <h3>Nasze osiagniecia</h3>
      <ul>
        <li>Ponad 10 000 zadowolonych klientow</li>
        <li>Ponad 500 produktow w ofercie</li>
        <li>Srednia ocena 4.8/5 od klientow</li>
        <li>Dostawa w 24h dla 95% zamowien</li>
      </ul>
    `,
    publishedAt: "2025-01-03",
    category: "O nas",
    featuredImage: "chart",
  },
  {
    id: 2,
    slug: "poznaj-technest",
    title: "Poznaj TechNest",
    subtitle: "Twoje gniazdo w swiecie technologii",
    excerpt: "TechNest to miejsce, gdzie technologia spotyka sie z pasja! Odkryj najnowsze produkty elektroniczne, sprawdzone przez profesjonalistow.",
    content: `
      <h2>Kim jestesmy?</h2>
      <p>TechNest to sklep zalozony przez pasjonatow technologii dla pasjonatow technologii.</p>
      <h3>Nasza misja</h3>
      <p>Dostarczamy najwyzszej jakosci sprzet elektroniczny w konkurencyjnych cenach, zapewniajac profesjonalna obsluge i szybka dostawe.</p>
    `,
    publishedAt: "2025-01-03",
    category: "O nas",
    featuredImage: "video",
  },
  {
    id: 3,
    slug: "witaj-w-technest",
    title: "Witaj w TechNest!",
    subtitle: "Twoje konto zostalo pomyslnie utworzone",
    excerpt: "Dziekujemy za dolaczenie do rodziny TechNest! Z okazji zalozenia konta przygotowalismy dla Ciebie ekskluzywny rabat 15% na pierwsze zakupy.",
    content: `
      <h2>Witaj w rodzinie TechNest!</h2>
      <p>Cieszymy sie, ze do nas dolaczyles. Jako nowy czlonek naszej spolecznosci otrzymujesz:</p>
      <ul>
        <li>15% rabatu na pierwsze zakupy</li>
        <li>Darmowa dostawa przy pierwszym zamowieniu</li>
        <li>Dostep do ekskluzywnych promocji</li>
        <li>Newsletter z najnowszymi ofertami</li>
      </ul>
    `,
    publishedAt: "2025-01-01",
    category: "Promocje",
    featuredImage: "gift",
  },
  {
    id: 4,
    slug: "dzien-informatyka-2025",
    title: "Dzien Informatyka w TechNest",
    subtitle: "Swietujemy technologie i pasje!",
    excerpt: "Z okazji Dnia Informatyka przygotowalismy ekskluzywne rabaty -35% na profesjonalny sprzet IT.",
    content: `
      <h2>Swietuj z nami Dzien Informatyka!</h2>
      <p>Z tej wyjatkowej okazji przygotowalismy specjalne promocje na sprzet IT:</p>
      <ul>
        <li>-35% na monitory</li>
        <li>-30% na klawiatury mechaniczne</li>
        <li>-25% na myszki gamingowe</li>
        <li>-20% na sluchawki</li>
      </ul>
      <p>Promocja trwa tylko do konca tygodnia!</p>
    `,
    publishedAt: "2025-06-08",
    category: "Wydarzenia",
    featuredImage: "computer",
  },
  {
    id: 5,
    slug: "mega-wyprzedaz-ostatnie-sztuki",
    title: "Mega Wyprzedaz - Ostatnie sztuki!",
    subtitle: "Ostatnie sztuki w niebywałych cenach!",
    excerpt: "Nie przegap! Mega wyprzedaz do -70% na ostatnie sztuki. Oferta ograniczona czasowo!",
    content: `
      <h2>Wielka Wyprzedaz!</h2>
      <p>Ostatnie sztuki w magazynie - nie przegap okazji!</p>
      <ul>
        <li>Logitech G502 - 179 zl (bylo 349 zl)</li>
        <li>HyperX Alloy Origins - 299 zl (bylo 499 zl)</li>
        <li>SteelSeries Arctis 7 - 449 zl (bylo 749 zl)</li>
      </ul>
      <p>Ilosc produktow ograniczona. Kto pierwszy, ten lepszy!</p>
    `,
    publishedAt: "2025-01-15",
    category: "Wyprzedaz",
    featuredImage: "sale",
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
