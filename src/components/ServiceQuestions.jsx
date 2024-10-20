import { t } from "i18next";
import { FaQuestionCircle } from "react-icons/fa";

function ServiceQuestions() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="containerD px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
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
              <h3 className="flex items-center mb-4 gap-2 text-lg font-medium text-gray-900 dark:text-white">
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
  );
}

export default ServiceQuestions;
