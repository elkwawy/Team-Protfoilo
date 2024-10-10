import GetYourOffer from "../components/commonInServices/GetYourOffer";
import HeroSection from "../components/commonInServices/HeroSection";
import ServiceProjects from "../components/commonInServices/ServiceProjects";
import TextSsection from "../components/commonInServices/TextSsection";
import WhyWe from "../components/commonInServices/WhyWe";
import { FaGaugeHigh } from "react-icons/fa6";
import { PiCertificateFill } from "react-icons/pi";
import { MdGppGood } from "react-icons/md";
import { MdContactSupport } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";

const MobileService = () => {
    const prefix = {ar: "الحدود؟", en: "level?"};
    // const projects = [
    //     {pic:'/assets/images/services/projects/project.png', title: "project1", details: "sdklahdjsbxkabckhavchavshkdbka asdvas a sdbhabkca asbdkhasb mab basdbksds", techs: ['react', 'tailwind', "router", 'figma'] },
    //     {pic:'/assets/images/services/projects/GYM.png', title: "project2", details: "sdklahdjsbxkabckhavchavshkdbka asdvas a sdbhabkca asbdkhasb mab basdbksds", techs: ['react', 'tailwind', "router", 'figma'] },
    //     {pic:'/assets/images/services/projects/Honey.jpg', title: "project3", details: "sdklahdjsbxkabckhavchavshkdbka asdvas a sdbhabkca asbdkhasb mab basdbksds", techs: ['react', 'tailwind', "router", 'figma'] },
    // ]
    const features = [
        {icon:  <FaGaugeHigh />, title: "mobileWhyWe1Title", text:"mobileWhyWe1Text"},
        {icon:  <PiCertificateFill />, title: "mobileWhyWe2Title", text:"mobileWhyWe2Text"},
        {icon:  <MdGppGood />, title: "mobileWhyWe3Title", text:"mobileWhyWe3Text"},
        {icon:  <RiTeamFill />, title: "whyWe4Title", text:"whyWe4Text"},
        {icon:  <MdContactSupport />, title: "whyWe5Title", text:"whyWe5Text"},
    ]
    return (
        <div className=" containerD flex flex-col gap-24 py-12">
            <HeroSection src={'/assets/images/services/mobileHero.webp'} title={"mobileHeroTitle"} text={"mobileHeroText"} />
            
            <WhyWe features={features} />
            
            <TextSsection header={"mobileTextSectionTitle"} p1={"mobileTextSectionText1"} p2={"mobileTextSectionText2"} p3={"mobileTextSectionText3"} prefix={prefix} />
            
            <ServiceProjects  />

            
            <GetYourOffer />
        </div>
    )
}

export default MobileService