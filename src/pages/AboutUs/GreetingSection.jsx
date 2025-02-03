import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';


const GreetingSection = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className="containerD text-center">
                <h2 className="text-5xl font-bold mb-5">{t("aboutHidding1")}</h2>
                <h3 className="text-3xl  font-[600] ml-20 my-4">
                    {t("aboutHidding2")}{" "}
                    <span className="text-main-color">{t("aboutHidding3")}</span>
                </h3>
                <p className="text-xl mb-6">
                    {t("aboutDes1")}{" "}
                    <span className="text-main-color">{t("aboutDes2")}</span>
                </p>
                </div>
                
            <div className=" w-[80%] sm:w-1/2 mx-auto   ">
                <LazyLoadImage
                    src="/assets/aboutUs/aboutUs-img2.webp"
                    alt="About Us"
                    effect={"blur"}
                    loading="lazy"
                    width={"100%"}
                    // loader={<div className="w-full h-[350px] bg-gray-200 animate-pulse rounded-lg" />}
                    className={`w-full max-h-[350px]  rounded-lg object-cover transition-opacity duration-500`}
                />
            </div>
        </>
    )
}

export default GreetingSection