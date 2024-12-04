import { useLocation } from "react-router-dom";
import BasicInfo from "../../components/ExporterOnboarding/Info";
import Company from "../../components/ExporterOnboarding/Company";
import AdditionalDetails from "../../components/ExporterOnboarding/AdditionalDetails";
import LicenseDetails from "../../components/ExporterOnboarding/LicenseDetails";
import ProductDetails from "../../components/ExporterOnboarding/ProductDetails";


export default function ExporterRegistration(){
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const step = queryParams.get('step')
  return(
    <div className="flex flex-row items-center justify-between flex-wrap lg:flex-nowrap bg-secondary">
      {step == "info" && <BasicInfo /> }
      {step == "company-details" && <Company />}
      {step == "license-details" && <LicenseDetails />}
      {step == "product-details" && <ProductDetails />}
      {step == "additional-details" && <AdditionalDetails />  }
      {/* <div className="">
        {step == "info" && <img className="lg:h-screen w-full lg:max-w-[720px] md:w-full" src="/supplier.jpg"></img>}
        {step == "company-details" && <img className="lg:h-screen w-full lg:max-w-[720px] md:w-full" src="/supplier2.jpg"></img>}
        {step == "additional-details" && <img className="lg:h-screen w-full lg:max-w-[720px] md:w-full" src="/supplier3.jpg"></img>}
      </div> */}
    </div>
  )
}
