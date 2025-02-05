import HeroSection from "@/components/commonInServices/HeroSection";
import TextSsection from "@/components/commonInServices/TextSsection";
import WhyWe from "@/components/commonInServices/WhyWe";
import React from "react";
import { MdAutoAwesome, MdContactSupport } from "react-icons/md";
import { PiDevicesFill } from "react-icons/pi";
import { RiTeamFill } from "react-icons/ri";
import { SiAwesomelists } from "react-icons/si";

const WebService = () => {
    const prefix = {ar: 'مذهلًا؟', en:"awesome?"}
    const herSectionURL = `/assets/servicesImgs/webHero.webp`;
    const features = [
        {icon:  <SiAwesomelists />, title: "webWhyWe1Title", text:"webWhyWe1Text"},
        {icon:  <MdAutoAwesome />, title: "webWhyWe2Title", text:"webWhyWe2Text"},
        {icon:  <PiDevicesFill />, title: "webWhyWe3Title", text:"webWhyWe3Text"},
        {icon:  <RiTeamFill />, title: "whyWe4Title", text:"whyWe4Text"},
        {icon:  <MdContactSupport />, title: "whyWe5Title", text:"whyWe5Text"},
    ];

    return (
        <div className=" containerD flex flex-col gap-32 pt-12">
            <HeroSection src={herSectionURL} title={"webHeroTitle"} text={"webHeroText"} />
            
            <WhyWe features={features} />
            
            <TextSsection header={"webTextSectionTitle"} p1={"webTextSectionText1"} p2={"webTextSectionText2"} p3={null} prefix={prefix} />
        </div>
    )
}

export default WebService;
