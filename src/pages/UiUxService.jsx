import GetYourOffer from "../components/commonInServices/GetYourOffer"
import HeroSection from "../components/commonInServices/HeroSection"
import ServiceProjects from "../components/commonInServices/ServiceProjects"
import TextSsection from "../components/commonInServices/TextSsection"
import { MdDesignServices } from "react-icons/md";
import { CgDesignmodo } from "react-icons/cg";
import { IoCheckmarkCircle } from "react-icons/io5";
import { MdContactSupport } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import WhyWe from "../components/commonInServices/WhyWe";

const UiUxService = () => {
    const prefix = {ar: 'المناسبة؟', en:"interface?"};
    // const projects = [
    //     {pic:'/assets/images/services/projects/project.png', title: "project1", details: "sdklahdjsbxkabckhavchavshkdbka asdvas a sdbhabkca asbdkhasb mab basdbksds", techs: ['react', 'tailwind', "router", 'figma'] },
    //     {pic:'/assets/images/services/projects/GYM.png', title: "project2", details: "sdklahdjsbxkabckhavchavshkdbka asdvas a sdbhabkca asbdkhasb mab basdbksds", techs: ['react', 'tailwind', "router", 'figma'] },
    //     {pic:'/assets/images/services/projects/Honey.jpg', title: "project3", details: "sdklahdjsbxkabckhavchavshkdbka asdvas a sdbhabkca asbdkhasb mab basdbksds", techs: ['react', 'tailwind', "router", 'figma'] },
    // ]

    const features = [
        {icon:  <MdDesignServices />, title: "uiuxWhyWe1Title", text:"uiuxWhyWe1Text"},
        {icon:  <CgDesignmodo />, title: "uiuxWhyWe2Title", text:"uiuxWhyWe2Text"},
        {icon:  <IoCheckmarkCircle />, title: "uiuxWhyWe3Title", text:"uiuxWhyWe3Text"},
        {icon:  <RiTeamFill />, title: "whyWe4Title", text:"whyWe4Text"},
        {icon:  <MdContactSupport />, title: "whyWe5Title", text:"whyWe5Text"},
    ]
    return (
        <div className=" containerD flex flex-col gap-32 pt-12">
            <HeroSection src={'/assets/images/services/uiuxHero.webp'} title={"uiuxHeroTitle"} text={"uiuxHeroText"} />
            
            <WhyWe features={features} />
            
            <TextSsection header={"uiuxTextSectionTitle"} p1={"uiuxTextSectionText1"} p2={"uiuxTextSectionText2"} p3={"uiuxTextSectionText3"} prefix={prefix} />
            

            <ServiceProjects  />

        </div>
    )
}

export default UiUxService