import { LuInfo } from "react-icons/lu";
import { LuBuilding } from "react-icons/lu";
import { AiOutlineProduct } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TbLicense } from "react-icons/tb";
import { MdMoreHoriz } from "react-icons/md";
import Info from "../../components/ImporterOnboarding/Info";
import CompanyDetails from "../../components/ImporterOnboarding/CompanyDetails";
import ProductDetails from "../../components/ImporterOnboarding/ProductDetails";
import LicenseDetails from "../../components/ImporterOnboarding/LicenseDetails";
import AdditionalDetails from "../../components/ImporterOnboarding/AdditionalDetails";
import { IoChevronBack } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import ReviewSlider from "../../components/ReviewSlider";
import { useEffect, useRef } from "react";

export default function ImporterRegistration(){
  const location = useLocation()
  const navigate = useNavigate()
  const queryParams = new URLSearchParams(location.search)
  const step = queryParams.get('step')
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  function handleBack(){
    navigate(-1)
  }

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [step]);

  return(

    <div className="my-10 lg:m-0 flex flex-row justify-between w-full min-h-screen">
      <div className="flex-col justify-center px-8 py-6 bg-gradient-to-b from-blue-700 to-blue-900 text-white hidden lg:flex w-1/4 min-h-screen fixed top-0 left-0">
        <ReviewSlider />
        <div className="flex flex-row justify-between mb-8">
          <Link
            to="/"
            className="flex flex-row items-center gap-2 border border-gray-400 w-fit px-3 py-2 rounded-full"
          >
            <GoHome className="text-xl" />
            <span className="text-lg font-medium">Home</span>
          </Link>
          <button
            onClick={handleBack}
            className="flex flex-row items-center gap-2 border border-gray-400 w-fit px-3 py-2 rounded-full"
          >
            <IoChevronBack className="text-xl" />
            <span className="text-lg font-medium">Back</span>
          </button>
        </div>

        <div className="space-y-6">
          <div
            // to="/importer/registration?step=company-details"
            className={`flex flex-row gap-4 items-center ${
              step !== "company-details" ? "text-gray-400" : "text-white"
            }`}
          >
            <div className="p-3 rounded-full bg-white/10">
              <LuBuilding
                className={`text-2xl ${
                  step === "company-details" && "text-white font-bold"
                }`}
              />
            </div>
            <div>
              <p className="text-lg font-medium">Company Details</p>
              <p className="text-sm">Enter your company information</p>
            </div>
          </div>

          <div
            // to="/importer/registration?step=info"
            className={`flex flex-row gap-4 items-center ${
              step !== "info" ? "text-gray-400" : "text-white"
            }`}
          >
            <div className="p-3 rounded-full bg-white/10">
              <LuInfo
                className={`text-2xl ${
                  step === "info" && "text-white font-bold"
                }`}
              />
            </div>
            <div>
              <p className="text-lg font-medium">Basic Information</p>
              <p className="text-sm">Provide Timezone, Language information</p>
            </div>
          </div>

          <div
            // to="/importer/registration?step=product-details"
            className={`flex flex-row gap-4 items-center ${
              step !== "product-details" ? "text-gray-400" : "text-white"
            }`}
          >
            <div className="p-3 rounded-full bg-white/10">
              <AiOutlineProduct
                className={`text-2xl ${
                  step === "product-details" && "text-white font-bold"
                }`}
              />
            </div>
            <div>
              <p className="text-lg font-medium">Product Details</p>
              <p className="text-sm">Provide your products information</p>
            </div>
          </div>

          <div
            // to="/importer/registration?step=license-details"
            className={`flex flex-row gap-4 items-center ${
              step !== "license-details" ? "text-gray-400" : "text-white"
            }`}
          >
            <div className="p-3 rounded-full bg-white/10">
              <TbLicense
                className={`text-2xl ${
                  step === "license-details" && "text-white font-bold"
                }`}
              />
            </div>
            <div>
              <p className="text-lg font-medium">License Details</p>
              <p className="text-sm">Enter your license information</p>
            </div>
          </div>

          <div
            // to="/importer/registration?step=additional"
            className={`flex flex-row gap-4 items-center ${
              step !== "additional" ? "text-gray-400" : "text-white"
            }`}
          >
            <div className="p-3 rounded-full bg-white/10">
              <MdMoreHoriz
                className={`text-2xl ${
                  step === "additional" && "text-white font-bold"
                }`}
              />
            </div>
            <div>
              <p className="text-lg font-medium">Additional Information</p>
              <p className="text-sm">Provide some more required information</p>
            </div>
          </div>
        </div>
      </div>

      <div ref={scrollContainerRef} className="scrollable-div-class flex items-center flex-col lg:flex-col-reverse lg:ml-[25%] lg:w-[75%] w-full mx-auto lg:justify-center scrollbar-hide">
        <div className="mb-2 lg:mb-10 lg:mt-8 flex lg:hidden flex-row gap-3 items-center justify-center max-w-[480px] mx-auto">
          <Link
            to="/importer/registration?step=company-details"
            className={`w-8 lg:w-14 h-2 rounded-full ${
              step === "company-details" ? "bg-blue-500" : "bg-gray-400"
            }`}
          ></Link>
          <Link
            to="/importer/registration?step=info"
            className={`w-8 lg:w-14 h-2 rounded-full ${
              step === "info" ? "bg-blue-500" : "bg-gray-400"
            }`}
          ></Link>
          <Link
            to="/importer/registration?step=product-details"
            className={`w-8 lg:w-14 h-2 rounded-full ${
              step === "product-details" ? "bg-blue-500" : "bg-gray-400"
            }`}
          ></Link>
          <Link
            to="/importer/registration?step=license-details"
            className={`w-8 lg:w-14 h-2 rounded-full ${
              step === "license-details" ? "bg-blue-500" : "bg-gray-400"
            }`}
          ></Link>
          <Link
            to="/importer/registration?step=additional"
            className={`w-8 lg:w-14 h-2 rounded-full ${
              step === "additional" ? "bg-blue-500" : "bg-gray-400"
            }`}
          ></Link>
        </div>

        <div className="lg:items-center w-full max-w-[480px] mx-auto">

          {step === "company-details" && <CompanyDetails />}
          {step === "info" && <Info />}
          {step === "product-details" && <ProductDetails />}
          {step === "license-details" && <LicenseDetails />}
          {step === "additional" && <AdditionalDetails />}
        </div>
      </div>
    </div>
  )
}
