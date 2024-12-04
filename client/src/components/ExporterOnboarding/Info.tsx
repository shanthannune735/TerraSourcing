import { Link, useNavigate } from "react-router-dom"
import { countryOptions } from "../../utils/constants"
import { useEffect, useState } from "react";
import { PhoneInput } from "react-international-phone";
import "./info.css"
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useDispatch } from "react-redux";
import { UPDATE_EXPORTER_BASIC_INFO } from "../../store/contants";
import TimeZones from "../TimeZones";

export default function BasicInfo(){

  const ExporterDetails = useSelector((state: RootState) => state.exporter.basicInformation)

  const dispatch = useDispatch()
  const [isUpdated, setIsUpdated] = useState(false);

  const [inputData, setInputData] = useState({
    firstName: ExporterDetails.firstName,
    lastName: ExporterDetails.lastName,
    email: ExporterDetails.email,
    password: ExporterDetails.password,
    country: ExporterDetails.country,
    timeZone: ExporterDetails.timeZone,
    phoneNumber: ExporterDetails.phoneNumber,
  });

  const navigate = useNavigate()

  function handleNext(e: React.FormEvent){
    e.preventDefault()
    dispatch({ type: UPDATE_EXPORTER_BASIC_INFO, payload: { basicInformation : { ...inputData }} })
    setIsUpdated(true)
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setInputData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  useEffect(() => {
    if (isUpdated) {
      if(inputData.firstName == "" || inputData.lastName == "" || inputData.country == "" || inputData.email == "" || inputData.password == "" || inputData.phoneNumber == "" ){
        alert("Please fill all the required details.")
      } else {
        navigate("/exporter/registration?step=company-details")
      }
    }
    setIsUpdated(false)
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUpdated, navigate, inputData])

  useEffect(() => {
    if (ExporterDetails) {
      setInputData({
        firstName: ExporterDetails.firstName,
        lastName: ExporterDetails.lastName,
        email: ExporterDetails.email,
        password: ExporterDetails.password,
        country: ExporterDetails.country,
        timeZone: ExporterDetails.timeZone,
        phoneNumber: ExporterDetails.phoneNumber,
      });
    }
  }, [ExporterDetails]);

  return(
    <form className="flex flex-col gap-4 lg:gap-2 items-center justify-center mx-auto my-10 mb-20  shadow-md p-10 bg-white rounded-2xl max-w-[600px] w-full">
        <h1 className="font-bold text-2xl mb-4">Exporter Registration</h1>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-1 mb-4 lg:mb-0">
            <label className="text-sm font-bold">First Name*</label>
            <input type="text" onChange={handleChange} value={inputData.firstName} name="firstName" className="border p-2 border-gray-300 rounded text-md" placeholder="Enter your first name"></input>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-bold">Last Name*</label>
            <input type="text" onChange={handleChange} value={inputData.lastName} name="lastName" className="border p-2 border-gray-300 rounded text-md" placeholder="Enter your last name"></input>
          </div>
          <div className="flex flex-col gap-1">
              <label className="text-sm font-bold">Email*</label>
              <input type="email" onChange={handleChange} value={inputData.email} name="email" className="border p-2 border-gray-300 rounded text-md" placeholder="Enter email address"></input>
          </div>
          <div className="flex flex-col gap-1 phone-input-container">
                <label className="font-bold text-sm">Phone*</label>
                <PhoneInput
                  style={{ fontSize: "64px", width: "full"  }}
                  defaultCountry="in"
                  value={inputData.phoneNumber}
                  onChange={(phone) => setInputData((state) => ({ ...state, phoneNumber: phone }))}
                />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-bold text-sm">Choose password*</label>
            <input type="password" onChange={handleChange} value={inputData.password} name="password" className="border p-2 border-gray-300 rounded text-md" placeholder="Password"></input>
          </div>
          <div className="flex flex-col gap-2 text-md w-full">
            <label className="font-bold">Timezone*</label>
            <TimeZones handleChange={handleChange} />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-bold">Country*</label>
            <select name="country" onChange={handleChange} value={inputData.country} className="border p-2 border-gray-300 rounded text-gray-500 text-md">
                {countryOptions.map((country) => {
                  return(
                    <option key={country.value} value={country.value}>{country.label}</option>
                  )
                })}
            </select>
          </div>
        </div>
        <button onClick={handleNext} className="bg-primary py-2 text-white rounded-md w-full mt-4 mb-4">Next</button>
        <p className="text-lg">Already have an account? <span className="text-primary"><Link to={"/"}>Login now</Link></span></p>
    </form>
  )
}
