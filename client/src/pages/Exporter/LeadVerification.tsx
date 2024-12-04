import DownloadVerificationReport from "../../components/DownloadVerificationReport";
import LeadPagePayment from "../../components/LeadPagePayment";
import LeadVerificationGrid from "../../components/LeadVerificationCard";
import TextSlider from "../../components/TextSliderLeadVerification";

export default function LeadVerification(){
  return(
    <div>
      <TextSlider />
      <LeadVerificationGrid />
      <DownloadVerificationReport />
      <LeadPagePayment />
    </div>
  )
}
