import { useEffect, useState } from 'react';
import { FaHandshake, FaRegClock, FaTags } from 'react-icons/fa';
import "./styles.css"

const slides = [
  {
    icon: <FaHandshake className="text-3xl text-white" />,
    title: "Genuine Exporters",
    description: "Connect with valid and genuine exporters offering the best quality.",
  },
  {
    icon: <FaRegClock className="text-3xl text-white" />,
    title: "Negotiation Support",
    description: "Convenient virtual meeting support in your time zones.",
  },
  {
    icon: <FaTags className="text-3xl text-white" />,
    title: "Duty Scrips",
    description: "Assistance to buy export duty scrips from exporters at the best rates.",
  },
];

export default function ReviewSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-3xl mx-auto hidden lg:flex">
      <div className="relative overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full p-6 flex items-center gap-4 flex-wrap"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full shadow-sm bg-white/10">
                {slide.icon}
              </div>
              <div className="flex-1">
                <p className="text-lg font-semibold text-white">{slide.title}</p>
                <p className="text-sm text-white mt-1">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Slide indicators */}
        {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-2.5 h-2.5 rounded-full ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'} transition-all duration-300`}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
}
