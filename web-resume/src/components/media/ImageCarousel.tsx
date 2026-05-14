import React, { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ImageCarouselProps {
  images: string[];
  onFullscreenChange?: (isOpen: boolean) => void;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, onFullscreenChange }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [highlightIndex, setHighlightIndex] = useState(0);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!images.length) return;

    const interval = setInterval(() => {
      setHighlightIndex((prev) => (prev + 1) % images.length);
    }, 2800);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const current = imageRefs.current[highlightIndex];
    const row = rowRef.current;
    if (current && row) {
      const targetLeft = current.offsetLeft - row.clientWidth / 2 + current.clientWidth / 2;
      const maxLeft = row.scrollWidth - row.clientWidth;
      row.scrollTo({
        left: Math.max(0, Math.min(targetLeft, maxLeft)),
        behavior: "smooth",
      });
    }
  }, [highlightIndex]);

  const openImage = (i: number) => {
    setSelectedIndex(i);
    onFullscreenChange?.(true);
  };

  const close = useCallback(() => {
    setSelectedIndex(null);
    onFullscreenChange?.(false);
  }, [onFullscreenChange]);

  const prev = useCallback(() => {
    setSelectedIndex((prevIndex) =>
      prevIndex !== null ? (prevIndex - 1 + images.length) % images.length : null
    );
  }, [images.length]);

  const next = useCallback(() => {
    setSelectedIndex((prevIndex) =>
      prevIndex !== null ? (prevIndex + 1) % images.length : null
    );
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") close();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [close, next, prev, selectedIndex]);

  useEffect(() => {
    imageRefs.current = [];
  }, [images]);

  return (
    <div>
      <div ref={rowRef} className="flex max-w-full gap-3 overflow-x-auto px-1 py-2">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            ref={(el) => {
              imageRefs.current[i] = el;
            }}
            onClick={() => openImage(i)}
            onKeyDown={(e) => e.key === "Enter" && openImage(i)}
            role="button"
            tabIndex={0}
            alt={`thumb-${i}`}
            className={`h-[158px] cursor-pointer rounded-lg object-cover transition-all duration-500 ${
              highlightIndex === i
                ? "w-[220px] ring-2 ring-pink-400/70"
                : "w-[120px] opacity-75 hover:opacity-95"
            }`}
          />
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
          <button
            onClick={close}
            className="absolute right-4 top-4 rounded bg-black/50 p-2 text-white hover:bg-black/80"
          >
            <X />
          </button>

          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded bg-black/50 p-2 text-white hover:bg-black/80"
          >
            <ChevronLeft size={32} />
          </button>

          <div className="flex max-h-[90%] max-w-[90%] items-center justify-center transition-all duration-300 ease-in-out">
            <img
              src={images[selectedIndex]}
              alt={`full-${selectedIndex}`}
              className="h-auto max-h-[80vh] w-auto max-w-[80vw] rounded shadow-lg"
            />
          </div>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded bg-black/50 p-2 text-white hover:bg-black/80"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
