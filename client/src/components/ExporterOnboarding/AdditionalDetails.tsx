import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useDispatch } from "react-redux";
import { RESET_EXPORTER_DETAILS, UPDATE_EXPORTER_ADDITIONAL_INFO } from "../../store/contants";
import { exporterRegistration } from "../../services/exporterServices";
import { useNavigate } from "react-router-dom";

class RegistrationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "RegistrationError";
  }
}

export default function AdditionalDetails(){

  const navigate = useNavigate()

  const ExporterDetails = useSelector((state: RootState) => state.exporter)
  const dispatch = useDispatch()

  const [inputData, setInputData] = useState({
    reportProduct: ExporterDetails.additionalDetails.reportProduct,
    reportCountry: ExporterDetails.additionalDetails.reportCountry,
    socialMediaLinks: {
      linkedin: ExporterDetails.additionalDetails.socialMediaLinks.linkedin,
      facebook: ExporterDetails.additionalDetails.socialMediaLinks.facebook,
      twitter: ExporterDetails.additionalDetails.socialMediaLinks.twitter,
      instagram: ExporterDetails.additionalDetails.socialMediaLinks.instagram,
    }
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setInputData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSocialMediaChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>){
    setInputData((prev) => ({ ...prev, socialMediaLinks: {...prev.socialMediaLinks, [e.target.name]: e.target.value }}))
  }

  async function handleSubmit(e: React.FormEvent){

    try {
      e.preventDefault()

      const updatedDetails = {
        ...ExporterDetails,
        additionalDetails: {
          ...inputData
        }
      }

      dispatch({ type: UPDATE_EXPORTER_ADDITIONAL_INFO, payload: { additionalDetails: { ...inputData } }})

      const response = await exporterRegistration(updatedDetails)

      if(response.id){
        navigate("/exporter/registration-successful")
        dispatch({ type: RESET_EXPORTER_DETAILS })
      } else {
        alert("Registration failed! Please try again after sometime.")
      }
    } catch(error){
      if (error instanceof RegistrationError) {
        alert(error.message);
      } else {
        alert("An unexpected error occurred. Please try again sometime.");
      }
    }
  }

  return(
    <form className="flex flex-col gap-4 lg:gap-2 items-center justify-center mx-auto my-10 mb-20  shadow-md p-10 bg-white rounded-2xl max-w-[600px] w-full">
        <h1 className="text-2xl font-bold flex flex-row items-center gap-2 mb-4">Additional Information</h1>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-1 mb-4 lg:mb-0">
            <label className="font-bold text-sm">Which product would you like to receive a research report on?</label>
            <input type="text" name="reportProduct" onChange={handleChange} value={inputData.reportProduct} className="border p-2 border-gray-300 rounded text-md min-w-[320px]" placeholder="Enter product name"></input>
          </div>
          <div className="flex flex-col gap-1 mb-4 lg:mb-0">
            <label className="font-bold text-sm">Which country would you like to receive a research report on?</label>
            <input type="text" name="reportCountry" onChange={handleChange} value={inputData.reportCountry} className="border p-2 border-gray-300 rounded text-md min-w-[320px]" placeholder="Enter country name"></input>
          </div>
          <div className="flex flex-col gap-1 mb-4 lg:mb-0">
            <label className="font-bold text-sm">Enter LinkedIn Profile</label>
            <input type="text" name="linkedin" onChange={handleSocialMediaChange} value={inputData.socialMediaLinks.linkedin} className="border p-2 border-gray-300 rounded text-md min-w-[320px]" placeholder="Enter linkedin profile"></input>
          </div>
          <div className="flex flex-col gap-1 mb-4 lg:mb-0">
            <label className="font-bold text-sm">Enter Facebook Profile</label>
            <input type="text" name="facebook" onChange={handleSocialMediaChange} value={inputData.socialMediaLinks.facebook} className="border p-2 border-gray-300 rounded text-md min-w-[320px]" placeholder="Enter facebook profile"></input>
          </div>
        </div>
        <button onClick={handleSubmit} className="bg-primary py-2 text-white rounded-md w-full mt-4">Signup</button>
    </form>
  )
}
