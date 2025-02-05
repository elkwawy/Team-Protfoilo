import { useTranslation } from "react-i18next";
import WhyWeSlider from "@/pages/AboutUs/WhyWeSlider"
import ExploreMoreAboutUs from "@/pages/AboutUs/ExploreMoreAboutUs";
import GreetingSection from "@/pages/AboutUs/GreetingSection";
import TeamDC from "@/components/TeamDC";

const AboutUs = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <section className="myD">

        <GreetingSection />
        
        <div className="containerD ">
          <div className="myD ">
            <h3 className="text-4xl font-bold">{t("whotitl")}</h3>

            <div className="text-gray-500 text-lg ">
              <p className="my-4 ">{t("whoDes1")}</p>
              <p className="mb-4">{t("whoDes2")}</p>
              <p className="mb-4">{t("whoDes3")}</p>
              <p className="mb-4">{t("whoDes4")}</p>
            </div>
          </div>
        </div>

        {/* When this slider change all the page re-render, solve that */}
        <WhyWeSlider />

        {/* ExploreMoreAboutUs */}
        <ExploreMoreAboutUs />

        {/* Team Data */}
        <TeamDC />
      </section>
    </>
  );
}

export default AboutUs;