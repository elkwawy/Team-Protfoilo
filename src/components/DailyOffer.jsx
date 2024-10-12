import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const DailyOffer = () => {
  const { t } = useTranslation();
  return (
    <div className="myD">
      <div className="containerD flex items-center justify-between gap-5 max-[795px]:flex-col  bg-color-white p-8 rounded-lg shadow border border-gray-100">
        <div className="">
          <h1 className="text-[28px] font-bold text-color-black mb-4 max-[795px]:text-center">
            {t("dO_h1")}
          </h1>
          <p className="text-[16px] text-gray-500 max-[795px]:text-center">
            {t("dO_p")}
          </p>
        </div>
        <Link
          to="/contactUs"
          className="bg-blue-600 hover:bg-hover-main-color text-color-white text-[16px] px-4 py-2 rounded"
        >
          {t("dO_btn")}
        </Link>
      </div>
    </div>
  );
};

export default DailyOffer;
