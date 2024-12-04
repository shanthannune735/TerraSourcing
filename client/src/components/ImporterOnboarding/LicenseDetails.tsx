import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { RootState } from "../../store/store"
import { UPDATE_LICENSEDETAILS } from "../../store/contants"
import { useDispatch } from "react-redux"

export default function LicenseDetails(){

  const ImporterDetails = useSelector((state: RootState) => state.importer.licenseDetails)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [isUpdated, setIsUpdated] = useState(false)

  function handleNext(e: React.FormEvent) {
    e.preventDefault()
    dispatch({ type: UPDATE_LICENSEDETAILS, payload: { licenseDetails: { ...inputData } } })
    setIsUpdated(true)
  }

  const [inputData, setInputData] = useState({
    taxNumber: ImporterDetails.taxNumber,
    licenseNumber: ImporterDetails.licenseNumber,
    iecCode: ImporterDetails.iecCode,
    ecgc: ImporterDetails.ecgc,
    blNumber: ImporterDetails.blNumber
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>){
    setInputData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  useEffect(() => {
    if (isUpdated) {
      if(inputData.licenseNumber != "" && inputData.taxNumber != ""){
        navigate("/importer/registration?step=additional")
      } else {
        alert("Please fill all the fields");
        setIsUpdated(false)
      }
    }
    setIsUpdated(false)
  }, [isUpdated, navigate, inputData])

  useEffect(() => {
    if (ImporterDetails) {
      setInputData({
        taxNumber: ImporterDetails.taxNumber,
        licenseNumber: ImporterDetails.licenseNumber,
        iecCode: ImporterDetails.iecCode,
        ecgc: ImporterDetails.ecgc,
        blNumber: ImporterDetails.blNumber
      });
    }
  }, [ImporterDetails]);

  return(
    <form className="flex flex-col gap-2 m-4 min-w-[300px]">
        <div className="flex flex-col justify-center items-center gap-1">
          <p className="text-xl font-bold">Enter License Details</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="font-bold text-md">Tax Number*</label>
            <input type="text" name="taxNumber" onChange={handleChange} value={inputData.taxNumber} className="border p-2 border-gray-300 rounded text-md lg:min-w-[420px]" placeholder="Enter tax number"></input>
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-bold text-md">License Number*</label>
            <input type="text" name="licenseNumber" onChange={handleChange} value={inputData.licenseNumber} className="border p-2 border-gray-300 rounded text-md" placeholder="Enter your official license number"></input>
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-bold text-md">IEC Code</label>
            <input type="text" name="iecCode" onChange={handleChange} value={inputData.iecCode} className="border p-2 border-gray-300 rounded text-md" placeholder="Enter your IEC code"></input>
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-bold text-md">ECGC Number</label>
            <input type="text" name="ecgc" onChange={handleChange} value={inputData.ecgc} className="border p-2 border-gray-300 rounded text-md" placeholder="Enter ECGE number"></input>
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-bold text-md">BL Number</label>
            <input type="text" name="blNumber" onChange={handleChange} value={inputData.blNumber} className="border p-2 border-gray-300 rounded text-md" placeholder="Enter BL Number"></input>
            {/* <input type="file" className="border p-2 border-gray-300 rounded text-md"></input> */}
          </div>
        </div>
        <button onClick={handleNext} className="bg-primary py-2 text-white rounded-md">Next</button>
      </form>
  )
}
