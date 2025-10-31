# Seed Scripts Documentation

This directory contains database seeding scripts for the Strapi application.

## Available Scripts

### `seed-shop.js`

Comprehensive e-commerce seeding script that populates the database with:

#### 1. Product Categories (Hierarchical)
- **Komputery** (parent)
  - Laptopy
  - Komputery stacjonarne
  - Podzespoły komputerowe
- **Peryferia** (parent)
  - Myszy
  - Klawiatury
  - Słuchawki
  - Głośniki
- **Telefony** (no children)
- **Tablety** (no children)
- **Akcesoria** (parent)
  - Kable
  - Ładowarki

#### 2. Brands
- Logitech
- Apple
- Samsung
- Dell
- HP
- Asus
- Razer
- SteelSeries

#### 3. Product Tags
- Gaming, Wireless, RGB, High-DPI
- Ergonomic, Professional
- Budget, Premium
- Bestseller, New Arrival

#### 4. Shipping Methods
- **InPost Paczkomaty**: 12.99 PLN (free over 300 PLN)
- **Kurier DPD**: 19.99 PLN (free over 500 PLN)
- **Poczta Polska**: 15.99 PLN
- **Kurier ekspresowy**: 29.99 PLN
- **Odbiór osobisty**: Free

#### 5. Payment Methods
- **Przelewy24**: Online payments, BLIK, cards
- **PayU - Raty 0%**: Pay later or installments
- **Przelew bankowy**: Bank transfer
- **Płatność przy odbiorze**: Cash on delivery (+5 PLN)

#### 6. Sample Product
- **Logitech G502 LIGHTSPEED**: Wireless gaming mouse with complete technical specifications, SEO data, and marketing content

## Usage

```bash
# Run the shop seeding script
npm run seed:shop
```

## Features

- **Idempotent**: Safe to run multiple times (checks for existing data)
- **Entity relationships**: Properly creates hierarchical categories and product relationships
- **Full data structure**: Includes technical specs, SEO data, and rich content
- **Error handling**: Comprehensive error handling with detailed logging
- **Progress tracking**: Console logs show seeding progress

## Technical Details

- Uses Strapi 5.29.0 Document Service API
- Uses `strapi.documents()` for creating entries with `publishedAt`
- Uses `strapi.db.query()` for checking existing entries
- Handles component relationships (technical specs, SEO)
- Properly links many-to-one and many-to-many relations

## Requirements

- Strapi 5.29.0+
- SQLite database (or configured database)
- All content types must be created before running

## Notes

- The script automatically publishes all created content
- Existing entries are skipped (identified by slug/SKU)
- All prices are in PLN (Polish Złoty)
- Product includes full technical specifications and SEO metadata
