'use client';

import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Product } from '@/types/product';
import ProductCard from './ProductCard';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ProductCarouselProps {
  products: Product[];
  onAddToCart: (productId: string, documentId: string) => void;
}

export default function ProductCarousel({ products, onAddToCart }: ProductCarouselProps) {
  return (
    <div className="product-carousel">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        }}
        className="!pb-12"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id || product.documentId}>
            <ProductCard product={product} onAddToCart={onAddToCart} />
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .product-carousel .swiper-button-next,
        .product-carousel .swiper-button-prev {
          color: #8b5cf6;
          width: 44px;
          height: 44px;
          background: rgba(13, 13, 13, 0.8);
          border-radius: 50%;
          border: 2px solid #8b5cf6;
          transition: all 0.3s ease;
        }

        .product-carousel .swiper-button-next:hover,
        .product-carousel .swiper-button-prev:hover {
          background: #8b5cf6;
          color: white;
          transform: scale(1.1);
        }

        .product-carousel .swiper-button-next::after,
        .product-carousel .swiper-button-prev::after {
          font-size: 20px;
          font-weight: bold;
        }

        .product-carousel .swiper-pagination-bullet {
          background: #6b7280;
          opacity: 1;
          width: 10px;
          height: 10px;
          transition: all 0.3s ease;
        }

        .product-carousel .swiper-pagination-bullet-active {
          background: linear-gradient(90deg, #8b5cf6 0%, #3b82f6 100%);
          width: 24px;
          border-radius: 5px;
        }

        .product-carousel .swiper-button-disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
}
