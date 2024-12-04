import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
// import { FaAngleRight } from 'react-icons/fa6';

interface Slide {
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    title: 'Verify Your Leads in Real-Time from Trusted Sources',
    description: 'Leverage Facebook, Google, and other reliable platforms to ensure your leads are authentic and relevant.',
  },
  {
    title: '4 Levels of Verification for Ultimate Assurance',
    description: 'From basic contact checks to government database validation, our four-tiered process ensures your leads are verified thoroughly.',
  },
  {
    title: "Access a Sample Verification Report See the Results for Yourself!",
    description: 'Download a comprehensive sample report to understand how our multi-level verification process works and the insights it provides.',
  },
  {
    title: "Maximize Your Sales Potential with Verified Leads",
    description: 'Focus your efforts on leads that are ready to convert, saving time and increasing your export business profitability.',
  },
  // Add more slides here
];

const TextSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[480px] overflow-hidden text-white flex items-center justify-center">
      <div className="absolute inset-0 bg-[url('/verification-banner-2.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-50" /> {/* Dark overlay */}
        <div className="absolute inset-0 backdrop-blur-sm" /> {/* Blur effect */}
      </div>
      <div
        className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 flex items-center justify-center px-4">
            <div className="text-center">
              <h1 className="text-2xl mx-auto md:text-3xl lg:text-5xl font-sf-bold mb-4 max-w-[800px] leading-tight">{slide.title}</h1>
              <p className="text-lg mb-8">{slide.description}</p>
              {/* Uncomment to show the button */}
              {/* <div className="flex justify-center items-center h-full">
                <button className="bg-blue-500 text-white px-6 py-3 rounded-full flex flex-row gap-2 items-center">
                  <p>Get Started</p>
                  <FaAngleRight />
                </button>
              </div> */}
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

export default TextSlider;
