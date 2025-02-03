import HeroSection from "@/components/commonInServices/HeroSection"
import TextSsection from "@/components/commonInServices/TextSsection"
import { MdDesignServices } from "react-icons/md";
import { CgDesignmodo } from "react-icons/cg";
import { IoCheckmarkCircle } from "react-icons/io5";
import { MdContactSupport } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import WhyWe from "@/components/commonInServices/WhyWe";
import { ourUIUXProjects } from "@/data/ourServiceProjects";
import React, { Suspense } from "react";
import LoadingSpinner from "@/utils/LoadingSpinner";

const ServiceProjects = React.lazy(() => import('@/components/commonInServices/ServiceProjects'));


const UiUxService = () => {
    const prefix = {ar: 'المناسبة؟', en:"interface?"};
    const herSectionURL = `/assets/servicesImgs/uiuxHero.webp`;
    const features = [
        {icon:  <MdDesignServices />, title: "uiuxWhyWe1Title", text:"uiuxWhyWe1Text"},
        {icon:  <CgDesignmodo />, title: "uiuxWhyWe2Title", text:"uiuxWhyWe2Text"},
        {icon:  <IoCheckmarkCircle />, title: "uiuxWhyWe3Title", text:"uiuxWhyWe3Text"},
        {icon:  <RiTeamFill />, title: "whyWe4Title", text:"whyWe4Text"},
        {icon:  <MdContactSupport />, title: "whyWe5Title", text:"whyWe5Text"},
    ]
    return (
        <div className=" containerD flex flex-col gap-32 pt-12">
            <HeroSection src={herSectionURL} title={"uiuxHeroTitle"} text={"uiuxHeroText"} />
            
            <WhyWe features={features} />
            
            <TextSsection header={"uiuxTextSectionTitle"} p1={"uiuxTextSectionText1"} p2={"uiuxTextSectionText2"} p3={"uiuxTextSectionText3"} prefix={prefix} />
            
            <Suspense fallback={<div className="w-full h-full bg-gray-100 flex items-center justify-center"><LoadingSpinner />  </div>}>
                <ServiceProjects ourProjects={ourUIUXProjects} />
            </Suspense>
        </div>
    )
}

export default UiUxService;
