import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const BtnContactUs = ({ setIsMenuOpen, selectedLanguage, className }) => {
  const { t } = useTranslation();
  return (
    <Link
      to="/contactUs"
      className={className}
      onClick={() => setIsMenuOpen(false)}
    >
      <button
        className={`bg-main-color text-color-white px-4 py-2 rounded hover:bg-hover-main-color ${
          selectedLanguage === "ar" ? "w-[102px]" : "w-[112px]"
        } `}
      >
        {t("navBtn")}
      </button>
    </Link>
  );
};

export default BtnContactUs;
