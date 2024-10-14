import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { MdDesignServices } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { MdMobileFriendly } from "react-icons/md";

const OurServices = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-6 containerD sm:gap-10">
      <div className="flex flex-col gap-5 ">
        <h1 className="font-bold text-center sm:text-start text-3xl sm:text-4xl lg:text-5xl">
          {t("ourHomeServicesTitle")}
        </h1>
        <p className="text-gray-500 text-lg text-center sm:text-start">
          {t("ourHomeServicesText")}
        </p>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 min-[855px]:grid-cols-2 gap-5">
      
        <div className="bg-white rounded-md border-[1px] p-5 flex flex-col gap-5 lg:gap-8">
          <div className="p-3 w-fit rounded-full flex items-center justify-center bg-[#d2e9fa41]">
            <MdDesignServices className="text-3xl text-main-color" />
          </div>
          <div className="flex flex-col justify-between gap-5 md:max-h-64 lg:min-h-64 xl:min-h-56">
            <h1 className="text-2xl sm:text-xl lg:text-3xl font-bold">
              {t("ourHomeServicesUiuxTitle")}
            </h1>
            <p className="">{t("ourHomeServicesUiuxText")}</p>
            <Link to="uiux_services" className="trans w-full bg-main-color justify-center rounded-md py-1 flex gap-2 items-center text-white hover:bg-hover-main-color">
              {t("ourHomeServicesUiuxLink")}
            </Link>
          </div>
        </div>

        <div className="bg-white  rounded-md border-[1px] p-5 flex flex-col gap-5 lg:gap-8">
          <div className="p-3 w-fit rounded-full flex items-center justify-center bg-[#d2e9fa41]">
            <FaCode className="text-3xl text-main-color" />
          </div>

          <div className="flex flex-col justify-between gap-5 md:max-h-64 lg:min-h-64 xl:min-h-56">
            <h1 className="text-2xl sm:text-xl lg:text-3xl font-bold">
              {t("ourHomeServicesWebTitle")}
            </h1>
            <p className="">{t("ourHomeServicesWebText")}</p>
            <Link to="web_services" className="trans rounded-md w-full bg-main-color justify-center py-1 flex gap-2 items-center text-white hover:bg-hover-main-color">
              {t("ourHomeServicesWebLink")}
            </Link>
          </div>
        </div>

        {/* <div className='bg-white rounded-md border-[1px] p-5 flex flex-col gap-5 lg:gap-8'>
                    <div className='p-3 w-fit rounded-full flex items-center justify-center bg-[#d2e9fa41]'>
                        <MdMobileFriendly className='text-3xl text-main-color' />
                    </div>

                    <div className='flex flex-col justify-between gap-5 md:max-h-64 lg:min-h-64 xl:min-h-56'>
                        <h1 className='text-2xl sm:text-xl lg:text-3xl font-bold'>{t("ourHomeServicesMobileTitle")}</h1>
                        <p className=''>{t("ourHomeServicesMobileText")}</p>
                        <Link className='trans rounded-md w-full bg-main-color justify-center py-1 flex gap-2 items-center text-white hover:bg-hover-main-color'>{t("ourHomeServicesMobileLink")}</Link>
                        </div>
                    </div>*/}
      </div>
    </div>
  );
};

export default OurServices;
