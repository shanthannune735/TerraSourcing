import { useNavigate } from "react-router-dom";
import { languages } from "../../utils/constants";
import TimeZones from "../TimeZones";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from '../../store/store';
import { UPDATE_BASICINFO } from "../../store/contants";

export default function Info() {
  const ImporterDetails = useSelector((state: RootState) => state.importer.basicInformation);
  const dispatch = useDispatch();
  const [isUpdated, setIsUpdated] = useState(false);

  const [inputData, setInputData] = useState({
    firstName: ImporterDetails.firstName,
    lastName: ImporterDetails.lastName,
    address: ImporterDetails.address,
    password: ImporterDetails.password,
    timeZone: ImporterDetails.timeZone,
    language: ImporterDetails.language,
  });

  const navigate = useNavigate();

  function handleNext(e: React.FormEvent) {
    e.preventDefault()
    dispatch({ type: UPDATE_BASICINFO, payload: { basicInformation: { ...inputData } } })
    setIsUpdated(true)
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setInputData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  useEffect(() => {
    if (isUpdated) {
      if(inputData.address != "" && inputData.firstName != "" && inputData.language != "" && inputData.lastName != "" && inputData.password != ""){
        navigate("/importer/registration?step=product-details")
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
        firstName: ImporterDetails.firstName,
        lastName: ImporterDetails.lastName,
        address: ImporterDetails.address,
        password: ImporterDetails.password,
        timeZone: ImporterDetails.timeZone,
        language: ImporterDetails.language,
      });
    }
  }, [ImporterDetails]);

  return (
    <form className="flex flex-col gap-8 pt-10 lg:pt-0 m-2">
      <div className="flex flex-row justify-center items-center gap-1">
        <p className="text-2xl font-bold">Basic Information</p>
      </div>
      <div className="flex flex-col gap-4 text-sm">
        <div className="lg:flex flex-row gap-4 flex-wrap justify-between">
          <div className="flex flex-col gap-1 mb-4 lg:mb-0">
            <label className="font-bold text-md">First Name*</label>
            <input
              type="text"
              name="firstName"
              onChange={handleChange}
              value={inputData.firstName}
              className="border p-2 border-gray-300 rounded text-md"
              placeholder="Enter first name"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-bold text-md">Last Name*</label>
            <input
              type="text"
              name="lastName"
              onChange={handleChange}
              value={inputData.lastName}
              className="border p-2 border-gray-300 rounded text-md"
              placeholder="Enter last name"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-bold text-md">Address*</label>
          <textarea
            onChange={handleChange}
            name="address"
            value={inputData.address}
            className="border p-2 border-gray-300 rounded text-md"
            placeholder="Enter your full address"
          />
        </div>
        <div className="lg:flex flex-row gap-4 flex-wrap justify-between">
          <div className="flex flex-col gap-1 mb-4 lg:mb-0 w-full">
            <label className="font-bold text-md">Password*</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={inputData.password}
              className="border p-2 border-gray-300 rounded text-md"
              placeholder="Choose your password"
            />
          </div>
          {/* <div className="flex flex-col gap-1">
            <label className="font-bold text-md">Re-enter Password</label>
            <input
              type="password"
              name="re-password"
              className="border p-2 border-gray-300 rounded text-md"
              placeholder="Re-enter your password"
            />
          </div> */}
        </div>
        <div className="flex flex-col gap-2 text-md w-full">
          <label className="font-bold">Timezone*</label>
          <TimeZones handleChange={handleChange} />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-bold">Select language*</label>
          <select
            className="border p-2 border-gray-300 rounded min-w-[280px] text-gray-500 text-md"
            name="language"
            onChange={handleChange}
            value={inputData.language}
          >
            <option disabled value="">
              Select
            </option>
            {languages.map((language) => (
              <option key={language.name} value={language.name}>
                {language.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button onClick={handleNext} className="bg-primary py-2 text-white rounded-md">
        Next
      </button>
    </form>
  );
}
