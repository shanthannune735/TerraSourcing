import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { LuBuilding } from "react-icons/lu";
import { FaAngleRight } from "react-icons/fa6";

export default function ContactSection(){
  return(
    <div className="flex items-center justify-center p-8 py-20 bg-secondary">
    <div className="bg-white shadow-md rounded-2xl overflow-hidden flex flex-row flex-wrap max-w-4xl">
      <div className="bg-[#073B89] p-8 lg:p-16 flex flex-col justify-center text-white w-full lg:w-1/2">
        <h2 className="text-3xl font-bold mb-12">Get in touch</h2>
        <div className="space-y-4">
          <div className="flex flex-row gap-2 items-center">
            <div className="text-3xl">
              <MdOutlineEmail className="bg-[#ffffff]/30 p-2 rounded-full" />
            </div>
            <div>
              <p className="font-sf-light text-sm text-[#FFFFFF]/50 tracking-wide	">EMAIL US</p>
              <p>contact@terrasourcing.com</p>
            </div>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <div className="text-3xl">
              <FaPhoneAlt className="bg-[#ffffff]/30 p-2 rounded-full" />
            </div>
            <div>
              <p className="font-sf-light text-sm text-[#FFFFFF]/50 tracking-wide	">PHONE NUMBER</p>
              <p>+91 9704226664</p>
            </div>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <div className="text-3xl">
              <LuBuilding className="bg-[#ffffff]/30 p-2 rounded-full" />
            </div>
            <div>
              <p className="font-sf-light text-sm text-[#FFFFFF]/50 tracking-wide	">ADDRESS</p>
              <p>5th Floor, RS Silicon Park, near VIP Hills, Cyber Hills Colony, VIP Hills, Silicon Valley, Madhapur, Hyderabad, Telangana 500081</p>
            </div>
          </div>
        </div>
        <div className="flex mt-4 space-x-4">
          <a href="#" className="text-white"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="text-white"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-white"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-white"><i className="fab fa-dribbble"></i></a>
        </div>
      </div>
      <div className="p-8 lg:p-16 bg-white border rounded-r-2xl w-full lg:w-1/2">
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input className="text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Full name"/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email address"/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="companyName">
              Company Name
            </label>
            <input className="text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-sm shadow-outline" id="companyName" type="text" placeholder="Name of the company"/>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="website">
              Website
            </label>
            <input className="text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="website" type="text" placeholder="Enter website"/>
          </div>
          <div className="flex items-center justify-between">
            <button className="font-sf-light bg-primary hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline flex flex-row gap-2 items-center" type="button">
              Send Quotation
              <FaAngleRight />
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

  )
}
