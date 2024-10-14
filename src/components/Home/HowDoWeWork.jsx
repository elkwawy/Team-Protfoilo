import { useTranslation } from "react-i18next"
import { Img } from "react-image"
import i18n from "../../Languages/i18n";

const HowDoWeWork = () => {
    const {t} = useTranslation();


    return (
        <div className="flex  containerD flex-col">
            <div className="flex flex-col mb-[-2rem] gap-5 items-center">
                <h1 className="font-bold text-center sm:text-start text-3xl sm:text-4xl lg:text-5xl">{t("stepsHomeMainTitle")}</h1>
                <p className="text-gray-500 max-sm:mb-6 text-center sm:text-start">{t("stepsHomeMainText")}</p>
            </div>
            <div className="w-full grid grid-cols-1 min-[720px]:grid-cols-3 gap-12 min-[720px]:gap-14 lg:gap-28 m-0 min-[720px]:mt-28 min-[720px]:mb-10">
                <div className={`bg-white relative  min-[720px]:-translate-y-16  border-[1px]  rounded-md p-3 flex flex-col flex-wrap gap-5`}>
                    <h1 className="text-xl text-center font-bold pb-3 border-b-2"><span className=" text-main-color text-2xl">{t("number1")}</span> {t("stepsHomeFirstTitle")}</h1>
                    <p className="text-wrap flex-wrap w-full my-auto text-center text-sm min-[850px]:text-[16px]">{t("stepsHomeFirstText")}</p>
                    {i18n.language == 'ar' && <Img src={`/assets/images/home/arrow1.svg`} className={`${i18n.language != 'ar' ? " scale-x-[-1]" :""} hidden min-[720px]:block absolute z-30 top-1/4 left-0 -translate-x-full sm:w-14 lg:w-28`} />}
                    <Img src={'/assets/images/home/arrowSM.svg'} className="block min-[720px]:hidden absolute z-30  top-full left-1/2 w-7 -translate-x-1/2" />
                </div>
                <div className={`bg-white relative  min-[720px]:translate-y-8    border-[1px]  rounded-md p-3 flex flex-col flex-wrap gap-5`}>
                    <h1 className="text-xl text-center font-bold pb-3 border-b-2"><span className=" text-main-color text-2xl">{t("number2")}</span> {t("stepsHomeSecondTitle")}</h1>
                    <p className="text-wrap flex-wrap w-full my-auto text-center text-sm min-[850px]:text-[16px]">{t("stepsHomeSecondText")}</p>
                    <Img src={`/assets/images/home/arrow${i18n.language == 'ar' ? "2" : '1'}.svg`} className={`${i18n.language != 'ar' ? " scale-x-[-1]" :""} hidden min-[720px]:block absolute z-30 bottom-1/3 lg:bottom-1/6 left-0 -translate-x-full sm:w-16 lg:w-32`} />
                    {i18n.language == 'en' && <Img src={`/assets/images/home/arrow2.svg`} className={`scale-x-[-1] hidden min-[720px]:block absolute z-30 bottom-1/2 lg:bottom-1/4 right-0 translate-x-full sm:w-16 lg:w-32`} />}
                    <Img src={'/assets/images/home/arrowSM.svg'} className="block min-[720px]:hidden absolute z-30   top-full left-1/2 w-7 -translate-x-1/2" />
                </div>
                <div className={`bg-white min-[720px]:-translate-y-28 relative  -z-10  border-[1px]  rounded-md p-3 flex flex-col flex-wrap gap-5`}>
                    <h1 className="text-xl text-center font-bold pb-3 border-b-2"><span className=" text-main-color text-2xl">{t("number3")}</span> {t("stepsHomeThirdTitle")}</h1>
                    <p className="text-wrap flex-wrap w-full my-auto text-center text-sm min-[850px]:text-[16px]">{t("stepsHomeThirdText")}</p>
                </div>
            </div>
        </div>
    )
}

export default HowDoWeWork