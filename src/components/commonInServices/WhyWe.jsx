import { useTranslation } from "react-i18next";
import i18n from "../../Languages/i18n"
import { memo } from "react";


const WhyWe = memo(({features}) => {
    const prefix = {ar:"لأن لدينا:", en:"cause we have:"}
    const {t} = useTranslation();
    return (
        <div className="flex flex-col gap-10">
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold sm:w-3/4 lg:w-2/3'>{t("whyWeTitle")} <span className="text-main-color">{i18n.language == 'ar' ? prefix.ar : prefix.en}</span></h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-10">
                {
                    features.map((feature) => (
                        <div key={feature.title} className="flex flex-col gap-3">
                            <div className="bg-[#d2e9fa41] text-main-color text-3xl  w-fit rounded-md p-2">
                                {feature.icon}
                            </div>
                            <h2 className="font-semibold text-xl sm:text-2xl">{t(feature.title)}</h2>
                            <p className="text-[#898384] text-sm sm:text-[15px]">{t(feature.text)}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
})

export default WhyWe