import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { RESET_IMPORTER_DETAILS, UPDATE_ADDITIONALINFO } from "../../store/contants";
import { useDispatch } from "react-redux";
import { importerRegistration } from "../../services/importerServices";
import { useNavigate } from "react-router-dom";
import { TagsInput } from "react-tag-input-component";

class RegistrationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "RegistrationError";
  }
}


export default function AdditionalDetails(){

  const navigate = useNavigate()

  const ImporterDetails = useSelector((state: RootState) => state.importer.additionalInformation)

  const AllImporterDetails = useSelector((state: RootState) => state.importer)

  const dispatch = useDispatch()

  const [indianExporter, setIndianExporter] = useState("no")

  function handleChangeIndia(e: React.ChangeEvent<HTMLSelectElement>){
    setIndianExporter(e.target.value);
  }

  const [inputData, setInputData] = useState({
    annualTurnover: ImporterDetails.annualTurnover,
    directors: ImporterDetails.directors,
    b2bListing: ImporterDetails.b2bListing,
    tradeCompany: ImporterDetails.tradeCompany,
    tradeWebsite: ImporterDetails.tradeWebsite,
    tradeEmail: ImporterDetails.tradeEmail,
    tradePhone: ImporterDetails.tradePhone,
    socialMediaLinks: {
      facebook: ImporterDetails.socialMediaLinks.facebook,
      instagram: ImporterDetails.socialMediaLinks.instagram,
      twitter: ImporterDetails.socialMediaLinks.twitter,
      linkedin: ImporterDetails.socialMediaLinks.linkedin
    }
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>){
    setInputData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSocialMediaChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>){
    setInputData((prev) => ({ ...prev, socialMediaLinks: {...prev.socialMediaLinks, [e.target.name]: e.target.value }}))
  }

  async function handleSubmit(e: React.FormEvent){
    e.preventDefault()
    if(AllImporterDetails.companyInformation.website == "" && AllImporterDetails.companyInformation.companyName == "" && AllImporterDetails.companyInformation.email == "" && AllImporterDetails.companyInformation.country == "" && AllImporterDetails.companyInformation.phone == "" && AllImporterDetails.basicInformation.address == "" && AllImporterDetails.basicInformation.firstName == "" && AllImporterDetails.basicInformation.language == "" && AllImporterDetails.basicInformation.lastName == "" && AllImporterDetails.basicInformation.password == ""){
      e.preventDefault()
      alert("Please fill all the required in all steps.")
    } else {
      e.preventDefault()
      try {
        const updatedDetails = {
          ...AllImporterDetails,
          additionalInformation: {
            ...inputData,
          },
        };

        dispatch({ type: UPDATE_ADDITIONALINFO, payload: { additionalInformation: { ...inputData } }})

        const response = await importerRegistration(updatedDetails)

        if(response.id){
          navigate("/importer/registration-successful")
          dispatch({ type: RESET_IMPORTER_DETAILS })
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
  }

    useEffect(() => {
      if (ImporterDetails) {
        setInputData({
          annualTurnover: ImporterDetails.annualTurnover,
          directors: ImporterDetails.directors,
          b2bListing: ImporterDetails.b2bListing,
          tradeCompany: ImporterDetails.tradeCompany,
          tradeWebsite: ImporterDetails.tradeWebsite,
          tradeEmail: ImporterDetails.tradeEmail,
          tradePhone: ImporterDetails.tradePhone,
          socialMediaLinks: {
            facebook: ImporterDetails.socialMediaLinks.facebook,
            instagram: ImporterDetails.socialMediaLinks.instagram,
            twitter: ImporterDetails.socialMediaLinks.twitter,
            linkedin: ImporterDetails.socialMediaLinks.linkedin
          }
        });
      }
    }, [ImporterDetails]);

  return(
    <form className={`flex flex-col m-4 min-w-[300px] ${indianExporter == "yes" ? "gap-2" : "gap-8"}`}>
        <div className="flex flex-col justify-center items-center gap-1">
          <p className="text-2xl font-bold">Additional Information</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="font-bold text-md">Annual Turnover</label>
            <input type="text" name="annualTurnover" onChange={handleChange} value={inputData.annualTurnover} className="border p-2 border-gray-300 rounded text-md" placeholder="Enter tax number"></input>
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-bold text-md">Social Media</label>
            <input type="text" name="linkedin" onChange={handleSocialMediaChange} value={inputData.socialMediaLinks.linkedin} className="border p-2 border-gray-300 rounded text-md" placeholder="Enter LinkedIn Profile"></input>
            <input type="text" name="facebook" onChange={handleSocialMediaChange} value={inputData.socialMediaLinks.facebook} className="border p-2 border-gray-300 rounded text-md" placeholder="Enter Facebook Profile"></input>
          </div>
          <div className="flex flex-col gap-1 mb-4 lg:mb-0">
            <label className="font-bold text-md">Directors</label>
            <TagsInput
              value={inputData.directors.length > 0 ? inputData.directors.split(",") : []}
              onChange={(e) => setInputData((prev) => ({ ...prev, directors: e.join(",") }))}
              name="directors"
              placeHolder="Enter directors names"
              classNames={{
                tag: "custom-tag-class",
                input: "custom-input-class",
              }}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-bold text-md">B2B Listing Platfoms</label>
            <TagsInput
              value={inputData.b2bListing.length > 0 ? inputData.b2bListing.split(",") : []}
              onChange={(e) => setInputData((prev) => ({ ...prev, b2bListing: e.join(",") }))}
              name="b2bListing"
              placeHolder="Enter B2B Listing Platforms"
              classNames={{
                tag: "custom-tag-class",
                input: "custom-input-class",
              }}
            />
          </div>
          <div className={`flex flex-col  gap-2 text-sm`}>
            <div className={` ${indianExporter == "yes" ? "flex gap-2 items-center flex-row" : "flex flex-col gap-2"}`}>
              <label className="font-bold text-[16px]">Are you working with Indian Exporters?</label>
              <select className="border p-2 rounded text-md h-fit" value={indianExporter} onChange={handleChangeIndia} name="tradeIndia">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
            </div>
            {indianExporter == "yes" && <div className="flex flex-col gap-2">
              <div className="lg:flex flex-row gap-4 flex-wrap">
                <div className="flex flex-col gap-1 mb-4 lg:mb-0">
                  <label className="font-bold text-md">Company Name</label>
                  <input type="text" name="tradeCompany" onChange={handleChange} value={inputData.tradeCompany} className="border p-2 border-gray-300 rounded text-md" placeholder="Enter exporter's company"></input>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-bold text-md">Website</label>
                  <input type="text" name="tradeWebsite" onChange={handleChange} value={inputData.tradeWebsite} className="border p-2 border-gray-300 rounded text-md" placeholder="Enter exporter's website"></input>
                </div>
              </div>
              <div className="lg:flex flex-row gap-4 flex-wrap">
                <div className="flex flex-col gap-1 mb-4 lg:mb-0">
                  <label className="font-bold text-md">Email</label>
                  <input type="email" name="tradeEmail" onChange={handleChange} value={inputData.tradeEmail} className="border p-2 border-gray-300 rounded text-md" placeholder="Enter exporter's email"></input>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-bold text-md">Phone</label>
                  <input type="text" name="tradePhone" onChange={handleChange} value={inputData.tradePhone} className="border p-2 border-gray-300 rounded text-md" placeholder="Enter exporter's phone"></input>
                </div>
              </div>
            </div>
            }
          </div>
        </div>
        <button onClick={handleSubmit} className="bg-primary py-2 text-white rounded-md">Submit</button>
      </form>
  )
}
