import React, { useRef, useEffect } from 'react';

interface Review {
  name: string;
  rating: number;
  comment: string;
}

const reviews: Review[] = [
  { name: "Vasu Deva", rating: 5, comment: "Terra Sourcing has revolutionized our import process. The platform is incredibly reliable and has connected us with genuine exporters." },
  { name: "Sunil", rating: 4, comment: "The negotiation support was a game-changer. We were able to schedule meetings conveniently and secure great deals." },
  { name: "Divesh", rating: 5, comment: "The platform's export training helped us understand the market better and expand our business globally." },
  { name: "Anil Kumar", rating: 5, comment: "I was amazed by the quality of service and the attention to detail. Terra Sourcing truly cares about their clients." },
  { name: "Dharma Teja", rating: 4, comment: "The Duty Script service was extremely helpful, and I managed to save a lot on export duties." },
];

const ReviewSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollRef.current) {
        const cardWidth = scrollRef.current.querySelector<HTMLDivElement>('.review-card')?.offsetWidth || 0;
        const clientWidth = scrollRef.current.clientWidth;
        const maxScroll = scrollRef.current.scrollWidth - clientWidth;

        if (scrollRef.current.scrollLeft >= maxScroll) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollTo({
            left: scrollRef.current.scrollLeft + cardWidth,
            behavior: 'smooth'
          });
        }
      }
    }, 5000);

    return () => clearInterval(scrollInterval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-16 bg-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-14 text-gray-800">
          What Our Clients Say
        </h2>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-4 pb-10 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollBehavior: 'smooth' }}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="mt-2 mx-2 flex-shrink-0 w-[280px] sm:w-96 bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-500 ease-in-out transform hover:scale-105 review-card snap-center"
            >
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#0073E6] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0073E6]">{review.name}</h3>
                    <div className="flex mt-1">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                </div>
                <blockquote className="text-gray-700 text-lg mb-4">"{review.comment}"</blockquote>
                <div className="flex justify-end">
                  <svg className="w-8 h-8 text-[#0073E6] opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
