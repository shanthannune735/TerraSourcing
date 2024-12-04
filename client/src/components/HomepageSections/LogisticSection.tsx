import { FaAngleRight } from "react-icons/fa6";
import { FaUserCheck } from "react-icons/fa";
import { FaLuggageCart } from "react-icons/fa";

export default function LogisticSection(){
  return(
    <div className="py-20 px-4">
        <h3 className="font-sf-bold text-3xl lg:text-[42px] leading-tight text-center mb-20">Get Genuine Leads at a Click</h3>
        <div className="flex flex-row gap-8 w-fit mx-auto flex-wrap justify-center">
          <div className="bg-secondary w-fit flex flex-row gap-4 p-4 rounded-xl max-w-[600px] border-grey ">
              <div className="text-primary text-3xl pt-1">
                <FaUserCheck />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-2xl font-sf-semibold">Testing Agencies</p>
                <p className="text-grey">Receive genuine leads effortlessly with our comprehensive platform designed to connect you with verified clients.</p>
                <button className="bg-white p-2 flex flex-row gap-2 items-center rounded w-fit text-primary">
                  <span className="text-primary">Learn More</span>
                  <FaAngleRight />
                </button>
              </div>
          </div>
          <div className="bg-secondary w-fit flex flex-row gap-4 p-4 rounded-xl max-w-[600px]">
              <div className="text-primary text-3xl pt-1">
                <FaLuggageCart />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-2xl font-sf-semibold">Logistic Providers</p>
                <p className="text-grey">Access genuine leads with ease through our advanced platform. Our service connects you with verified clients.</p>
                <button className="bg-white p-2 flex flex-row gap-2 items-center rounded w-fit text-primary">
                  <span className="text-primary">Learn More</span>
                  <FaAngleRight />
                </button>
              </div>
          </div>
          <div>

          </div>
        </div>
    </div>
  )
}
