import { useTranslation } from "react-i18next";
import { FaQuestionCircle } from "react-icons/fa";

const FaqSection = ({ faqList }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white p-8 rounded-lg shadow border border-gray-100">
      <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900">
        {t("Faq")}
      </h2>
      <div className="grid pt-8 border-t border-gray-200 md:gap-14 md:grid-cols-2">
        {faqList.map((faq, index) => (
          <div key={index} >
            <h3 className="flex items-center gap-2 mb-4 text-lg font-medium text-gray-900">
              <FaQuestionCircle />
              {t(faq.question)}
            </h3>
            <p className="text-gray-500">{t(faq.answer)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
