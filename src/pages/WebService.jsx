import React, { Suspense } from "react"
import HeroSection from "../components/commonInServices/HeroSection"
import TextSsection from "../components/commonInServices/TextSsection"
import LoadingSpinner from "../utils/LoadingSpinner";
import GetYourOffer from "../components/commonInServices/GetYourOffer";
import WhyWe from "../components/commonInServices/WhyWe";
// const ServiceProjects = React.lazy(() => import('../components/commonInServices/ServiceProjects'));
import { SiAwesomelists } from "react-icons/si";
import { MdAutoAwesome } from "react-icons/md";
import { PiDevicesFill } from "react-icons/pi";
import { MdContactSupport } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import ServiceProjects from "../components/commonInServices/ServiceProjects";

const WebService = () => {
    const prefix = {ar: 'مذهلًا؟', en:"awesome?"}
    
    const features = [
        {icon:  <SiAwesomelists />, title: "webWhyWe1Title", text:"webWhyWe1Text"},
        {icon:  <MdAutoAwesome />, title: "webWhyWe2Title", text:"webWhyWe2Text"},
        {icon:  <PiDevicesFill />, title: "webWhyWe3Title", text:"webWhyWe3Text"},
        {icon:  <RiTeamFill />, title: "whyWe4Title", text:"whyWe4Text"},
        {icon:  <MdContactSupport />, title: "whyWe5Title", text:"whyWe5Text"},
    ];

    return (
        <div className=" containerD flex flex-col gap-24 py-12">
            <HeroSection src={'/assets/images/services/webHero.webp'} title={"webHeroTitle"} text={"webHeroText"} />
            
            <WhyWe features={features} />
            
            <TextSsection header={"webTextSectionTitle"} p1={"webTextSectionText1"} p2={"webTextSectionText2"} p3={null} prefix={prefix} />

            {/* <Suspense fallback={<div className="w-full bg-white h-full  flex items-center justify-center"><LoadingSpinner /></div>}> */}
            <ServiceProjects />
            {/* </Suspense> */}
            

            <GetYourOffer />
        </div>
    )
}

export default WebService