import Link from 'next/link';

export default function Navigation() {
  const navItems = [
    { href: '/', label: 'Strona główna' },
    { href: '/products', label: 'Produkty' },
    { href: '/categories', label: 'Kategorie' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Kontakt' },
  ];

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm font-medium text-gray-300 hover:text-neon-violet transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
