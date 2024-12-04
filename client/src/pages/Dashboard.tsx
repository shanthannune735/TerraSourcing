import { useEffect, useState } from "react";
// import { GrSend } from "react-icons/gr";
import { IoCheckmarkDone } from "react-icons/io5";
import DashboardTabs from "../components/DashboardTabs";

export default function Dashboard() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("http://127.0.0.1:5000/api/dashboard/data", {
          method: "GET",
        });
        const result = await res.json();
        if (res.ok) {
          setCompanies(result.data);
        }
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

  return (
    <section className="bg-white py-10 lg:py-[40px] max-w-[1080px] mx-auto">
      <DashboardTabs />
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="max-w-full overflow-x-auto">
              <table className="table-auto w-full">
                <thead>
                  <tr className="text-center bg-primary/80">
                    <th className="w-1/6 min-w-[160px] text-sm font-semibold text-white py-2 px-1 border-l border-transparent">
                      Company Name
                    </th>
                    <th className="w-1/6 min-w-[160px] text-sm font-semibold text-white py-2 px-1">
                      Email
                    </th>
                    <th className="w-1/6 min-w-[160px] text-sm font-semibold text-white py-2 px-1">
                      Phone
                    </th>
                    <th className="w-1/6 min-w-[160px] text-sm font-semibold text-white py-2 px-1">
                      Website
                    </th>
                    <th className="w-1/6 min-w-[160px] text-sm font-semibold text-white py-2 px-1">
                      Level 2 Verification
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {companies.map((company) => {
                    return (
                      <tr>
                        <td className="text-center text-dark font-medium text-sm py-2 px-1 bg-secondary/60 border-b border-l border-[#E8E8E8]">
                          {company}
                        </td>
                        <td className="text-center text-dark font-medium text-sm py-1 px-2 bg-white border-b border-[#E8E8E8]">
                          Verified
                        </td>
                        <td className="text-center text-dark font-medium text-sm py-1 px-2 bg-secondary/60 border-b border-[#E8E8E8]">
                          Unverified
                        </td>
                        <td className="text-center text-dark font-medium text-sm py-1 px-2 bg-white border-b border-[#E8E8E8]">
                          Verified
                        </td>
                        <td className="text-center text-dark font-medium text-sm py-1 px-2 border-b border-[#E8E8E8]">
                          <a href="javascript:void(0)" className="py-1 px-2  rounded flex flex-row items-center min-h-full text-center justify-center text-primary border border-primary gap-1">
                            <span>Verify Now</span>
                            {/* <GrSend /> */}
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td className="text-center text-dark font-medium text-sm py-2 px-1 bg-secondary/60 border-b border-l border-[#E8E8E8]">
                      Alois Dallmayr KG
                    </td>
                    <td className="text-center text-dark font-medium text-sm py-1 px-2 bg-white border-b border-[#E8E8E8]">
                      Unverified
                    </td>
                    <td className="text-center text-dark font-medium text-sm py-1 px-2 bg-secondary/60 border-b border-[#E8E8E8]">
                      Unverified
                    </td>
                    <td className="text-center text-dark font-medium text-sm py-1 px-2 bg-white border-b border-[#E8E8E8]">
                      Verified
                    </td>
                    <td className="text-center text-dark font-medium text-sm py-1 px-2 border-b border-[#E8E8E8]">
                      <a href="javascript:void(0)" className=" py-1 px-2 rounded flex flex-row items-center min-h-full text-center justify-center text-green-500 border border-green-500">
                        <span>Email Sent</span>
                        <IoCheckmarkDone />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
