import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import { FaAngleRight } from "react-icons/fa6";

interface Slide {
  image: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    image: '/home-banner-1.jpg',
    title: 'CONNECTING TRUSTED EXPORTERS AND IMPORTERS WORLDWIDE',
    description: 'Only validated leads to ensure genuine trade connections.',
  },
  // Add more slides here
];

const VerificationPageSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[480px] overflow-hidden">
      <div
        className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            <img
              src={slide.image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-950 bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-sf-bold mb-4 max-w-[800px] leading-tight">{slide.title}</h1>
              <p className="text-lg mb-8">{slide.description}</p>
              <button className="bg-blue-500 text-white px-6 py-3 rounded-full flex flex-row gap-2 items-center">
                <p>Get Started</p>
                <FaAngleRight />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-5 w-full flex justify-center">
        {slides.map((_, index) => (
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

export default VerificationPageSection;
