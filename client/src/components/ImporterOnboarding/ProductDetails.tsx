import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { RootState } from "../../store/store"
import { useSelector } from "react-redux"
import { UPDATE_PRODUCTDETAILS } from "../../store/contants"
import { useDispatch } from "react-redux"
import { TagsInput } from "react-tag-input-component"
import "./styles.css"

export default function ProductDetails(){

  const ImporterDetails = useSelector((state:RootState) => state.importer.productDetails)
  const dispatch = useDispatch()
  const [isUpdated, setIsUpdated] = useState(false)
  const navigate = useNavigate()

  function handleNext(e: React.FormEvent) {
    e.preventDefault()
    dispatch({ type: UPDATE_PRODUCTDETAILS, payload: { productDetails: { ...inputData } } })
    setIsUpdated(true)
  }

  const [inputData, setInputData] = useState({
    productNames: ImporterDetails.productNames,
    tradeVolume: ImporterDetails.tradeVolume,
    tradeValue: ImporterDetails.tradeValue,
    tradeCountries: ImporterDetails.tradeCountries
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>){
    setInputData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  useEffect(() => {
    if (isUpdated) {
      navigate("/importer/registration?step=license-details");
    }
  }, [isUpdated, navigate]);

  useEffect(() => {
    if (ImporterDetails) {
      setInputData({
        productNames: ImporterDetails.productNames,
        tradeVolume: ImporterDetails.tradeVolume,
        tradeValue: ImporterDetails.tradeValue,
        tradeCountries: ImporterDetails.tradeCountries,
      });
    }
  }, [ImporterDetails]);


  return(
    <form className="flex flex-col gap-8 m-4 min-w-[300px]">
        <div className="flex flex-col justify-center items-center gap-1">
          <p className="text-2xl font-bold">Enter Product Details</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="font-bold text-md">Product Names</label>
            {/* <input type="text" name="productName" onChange={handleChange} value={inputData.productName} className="border p-2 border-gray-300 rounded text-md lg:min-w-[420px]" placeholder="Enter product names"></input> */}
          </div>
          <TagsInput
            value={inputData.productNames.length > 0 ? inputData.productNames.split(",") : []}
            onChange={(e) => setInputData((prev) => ({ ...prev, productNames: e.join(",") }))}
            name="products"
            placeHolder="Enter product names"
            classNames={{
              tag: "custom-tag-class",
              input: "custom-input-class",
            }}
          />

          <div className="relative flex flex-col gap-1">
            <label className="font-bold text-md">Trade Volume</label>
            <input type="text" name="tradeVolume" onChange={handleChange} value={inputData.tradeVolume} className="pl-14 border p-2 border-gray-300 rounded text-md" placeholder="Jan 2024 to till date"></input>
            <span className="text-md absolute left-2 top-[49px] transform -translate-y-1/2 text-gray-900">Tons :</span>
          </div>
          <div className="relative flex flex-col gap-1">
            <label className="font-bold text-md">Trade Value</label>
            <input
              type="text"
              name="tradeValue"
              onChange={handleChange}
              value={inputData.tradeValue}
              className="border p-2 border-gray-300 rounded text-md pl-8"
              placeholder="Jan 2024 to till date"
            />
            <span className="text-xl absolute left-2 top-[49px] transform -translate-y-1/2 text-gray-900">$</span>
          </div>
          {/* <div className="flex flex-col gap-1">
            <label className="font-bold text-md">HS Codes</label>
            <input type="text" className="border p-2 border-gray-300 rounded text-md" placeholder="Product HS Code"></input>
          </div> */}
          <div className="flex flex-col gap-1">
            <label className="font-bold text-md">Patnered Trade Countries</label>
            <TagsInput
              value={inputData.tradeCountries.length > 0 ? inputData.tradeCountries.split(",") : []}
              onChange={(e) => setInputData((prev) => ({ ...prev, tradeCountries: e.join(",") }))}
              name="tradeCountries"
              placeHolder="Enter countries names"
              classNames={{
                tag: "custom-tag-class",
                input: "custom-input-class",
              }}
          />
          </div>
        </div>
        <button onClick={handleNext} className="bg-primary py-2 text-white rounded-md">Next</button>
      </form>
  )
}
