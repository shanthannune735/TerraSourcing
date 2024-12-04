import { FaChalkboardTeacher } from "react-icons/fa";
import { PiUsersThreeFill } from "react-icons/pi";
import { MdInsights } from "react-icons/md";

export default function TrainerSection(){
  return(
    <div className="bg-secondary py-20 flex flex-col gap-16 px-4">
      <p className="font-sf-bold text-3xl lg:text-[42px] leading-tight max-w-[720px] mx-auto text-center">Expert Training and Support for Your Export Needs</p>
      <div className="flex flex-row gap-16 mx-auto w-fit flex-wrap justify-center">
        <div className="rounded-2xl bg-white p-8 w-fit shadow-lg max-w-[300px] flex flex-col gap-4">
          <div className="text-primary bg-secondary p-2 w-fit rounded-full text-2xl">
            <FaChalkboardTeacher/>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-sf-bold text-xl">Export Training</p>
            <p className="text-grey">Training from India’s top export coaches available in the current market.</p>
          </div>
        </div>
        <div className="rounded-2xl bg-white p-8 w-fit shadow-lg max-w-[300px] flex flex-col gap-4">
          <div className="text-primary bg-secondary p-2 w-fit rounded-full text-2xl">
            <PiUsersThreeFill />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-sf-bold text-xl">ECGC Support</p>
            <p className="text-grey">Get ECGC support for your exports for every trade you make.</p>
          </div>
        </div>
        <div className="rounded-2xl bg-white p-8 w-fit shadow-lg max-w-[300px] flex flex-col gap-4">
          <div className="text-primary bg-secondary p-2 w-fit rounded-full text-2xl">
            <MdInsights />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-sf-bold text-xl">Market Insight Reports</p>
            <p className="text-grey">Receive market insight reports for your product and the best countries to export.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
