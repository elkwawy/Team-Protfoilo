import { t } from "i18next";
import app from "../../../public/assets/images/app.webp";
import appbanner from "../../../public/assets/images/appbanner.webp";
import { FaArrowRightLong } from "react-icons/fa6";
import ServiceItems from "../../components/ServiceItems";
import { FaQuestionCircle } from "react-icons/fa";
function Application() {
  return (
    <section className="bg-white">
      <div className="gap-16 items-center  ">
        <div className="relative font-light py-20 flex flex-col justify-center items-center text-gray-500 sm:text-lg">
          <div className="absolute inset-0">
            <img
              src={appbanner}
              alt="Background Image"
              className="object-cover object-center w-full h-full"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
              {t("servTitle3")}
            </h2>
            <p className="mb-4 text-white">{t("servDesc3")}</p>
            <button className="inline-flex gap-2 items-center text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              {t("servBtn")}
              <FaArrowRightLong />
            </button>
          </div>
        </div>
        <div className=" gap-4  max-w-screen-xl lg:px-6 mx-auto containerD">
          <img className="w-full rounded-lg" src={app} alt="" />
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 containerD">
        <div className="relative overflow-hidden bg-gradient-to-r from-main-color to-hover-main-color rounded-xl shadow-2xl p-8 text-white">
          <div className="absolute top-0 left-0 w-full h-full bg-white opacity-10 transform -skew-x-12"></div>
          <div className="relative z-10">
            <p className="text-xl font-medium mb-4">
              {t("servAppTitleSection2")}
            </p>

            <p className="text-sm text-color-black font-medium mb-4">
              {t("servAppDescSection2")}
            </p>
          </div>
        </div>
      </div>

      <ServiceItems />

      <div className="bg-white">
        <div className="containerD px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 ">
            {t("servTitleSection5")}
          </h2>
          <div className="grid pt-8  border-t border-gray-200 md:gap-16 md:grid-cols-2">
            <div>
              <div className="mb-10">
                <h3 className="flex items-center gap-2 mb-4 text-lg font-medium text-gray-900">
                  <FaQuestionCircle />
                  {t("servq1Section5")}
                </h3>
                <p className="text-gray-500">{t("servAnsw1Sectionanswer5")}</p>
              </div>
            </div>
            <div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 gap-2 text-lg font-medium text-gray-900 ">
                  <FaQuestionCircle />
                  {t("servq2Section5")}
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {t("servAnsw2Sectionanswer5")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Application;
