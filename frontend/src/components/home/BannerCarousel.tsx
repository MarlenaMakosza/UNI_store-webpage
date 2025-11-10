'use client';

import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

interface Banner {
  id: number;
  badge: string;
  title: string;
  highlight: string;
  text: string;
  cta: string;
  href: string;
  type: 'gaming' | 'payment' | 'delivery';
}

const banners: Banner[] = [
  {
    id: 1,
    badge: '🔥 HOT DEAL',
    title: 'POWER UP\nYOUR ',
    highlight: 'GEAR!',
    text: 'Zgarnij do -30% na myszki, klawiatury i słuchawki gamingowe',
    cta: 'Kup teraz →',
    href: '/products',
    type: 'gaming',
  },
  {
    id: 2,
    badge: '💳 0% OPROCENTOWANIA',
    title: 'KUP TERAZ\nPŁAĆ ',
    highlight: 'PÓŹNIEJ',
    text: 'Odroczona płatność do 12 miesięcy bez dodatkowych kosztów',
    cta: 'Zobacz warunki →',
    href: '#',
    type: 'payment',
  },
  {
    id: 3,
    badge: '🚚 DARMOWA USŁUGA',
    title: 'DOSTAWA\n',
    highlight: 'GRATIS!',
    text: 'Darmowy transport + wniesienie przy zakupach powyżej 500 zł',
    cta: 'Sprawdź ofertę →',
    href: '/products',
    type: 'delivery',
  },
];

const GamingVisual = ({ isLight }: { isLight: boolean }) => (
  <div className="w-full h-full flex items-center justify-center">
    <div
      className={`w-[350px] lg:w-[450px] h-[250px] lg:h-[300px] rounded-[20px] p-5 lg:p-6 flex flex-col gap-4 border-2 transition-all duration-300 ${
        isLight
          ? 'bg-gradient-to-br from-[#8A2BE2]/5 to-[#3F8EFC]/5 border-[#8A2BE2]/15'
          : 'bg-gradient-to-br from-[#8A2BE2]/10 to-[#3F8EFC]/10 border-[#8A2BE2]/30'
      }`}
      style={{
        boxShadow: isLight
          ? '0 15px 40px rgba(138, 43, 226, 0.15)'
          : '0 20px 50px rgba(138, 43, 226, 0.3)',
      }}
    >
      <div className="flex gap-3 lg:gap-4">
        {[
          { icon: '🎮', label: 'Myszki' },
          { icon: '⌨️', label: 'Klawiatury' },
        ].map((item, i) => (
          <div
            key={i}
            className={`flex-1 rounded-xl p-4 flex flex-col items-center gap-2 border-2 transition-all duration-300 hover:-translate-y-1 ${
              isLight
                ? 'bg-white border-[#8A2BE2]/20 hover:bg-[#8A2BE2]/5 hover:border-[#8A2BE2]/40'
                : 'bg-white/5 border-[#8A2BE2]/40 hover:bg-[#8A2BE2]/15 hover:border-[#8A2BE2]/60'
            }`}
            style={{
              boxShadow: isLight ? '0 5px 15px rgba(0, 0, 0, 0.05)' : 'none',
            }}
          >
            <div
              className="w-12 lg:w-14 h-12 lg:h-14 rounded-lg flex items-center justify-center text-2xl lg:text-3xl"
              style={{
                background: 'linear-gradient(135deg, #8A2BE2, #3F8EFC)',
                boxShadow: '0 5px 15px rgba(138, 43, 226, 0.25)',
              }}
            >
              {item.icon}
            </div>
            <span
              className={`text-[10px] lg:text-xs font-semibold uppercase tracking-wide ${
                isLight ? 'text-[#1a1a1a]' : 'text-white'
              }`}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
      <div className="flex gap-3 lg:gap-4">
        {[
          { icon: '🎧', label: 'Słuchawki' },
          { icon: '🖥️', label: 'Monitory' },
        ].map((item, i) => (
          <div
            key={i}
            className={`flex-1 rounded-xl p-4 flex flex-col items-center gap-2 border-2 transition-all duration-300 hover:-translate-y-1 ${
              isLight
                ? 'bg-white border-[#8A2BE2]/20 hover:bg-[#8A2BE2]/5 hover:border-[#8A2BE2]/40'
                : 'bg-white/5 border-[#8A2BE2]/40 hover:bg-[#8A2BE2]/15 hover:border-[#8A2BE2]/60'
            }`}
            style={{
              boxShadow: isLight ? '0 5px 15px rgba(0, 0, 0, 0.05)' : 'none',
            }}
          >
            <div
              className="w-12 lg:w-14 h-12 lg:h-14 rounded-lg flex items-center justify-center text-2xl lg:text-3xl"
              style={{
                background: 'linear-gradient(135deg, #8A2BE2, #3F8EFC)',
                boxShadow: '0 5px 15px rgba(138, 43, 226, 0.25)',
              }}
            >
              {item.icon}
            </div>
            <span
              className={`text-[10px] lg:text-xs font-semibold uppercase tracking-wide ${
                isLight ? 'text-[#1a1a1a]' : 'text-white'
              }`}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const PaymentVisual = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div
      className="w-[300px] lg:w-[380px] h-[190px] lg:h-[240px] rounded-[20px] p-6 lg:p-8 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #8A2BE2, #3F8EFC)',
        boxShadow: '0 20px 50px rgba(138, 43, 226, 0.3)',
      }}
    >
      <div
        className="absolute w-48 h-48 rounded-full top-[-100px] right-[-50px]"
        style={{ background: 'rgba(255, 255, 255, 0.15)' }}
      />
      <div
        className="w-12 h-10 rounded-lg mb-8 lg:mb-10 relative z-10"
        style={{
          background: 'linear-gradient(135deg, #f4d03f, #f39c12)',
          boxShadow: '0 3px 10px rgba(0, 0, 0, 0.2)',
        }}
      />
      <div
        className="text-white text-xl lg:text-2xl font-semibold tracking-[3px] mb-4 lg:mb-5"
        style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)' }}
      >
        •••• •••• •••• ••••
      </div>
      <div className="flex justify-between text-white text-sm">
        <div>
          <div className="text-[10px] lg:text-[11px] opacity-90">WAŻNA DO</div>
          <div className="font-semibold">12/27</div>
        </div>
        <div className="text-right">
          <div className="text-[10px] lg:text-[11px] opacity-90">0% RATA</div>
          <div className="font-semibold text-base lg:text-lg">12 M-CY</div>
        </div>
      </div>
    </div>
  </div>
);

const DeliveryVisual = ({ isLight }: { isLight: boolean }) => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="flex gap-6">
      {[
        { icon: '🚚', label: 'Darmowy\nTransport' },
        { icon: '🏠', label: 'Wniesienie\ndo domu' },
        { icon: '✅', label: 'Całkowicie\nGratis' },
      ].map((item, i) => (
        <div
          key={i}
          className={`w-[170px] rounded-2xl p-10 px-6 flex flex-col items-center gap-5 border-[3px] transition-all duration-300 hover:-translate-y-2 ${
            isLight
              ? 'bg-white border-[#8A2BE2]/25 hover:bg-[#8A2BE2]/5 hover:border-[#8A2BE2]/40'
              : 'bg-white/5 border-[#8A2BE2]/40 hover:bg-[#8A2BE2]/15 hover:border-[#8A2BE2]/60'
          }`}
          style={{
            boxShadow: isLight
              ? '0 5px 15px rgba(0, 0, 0, 0.05)'
              : '0 10px 25px rgba(138, 43, 226, 0.2)',
          }}
        >
          <div
            className="w-[95px] h-[95px] rounded-[15px] flex items-center justify-center text-5xl"
            style={{
              background: 'linear-gradient(135deg, #8A2BE2, #3F8EFC)',
              boxShadow: '0 5px 20px rgba(138, 43, 226, 0.25)',
            }}
          >
            {item.icon}
          </div>
          <span
            className={`text-base font-semibold text-center uppercase tracking-wide leading-snug whitespace-pre-line ${
              isLight ? 'text-[#1a1a1a]' : 'text-white'
            }`}
          >
            {item.label}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default function BannerCarousel() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsLight(document.documentElement.classList.contains('light'));
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!swiperRef.current) return;
      if (e.key === 'ArrowLeft') {
        swiperRef.current.slidePrev();
      } else if (e.key === 'ArrowRight') {
        swiperRef.current.slideNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const renderVisual = (type: Banner['type']) => {
    switch (type) {
      case 'gaming':
        return <GamingVisual isLight={isLight} />;
      case 'payment':
        return <PaymentVisual />;
      case 'delivery':
        return <DeliveryVisual isLight={isLight} />;
      default:
        return null;
    }
  };

  return (
    <section className={`py-8 md:py-12 ${isLight ? 'bg-[#f5f5f5]' : 'bg-deep-black'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="banner-carousel"
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.id}>
              <a
                href={banner.href}
                className={`block relative overflow-hidden rounded-[20px] h-[400px] group cursor-pointer transition-all duration-300 ${
                  isLight ? 'bg-white' : 'bg-[#0D0D0D]'
                }`}
                style={{
                  boxShadow: isLight
                    ? '0 10px 40px rgba(0, 0, 0, 0.08)'
                    : '0 20px 60px rgba(138, 43, 226, 0.3)',
                }}
              >
                <div
                  className="absolute w-[600px] h-[600px] rounded-full pointer-events-none top-[-200px] right-[-100px]"
                  style={{
                    background: isLight
                      ? 'radial-gradient(circle, rgba(138, 43, 226, 0.08) 0%, transparent 70%)'
                      : 'radial-gradient(circle, rgba(138, 43, 226, 0.15) 0%, transparent 70%)',
                  }}
                />
                <div
                  className="absolute w-[400px] h-[400px] rounded-full pointer-events-none bottom-[-150px] left-[-50px]"
                  style={{
                    background: isLight
                      ? 'radial-gradient(circle, rgba(63, 142, 252, 0.06) 0%, transparent 70%)'
                      : 'radial-gradient(circle, rgba(63, 142, 252, 0.12) 0%, transparent 70%)',
                  }}
                />

                <div className="relative h-full flex flex-col md:flex-row items-center justify-between px-8 md:px-16 lg:px-20 py-10 md:py-12 gap-8">
                  <div className="flex-1 text-center md:text-left space-y-4 md:space-y-5 z-10 max-w-[600px]">
                    <div className="inline-block">
                      <span
                        className="inline-block px-5 py-2 rounded-full text-sm font-bold text-white uppercase tracking-wide"
                        style={{
                          background: 'linear-gradient(90deg, #8A2BE2 0%, #3F8EFC 100%)',
                          boxShadow: isLight
                            ? '0 4px 15px rgba(138, 43, 226, 0.25)'
                            : '0 4px 15px rgba(138, 43, 226, 0.4)',
                        }}
                      >
                        {banner.badge}
                      </span>
                    </div>

                    <h2
                      className={`text-4xl md:text-5xl lg:text-[56px] font-black leading-tight whitespace-pre-line ${
                        isLight ? 'text-[#1a1a1a]' : 'text-white'
                      }`}
                      style={{
                        textShadow: isLight ? 'none' : '0 0 30px rgba(138, 43, 226, 0.5)',
                      }}
                    >
                      {banner.title}
                      <span
                        className="bg-gradient-to-r from-[#8A2BE2] to-[#3F8EFC] bg-clip-text text-transparent"
                        style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                      >
                        {banner.highlight}
                      </span>
                    </h2>

                    <p
                      className={`text-lg md:text-xl leading-relaxed ${
                        isLight ? 'text-[#555555]' : 'text-[#b0b0b0]'
                      }`}
                    >
                      {banner.text}
                    </p>

                    <button
                      className="inline-block px-10 py-4 rounded-full text-white font-bold text-lg uppercase tracking-wide transition-all duration-300 transform hover:-translate-y-1"
                      style={{
                        background: 'linear-gradient(90deg, #8A2BE2 0%, #3F8EFC 100%)',
                        boxShadow: isLight
                          ? '0 8px 25px rgba(138, 43, 226, 0.3)'
                          : '0 10px 30px rgba(138, 43, 226, 0.4)',
                      }}
                    >
                      {banner.cta}
                    </button>
                  </div>

                  <div className="relative z-10 w-full md:w-[500px] h-[280px] md:h-[350px] flex-shrink-0">
                    {renderVisual(banner.type)}
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        <style jsx global>{`
          .banner-carousel .swiper-button-next,
          .banner-carousel .swiper-button-prev {
            color: white;
            background: linear-gradient(135deg, #8A2BE2 0%, #3F8EFC 100%);
            width: 50px;
            height: 50px;
            border-radius: 50%;
            transition: all 0.3s ease;
          }

          .banner-carousel .swiper-button-next:after,
          .banner-carousel .swiper-button-prev:after {
            font-size: 20px;
            font-weight: bold;
          }

          .banner-carousel .swiper-button-next:hover,
          .banner-carousel .swiper-button-prev:hover {
            transform: scale(1.1);
            box-shadow: 0 8px 25px rgba(138, 43, 226, 0.5);
          }

          .banner-carousel .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
            background: #555;
            opacity: 1;
            transition: all 0.3s ease;
          }

          .banner-carousel .swiper-pagination-bullet-active {
            background: linear-gradient(135deg, #8A2BE2 0%, #3F8EFC 100%);
            width: 40px;
            border-radius: 6px;
          }

          @media (max-width: 768px) {
            .banner-carousel .swiper-button-next,
            .banner-carousel .swiper-button-prev {
              width: 40px;
              height: 40px;
            }

            .banner-carousel .swiper-button-next:after,
            .banner-carousel .swiper-button-prev:after {
              font-size: 16px;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
