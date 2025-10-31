/**
 * E-commerce Shop Seed Script
 * Populates the database with product categories, brands, tags, shipping methods, payment methods, and sample products
 *
 * Usage: npm run seed:shop
 */

'use strict';

const fs = require('fs');
const path = require('path');

// Strapi bootstrap helper
async function setPublicPermissions(newPermissions) {
  const publicRole = await strapi.query('plugin::users-permissions.role').findOne({
    where: {
      type: 'public',
    },
  });

  const publicPermissions = await strapi.query('plugin::users-permissions.permission').findMany({
    where: {
      role: publicRole.id,
    },
  });

  const currentPermissionsIds = publicPermissions.map((permission) => permission.id);

  const newPermissionsIds = newPermissions.map((permission) => permission.id);

  const permissionsToDelete = currentPermissionsIds.filter(
    (id) => !newPermissionsIds.includes(id)
  );

  if (permissionsToDelete.length > 0) {
    await strapi.query('plugin::users-permissions.permission').deleteMany({
      where: {
        id: {
          $in: permissionsToDelete,
        },
      },
    });
  }
}

// Main seed function
async function seed() {
  try {
    console.log('Starting e-commerce shop seeding...\n');

    // ============================================
    // 1. SEED PRODUCT CATEGORIES (HIERARCHICAL)
    // ============================================
    console.log('1. Seeding product categories...');

    const categoriesData = [
      // Parent categories
      { name: 'Komputery', slug: 'komputery', description: 'Komputery i podzespoły', order: 1, isActive: true, isFeatured: true },
      { name: 'Peryferia', slug: 'peryferia', description: 'Urządzenia peryferyjne do komputerów', order: 2, isActive: true, isFeatured: true },
      { name: 'Telefony', slug: 'telefony', description: 'Smartfony i telefony komórkowe', order: 3, isActive: true, isFeatured: false },
      { name: 'Tablety', slug: 'tablety', description: 'Tablety i czytniki e-booków', order: 4, isActive: true, isFeatured: false },
      { name: 'Akcesoria', slug: 'akcesoria', description: 'Akcesoria elektroniczne', order: 5, isActive: true, isFeatured: false },
    ];

    const categories = {};

    for (const catData of categoriesData) {
      const existing = await strapi.db.query('api::product-category.product-category').findOne({
        where: { slug: catData.slug },
      });

      if (existing) {
        console.log(`  ✓ Category "${catData.name}" already exists`);
        categories[catData.slug] = existing;
      } else {
        const created = await strapi.documents('api::product-category.product-category').create({
          data: {
            ...catData,
            publishedAt: new Date(),
          },
        });
        console.log(`  + Created category: ${catData.name}`);
        categories[catData.slug] = created;
      }
    }

    // Child categories
    const childCategoriesData = [
      { name: 'Laptopy', slug: 'laptopy', parentSlug: 'komputery', order: 1 },
      { name: 'Komputery stacjonarne', slug: 'komputery-stacjonarne', parentSlug: 'komputery', order: 2 },
      { name: 'Podzespoły komputerowe', slug: 'podzespoly-komputerowe', parentSlug: 'komputery', order: 3 },
      { name: 'Myszy', slug: 'mysze', parentSlug: 'peryferia', order: 1 },
      { name: 'Klawiatury', slug: 'klawiatury', parentSlug: 'peryferia', order: 2 },
      { name: 'Słuchawki', slug: 'sluchawki', parentSlug: 'peryferia', order: 3 },
      { name: 'Głośniki', slug: 'glosniki', parentSlug: 'peryferia', order: 4 },
      { name: 'Kable', slug: 'kable', parentSlug: 'akcesoria', order: 1 },
      { name: 'Ładowarki', slug: 'ladowarki', parentSlug: 'akcesoria', order: 2 },
    ];

    for (const childData of childCategoriesData) {
      const existing = await strapi.db.query('api::product-category.product-category').findOne({
        where: { slug: childData.slug },
      });

      const parentCategory = categories[childData.parentSlug];

      if (existing) {
        console.log(`  ✓ Child category "${childData.name}" already exists`);
        categories[childData.slug] = existing;
      } else {
        const created = await strapi.documents('api::product-category.product-category').create({
          data: {
            name: childData.name,
            slug: childData.slug,
            order: childData.order,
            isActive: true,
            parent: parentCategory.documentId,
            publishedAt: new Date(),
          },
        });
        console.log(`  + Created child category: ${childData.name} (parent: ${childData.parentSlug})`);
        categories[childData.slug] = created;
      }
    }

    console.log('✓ Product categories seeded successfully\n');

    // ============================================
    // 2. SEED BRANDS
    // ============================================
    console.log('2. Seeding brands...');

    const brandsData = [
      { name: 'Logitech', slug: 'logitech', website: 'https://www.logitech.com', isFeatured: true, isActive: true },
      { name: 'Apple', slug: 'apple', website: 'https://www.apple.com', isFeatured: true, isActive: true },
      { name: 'Samsung', slug: 'samsung', website: 'https://www.samsung.com', isFeatured: true, isActive: true },
      { name: 'Dell', slug: 'dell', website: 'https://www.dell.com', isFeatured: false, isActive: true },
      { name: 'HP', slug: 'hp', website: 'https://www.hp.com', isFeatured: false, isActive: true },
      { name: 'Asus', slug: 'asus', website: 'https://www.asus.com', isFeatured: true, isActive: true },
      { name: 'Razer', slug: 'razer', website: 'https://www.razer.com', isFeatured: true, isActive: true },
      { name: 'SteelSeries', slug: 'steelseries', website: 'https://steelseries.com', isFeatured: false, isActive: true },
    ];

    const brands = {};

    for (const brandData of brandsData) {
      const existing = await strapi.db.query('api::brand.brand').findOne({
        where: { slug: brandData.slug },
      });

      if (existing) {
        console.log(`  ✓ Brand "${brandData.name}" already exists`);
        brands[brandData.slug] = existing;
      } else {
        const created = await strapi.documents('api::brand.brand').create({
          data: {
            ...brandData,
            publishedAt: new Date(),
          },
        });
        console.log(`  + Created brand: ${brandData.name}`);
        brands[brandData.slug] = created;
      }
    }

    console.log('✓ Brands seeded successfully\n');

    // ============================================
    // 3. SEED PRODUCT TAGS
    // ============================================
    console.log('3. Seeding product tags...');

    const tagsData = [
      { name: 'Gaming', slug: 'gaming', color: '#ff0000', isActive: true },
      { name: 'Wireless', slug: 'wireless', color: '#0066ff', isActive: true },
      { name: 'RGB', slug: 'rgb', color: '#9933ff', isActive: true },
      { name: 'High-DPI', slug: 'high-dpi', color: '#00cc66', isActive: true },
      { name: 'Ergonomic', slug: 'ergonomic', color: '#ff9900', isActive: true },
      { name: 'Professional', slug: 'professional', color: '#333333', isActive: true },
      { name: 'Budget', slug: 'budget', color: '#00cccc', isActive: true },
      { name: 'Premium', slug: 'premium', color: '#ffcc00', isActive: true },
      { name: 'Bestseller', slug: 'bestseller', color: '#ff3366', isActive: true },
      { name: 'New Arrival', slug: 'new-arrival', color: '#00ff99', isActive: true },
    ];

    const tags = {};

    for (const tagData of tagsData) {
      const existing = await strapi.db.query('api::product-tag.product-tag').findOne({
        where: { slug: tagData.slug },
      });

      if (existing) {
        console.log(`  ✓ Tag "${tagData.name}" already exists`);
        tags[tagData.slug] = existing;
      } else {
        const created = await strapi.documents('api::product-tag.product-tag').create({
          data: {
            ...tagData,
            publishedAt: new Date(),
          },
        });
        console.log(`  + Created tag: ${tagData.name}`);
        tags[tagData.slug] = created;
      }
    }

    console.log('✓ Product tags seeded successfully\n');

    // ============================================
    // 4. SEED SHIPPING METHODS
    // ============================================
    console.log('4. Seeding shipping methods...');

    const shippingMethodsData = [
      {
        name: 'InPost Paczkomaty',
        description: 'Odbiór z paczkomatu InPost 24/7. Szybko, wygodnie i zawsze blisko Ciebie.',
        provider: 'inpost',
        cost: 12.99,
        freeShippingThreshold: 300,
        minEstimatedDays: 1,
        maxEstimatedDays: 2,
        isActive: true,
        requiresAddress: true,
        trackingUrl: 'https://inpost.pl/sledzenie-przesylek',
        order: 1,
        maxWeight: 25,
      },
      {
        name: 'Kurier DPD',
        description: 'Dostawa kurierem DPD pod wskazany adres w godzinach 8:00-18:00.',
        provider: 'dpd',
        cost: 19.99,
        freeShippingThreshold: 500,
        minEstimatedDays: 1,
        maxEstimatedDays: 3,
        isActive: true,
        requiresAddress: true,
        trackingUrl: 'https://tracktrace.dpd.com.pl/',
        order: 2,
        maxWeight: 31.5,
      },
      {
        name: 'Poczta Polska',
        description: 'Dostawa Pocztą Polską. Przesyłka priorytetowa w standardowych godzinach dostawy.',
        provider: 'poczta_polska',
        cost: 15.99,
        minEstimatedDays: 2,
        maxEstimatedDays: 5,
        isActive: true,
        requiresAddress: true,
        trackingUrl: 'https://emonitoring.poczta-polska.pl/',
        order: 3,
        maxWeight: 20,
      },
      {
        name: 'Kurier ekspresowy',
        description: 'Ekspresowa dostawa kurierem następnego dnia roboczego. Dostępna dla zamówień złożonych do godz. 15:00.',
        provider: 'courier',
        cost: 29.99,
        estimatedDays: 1,
        isActive: true,
        requiresAddress: true,
        order: 4,
        maxWeight: 30,
      },
      {
        name: 'Odbiór osobisty',
        description: 'Odbierz zamówienie osobiście w naszym punkcie w Warszawie. Bezpłatnie, bez dodatkowych kosztów.',
        provider: 'pickup',
        cost: 0,
        estimatedDays: 1,
        isActive: true,
        requiresAddress: false,
        order: 5,
      },
    ];

    for (const methodData of shippingMethodsData) {
      const existing = await strapi.db.query('api::shipping-method.shipping-method').findOne({
        where: { name: methodData.name },
      });

      if (existing) {
        console.log(`  ✓ Shipping method "${methodData.name}" already exists`);
      } else {
        await strapi.documents('api::shipping-method.shipping-method').create({
          data: methodData,
        });
        console.log(`  + Created shipping method: ${methodData.name}`);
      }
    }

    console.log('✓ Shipping methods seeded successfully\n');

    // ============================================
    // 5. SEED PAYMENT METHODS
    // ============================================
    console.log('5. Seeding payment methods...');

    const paymentMethodsData = [
      {
        name: 'Przelewy24',
        description: 'Szybkie płatności online - Przelewy24, BLIK, karty płatnicze',
        provider: 'przelewy24',
        fee: 0,
        feeType: 'fixed',
        isActive: true,
        supportInstallments: false,
        order: 1,
      },
      {
        name: 'PayU - Raty 0%',
        description: 'Płać później lub w ratach 0% z PayU',
        provider: 'payu',
        fee: 0,
        feeType: 'fixed',
        isActive: true,
        supportInstallments: true,
        minOrderAmount: 300,
        order: 2,
      },
      {
        name: 'Przelew bankowy',
        description: 'Tradycyjny przelew bankowy',
        provider: 'bank_transfer',
        fee: 0,
        feeType: 'fixed',
        isActive: true,
        supportInstallments: false,
        order: 3,
      },
      {
        name: 'Płatność przy odbiorze',
        description: 'Zapłać gotówką lub kartą kurierowi',
        provider: 'cash_on_delivery',
        fee: 5,
        feeType: 'fixed',
        isActive: true,
        supportInstallments: false,
        maxOrderAmount: 5000,
        order: 4,
      },
    ];

    for (const methodData of paymentMethodsData) {
      const existing = await strapi.db.query('api::payment-method.payment-method').findOne({
        where: { name: methodData.name },
      });

      if (existing) {
        console.log(`  ✓ Payment method "${methodData.name}" already exists`);
      } else {
        await strapi.documents('api::payment-method.payment-method').create({
          data: methodData,
        });
        console.log(`  + Created payment method: ${methodData.name}`);
      }
    }

    console.log('✓ Payment methods seeded successfully\n');

    // ============================================
    // 6. SEED SAMPLE PRODUCT: LOGITECH G502
    // ============================================
    console.log('6. Seeding sample product: Logitech G502 LIGHTSPEED...');

    const productData = {
      name: 'Logitech G502 LIGHTSPEED Wireless Gaming Mouse',
      slug: 'logitech-g502-lightspeed-wireless-gaming-mouse',
      sku: 'LOG-G502-LS-BLK',
      ean: '5099206085978',
      shortDescription: 'Ultra-fast wireless gaming mouse with HERO 25K sensor, 11 programmable buttons, and POWERPLAY wireless charging compatibility.',
      description: `<h2>Logitech G502 Lightspeed – bezprzewodowa precyzja na poziomie turniejowym</h2>
<p>W świecie gamingu liczy się każda sekunda i każdy ruch. Logitech G502 Lightspeed to mysz stworzona z myślą o graczach, którzy wymagają absolutnej precyzji, niezawodności i szybkości reakcji – bez żadnych kompromisów, również w kwestii łączności.</p>

<h3>Dlaczego warto wybrać Logitech G502 Lightspeed?</h3>

<h4>Bezprzewodowa technologia LIGHTSPEED – wolność bez opóźnień</h4>
<p>Zapomnij o przewodach i opóźnieniach. LIGHTSPEED to ultraszybka technologia bezprzewodowa, która oferuje niezawodność i czas reakcji porównywalny z najlepszymi myszami przewodowymi. Opóźnienie na poziomie 1 ms idealnie sprawdzi się do dynamicznych rozgrywek, gdzie liczy się każda milisekunda.</p>

<h4>Sensor HERO 25K – maksymalna precyzja</h4>
<p>G502 Lightspeed została wyposażona w sensor HERO 25K, oferujący rozdzielczość do 25 600 DPI bez wygładzania, akceleracji czy filtrów. Niezależnie od stylu gry – agresywnego flickowania czy precyzyjnego celowania – zawsze trafisz dokładnie tam, gdzie chcesz.</p>

<h4>11 programowalnych przycisków – pełna kontrola</h4>
<p>Możesz przypisać makra, skróty i komendy do każdego z 11 przycisków. G502 Lightspeed daje Ci pełną elastyczność – idealnie sprawdzi się w FPS-ach, MMO i grach strategicznych, gdzie każda funkcja jest na wagę złota.</p>`,
      marketingDescription: `<div class="product-highlights">
<h3>Logitech G502 Lightspeed – sprzęt dla tych, którzy grają, by wygrywać</h3>
<p>Jeśli szukasz myszy, która zapewni Ci przewagę na każdym poziomie gry, G502 Lightspeed to pewny wybór. Szybkość, precyzja i niezawodność – bez kabla i bez kompromisów.</p>
</div>`,
      price: 499.00,
      compareAtPrice: 649.00,
      taxRate: 23,
      stock: 150,
      stockStatus: 'in_stock',
      weight: 0.114,
      manufacturer: 'Logitech',
      warranty: 24,
      warrantyUnit: 'months',
      featured: true,
      bestseller: true,
      isActive: true,
      category: categories['mysze'].documentId,
      brand: brands['logitech'].documentId,
      tags: [
        tags['gaming'].documentId,
        tags['wireless'].documentId,
        tags['rgb'].documentId,
        tags['high-dpi'].documentId,
      ],
      technicalSpecs: [
        { group: 'Sensor', name: 'Typ sensora', value: 'HERO 25K (optyczny)' },
        { group: 'Sensor', name: 'Zakres DPI', value: '100 – 25 600 DPI' },
        { group: 'Sensor', name: 'Częstotliwość raportowania', value: '1000 Hz (1 ms)' },
        { group: 'Przyciski', name: 'Liczba przycisków', value: '11 (programowalnych)' },
        { group: 'Oświetlenie', name: 'Podświetlenie', value: 'LIGHTSYNC RGB' },
        { group: 'Waga', name: 'Waga', value: '114 g (bez obciążników)' },
        { group: 'Bateria', name: 'Czas pracy na baterii', value: 'do 60 h (z wyłączonym RGB)' },
        { group: 'Bateria', name: 'Ładowanie', value: 'USB lub POWERPLAY' },
        { group: 'Połączenie', name: 'Połączenie', value: 'Bezprzewodowe Lightspeed 2.4 GHz' },
        { group: 'Kompatybilność', name: 'Kompatybilność', value: 'Windows, macOS, ChromeOS, Linux' },
      ],
      seo: {
        metaTitle: 'Logitech G502 LIGHTSPEED - Bezprzewodowa Mysz Gamingowa | Sklep Elektroniki',
        metaDescription: 'Kup Logitech G502 LIGHTSPEED z sensorem HERO 25K. Szybka wysyłka, 24 miesiące gwarancji. Najlepsza cena w Polsce! ✓ Raty 0%',
      },
    };

    const existingProduct = await strapi.db.query('api::product.product').findOne({
      where: { sku: productData.sku },
    });

    if (existingProduct) {
      console.log(`  ✓ Product "${productData.name}" already exists`);
    } else {
      const createdProduct = await strapi.documents('api::product.product').create({
        data: {
          ...productData,
          publishedAt: new Date(),
        },
      });
      console.log(`  + Created product: ${productData.name}`);
      console.log(`    - SKU: ${productData.sku}`);
      console.log(`    - Category: Myszy`);
      console.log(`    - Brand: Logitech`);
      console.log(`    - Tags: Gaming, Wireless, RGB, High-DPI`);
      console.log(`    - Price: ${productData.price} PLN`);
      console.log(`    - Stock: ${productData.stock} units`);
    }

    console.log('✓ Sample product seeded successfully\n');

    // ============================================
    // SUMMARY
    // ============================================
    console.log('========================================');
    console.log('✓ E-commerce shop seeding completed!');
    console.log('========================================');
    console.log('Summary:');
    console.log(`  - Product categories: ${Object.keys(categories).length} (including hierarchical)`);
    console.log(`  - Brands: ${Object.keys(brands).length}`);
    console.log(`  - Product tags: ${Object.keys(tags).length}`);
    console.log(`  - Shipping methods: ${shippingMethodsData.length}`);
    console.log(`  - Payment methods: ${paymentMethodsData.length}`);
    console.log('  - Sample products: 1 (Logitech G502 LIGHTSPEED)');
    console.log('========================================\n');

  } catch (error) {
    console.error('\n❌ Error during seeding:', error);
    console.error(error.stack);
    process.exit(1);
  }
}

// Bootstrap Strapi and run seed
async function main() {
  const appContext = await strapi.compile();
  await strapi.load();
  await seed();
  await strapi.destroy();
}

main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
