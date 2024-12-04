import React from 'react';
import { Link } from "react-router-dom";

const Webinar: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 via-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-[1280px]">
        {/* Header Section */}
        <h1 className="text-3xl lg:text-4xl font-extrabold text-center mb-6 text-blue-900">
          Export Success Mastery: Unlocking Global Potential for Indian Exporters
        </h1>
        <h2 className="text-xl lg:text-2xl font-semibold text-center text-blue-800 mb-10">
          Join Terra Sourcing and TN Apex for an Exclusive Webinar on Mastering Export Success
        </h2>

        {/* Introduction Paragraph */}
        <div className="text-lg text-gray-700 text-center mb-8">
          <p>
            Discover the strategies, tools, and insights needed to expand your export horizons with Export Success Mastery,
            a webinar designed to empower Indian exporters. Hosted by Terra Sourcing in collaboration with TN Apex, this event brings together top industry experts to discuss actionable steps for navigating global markets, leveraging digital tools, and boosting export efficiency.
          </p>
        </div>

        {/* What You’ll Gain */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-semibold text-blue-900 mb-6">What You’ll Gain:</h3>
          <ul className="list-disc list-inside space-y-3 mx-auto max-w-2xl text-lg text-gray-700">
            <li>Insights into new export opportunities and challenges.</li>
            <li>Strategies for effective market penetration and lead generation.</li>
            <li>A roadmap for leveraging Terra Sourcing's tools and resources for success.</li>
            <li>The chance to network with industry leaders and peers.</li>
          </ul>
        </div>

        {/* Event Details Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">Event Details:</h3>
          <p className="text-xl text-gray-700 mb-2"><strong>Date:</strong> [Insert Date]</p>
          <p className="text-xl text-gray-700 mb-2"><strong>Time:</strong> [Insert Time]</p>
          <p className="text-xl text-gray-700 mb-6"><strong>Duration:</strong> 1 hour</p>
          <p className="text-lg text-gray-700 mb-4"><strong>Format:</strong> Online Webinar (Zoom/Google Meet link to be shared upon registration)</p>
        </div>

        {/* Speakers Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-blue-900 mb-6">Speakers Include:</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Speaker 1 */}
            <div className="max-w-xs">
              <h4 className="text-lg font-semibold text-blue-900 mb-2">[Name 1]</h4>
              <p className="text-gray-700">Industry Expert on Export Strategies</p>
            </div>
            {/* Speaker 2 */}
            <div className="max-w-xs">
              <h4 className="text-lg font-semibold text-blue-900 mb-2">[Name 2]</h4>
              <p className="text-gray-700">TN Apex Representative</p>
            </div>
            {/* Speaker 3 */}
            <div className="max-w-xs">
              <h4 className="text-lg font-semibold text-blue-900 mb-2">[Name 3]</h4>
              <p className="text-gray-700">Terra Sourcing Leadership</p>
            </div>
          </div>
        </div>

        {/* Registration CTA Section */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-semibold text-blue-900 mb-6">Register Today for Free</h3>
          <p className="text-lg text-gray-700 mb-4">Complete the form below to secure your spot in this insightful webinar. Spaces are limited, so act now!</p>
          {/* <button className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold">
            Register Now
          </button> */}
          <Link to="https://terrasourcing.com/exporter-form" className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold" >Register Now</Link>
        </div>

        {/* Consent Note */}
        <div className="text-center text-sm text-gray-500">
          <p>
            By registering, you consent to receive communications from Terra Sourcing and TN Apex about this and future initiatives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Webinar;
