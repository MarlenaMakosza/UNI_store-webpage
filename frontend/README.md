# MAKOSZA Electronics Frontend

Next.js 14 frontend dla sklepu internetowego z elektroniką.

## Technologie

- **Next.js 14** - App Router
- **TypeScript** - Strict mode
- **Tailwind CSS** - Styling
- **Strapi** - Headless CMS backend
- **Lucide React** - Ikony

## Struktura projektu

```
frontend/
├── src/
│   ├── app/                    # App Router pages
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage
│   │   ├── products/          # Product listing & detail
│   │   ├── cart/              # Shopping cart
│   │   └── checkout/          # Checkout page
│   ├── components/
│   │   ├── layout/            # Header, Footer, Navigation
│   │   ├── product/           # ProductCard, ProductGrid
│   │   ├── cart/              # CartButton
│   │   └── ui/                # Button, Input
│   ├── lib/
│   │   ├── strapi.ts          # Strapi API client
│   │   └── utils.ts           # Helper functions
│   ├── types/
│   │   ├── product.ts         # Product types
│   │   └── strapi.ts          # Strapi API types
│   └── hooks/
│       └── useCart.ts         # Cart state management
├── public/
├── .env.local                 # Environment variables
├── next.config.mjs
├── tailwind.config.ts
└── package.json
```

## Kolory motywu

- **Deep Black**: #0D0D0D (główne tło)
- **Neon Violet**: #8B5CF6 (akcent)
- **Electric Blue**: #3B82F6 (dodatkowy akcent)

## Instalacja

```bash
cd frontend
npm install
```

## Konfiguracja

Uzupełnij plik `.env.local`:

```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
NEXT_PUBLIC_STRAPI_API_TOKEN=your_api_token_here
```

## Uruchomienie

```bash
npm run dev
```

Aplikacja będzie dostępna pod adresem: http://localhost:3000

## Funkcjonalności

### Zaimplementowane

- ✅ Responsywny layout (Header, Footer, Navigation)
- ✅ Strona główna z wyróżnionymi produktami
- ✅ Lista produktów z paginacją
- ✅ Wyszukiwanie produktów
- ✅ Filtrowanie po kategorii/marce
- ✅ Strona szczegółów produktu z galerią
- ✅ Koszyk z localStorage
- ✅ Zarządzanie ilością produktów
- ✅ Strona checkout (UI gotowe)
- ✅ Integracja ze Strapi API

### Do zrobienia

- ⏳ Integracja z systemem płatności
- ⏳ Obsługa zamówień
- ⏳ Panel użytkownika
- ⏳ Historia zamówień
- ⏳ System recenzji
- ⏳ Ulubione produkty
- ⏳ Porównywarka produktów

## Kluczowe komponenty

### Layout Components

- **Header** - Nagłówek z nawigacją i koszykiem
- **Footer** - Stopka z linkami i informacjami
- **Navigation** - Menu nawigacyjne

### Product Components

- **ProductCard** - Karta produktu z obrazem, ceną, statusem
- **ProductGrid** - Siatka produktów

### UI Components

- **Button** - Uniwersalny przycisk (primary, secondary, outline, ghost)
- **Input** - Pole input z walidacją
- **CartButton** - Przycisk koszyka z licznikiem

### Hooks

- **useCart** - Zarządzanie stanem koszyka (localStorage)

## API Client

Plik `src/lib/strapi.ts` zawiera funkcje do komunikacji z Strapi:

- `fetchAPI()` - Podstawowa funkcja fetch
- `getProducts()` - Pobieranie listy produktów z filtrami
- `getProduct(slug)` - Pobieranie pojedynczego produktu
- `getCategories()` - Pobieranie kategorii
- `getCategory(slug)` - Pobieranie pojedynczej kategorii
- `getBrands()` - Pobieranie marek
- `getStrapiMediaUrl()` - Helper do URL-i mediów

## TypeScript Types

Wszystkie typy są zdefiniowane w `src/types/`:

- **Product** - Produkt ze wszystkimi polami
- **Brand** - Marka
- **ProductCategory** - Kategoria (z hierarchią)
- **ProductTag** - Tag
- **TechnicalSpec** - Specyfikacja techniczna
- **Review** - Recenzja
- **Cart** - Koszyk
- **CartItem** - Element koszyka

## Utilities

`src/lib/utils.ts`:

- `cn()` - Helper do łączenia klas (clsx)
- `formatPrice()` - Formatowanie ceny (PLN)
- `calculateDiscount()` - Obliczanie procentu rabatu
- `getStockStatus()` - Status magazynowy
- `getStockStatusText()` - Tekst statusu po polsku

## Build

```bash
npm run build
npm start
```

## Notatki

- Używaj server components domyślnie
- 'use client' tylko tam gdzie potrzebne (hooks, state)
- Wszystkie ceny w PLN
- UI w języku polskim
- Obrazy optymalizowane przez Next.js Image
- Dane koszyka w localStorage
