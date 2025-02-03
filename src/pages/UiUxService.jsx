import HeroSection from "@/components/commonInServices/HeroSection";
import ServiceProjects from "@/components/commonInServices/ServiceProjects";
import TextSsection from "@/components/commonInServices/TextSsection";
import WhyWe from "@/components/commonInServices/WhyWe";
import { FeaturesUiUx } from "@/data/features/FeaturesUiUx";
const UiUxService = () => {
  const prefix = { ar: "المناسبة؟", en: "interface?" };

  return (
    <div className="containerD flex flex-col gap-28 pt-12">
      <HeroSection
        src={"/assets/servicesImgs/uiuxHero.webp"}
        title={"uiuxHeroTitle"}
        text={"uiuxHeroText"}
      />

      <WhyWe features={FeaturesUiUx} />

      <TextSsection
        header={"uiuxTextSectionTitle"}
        p1={"uiuxTextSectionText1"}
        p2={"uiuxTextSectionText2"}
        p3={"uiuxTextSectionText3"}
        prefix={prefix}
      />

      <ServiceProjects />
    </div>
  );
};

export default UiUxService;
