import React, { useState } from 'react';

const faqData = [
  {
    question: "What are the benefits of connecting with genuine exporters on Terra Sourcing?",
    answer: "Terra Sourcing allows importers to connect with validated and genuine exporters who offer the best quality products, ensuring secure and trustworthy trade relationships."
  },
  {
    question: "How does Terra Sourcing support virtual negotiations with exporters?",
    answer: "Terra Sourcing provides convenient virtual meeting support that aligns with your time zones, making the negotiation process smooth and efficient."
  },
  {
    question: "What type of export training does Terra Sourcing offer?",
    answer: "Terra Sourcing offers specialized export training designed to help businesses understand the intricacies of international trade and enhance their export capabilities."
  },
  {
    question: "How can testing agencies benefit from using Terra Sourcing?",
    answer: "Testing agencies can effortlessly receive genuine leads through Terra Sourcing's comprehensive platform, which connects them with verified clients looking for reliable testing services."
  },
  {
    question: "In which countries and regions does Terra Sourcing operate?",
    answer: "Terra Sourcing operates in over 90 countries and regions, providing a global platform for importers and exporters to connect and do business securely."
  }
];

const FaqSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-center mb-8" style={{ color: '#0073E6' }}>
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            <button
              onClick={() => toggleFaq(index)}
              className="w-full text-left flex justify-between items-center text-lg font-medium text-gray-900"
            >
              <span>{faq.question}</span>
              <span className="ml-4">
                {activeIndex === index ? '-' : '+'}
              </span>
            </button>
            {activeIndex === index && (
              <p className="mt-2 text-gray-600">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
