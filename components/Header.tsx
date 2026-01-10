export default function Header() {
  return (
    <header class="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex items-center">
            <a href="/" class="flex items-center space-x-2">
              <span class="text-2xl font-bold gradient-text">
                TechNest
              </span>
            </a>
          </div>

          <nav class="hidden md:flex items-center space-x-8">
            <a href="/" class="text-gray-600 hover:text-primary transition-colors font-medium">
              Strona glowna
            </a>
            <a href="/produkty" class="text-gray-600 hover:text-primary transition-colors font-medium">
              Produkty
            </a>
            <a href="/kategorie" class="text-gray-600 hover:text-primary transition-colors font-medium">
              Kategorie
            </a>
            <a href="/blog" class="text-gray-600 hover:text-primary transition-colors font-medium">
              Blog
            </a>
            <a href="/kontakt" class="text-gray-600 hover:text-primary transition-colors font-medium">
              Kontakt
            </a>
          </nav>

          <div class="flex items-center space-x-4">
            <button class="p-2 text-gray-600 hover:text-primary transition-colors" title="Koszyk (demo)">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>

            {/* Mobile menu button */}
            <button class="md:hidden p-2 text-gray-600 hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
