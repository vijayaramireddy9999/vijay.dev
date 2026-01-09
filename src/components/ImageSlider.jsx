import { useEffect, useState } from "react";

function ImageSlider({ images, interval = 3000 }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-xl border border-white/10">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`slide-${index}`}
          className={`
            absolute inset-0 w-full h-full object-cover
            transition-opacity duration-700
            ${index === current ? "opacity-100" : "opacity-0"}
          `}
        />
      ))}
    </div>
  );
}

export default ImageSlider;
