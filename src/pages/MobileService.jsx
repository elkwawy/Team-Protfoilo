import HeroSection from "@/components/commonInServices/HeroSection";
import ServiceProjects from "@/components/commonInServices/ServiceProjects";
import TextSsection from "@/components/commonInServices/TextSsection";
import WhyWe from "@/components/commonInServices/WhyWe";
import { FeaturesMobileApp } from "@/data/features/FeaturesApp";
const MobileService = () => {
  const prefix = { ar: "الحدود؟", en: "level?" };

  return (
    <div className="containerD flex flex-col gap-28 pt-12">
      <HeroSection
        src={"/assets/servicesImgs/mobileHero.webp"}
        title={"mobileHeroTitle"}
        text={"mobileHeroText"}
      />

      <WhyWe features={FeaturesMobileApp} />

      <TextSsection
        header={"mobileTextSectionTitle"}
        p1={"mobileTextSectionText1"}
        p2={"mobileTextSectionText2"}
        p3={"mobileTextSectionText3"}
        prefix={prefix}
      />

      <ServiceProjects />
    </div>
  );
};

export default MobileService;
