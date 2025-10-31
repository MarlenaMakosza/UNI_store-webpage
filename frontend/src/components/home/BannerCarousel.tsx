'use client';

import { useEffect, useRef } from 'react';
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
  text: string;
  cta: string;
  icon: string;
  iconAnimation: string;
  href: string;
}

const banners: Banner[] = [
  {
    id: 1,
    badge: '🔥 HOT DEAL',
    title: 'POWER UP YOUR GEAR!',
    text: 'Zgarnij do -30% na myszki, klawiatury i słuchawki gamingowe',
    cta: 'Kup teraz →',
    icon: '🎮',
    iconAnimation: 'animate-float',
    href: '/products',
  },
  {
    id: 2,
    badge: '💳 0% OPROCENTOWANIA',
    title: 'KUP TERAZ PŁAĆ PÓŹNIEJ',
    text: 'Odroczona płatność do 12 miesięcy bez dodatkowych kosztów',
    cta: 'Zobacz warunki →',
    icon: '💎',
    iconAnimation: 'animate-pulse-custom',
    href: '#',
  },
  {
    id: 3,
    badge: '🚚 DARMOWA USŁUGA',
    title: 'DOSTAWA GRATIS!',
    text: 'Darmowy transport + wniesienie przy zakupach powyżej 500 zł',
    cta: 'Sprawdź ofertę →',
    icon: '📦',
    iconAnimation: 'animate-slide',
    href: '/products',
  },
];

export default function BannerCarousel() {
  const swiperRef = useRef<SwiperType | null>(null);

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

  return (
    <section className="py-8 md:py-12 bg-deep-black">
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
                className="block relative overflow-hidden rounded-[20px] bg-[#0D0D0D] h-[300px] md:h-[400px] group cursor-pointer"
                style={{
                  boxShadow: '0 10px 40px rgba(138, 43, 226, 0.3)',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#8A2BE2]/20 via-transparent to-[#3F8EFC]/20" />

                <div className="absolute top-10 -left-10 w-64 h-64 bg-[#8A2BE2]/10 rounded-full blur-3xl" />
                <div className="absolute bottom-10 -right-10 w-64 h-64 bg-[#3F8EFC]/10 rounded-full blur-3xl" />

                <div className="relative h-full flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-8 md:py-12 gap-8">
                  <div className="flex-1 text-center md:text-left space-y-4 md:space-y-6 z-10">
                    <div className="inline-block">
                      <span
                        className="inline-block px-4 py-2 rounded-full text-sm font-bold text-white"
                        style={{
                          background: 'linear-gradient(135deg, #8A2BE2 0%, #3F8EFC 100%)',
                          boxShadow: '0 4px 15px rgba(138, 43, 226, 0.4)',
                        }}
                      >
                        {banner.badge}
                      </span>
                    </div>

                    <h2
                      className="text-3xl md:text-5xl font-extrabold text-white leading-tight"
                      style={{
                        textShadow: '0 4px 20px rgba(138, 43, 226, 0.5)',
                      }}
                    >
                      {banner.title}
                    </h2>

                    <p className="text-base md:text-xl text-[#b0b0b0] max-w-xl">
                      {banner.text}
                    </p>

                    <button
                      className="inline-block px-8 py-4 rounded-full text-white font-bold text-lg transition-all duration-300 transform hover:-translate-y-1"
                      style={{
                        background: 'linear-gradient(135deg, #8A2BE2 0%, #3F8EFC 100%)',
                        boxShadow: '0 6px 25px rgba(138, 43, 226, 0.4)',
                      }}
                    >
                      {banner.cta}
                    </button>
                  </div>

                  <div className="flex-shrink-0 z-10">
                    <div
                      className={`text-[80px] md:text-[120px] ${banner.iconAnimation}`}
                      style={{
                        filter: 'drop-shadow(0 0 30px rgba(138, 43, 226, 0.6))',
                      }}
                    >
                      {banner.icon}
                    </div>
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
