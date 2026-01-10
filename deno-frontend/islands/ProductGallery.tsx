import { useState, useEffect } from "preact/hooks";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    if (images.length <= 1 || isPaused || isLightboxOpen) return;

    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length, isPaused, isLightboxOpen]);

  // Handle keyboard navigation in lightbox
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsLightboxOpen(false);
      } else if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
      } else if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev + 1) % images.length);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isLightboxOpen, images.length]);

  if (!images || images.length === 0) {
    return null;
  }

  const goToPrevious = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <>
      <div
        class="space-y-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Main Image */}
        <div class="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm relative group">
          <div class="h-96 bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
            <img
              src={images[selectedIndex]}
              alt={`${productName} - zdjecie ${selectedIndex + 1}`}
              class="max-h-full max-w-full object-contain cursor-zoom-in transition-transform hover:scale-105"
              onClick={() => setIsLightboxOpen(true)}
            />
          </div>

          {/* Navigation arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                class="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Poprzednie zdjecie"
              >
                <svg class="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goToNext}
                class="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Nastepne zdjecie"
              >
                <svg class="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Zoom hint */}
          <div class="absolute bottom-3 right-3 px-2 py-1 bg-black/50 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
            Kliknij aby powiekszyc
          </div>

          {/* Image counter */}
          <div class="absolute bottom-3 left-3 px-2 py-1 bg-black/50 text-white text-xs rounded">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div class="grid grid-cols-5 gap-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                class={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                  selectedIndex === index
                    ? "border-primary ring-2 ring-primary/30"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <img
                  src={image}
                  alt={`${productName} - miniatura ${index + 1}`}
                  class="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          class="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Close button */}
          <button
            onClick={() => setIsLightboxOpen(false)}
            class="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            aria-label="Zamknij"
          >
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                class="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Poprzednie zdjecie"
              >
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); goToNext(); }}
                class="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Nastepne zdjecie"
              >
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Main image */}
          <img
            src={images[selectedIndex]}
            alt={`${productName} - zdjecie ${selectedIndex + 1}`}
            class="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Image counter */}
          <div class="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 text-white text-sm rounded-full">
            {selectedIndex + 1} / {images.length}
          </div>

          {/* Thumbnails in lightbox */}
          {images.length > 1 && (
            <div class="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2 max-w-[90vw] overflow-x-auto p-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={(e) => { e.stopPropagation(); setSelectedIndex(index); }}
                  class={`w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedIndex === index
                      ? "border-white ring-2 ring-white/50"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${productName} - miniatura ${index + 1}`}
                    class="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
