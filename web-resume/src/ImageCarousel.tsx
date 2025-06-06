import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ImageCarouselProps {
  images: string[];
  onFullscreenChange?: (isOpen: boolean) => void;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, onFullscreenChange }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [highlightIndex, setHighlightIndex] = useState(0);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const [playing, setPlaying] = useState(true); // NEW

  // Auto-rotate highlight
  useEffect(() => {
    if (!playing) return;

    const interval = setInterval(() => {
      setHighlightIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [playing, images.length]); // Include playing in deps

  const togglePlaying = () => setPlaying((prev) => !prev);

  // Scroll highlighted thumbnail into view
  useEffect(() => {
    const current = imageRefs.current[highlightIndex];
    if (current) {
      current.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [highlightIndex]);

  useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedIndex === null) return;

    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
    if (e.key === "Escape") close();
  };

  window.addEventListener("keydown", handleKeyDown);
  return () => window.removeEventListener("keydown", handleKeyDown);
}, [selectedIndex]);

useEffect(() => {
  imageRefs.current = [];
}, [images]);


  const openImage = (i: number) => {
    setSelectedIndex(i);
    onFullscreenChange?.(true);
  };

  const close = () => {
    setSelectedIndex(null);
    onFullscreenChange?.(false);
  };
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
  ref={(el) => (imageRefs.current[i] = el)}
  onClick={() => openImage(i)}
  onKeyDown={(e) => e.key === "Enter" && setSelectedIndex(i)}
  role="button"
  tabIndex={0}
  alt={`thumb-${i}`}
  className={`h-[160px] rounded cursor-pointer object-cover transition-all duration-300 ${
    highlightIndex === i
      ? "w-[270px] ring-4 ring-pink-500 scale-105"
      : "w-[90px] opacity-80"
  }`}
/>
        ))}
      </div>

      <div className="flex justify-end px-4 py-2">
        <button
          onClick={togglePlaying}
          className="px-4 py-1 bg-pink-500 text-white rounded hover:bg-pink-600 transition"
        >
          {playing ? "Pause" : "Start"}
        </button>
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
