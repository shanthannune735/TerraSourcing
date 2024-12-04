import { FaChartLine, FaFileDownload, FaArrowRight } from 'react-icons/fa';

const DownloadReport = () => {
  return (
    <div className="bg-secondary py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Unlock Valuable Market Insights</h2>
          <div className="flex items-center mb-8 justify-center">
            <FaChartLine className="text-[#0073E6] text-3xl mr-4" />
            <p className="text-lg text-gray-600">
              Verify leads and access exclusive resources to grow your export business.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">What You'll Get:</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaArrowRight className="text-[#0073E6] mr-2" />
                <span>Comprehensive market analysis</span>
              </li>
              <li className="flex items-center">
                <FaArrowRight className="text-[#0073E6] mr-2" />
                <span>Buyer trends and preferences</span>
              </li>
              <li className="flex items-center">
                <FaArrowRight className="text-[#0073E6] mr-2" />
                <span>Export opportunity insights</span>
              </li>
            </ul>
          </div>
          <div className="flex justify-center">

            <a  href="/Market_Research_Report.pdf" download
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-[#0073E6] hover:bg-[#005bb8] transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              <FaFileDownload className="mr-3 text-xl" />
              Download Free Report
            </a>
          </div>
        </div>
        <div className="bg-gray-50 px-8 py-4 border-t border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            Register now with Terra Sourcing to start verifying your leads and discover insights
            that can help you connect with the right buyers and grow your export business!
          </p>
        </div>
      </div>
    </div>
  );
};

export default DownloadReport;
