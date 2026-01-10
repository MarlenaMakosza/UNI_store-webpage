import { useEffect, useState } from "preact/hooks";

interface Banner {
  id: number;
  badge: string;
  title: string;
  highlight: string;
  text: string;
  cta: string;
  href: string;
  type: "gaming" | "payment" | "delivery";
}

const banners: Banner[] = [
  {
    id: 1,
    badge: "🔥 HOT DEAL",
    title: "POWER UP YOUR ",
    highlight: "GEAR!",
    text: "Zgarnij do -30% na myszki, klawiatury i słuchawki gamingowe",
    cta: "Kup teraz →",
    href: "/produkty",
    type: "gaming",
  },
  {
    id: 2,
    badge: "💳 0% OPROCENTOWANIA",
    title: "KUP TERAZ PŁAĆ ",
    highlight: "PÓŹNIEJ",
    text: "Odroczona płatność do 12 miesięcy bez dodatkowych kosztów",
    cta: "Zobacz warunki →",
    href: "/platnosci",
    type: "payment",
  },
  {
    id: 3,
    badge: "🚚 DARMOWA USŁUGA",
    title: "DOSTAWA ",
    highlight: "GRATIS!",
    text: "Darmowy transport + wniesienie przy zakupach powyżej 500 zł",
    cta: "Sprawdź ofertę →",
    href: "/produkty",
    type: "delivery",
  },
];

function GamingVisual() {
  const categories = [
    { icon: "🎮", label: "Myszki" },
    { icon: "⌨️", label: "Klawiatury" },
    { icon: "🎧", label: "Słuchawki" },
    { icon: "🖥️", label: "Monitory" },
  ];

  return (
    <div class="w-full h-full flex items-center justify-center">
      <div class="grid grid-cols-2 gap-4 lg:gap-5">
        {categories.map((item, i) => (
          <div
            key={i}
            class="w-36 h-36 lg:w-44 lg:h-44 rounded-2xl bg-white border-2 border-purple-200 flex flex-col items-center justify-center gap-3 hover:border-purple-400 hover:-translate-y-1 transition-all duration-300 shadow-md"
          >
            <div class="w-16 h-16 lg:w-20 lg:h-20 rounded-xl btn-gradient flex items-center justify-center text-3xl lg:text-4xl">
              {item.icon}
            </div>
            <span class="text-sm lg:text-base font-semibold text-gray-700 uppercase tracking-wide">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PaymentVisual() {
  return (
    <div class="w-full h-full flex items-center justify-center">
      <div
        class="w-96 lg:w-[450px] h-60 lg:h-72 rounded-3xl p-8 lg:p-10 relative overflow-hidden btn-gradient"
        style={{ boxShadow: "0 25px 60px rgba(138, 43, 226, 0.35)" }}
      >
        <div
          class="absolute w-64 h-64 rounded-full -top-32 -right-20"
          style={{ background: "rgba(255, 255, 255, 0.15)" }}
        />
        <div
          class="w-16 h-14 rounded-xl mb-10 relative z-10"
          style={{
            background: "linear-gradient(135deg, #f4d03f, #f39c12)",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
          }}
        />
        <div
          class="text-white text-3xl lg:text-4xl font-semibold tracking-widest mb-8"
          style={{ textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)" }}
        >
          •••• •••• •••• ••••
        </div>
        <div class="flex justify-between text-white text-lg">
          <div>
            <div class="text-sm lg:text-base opacity-90">WAŻNA DO</div>
            <div class="font-semibold text-xl">12/27</div>
          </div>
          <div class="text-right">
            <div class="text-sm lg:text-base opacity-90">0% RATA</div>
            <div class="font-bold text-2xl">12 M-CY</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DeliveryVisual() {
  const items = [
    { icon: "🚚", label: "Darmowy Transport" },
    { icon: "🏠", label: "Wniesienie do domu" },
    { icon: "✅", label: "Całkowicie Gratis" },
  ];

  return (
    <div class="w-full h-full flex items-center justify-center">
      <div class="flex gap-4 lg:gap-5">
        {items.map((item, i) => (
          <div
            key={i}
            class="w-36 lg:w-44 rounded-2xl bg-white border-2 border-purple-200 p-5 lg:p-6 flex flex-col items-center gap-4 hover:border-purple-400 hover:-translate-y-1 transition-all duration-300 shadow-md"
          >
            <div
              class="w-18 h-18 lg:w-22 lg:h-22 rounded-xl btn-gradient flex items-center justify-center text-4xl lg:text-5xl p-4"
              style={{ boxShadow: "0 5px 20px rgba(138, 43, 226, 0.25)" }}
            >
              {item.icon}
            </div>
            <span class="text-sm lg:text-base font-semibold text-gray-700 text-center uppercase tracking-wide leading-tight">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function BannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
      } else if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev + 1) % banners.length);
      }
    };

    globalThis.addEventListener("keydown", handleKeyDown);
    return () => globalThis.removeEventListener("keydown", handleKeyDown);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  };

  const renderVisual = (type: Banner["type"]) => {
    switch (type) {
      case "gaming":
        return <GamingVisual />;
      case "payment":
        return <PaymentVisual />;
      case "delivery":
        return <DeliveryVisual />;
      default:
        return null;
    }
  };

  const currentBanner = banners[currentIndex];

  return (
    <section class="py-8 md:py-12 bg-gray-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative">
          {/* Single slide container */}
          <a
            href={currentBanner.href}
            class="block relative overflow-hidden rounded-2xl min-h-[480px] md:min-h-[500px] bg-white transition-all duration-500"
            style={{
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
            }}
          >
            {/* Background decorations */}
            <div
              class="absolute w-[600px] h-[600px] rounded-full pointer-events-none -top-48 -right-24"
              style={{
                background:
                  "radial-gradient(circle, rgba(138, 43, 226, 0.08) 0%, transparent 70%)",
              }}
            />
            <div
              class="absolute w-[400px] h-[400px] rounded-full pointer-events-none -bottom-36 -left-12"
              style={{
                background:
                  "radial-gradient(circle, rgba(63, 142, 252, 0.06) 0%, transparent 70%)",
              }}
            />

            {/* Content */}
            <div class="relative h-full flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-16 py-8 md:py-10 gap-6 md:gap-8">
              {/* Text content */}
              <div
                key={currentBanner.id}
                class="flex-1 text-center md:text-left space-y-4 z-10 max-w-xl animate-fade-in"
              >
                <div class="inline-block">
                  <span
                    class="inline-block px-4 py-2 rounded-full text-sm font-bold text-white uppercase tracking-wide btn-gradient"
                    style={{
                      boxShadow: "0 4px 15px rgba(138, 43, 226, 0.25)",
                    }}
                  >
                    {currentBanner.badge}
                  </span>
                </div>

                <h2 class="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-gray-800">
                  {currentBanner.title}
                  <span class="gradient-text">{currentBanner.highlight}</span>
                </h2>

                <p class="text-lg md:text-xl text-gray-600 leading-relaxed">
                  {currentBanner.text}
                </p>

                <button
                  class="inline-block px-8 py-3 rounded-full text-white font-bold text-lg uppercase tracking-wide btn-gradient hover:-translate-y-1 transition-transform duration-300"
                  style={{
                    boxShadow: "0 8px 25px rgba(138, 43, 226, 0.3)",
                  }}
                >
                  {currentBanner.cta}
                </button>
              </div>

              {/* Visual */}
              <div key={`visual-${currentBanner.id}`} class="relative z-10 w-full md:w-auto flex-shrink-0 h-64 md:h-96 animate-fade-in">
                {renderVisual(currentBanner.type)}
              </div>
            </div>
          </a>

          {/* Navigation arrows */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              goToPrev();
            }}
            class="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full btn-gradient text-white flex items-center justify-center hover:scale-110 transition-transform duration-300 z-20"
            style={{ boxShadow: "0 4px 15px rgba(138, 43, 226, 0.4)" }}
            aria-label="Poprzedni slajd"
          >
            <svg
              class="w-5 h-5 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              goToNext();
            }}
            class="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full btn-gradient text-white flex items-center justify-center hover:scale-110 transition-transform duration-300 z-20"
            style={{ boxShadow: "0 4px 15px rgba(138, 43, 226, 0.4)" }}
            aria-label="Następny slajd"
          >
            <svg
              class="w-5 h-5 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Pagination dots */}
          <div class="flex justify-center gap-2 mt-4">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                class={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-10 btn-gradient"
                    : "w-3 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Przejdź do slajdu ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
