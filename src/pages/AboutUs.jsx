import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import WhyWeSlider from "@/pages/AboutUs/WhyWeSlider"
import ExploreMoreAboutUs from "@/pages/AboutUs/ExploreMoreAboutUs";
import GreetingSection from "@/pages/AboutUs/GreetingSection";
import LoadingSpinner from "@/utils/LoadingSpinner";
const TeamDC = lazy(() => import("@/components/TeamDC"))

const AboutUs = () => {
  const { t } = useTranslation();
  const [isTeamDCVisible, setIsTeamDCVisible] = useState(false);
  const teamDCRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsTeamDCVisible(true);
          observer.disconnect(); // Stop observing after it's loaded
        }
      },
      { threshold: 0.1 }
    );

    if (teamDCRef.current) {
      observer.observe(teamDCRef.current);
    }

    return () => observer.disconnect();
  }, []);

  

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

        {/*  fake div to load teamDC */}
        <div ref={teamDCRef} />

        {isTeamDCVisible && (
          <Suspense fallback={<div className="w-full flex justify-center items-center mt-5"><LoadingSpinner /></div>}>
            <TeamDC />
          </Suspense>
        )}
      </section>
    </>
  );
}

export default AboutUs;