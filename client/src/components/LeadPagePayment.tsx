import { FaAngleRight } from "react-icons/fa6";
import { useState } from "react";

export default function LeadPagePayment() {
  const [showQr, setShowQr] = useState(false)
  const [showForm, setShowForm] = useState(false)

  function handleDoPayment() {
    setShowQr(true);
  }

  function handleShowForm() {
    setShowForm(true);
  }

  return (
    <div className="my-20 flex flex-col items-center gap-8">
      <p className="text-3xl font-bold text-gray-900 mb-6 text-center">
        <span className="text-primary">Secure Your Verified Leads</span> –
        Complete Your Payment Now
      </p>
      {showQr == false && (
        <button
          onClick={handleDoPayment}
          className="bg-blue-500 text-white px-6 py-3 text-md rounded-full flex flex-row gap-2 items-center"
        >
          <p>Click here to do the payment</p>
          <FaAngleRight />
        </button>
      )}
      {(showQr && !showForm) && (
        <div className="flex flex-col items-center justify-center gap-4">
          <img src="/payment-qr.jpg" width={280}></img>
          <button
            onClick={handleShowForm}
            className="bg-green-500 text-white px-6 py-3 text-md rounded-full flex flex-row gap-2 items-center"
          >
            <p>Click here after payment</p>
            <FaAngleRight />
          </button>
        </div>
      )}
      {showForm && (
        <form className="space-y-4 w-full max-w-[520px]">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Company Name
            </label>
            <input
              type="text"
              name="name"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#0073E6] focus:border-[#0073E6]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#0073E6] focus:border-[#0073E6]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#0073E6] focus:border-[#0073E6]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              name="company"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#0073E6] focus:border-[#0073E6]"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#0073E6] text-white py-2 px-4 rounded-md hover:bg-[#005bb5] transition duration-300"
          >
            Verify Now
          </button>
        </form>
      )}
    </div>
  );
}
