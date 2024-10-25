import { useTranslation } from "react-i18next";
import i18n from "../../Languages/i18n"
import { memo } from "react";


const WhyWe = memo(({features}) => {
    const prefix = {ar:"لأن لدينا:", en:"cause we have:"}
    const {t} = useTranslation();
    return (
        <div className="flex flex-col gap-10">
            <h1 className='text-3xl text-center mx-auto  sm:text-4xl md:text-5xl font-bold sm:w-3/4 lg:w-2/3'>{t("whyWeTitle")} <span className="text-main-color">{i18n.language == 'ar' ? prefix.ar : prefix.en}</span></h1>
            <div className="grid lg:hidden  grid-cols-1 sm:grid-cols-2  gap-5 sm:gap-10">
                {
                    features.map((feature, index) => (
                        <div key={feature.title} className={`flex flex-col gap-3 ${index == 4 ? "sm:col-span-2 sm:w-1/2 sm:mx-auto" : ""} text-center`}>
                            <div className="bg-[#d2e9fa41] text-main-color text-3xl mx-auto  w-fit rounded-md p-2">
                                {feature.icon}
                            </div>
                            <h2 className="font-semibold text-xl sm:text-2xl">{t(feature.title)}</h2>
                            <p className="text-[#898384] text-sm sm:text-[15px]">{t(feature.text)}</p>
                        </div>
                    ))
                }
            </div>
            <div className="flex flex-col gap-10 max-lg:hidden ">
                <div className=" grid grid-cols-3 gap-10">
                {
                    features.slice(0,3).map((feature, index) => (
                        <div key={feature.title} className={`flex flex-col gap-3 text-center`}>
                            <div className="bg-[#d2e9fa41] mx-auto text-main-color text-3xl  w-fit rounded-md p-2">
                                {feature.icon}
                            </div>
                            <h2 className="font-semibold text-xl sm:text-2xl">{t(feature.title)}</h2>
                            <p className="text-[#898384] text-sm sm:text-[15px]">{t(feature.text)}</p>
                        </div>
                    ))
                }
            </div>
            <div className="flex w-full items-center justify-center gap-10">
                {
                    features.slice(3,5).map((feature, index) => (
                        <div key={feature.title} className={`flex flex-col w-1/3 gap-3 text-center`}>
                            <div className="bg-[#d2e9fa41] mx-auto text-main-color text-3xl  w-fit rounded-md p-2">
                                {feature.icon}
                            </div>
                            <h2 className="font-semibold text-xl sm:text-2xl">{t(feature.title)}</h2>
                            <p className="text-[#898384] text-sm sm:text-[15px]">{t(feature.text)}</p>
                        </div>
                    ))
                }
            </div>
            </div>
        </div>
    )
})

export default WhyWe