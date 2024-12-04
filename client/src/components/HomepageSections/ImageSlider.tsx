// src/components/ImageSlider.tsx
import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

const images = [
  '/home-banner-1.jpg',
  '/supplier.jpg',
  // '/path/to/image3.png',
  // Add more image paths here
];

const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[480px] overflow-hidden">
      <div
        className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-blue-950 bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
        <h1 className="text-4xl font-bold mb-4">CONNECTING TRUSTED EXPORTERS AND IMPORTERS WORLDWIDE</h1>
        <p className="text-lg mb-8">Only validated leads to ensure genuine trade connections.</p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-full">Get Started</button>
      </div>

      <div className="absolute bottom-5 w-full flex justify-center">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full mx-2 ${
              index === currentIndex ? 'bg-primary' : 'border border-white'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
