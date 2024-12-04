import FaqSection from "../components/FaqSection";
import ContactSection from "../components/HomepageSections/ContactSection";
import ExporterSection from "../components/HomepageSections/ExporterSection";
import ImageTextSlider from "../components/HomepageSections/ImageTextSlider";
import ImporterSection from "../components/HomepageSections/ImporterSection";
import LogisticSection from "../components/HomepageSections/LogisticSection";
import StatSection from "../components/HomepageSections/StatSection";
import TrainerSection from "../components/HomepageSections/TrainerSection";
import ReviewSection from "../components/ReviewSection";

export default function Homepage(){
  return (
    <main>
      <ImageTextSlider />
      <ImporterSection />
      <ExporterSection />
      <TrainerSection />
      <LogisticSection />
      <ReviewSection />
      <StatSection />
      <ContactSection />
      <FaqSection />
    </main>
  )
}
