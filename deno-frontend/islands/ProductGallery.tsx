import { useState } from "preact/hooks";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div class="space-y-4">
      {/* Main Image */}
      <div class="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
        <div class="h-96 bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
          <img
            src={images[selectedIndex]}
            alt={`${productName} - zdjecie ${selectedIndex + 1}`}
            class="max-h-full max-w-full object-contain"
          />
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
  );
}
