import { t } from "i18next";
import uiux from "../../../public/assets/images/uiux.webp";
import uibanner from "../../../public/assets/images/uibanner.webp";
import { FaArrowRightLong } from "react-icons/fa6";
import ServiceItems from "../../components/ServiceItems";
import { FaQuestionCircle } from "react-icons/fa";
import ServiceProjects from "../../components/commonInServices/ServiceProjects";
function Services() {
  return (
    <section className="">
      <div className="gap-16 items-center">
        <div className="relative font-light py-20 flex flex-col justify-center items-center text-gray-500 sm:text-lg">
          <div className="absolute inset-0">
            <img
              src={uibanner}
              alt="Background Image"
              className="object-cover object-center w-full h-full"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
              {t("servTitle1")}
            </h2>
            <p className="mb-4 text-white">{t("servDesc1")}</p>
            <button className="inline-flex gap-2 items-center text-white bg-main-color hover:bg-hover-main-color focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              {t("servBtn")}
              <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto containerD px-4">
        <div className="myD relative overflow-hidden bg-gradient-to-r from-main-color to-hover-main-color rounded-xl shadow-2xl p-8 text-white">
          <div className="absolute top-0 left-0 w-full h-full bg-white opacity-10 transform -skew-x-12"></div>
          <div className="relative z-10">
            <p className="text-2xl font-bold mb-4">{t("servTitleSection2")}</p>

            <p className="text-sm text-color-black font-medium mb-4">
              {t("servDescSection2")}
            </p>
          </div>
        </div>
      </div>

      <div className=" gap-4 containerD max-w-screen-xl lg:px-6 mx-auto">
        <img className="myD w-full rounded-lg" src={uiux} alt="" />
      </div>

      <ServiceItems />
      <div className="containerD">
        <ServiceProjects />

        <div className="myD bg-color-white p-8 rounded-lg shadow border border-gray-100">
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

export default Services;
