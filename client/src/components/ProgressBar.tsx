import React, { useEffect, useRef, useState } from 'react';
import 'tailwindcss/tailwind.css';

interface ProgressBarProps {
  steps: string[];
  interval: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ steps, interval }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (progressBarRef.current) {
      observer.observe(progressBarRef.current);
    }

    return () => {
      if (progressBarRef.current) {
        observer.unobserve(progressBarRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep < steps.length - 1 ? prevStep + 1 : prevStep));
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible, steps.length, interval]);

  return (
    <div ref={progressBarRef}>
      <div className="flex justify-between items-center relative w-full">
        {steps.map((label, index) => (
          <div key={index} className="flex flex-col items-center relative flex-1 max-w-xl mx-auto">
            <div className="flex items-center w-full">
              <div
                className={`rounded-full h-12 w-12 border-2 ${
                  index <= currentStep ? 'border-blue-500' : 'border-gray-300'
                } flex items-center justify-center transition-all duration-500 ease-in-out transform ${
                  index <= currentStep ? 'scale-110' : ''
                } shadow-md z-10 bg-white`}
              >
                {index < currentStep ? (
                  <span className="text-blue-500 text-xl font-bold">&#10003;</span>
                ) : (
                  <span className={`text-${index === currentStep ? 'blue-500' : 'gray-500'} font-bold`}>{index + 1}</span>
                )}
              </div>
              {index < steps.length - 1 && (
                <div className="h-0.5 bg-gray-300 flex-grow ml-2">
                  <div
                    className="h-full bg-blue-500 transition-all duration-500 ease-in-out"
                    style={{ width: index < currentStep ? '100%' : '0%' }}
                  ></div>
                </div>
              )}
            </div>
            <div className="absolute -left-[26px] -bottom-8 transform text-center text-sm font-medium text-gray-700 whitespace-nowrap hidden md:flex">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
