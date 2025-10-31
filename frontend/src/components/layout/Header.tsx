import Link from 'next/link';
import Navigation from './Navigation';
import CartButton from '@/components/cart/CartButton';
import ThemeToggle from '@/components/ui/ThemeToggle';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-neon-violet to-electric-blue bg-clip-text text-transparent">
                MAKOSZA
              </span>
            </Link>
          </div>

          <Navigation />

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <CartButton />
          </div>
        </div>
      </div>
    </header>
  );
}
