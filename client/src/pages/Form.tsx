import { LuBuilding2 } from "react-icons/lu"

export default function Form(){
  return(
    <div className="h-full bg-gray-100 flex flex-col justify-center px-4">
      <div className="px-8 py-14 m-12 max-w-[800px] mx-auto bg-white shadow-md w-full rounded-lg flex flex-col gap-10">
      <p className="text-center text-2xl font-bold">Company Information</p>
      <div className="flex flex-row items-center gap-2 ">
        <LuBuilding2 />
        <span className="text-primary font-bold text-xl">ABC Private Limited</span>
      </div>
      {/* <p className="font-bold">Company Name: <span className="font-light">ABC Testing</span></p> */}
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="font-medium">Email</label>
          <input type="email" value={"testing@gmail.com"} className="outline-none border border-gray-300 rounded px-2 py-1"></input>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium">Website</label>
          <input type="text" value={"https://example.com"} className="outline-none border border-gray-300 rounded px-2 py-1"></input>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium">Phone</label>
          <input type="text" value={"+498525663115"} className="outline-none border border-gray-300 rounded px-2 py-1"></input>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium">Product Interests</label>
          <input type="text" value={"agriculture, food"} className="outline-none border border-gray-300 rounded px-2 py-1"></input>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium">Annual Turnover</label>
          <input type="text" className="outline-none border border-gray-300 rounded px-2 py-1"></input>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium">Address</label>
          <textarea className="outline-none border border-gray-300 rounded px-2 py-1"></textarea>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium">Tax Number</label>
          <input type="text" className="outline-none border border-gray-300 rounded px-2 py-1"></input>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium">Type of License</label>
          <select className="outline-none border border-gray-300 rounded px-2 py-1">
            <option>IEC</option>
            <option>DDP</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium">Enter license number</label>
          <input type="text" className="outline-none border border-gray-300 rounded px-2 py-1"></input>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium">Social Media</label>
          <select className="outline-none border border-gray-300 rounded px-2 py-1">
            <option>LinkedIn</option>
            <option>Facebook</option>
            <option>Instagram</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium">Enter profile link</label>
          <input type="text" className="outline-none border border-gray-300 rounded px-2 py-1"></input>
        </div>
        <button className="bg-primary text-white py-1 rounded mt-4">Submit</button>
      </form>
      </div>
    </div>
  )
}
