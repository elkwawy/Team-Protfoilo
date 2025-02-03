import React, { Suspense } from "react";
import HeroSection from "@/components/commonInServices/HeroSection";
import TextSsection from "@/components/commonInServices/TextSsection";
import WhyWe from "@/components/commonInServices/WhyWe";
import LoadingSpinner from "@/utils/LoadingSpinner";
const ServiceProjects = React.lazy(() =>
  import("@/components/commonInServices/ServiceProjects")
);
import { FeaturesWeb } from "@/data/features/FeaturesWeb";
const WebService = () => {
  const prefix = { ar: "مذهلًا؟", en: "awesome?" };
  return (
    <div className=" containerD flex flex-col gap-28 pt-12">
      <HeroSection
        src={"/assets/servicesImgs/webHero.webp"}
        title={"webHeroTitle"}
        text={"webHeroText"}
      />

      <WhyWe features={FeaturesWeb} />

      <TextSsection
        header={"webTextSectionTitle"}
        p1={"webTextSectionText1"}
        p2={"webTextSectionText2"}
        p3={null}
        prefix={prefix}
      />

      <Suspense
        fallback={
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <LoadingSpinner />{" "}
          </div>
        }
      >
        <ServiceProjects />
      </Suspense>
    </div>
  );
};

export default WebService;
