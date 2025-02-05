import appbanner from "/assets/servicesImgs/app-banner.webp";
import HeroSection from "@/components/Services/HeroSection";
import WhyWe from "@/components/Services/WhyWe";
import TextSsection from "@/components/Services/TextSsection";
import FaqSection from "@/components/Services/FaqSection";
import { FeaturesMobileApp } from "@/data/features/FeaturesApp";
import { faqsApp } from "@/data/faqsList/faqsApp";
function Application() {
  const prefix = { ar: "الحدود؟", en: "level?" };
  return (
    <section className="space-y-2">
      <HeroSection
        src={appbanner}
        title={"mobileHeroTitle"}
        desc={"mobileHeroText"}
      />

      <div className="containerD flex flex-col gap-28 pt-12">
        <WhyWe features={FeaturesMobileApp} />

        <TextSsection
          header={"mobileTextSectionTitle"}
          p1={"mobileTextSectionText1"}
          p2={"mobileTextSectionText2"}
          p3={"mobileTextSectionText3"}
          prefix={prefix}
        />

        <FaqSection faqsList={faqsApp} />
      </div>
    </section>
  );
}

export default Application;
