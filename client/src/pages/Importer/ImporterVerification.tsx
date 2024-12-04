import { useState } from "react"
import { TbReport } from "react-icons/tb"
import { Link } from "react-router-dom"

export default function ImporterVerification(){
  const [country, setCountry] = useState<string>("")
  const [company, setCompany] = useState<string>("")

  // const countries = ["Germany", "Poland", "Romania", "Hungary", "UAE"]
  const countries = [
    "Indonesia", "JAPAN", "Thailand", "Romania", "Kuwait", "Australia", "Germany", "Poland",
    "New Zealand", "Netherlands", "Nigeria", "Myanmar", "Taiwan", "Sweden", "Mozambique",
    "Hungary", "Switzerland", "Mexico", "Bangkok", "Turkey", "Suriname", "Uzbekistan",
    "Combodia", "Botswana", "Bangladesh", "Portugal", "Saint Lucia", "Maldives",
    "East Of England", "Malaysia", "Panama", "United kingdom", "Belgium", "Greece",
    "Tanzania", "Azerbaijan", "Hunedoara", "Austria", "USA", "Russia", "Hong Kong",
    "Philippines", "Canada", "Singapore", "UAE", "Qatar", "Oman", "Bahrain", "Uganda",
    "Spain", "France", "Guatemala", "Kenya", "Egypt", "Madagascar", "South Korea", "Italy"
];

  const isFormValid = country !== "" && company !== ""

  return (
    <section className="flex flex-row gap-4 max-w-[800px] justify-center lg:justify-between items-center mx-auto py-8 lg:py-16 flex-wrap-reverse">
      <div>
        <img className="max-w-[360px]" src="/verification.png" alt="Verification" />
      </div>
      <div className="border border-primary shadow-md flex flex-col gap-8 px-8 py-12 rounded-lg">
        <div>
          <p className="text-center font-bold text-2xl">Importer Verification</p>
          <p className="text-center text-sm text-gray-500">Get verified information in seconds</p>
        </div>
        <form className="flex flex-col gap-4">
          <div>
            <label htmlFor="country">Country</label>
            <select id="country" value={country} onChange={(e) => setCountry(e.target.value)} className="mt-1 w-full outline-none rounded px-2 text-sm py-2 bg-[#f7f7f7]" required>
              <option value="" disabled>Select a country</option>
              {countries.map((country) => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="company">Company name</label>
            <input type="text" id="company" value={company} onChange={(e) => setCompany(e.target.value)} className="mt-1 w-full outline-none rounded px-2 text-sm py-2 bg-[#f7f7f7]" required />
          </div>
          {isFormValid ? (
            <Link to={`/report/${country.toLocaleLowerCase()}/${company}`} className="bg-primary text-white mt-2 py-2 rounded flex flex-row items-center justify-center gap-2">
              <span>Get Report</span>
              <TbReport />
            </Link>
          ) : (
            <div className="bg-gray-400 text-white mt-2 py-2 rounded flex flex-row items-center justify-center gap-2 cursor-not-allowed">
              <span>Get Report</span>
              <TbReport />
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
