import { useState } from "react";
import { Link } from "react-router-dom";
import { Img } from "react-image";
import LoadingSpinner from "@/utils/LoadingSpinner";
import LanguageSelector from "./components/LanguageSelector";
import BtnContactUs from "./components/BtnContactUs";
import NavMenu from "./components/NavMenu";
import BtnMenu from "./components/BtnMenu";
const Header = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(
    (localStorage.length > 0 && localStorage.getItem("lng")) || "ar"
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServices, setIsServices] = useState(false);

  return (
    <header className="py-2 bg-white shadow">
      <div className="containerD flex flex-wrap justify-between items-center">
        {/* Logo */}
        <div className="flex items-center  ">
          <Link to="/">
            <Img
              src="/assets/.codeLogo/logo.webp"
              alt=""
              className={`h-14 ${selectedLanguage === "ar" ? "ml-6" : ""}`}
              loader={<LoadingSpinner />}
            />
          </Link>
        </div>

        <NavMenu
          selectedLanguage={selectedLanguage}
          setIsMenuOpen={setIsMenuOpen}
          setIsServices={setIsServices}
          isServices={isServices}
          className={`max-[900px]:hidden  ${
            selectedLanguage === "en" && "mr-4"
          }`}
        />

        {/* Buttons Selection */}
        <div
          className={`flex items-center gap-2 ${
            selectedLanguage === "ar" && "max-[900px]:-mr-6"
          } `}
        >
          <LanguageSelector
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
          />

          <BtnContactUs
            selectedLanguage={selectedLanguage}
            setIsMenuOpen={setIsMenuOpen}
            className="max-[388px]:hidden"
          />
        </div>

        <BtnMenu
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          setIsServices={setIsServices}
        />
      </div>
      <div
        className={`transition-all duration-500 ease-in-out transform ${
          isMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col max-[900px]:mt-2 max-[900px]:pt-2 max-[900px]:border-t gap-2 items-center justify-center">
          <NavMenu
            selectedLanguage={selectedLanguage}
            setIsMenuOpen={setIsMenuOpen}
            setIsServices={setIsServices}
            isServices={isServices}
            className={`min-[900px]:hidden flex-col gap-4 z-40`}
          />
          <BtnContactUs
            selectedLanguage={selectedLanguage}
            setIsMenuOpen={setIsMenuOpen}
            className="min-[388px]:hidden"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
