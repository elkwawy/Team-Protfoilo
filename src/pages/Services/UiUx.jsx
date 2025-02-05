import uibanner from "/assets/servicesImgs/uiux-banner.webp";
import TextSsection from "@/components/Services/TextSsection";
import WhyWe from "@/components/Services/WhyWe";
import FaqSection from "@/components/Services/FaqSection";
import HeroSection from "@/components/Services/HeroSection";
import { FeaturesUiUx } from "@/data/features/FeaturesUiUx";
import { faqsUiUx } from "@/data/faqsList/faqsUiUx";
function UiUx() {
  const prefix = { ar: "الحدود؟", en: "level?" };

  return (
    <section className="space-y-2">
      <HeroSection src={uibanner} title="servTitle1" desc="servDesc1" />

      <div className="containerD flex flex-col gap-28 pt-12">
        <WhyWe features={FeaturesUiUx} />

        <TextSsection
          header={"uiuxTextSectionTitle"}
          p1={"uiuxTextSectionText1"}
          p2={"uiuxTextSectionText2"}
          p3={"uiuxTextSectionText3"}
          prefix={prefix}
        />

        <FaqSection faqsList={faqsUiUx} />
      </div>
    </section>
  );
}

export default UiUx;
