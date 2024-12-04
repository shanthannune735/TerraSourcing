import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UPDATE_EXPORTER_PRODUCT_DETAILS } from "../../store/contants"
import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import { useDispatch } from "react-redux"
import { TagsInput } from "react-tag-input-component"

export default function ProductDetails(){

  const ExporterDetails = useSelector((state: RootState) => state.exporter.productDetails)

  const dispatch = useDispatch()

  const [isUpdated, setIsUpdated] = useState(false)

  const [inputData, setInputData] = useState({
    productNames: ExporterDetails.productNames,
    tradeValue: ExporterDetails.tradeValue,
    tradeVolume: ExporterDetails.tradeVolume
  });

  const navigate = useNavigate()

  function handleNext(e: React.FormEvent){
    e.preventDefault()
    dispatch({ type: UPDATE_EXPORTER_PRODUCT_DETAILS, payload: { productDetails: { ...inputData }} })
    setIsUpdated(true)
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setInputData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  useEffect(() => {
    if (isUpdated) {
      navigate("/exporter/registration?step=additional-details")
    }
  }, [isUpdated, navigate])

  useEffect(() => {
    if (ExporterDetails) {
      setInputData({
        productNames: ExporterDetails.productNames,
        tradeValue: ExporterDetails.tradeValue,
        tradeVolume: ExporterDetails.tradeVolume
      });
    }
  }, [ExporterDetails]);


  return(
    <form className="flex flex-col gap-4 lg:gap-2 items-center justify-center mx-auto my-10 mb-20  shadow-md p-10 bg-white rounded-2xl max-w-[600px] w-full">
        <h1 className="text-2xl font-bold flex flex-row items-center gap-2 mb-4">Product Details</h1>
        <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-1 mb-4 lg:mb-0">
            <label className="font-bold text-sm">Product Names</label>
            <TagsInput
              value={inputData.productNames.length > 0 ? inputData.productNames.split(",") : []}
              onChange={(e) => setInputData((prev) => ({ ...prev, productNames: e.join(",") }))}
              name="productNames"
              placeHolder="Enter product names"
              classNames={{
                tag: "custom-tag-class",
                input: "custom-input-class",
            }}
          />
          </div>
          <div className="relative flex flex-col gap-1">
            <label className="font-bold text-md">Trade Value</label>
            <input
              type="text"
              name="tradeValue"
              value={inputData.tradeValue}
              onChange={handleChange}
              className="border p-2 border-gray-300 rounded text-md pl-8"
              placeholder="Jan 2024 to till date"
            />
            <span className="text-xl absolute left-2 top-[49px] transform -translate-y-1/2 text-gray-900">$</span>
          </div>
          <div className="relative flex flex-col gap-1">
            <label className="font-bold text-md">Trade Volume</label>
            <input type="text" value={inputData.tradeVolume} onChange={handleChange} name="tradeVolume" className="pl-14 border p-2 border-gray-300 rounded text-md" placeholder="Jan 2024 to till date"></input>
            <span className="text-md absolute left-2 top-[49px] transform -translate-y-1/2 text-gray-900">Tons :</span>
          </div>
        </div>
        <button onClick={handleNext} className="bg-primary py-2 text-white rounded-md w-full mt-4">Next</button>
    </form>
  )
}
