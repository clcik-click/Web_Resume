import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const close = () => setSelectedIndex(null);
  const prev = () =>
    setSelectedIndex((prev) =>
      prev !== null ? (prev - 1 + images.length) % images.length : null
    );
  const next = () =>
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % images.length : null
    );

  return (
    <div>
      {/* Thumbnail Row */}
      <div className="flex gap-2 overflow-x-auto p-2">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            onClick={() => setSelectedIndex(i)}
            className="w-[90px] h-[160px] object-cover rounded cursor-pointer hover:opacity-80 transition"
            alt={`thumb-${i}`}
          />
        ))}
      </div>

      {/* Fullscreen Viewer */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button
            onClick={close}
            className="absolute top-4 right-4 text-white bg-black bg-opacity-50 p-2 rounded hover:bg-opacity-80"
          >
            <X />
          </button>

          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded hover:bg-opacity-80"
          >
            <ChevronLeft size={32} />
          </button>

          <div className="transition-all duration-300 ease-in-out max-w-[90%] max-h-[90%] flex items-center justify-center">
            <img
              src={images[selectedIndex]}
              alt={`full-${selectedIndex}`}
              className="w-auto h-auto max-h-[80vh] max-w-[80vw] rounded shadow-lg"
            />

          </div>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded hover:bg-opacity-80"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
