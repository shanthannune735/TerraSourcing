import { PhoneInput } from 'react-international-phone'
import 'react-international-phone/style.css'

import { Link, useNavigate } from "react-router-dom"
import { countryOptions } from "../../utils/constants"
import { useSelector } from "react-redux"
import { RootState } from '../../store/store';
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { UPDATE_COMPANYDETAILS } from "../../store/contants"
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./styles.css"

export default function CompanyDetails(){

  const ImporterDetails = useSelector((state: RootState) => state.importer.companyInformation)
  const dispatch = useDispatch()
  const [isUpdated, setIsUpdated] = useState(false)

  const [inputData, setInputData] = useState({
    companyName: ImporterDetails.companyName,
    email: ImporterDetails.email,
    dateOfIncorporation: ImporterDetails.dateOfIncorporation,
    website: ImporterDetails.website,
    phone: ImporterDetails.phone,
    country: ImporterDetails.country
  })

  const navigate = useNavigate()

  function handleNext(e: React.FormEvent){
    e.preventDefault()
    dispatch({ type: UPDATE_COMPANYDETAILS, payload: { companyInformation: { ...inputData } } })
    setIsUpdated(true)
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>){
    setInputData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  useEffect(() => {
    if (isUpdated === true) {
      if(inputData.website != "" && inputData.dateOfIncorporation != null && inputData.companyName != "" && inputData.email != "" && inputData.country != "" && inputData.phone != ""){
        navigate("/importer/registration?step=info");
      } else {
        alert("Please fill all the fields");
        setIsUpdated(false)
      }
    }
    setIsUpdated(false)
  }, [isUpdated, navigate, inputData]);

  useEffect(() => {
    if (ImporterDetails) {
      setInputData({
        companyName: ImporterDetails.companyName,
        dateOfIncorporation: ImporterDetails.dateOfIncorporation,
        email: ImporterDetails.email,
        website: ImporterDetails.website,
        phone: ImporterDetails.phone,
        country: ImporterDetails.country
      });
    }
  }, [ImporterDetails]);

  return(
    <form className="flex flex-col gap-1 lg:gap-4 m-4 min-w-[300px]">
        <div className="flex flex-col justify-center items-center gap-1">
          <img className="text-center " src="/logo.png" width={120}></img>
          <p className="text-xl font-bold">Welcome to TerraSourcing! 👋</p>
          <p className="text-gray-500 text-xl">Get verification in minutes</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="font-bold text-md">Company Name*</label>
            <input name="companyName" onChange={handleChange} value={inputData.companyName} type="text" className="border p-2 border-gray-300 rounded text-md" placeholder="Enter company name"></input>
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-bold text-md">Email*</label>
            <input name="email" onChange={handleChange} value={inputData.email} type="email" className="border p-2 border-gray-300 rounded text-md" placeholder="Enter email address"></input>
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-bold text-md">Date of Incorporation*</label>
            <DatePicker className='w-full rounded border-gray-300' selected={ inputData.dateOfIncorporation } dateFormat="dd/MM/yyyy" placeholderText='Select date' onChange={(date) => setInputData((prev) => ({...prev, dateOfIncorporation: date}))} />
          </div>

          <div className="flex flex-col gap-1 lg:mb-0">
            <label className="font-bold text-md">Website*</label>
            <input name="website" onChange={handleChange} value={inputData.website} type="text" className="border p-2 border-gray-300 rounded text-md" placeholder="Your website"></input>
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-bold text-md">Phone*</label>
            <PhoneInput
              defaultCountry="in"
              value={inputData.phone}
              className="w-full phone-input"
              onChange={(phone) => setInputData((state) => ({ ...state, phone }))}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-bold text-md">Country*</label>
            <select name="country" className="border p-2 border-gray-300 rounded min-w-[280px] text-gray-500 text-md" value={inputData.country} onChange={handleChange}>
                {countryOptions.map((country) => {
                  return(
                    <option key={country.value} value={country.value}>{country.label}</option>
                  )
                })}
            </select>
          </div>
        </div>
        <button onClick={handleNext} className="bg-primary py-2 text-white rounded-md mt-2">Next</button>
        <p className="text-md text-center">Already have an account? <span className="text-primary"><Link to={"/importer/login"}>Login now</Link></span></p>
    </form>
  )
}
