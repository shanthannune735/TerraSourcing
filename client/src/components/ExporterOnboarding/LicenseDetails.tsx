import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { RootState } from "../../store/store"
import { useDispatch } from "react-redux"
import { UPDATE_EXPORTER_LICENSE_DETAILS } from "../../store/contants"

export default function LicenseDetails(){

  const ExporterDetails = useSelector((state: RootState) => state.exporter.licenseDetails)

  const dispatch = useDispatch()

  const [isUpdated, setIsUpdated] = useState(false)

  const [inputData, setInputData] = useState({
    iecCode: ExporterDetails.iecCode,
    erNumber: ExporterDetails.erNumber,
    ftLicense: ExporterDetails.ftLicense,
    vatOrGst: ExporterDetails.vatOrGst
  });

  const navigate = useNavigate()

  function handleNext(e: React.FormEvent){
    e.preventDefault()
    dispatch({ type: UPDATE_EXPORTER_LICENSE_DETAILS, payload: { licenseDetails: { ...inputData }} })
    setIsUpdated(true)
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setInputData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  useEffect(() => {
    if (isUpdated) {
      if(inputData.iecCode == "" || inputData.vatOrGst == ""){
        alert("Please fill all the required details.")
      } else {
        navigate("/exporter/registration?step=product-details")
      }
    }
    setIsUpdated(false)
  }, [isUpdated, navigate, inputData])

  useEffect(() => {
    if (ExporterDetails) {
      setInputData({
        iecCode: ExporterDetails.iecCode,
        erNumber: ExporterDetails.erNumber,
        ftLicense: ExporterDetails.ftLicense,
        vatOrGst: ExporterDetails.vatOrGst
      });
    }
  }, [ExporterDetails]);

  return(
    <form className="flex flex-col gap-4 lg:gap-2 items-center justify-center mx-auto my-10 mb-20  shadow-md p-10 bg-white rounded-2xl max-w-[600px] w-full">
        <h1 className="text-2xl font-bold flex flex-row items-center gap-2 mb-4">License Details</h1>
        <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-1 mb-4 lg:mb-0">
            <label className="font-bold text-sm">IEC Code*</label>
            <input type="text" onChange={handleChange} value={inputData.iecCode} name="iecCode" className="border p-2 border-gray-300 rounded text-md min-w-[320px]" placeholder="Enter Import Export Code"></input>
          </div>
          <div className="flex flex-col gap-1 mb-4 lg:mb-0">
            <label className="font-bold text-sm">ER Number</label>
            <input type="text" onChange={handleChange} value={inputData.erNumber} name="erNumber" className="border p-2 border-gray-300 rounded text-md min-w-[320px]" placeholder="Enter Exporter Registration Number"></input>
          </div>
          <div className="flex flex-col gap-1 mb-4 lg:mb-0">
            <label className="font-bold text-sm">FTL</label>
            <input type="text" onChange={handleChange} value={inputData.ftLicense} name="ftLicense" className="border p-2 border-gray-300 rounded text-md min-w-[320px]" placeholder="Enter Foreign Trade Licence"></input>
          </div>
          <div className="flex flex-col gap-1 mb-4 lg:mb-0">
            <label className="font-bold text-sm">VAT or GST*</label>
            <input type="text" onChange={handleChange} value={inputData.vatOrGst} name="vatOrGst" className="border p-2 border-gray-300 rounded text-md min-w-[320px]" placeholder="Enter VAT or GST number"></input>
          </div>
        </div>
        <button onClick={handleNext} className="bg-primary py-2 text-white rounded-md w-full mt-4">Next</button>
    </form>
  )
}
