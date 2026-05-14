import React, { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
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

  useEffect(() => {
    if (selectedIndex === null) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [selectedIndex]);

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

      {selectedIndex !== null && createPortal(
        <div className="fixed inset-0 z-[220]">
          <button
            type="button"
            aria-label="Close fullscreen image viewer"
            onClick={close}
            className="absolute inset-0 h-full w-full bg-slate-950/75 backdrop-blur-md"
          />

          <div className="relative z-10 flex h-full w-full items-center justify-center px-4 py-6 sm:px-10">
            <div className="relative flex w-full max-w-6xl items-center justify-center">
              <button
                onClick={prev}
                className="absolute left-1 top-1/2 z-[210] -translate-y-1/2 rounded-full border border-white/30 bg-black/40 p-2 text-white shadow-lg backdrop-blur transition hover:bg-black/65 sm:left-3"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>

              <div className="relative overflow-hidden rounded-xl border border-white/20 bg-black/30 p-2 shadow-2xl backdrop-blur-sm">
                <img
                  src={images[selectedIndex]}
                  alt={`full-${selectedIndex}`}
                  className="h-[min(82vh,760px)] w-[min(88vw,1100px)] rounded-lg object-contain"
                />
                <button
                  onClick={close}
                  className="absolute right-3 top-3 rounded-full border border-white/30 bg-black/45 p-1.5 text-white shadow backdrop-blur transition hover:bg-black/70"
                  aria-label="Close image"
                >
                  <X size={18} />
                </button>
              </div>

              <button
                onClick={next}
                className="absolute right-1 top-1/2 z-[210] -translate-y-1/2 rounded-full border border-white/30 bg-black/40 p-2 text-white shadow-lg backdrop-blur transition hover:bg-black/65 sm:right-3"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default ImageCarousel;
