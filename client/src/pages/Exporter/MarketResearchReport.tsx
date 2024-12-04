import DownloadReport from "../../components/DownloadBusinessReport";
import TextSlider from "../../components/TextSliderMarketResearch";
import { FaGlobe, FaShieldAlt, FaChartLine } from 'react-icons/fa';

export default function MarketResearchReport(){

  return (
    <div>
      <TextSlider />
      <section className="bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-primary mb-8">Discover Detailed Market Insights</h2>
        <p className="text-lg text-gray-600 mb-16">
          Expanding your business into new international markets requires more than just a solid product—it requires deep understanding of the market dynamics, potential challenges, and opportunities. Terra Sourcing’s Market Research Reports are designed to provide exporters with comprehensive insights into their target countries.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <FaGlobe className="text-4xl text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Country Details</h3>
            <p className="text-gray-600">
              Learn about the economic, political, and cultural factors that could impact your business operations in the target country.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <FaShieldAlt className="text-4xl text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Market Challenges</h3>
            <p className="text-gray-600">
              Identify the key challenges that exporters face in your chosen market, including regulatory hurdles, competition, and logistical issues.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <FaChartLine className="text-4xl text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Product Information</h3>
            <p className="text-gray-600">
              Get product-specific insights, including demand trends, consumer preferences, and competitive landscape in the target market.
            </p>
          </div>
        </div>
      </div>
      </section>
      <DownloadReport />
    </div>
  )
}
