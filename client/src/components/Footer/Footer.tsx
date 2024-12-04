import { FaChevronRight } from "react-icons/fa";

export default function Footer(){
  return(
    <footer className="text-white px-4 py-28 bg-[#161C28]">
      <div className="max-w-[1280px] flex flex-row flex-wrap gap-8 justify-start lg:justify-between mx-auto">
        <div className="flex flex-col gap-4">
          <p className="text-3xl">Terra Sourcing</p>
          <p>Connecting importers and exporters</p>
          <div className="flex flex-row gap-1 items-center cursor-pointer flex-wrap">
            <input type="email" placeholder="Enter your email" className="p-2 rounded bg-transparent border border-white"></input>
            <div className="bg-white rounded-full w-fit p-2 h-fit">
              <FaChevronRight className="text-black" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="">Contact Us</p>
          <p className="text-gray-400">India</p>
          <p className="text-gray-400">+91 9704226664</p>
          <p className="text-gray-400">contact@terrasourcing.com</p>
        </div>
        <div className="flex flex-col gap-4">
          <p>Account</p>
          <p className="text-gray-400">Dashboard</p>
          <p className="text-gray-400">Report</p>
          <p className="text-gray-400">Orders</p>
        </div>
        <div className="flex flex-col gap-4">
          <p>Information</p>
          <p className="text-gray-400">About Us</p>
          <p className="text-gray-400">Privacy Policy</p>
          <p className="text-gray-400">TOS</p>
        </div>
      </div>
    </footer>
  )
}
