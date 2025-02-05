import HeroSection from "@/components/commonInServices/HeroSection";
import TextSsection from "@/components/commonInServices/TextSsection";
import WhyWe from "@/components/commonInServices/WhyWe";
import React from "react";
import { CgDesignmodo } from "react-icons/cg";
import { IoCheckmarkCircle } from "react-icons/io5";
import { MdContactSupport, MdDesignServices } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";

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
        </div>
    )
}

export default UiUxService;
