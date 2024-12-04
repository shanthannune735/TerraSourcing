import { useEffect, useState } from "react";
import { LuBuilding } from "react-icons/lu"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { RootState } from "../../store/store";
import { useDispatch } from "react-redux";
import { UPDATE_EXPORTER_COMPANY_DETAILS } from "../../store/contants";
import DatePicker from "react-datepicker";

export default function Company(){

  const ExporterDetails = useSelector((state: RootState) => state.exporter.companyDetails)

  const dispatch = useDispatch()

  const [isUpdated, setIsUpdated] = useState(false)

  const [inputData, setInputData] = useState({
    company: ExporterDetails.company,
    address: ExporterDetails.address,
    website: ExporterDetails.website,
    dateOfIncorporation: ExporterDetails.dateOfIncorporation
  });

  const navigate = useNavigate()

  function handleNext(e: React.FormEvent){
    e.preventDefault()
    dispatch({ type: UPDATE_EXPORTER_COMPANY_DETAILS, payload: { companyDetails: { ...inputData }} })
    setIsUpdated(true)
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setInputData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  useEffect(() => {
    if (isUpdated) {
      if(inputData.address == "" || inputData.company == "" || inputData.dateOfIncorporation == null || inputData.website == ""){
        alert("Please fill all the required details.")
      } else {
        navigate("/exporter/registration?step=license-details")
      }
    }
    setIsUpdated(false)
  }, [isUpdated, navigate, inputData])

  useEffect(() => {
    if (ExporterDetails) {
      setInputData({
        company: ExporterDetails.company,
        address: ExporterDetails.address,
        website: ExporterDetails.website,
        dateOfIncorporation: ExporterDetails.dateOfIncorporation
      });
    }
  }, [ExporterDetails]);

  return(
    <form className="flex flex-col gap-4 lg:gap-2 items-center justify-center mx-auto my-10 mb-20  shadow-md p-10 bg-white rounded-2xl max-w-[600px] w-full">
        <h1 className="text-2xl font-bold flex flex-row items-center gap-2"><LuBuilding /> Company Details</h1>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-1 mb-4 lg:mb-0">
            <label className="font-bold text-sm">Company Name*</label>
            <input type="text" name="company" onChange={handleChange} value={inputData.company} className="border p-2 border-gray-300 rounded text-md" placeholder="Enter your company name"></input>
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-bold text-md">Date of Incorporation*</label>
            <DatePicker className='w-full rounded border-gray-300' selected={ inputData.dateOfIncorporation } dateFormat="dd/MM/yyyy" placeholderText='Select date' onChange={(date) => setInputData((prev) => ({...prev, dateOfIncorporation: date}))} />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-bold text-sm">Address*</label>
            <textarea name="address" onChange={handleChange} value={inputData.address} className="border p-2 border-gray-300 rounded text-md" placeholder="Enter your address"></textarea>
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-bold text-sm">Website*</label>
            <input name="website" onChange={handleChange} value={inputData.website} type="text" className="border p-2 border-gray-300 rounded text-md" placeholder="Enter your website URL"></input>
          </div>
        </div>
        <button onClick={handleNext} className="bg-primary py-2 text-white rounded-md w-full mt-4">Next</button>
    </form>
  )
}
