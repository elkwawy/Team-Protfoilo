import LazyImage from "@/utils/LazyImage";
import { useTranslation } from "react-i18next";


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
                <LazyImage
                    src="/assets/aboutUs/aboutUs-img2.webp"
                    alt="About Us"
                    parent={`h-[350px] w-full rounded-lg`}
                    className={`w-full h-full rounded-lg trans`}
                />
            </div>
        </>
    )
}

export default GreetingSection