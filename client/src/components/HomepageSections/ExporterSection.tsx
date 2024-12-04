import { FaCircleCheck } from "react-icons/fa6";

export default function ExporterSection(){
  return(
        <div className="flex flex-row justify-center items-center gap-20 py-20 flex-wrap p-4">
          <div className="max-w-[580px] flex flex-col gap-2 lg:gap-8">
            <h3 className="font-sf-bold text-3xl lg:text-[42px] leading-tight">Empowering Exporters with Verified Importer Leads</h3>
            <ul className="text-lg lg:text-2xl flex flex-col gap-4 font-sf-medium">
              <li className="flex flex-row gap-4 items-center">
                <FaCircleCheck className="text-primary text-2xl" />
                <p>Validated Importers</p>
              </li>
              <li className="flex flex-row gap-4 items-center">
                <FaCircleCheck className="text-primary text-2xl" />
                <p>Logistics and Service Providers</p>
              </li>
              <li className="flex flex-row gap-4 items-center">
                <FaCircleCheck className="text-primary text-2xl" />
                <p>Sample Shipping Assistance</p>
              </li>
              <li className="flex flex-row gap-4 items-center">
                <FaCircleCheck className="text-primary text-2xl" />
                <p>Negotiation Support</p>
              </li>
              <li className="flex flex-row gap-4 items-center">
                <FaCircleCheck className="text-primary text-2xl" />
                <p>Quotation Submission</p>
              </li>
            </ul>
          </div>
          <div className="">
            <img src="/export_image.png" alt="Export Image"></img>
          </div>
        </div>
  )
}
