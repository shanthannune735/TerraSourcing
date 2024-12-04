// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Margin, usePDF } from 'react-to-pdf';
import { FaDownload } from "react-icons/fa6";
import { IoMdArrowRoundBack } from "react-icons/io";

const DetailRow = ({ label, value }: { label: string, value: string }) => (
  value && value !== "NA" && value !== "NotFound" && value !== "Not-Found" && value !== "Not found" && value !== "Not Found" && value !== "NULL" && (
    <div className="flex flex-row flex-wrap px-3 py-3 even:bg-secondary">
      <div className="w-full max-w-64 font-bold">{label}:</div>
      <div>{value}</div>
    </div>
  )
);

export default function StaticReportPage() {
  // const [loading, setLoading] = useState(false);
  const loading = false
  const { toPDF, targetRef } = usePDF({ filename: 'report.pdf', page: { margin: Margin.SMALL }, });
  const navigate = useNavigate();

  // Static data as per your provided details
  const data = {
    company_name: "Golden Peacock Enterprises",
    Country: "UAE",
    Registered_Address: "P.O. Box 1234 Sheikh Khalifa Bin Saeed Street Dubai, Abu Dhabi",
    Address1: "Building Name: Saeed Tower - 2 Sheikh Zayed Rd - Dubai - United Arab Emirates",
    Address2: "1 Hazza ' Bin Zayed The First St - Al Nahyan - Zone 1 - Abu Dhabi - United Arab Emirates",
    Address3: "Meydan Racecourse Al Meydan Road, Nad Al Sheba - Dubai - United Arab Emirates",
    Website: "www.example.com",
    Contact_Email_Id: "golden@example.com ",
    Fax_Number: "+912-3-1234567",
    Product_S_Category: "General Trading",
    Status: "Active",
    Membership_No: "30000",
    License_No: "812345",
    Expiry_Date_Of_License: "29-05-2024",
    Organization_Valid_Invalid: "Valid",
    facebook_link: "https://www.facebook.com/golden-example/",
    linkedin_link: "https://www.linkedin.com/company/golden-example",
    // Email_Validation: "Verified ✔",
    IEC_Code: "IEC1234567890",
    BL_Document: "BL-2023-000001",
    ECGC_Certificate: "ECGC-2023-CERT-001",
    Annual_Turnover: "$1,525,000",
    Directors: "Don Srinu",
    Chamber_of_Commerce: "Dubai Chamber of Commerce",
    Trade_Value: "$500,000",
    Trade_Country: "Dubai",
    B2B_Listing: "DentaCarts Ltd"
  };

  function normalizeString(str: string) {
    return str.replace(/[^a-zA-Z0-9 ]/g, '');
  }

  return (
    <section className="max-w-[800px] mx-auto">
      <div>
        <div className="py-8">
          <p className="text-center text-3xl font-bold">Importers Data (Sample Report)</p>
          <div className="flex flex-row items-center justify-between mt-4">
            <button className="bg-primary text-white px-2 py-2 rounded flex flex-row items-center gap-2" onClick={() => navigate(-1)}>
              <IoMdArrowRoundBack />
              <span>Back</span>
            </button>
            <button onClick={() => toPDF()} className="bg-primary text-white px-2 py-2 rounded flex flex-row items-center gap-2">
              <span>Download Report</span>
              <FaDownload />
            </button>
          </div>
        </div>
        <div className="border text-sm mb-20" ref={targetRef}>
          {/* {loading && (
            <div className="flex flex-row items-center justify-center">
              <img width={80} src="/loader.gif" alt="Loading..." />
            </div>
          )} */}
          {!data && !loading && (
            <div className="text-center">
              <p className="text-2xl my-10">No data found.</p>
            </div>
          )}
          {!loading && data && (
            <div>
              <div className="bg-primary text-center text-white font-bold text-base py-3">Company Profile (Sample Report)</div>
              <DetailRow label="Company Name" value={data.company_name} />
              <DetailRow label="Country" value={data.Country} />
              <DetailRow label="Registered Address" value={normalizeString(data.Registered_Address)} />
              <DetailRow label="Address 1" value={normalizeString(data.Address1)} />
              <DetailRow label="Address 2" value={normalizeString(data.Address2)} />
              <DetailRow label="Address 3" value={normalizeString(data.Address3)} />
              <div className="flex flex-row flex-wrap px-3 py-3 even:bg-secondary">
                <div className="w-full max-w-64 font-bold">{"Website"}:</div>
                <div className="flex flex-row gap-4">
                  <div>www.goldenpraxis.com</div>
                  <div className="text-green-500">Verified ✔</div>
                </div>
              </div>
              <div className="flex flex-row flex-wrap px-3 py-3 even:bg-secondary">
                <div className="w-full max-w-64 font-bold">{"Email"}:</div>
                <div className="flex flex-row gap-4">
                  <div>info@goldenpraxis.com</div>
                  <div className="text-green-500">Verified ✔</div>
                </div>
              </div>
              {/* <DetailRow label="Email Verification" value={data.Email_Validation} /> */}
              <DetailRow label="Fax Number" value={data.Fax_Number} />
              <DetailRow label="Product Category" value={data.Product_S_Category} />
              <DetailRow label="Status" value={data.Status} />
              <DetailRow label="Membership Number" value={data.Membership_No} />
              <DetailRow label="License Number" value={data.License_No} />
              <DetailRow label="Expiry Date of License" value={data.Expiry_Date_Of_License} />
              <DetailRow label="Organization Valid/Invalid" value={data.Organization_Valid_Invalid} />
              <div className="bg-primary text-center text-white font-bold text-base py-3">Social Media</div>
              <DetailRow label="Facebook" value={data.facebook_link} />
              <DetailRow label="LinkedIn" value={data.linkedin_link} />
              <div className="bg-primary text-center text-white font-bold text-base py-3">Additional Information</div>
              <DetailRow label="IEC Code" value={data.IEC_Code} />
              <DetailRow label="BL Document" value={data.BL_Document} />
              <DetailRow label="ECGC Certificate" value={data.ECGC_Certificate} />
              <DetailRow label="Annual Turnover" value={data.Annual_Turnover} />
              <DetailRow label="Directors" value={data.Directors} />
              <DetailRow label="Chamber of Commerce" value={data.Chamber_of_Commerce} />
              <DetailRow label="Trade Value" value={data.Trade_Value} />
              <DetailRow label="Trade Country" value={data.Trade_Country} />
              <DetailRow label="B2B Listing" value={data.B2B_Listing} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
