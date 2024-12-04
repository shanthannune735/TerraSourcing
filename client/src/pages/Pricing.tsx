import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 via-gray-50 to-white">
      <div className="container mx-auto px-4   max-w-[1280px]">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-center mb-12 text-blue-900">
          Terra Sourcing Pricing
        </h2>

        {/* Pricing Container */}
        <div className="flex flex-row justify-center gap-2 flex-wrap lg:flex-nowrap">

          {/* Registration Fee Section */}
          <div className="w-full max-w-[580px]">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-xl rounded-lg p-8 text-center relative transform hover:scale-105 transition-transform duration-500">
              <h3 className="text-3xl font-semibold mb-4">Registration Fee</h3>
              <p className="text-2xl font-bold mb-4"><span className="line-through mr-2 text-red-500 text-md">2000</span><span className='text-3xl'>₹500</span> ($10)</p>
              <p className="text-lg mb-6">
                To access our services, registration is required. By registering, you'll receive 3 months:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-left mx-auto max-w-md">
                <li>Free access to webinars</li>
                <li>Industry insights newsletters</li>
                <li>Comprehensive market insights</li>
                <li>Exclusive training sessions</li>
              </ul>
              <button className="bg-white text-blue-600 py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300 font-semibold">
                Register Now
              </button>
              <div className="absolute inset-0 border-4 border-white rounded-lg pointer-events-none"></div>
            </div>
          </div>

          {/* Pricing Plans Section */}
          <div className="w-full flex flex-row flex-wrap gap-2 justify-center">
            {[
              {
                title: 'International Lead',
                price: '₹1000 ($20)',
                description: 'Get a fully verified international lead for your business.',
              },
              {
                title: 'Lead Verification',
                price: '₹1000 ($20)',
                description: 'Comprehensive verification of a lead for reliability and security.',
              },
              {
                title: '2 Business Reports',
                price: '₹500 ($10)',
                description: 'Detailed reports on a business, covering market insights and more.',
              },
              {
                title: "1 Business Report",
                price: "₹300 ($7)",
                description: 'Detailed report on a business, covering market insights and more.'
              }
            ].map((plan, index) => (
              <div
                key={index}
                className="max-w-[580px] gap-1 bg-white shadow-lg rounded-xl p-4 hover:shadow-2xl transform hover:scale-105 transition duration-500 flex flex-row justify-center items-center text-center w-full"
              >
                <h3 className="text-xl font-semibold text-gray-900">{plan.title}</h3>
                <p className="text-gray-700">{plan.description}</p>
                <p className="text-2xl font-bold text-blue-600">{plan.price}</p>
                <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition duration-300">
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-700 mb-4">
            Take your business global with our trusted services.
          </p>
          <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold">
            Contact Us for More Details
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
