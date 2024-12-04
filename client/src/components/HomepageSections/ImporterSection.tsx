import { HiMiniGlobeAlt } from "react-icons/hi2";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";
import ProgressBar from "../ProgressBar";

export default function ImporterSection(){

  const steps = [
    'About Company',
    'Company licence',
    'Trade Information',
    'Complete verification'
  ];
  const interval = 1000; // 2 seconds

  return(
    <div className="bg-secondary px-4">
        <div className="flex flex-row gap-16 max-w-[1280px] mx-auto py-20 justify-center items-center flex-wrap">
          <div className="max-w-[580px] flex flex-col gap-2 lg:gap-8">
            <h3 className="text-3xl lg:text-[42px] leading-tight font-sf-bold">Connecting importers with verified exporters</h3>
            <p className="text-grey text-lg">At Terra Sourcing, we are dedicated to connecting importers with high-quality, verified exporters. Our platform ensures reliable partnerships that pave the way for successful trade and growth. With a focus on trust and transparency, we help businesses forge strong and dependable connections in the global market.</p>
          </div>

          <div className="flex flex-col gap-8 lg:gap-16">
            <div className="flex flex-row gap-4 items-center">
              <div className="text-primary bg-white w-fit p-[10px] text-2xl shadow-lg rounded-md h-fit">
                <HiMiniGlobeAlt />
              </div>
              <div className="flex flex-col">
                <p className="font-sf-semibold text-2xl pb-1">Geniune Exporters</p>
                <p className="text-lg text-grey font-sf-regular">Connect with valid and genuine exporters offering the best quality.</p>
              </div>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <div className="text-primary bg-white w-fit p-[10px] text-2xl shadow-lg rounded-md h-fit">
                <AiOutlineDollarCircle />
              </div>
              <div className="flex flex-col">
                <p className="font-sf-semibold text-2xl pb-1">Negotiation Support</p>
                <p className="text-lg text-grey font-sf-regular">Convenient virtual meeting support in your time zones.</p>
              </div>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <div className="text-primary bg-white w-fit p-[10px] text-2xl shadow-lg rounded-md h-fit">
                <HiOutlineDocumentText />
              </div>
              <div className="flex flex-col">
                <p className="font-sf-semibold text-2xl pb-1">Duty Scrips</p>
                <p className="text-lg text-grey font-sf-regular">Assistance to buy export duty scrips from exporters at the best rates.</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-2xl lg:text-2xl font-sf-semibold text-center pb-4">We do four levels of verification to verify Importer</p>
        </div>
        <div className="flex flex-row gap-4 justify-center p-4 max-w-[1280px] mx-auto pb-20">
          {/* <p className="text-3xl lg:text-xl leading-tight font-sf-bold">We do four levels of Verification to verify Importer</p> */}
          <div className="min-w-[360px] lg:min-w-[560px] -mr-[50px] md:-mr-[100px]">
            <ProgressBar steps={steps} interval={interval} />
          </div>
        </div>
      </div>
  )
}
