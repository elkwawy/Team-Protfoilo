import i18next from "i18next";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { MdRocket, MdRocketLaunch } from "react-icons/md";
import { Link } from "react-router-dom";


const HeroSection = ({src, title, text}) => {
    const {t} = useTranslation();
    const currLang = i18next.language;
    const [style, setStyle] = useState(currLang === 'ar' ? "90deg" : "-90deg");
    const [isLoaded, setIsLoaded] = useState(false);
    const backgroundRef = useRef();

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => setIsLoaded(true);
        
        const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            setIsLoaded(true);
        }
        });

        if (backgroundRef.current) {
        observer.observe(backgroundRef.current);
        }

        return () => {
        if (backgroundRef.current) {
            observer.unobserve(backgroundRef.current);
        }
        };
    }, [src]);

    useEffect(() => { 
        if (currLang === 'ar') { 
            setStyle("90deg");
        }
        else if(currLang === "en") { 
            setStyle("-90deg");
        }
    }, [currLang]); 

    return (
        <div ref={backgroundRef} style={
            {backgroundImage : isLoaded ? `url(${src})` : `url('/assets/images/services/loadingIMG.jpg')`, transition: 'opacity 0.5s ease-in-out',opacity: isLoaded ? "1" : "0.5"}} 
            className={`flex bg-cover sm:bg-contain p-2 sm:p-0 bg-no-repeat ${style === '90deg' ? "bg-left-top sm:bg-left" : "bg-right-top sm:bg-right"} relative  sm:h-[400px] items-center justify-between overflow-x-hidden rounded-md w-full`}>
            <div className={`flex flex-col gap-5 z-30 ${style === '90deg' ? "pr-1 pl-0" : "pl-1 pr-0"} w-[95%] sm:w-2/3`}>
                <h1 className="font-bold text-3xl sm:text-4xl min-[1181px]:text-5xl xl:text-6xl  z-30">{t(title)}</h1>
                <p className="text-sm min-[1200px]:text-[16px] z-30 text-black sm:text-[#6d6d6d]">{t(text)}</p>
                <Link to={'contact'} className={`bg-main-color group text-sm sm:text-[16px] flex items-center gap-2 rounded-sm px-6 py-2 w-fit text-white hover:bg-hover-main-color`} >
                    {t("heroBtnText")}
                    <MdRocket className="text-lg group-hover:hidden" />
                    <MdRocketLaunch  className="hidden text-lg group-hover:block"/>
                </Link>
            </div>
            {/* White shadow */}
            <div style={{background: `linear-gradient(${style}, rgba(250, 250, 250, 0) 2%, rgba(250, 250, 250, 0.8716736694677871) 55%, rgba(250, 250, 250, 0.9473039215686274) 100%)`}} className="serviceHeroSection absolute top-0 right-0  w-full h-full z-20" />
        </div>
    )
}

export default HeroSection