import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../../public/assets/images/logo.webp";
import { IoMenu } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";
import ServicesNav from "./ServicesNav";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { Img } from "react-image";
import LoadingSpinner from "../../utils/LoadingSpinner";
import { FaChevronDown } from 'react-icons/fa'; 

const Header = () => {
  const { t } = useTranslation();
  let ul = [
    { name: t("navLi1"), link: "/" },
    { name: t("navLi2") },
    { name: t("navLi3"), link: "/steps" },
    { name: t("navLi4"), link: "/ourWork" },
    { name: t("navLi5"), link: "/aboutUs" },
  ];
  const loc = useLocation();
  const [isServices, setIsServices] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("ar");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false); 

  const options = [
    { value: 'en', label: 'English' },
    { value: 'ar', label: 'العربية' }
  ];

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (value) => {
    setSelectedLanguage(value); // Update the selected language
    setIsOpen(false); // Close dropdown after selection
  };


  useEffect(() => {
    document.body.style.direction = selectedLanguage === "ar" ? "rtl" : "ltr";
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage]);

  return (
    <header className="py-2 bg-white shadow ">
      <div className="containerD flex flex-wrap justify-between items-center">
        {/* Logo */}
        <div className="flex items-center  ">
        <Link to="/">
        <Img
        src={logo}
        alt=""
        className={`h-14 ${selectedLanguage === "ar" ? "ml-6" : ""}`}
        loader={<LoadingSpinner />}
        />
        </Link>
        </div>
        {isMenuOpen ? (
          <MdOutlineCancel
            className="min-[880px]:hidden text-4xl cursor-pointer text-red-500 transition-all duration-500 transform ease-in-out opacity-100 scale-100"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              setIsServices(false);
            }}
          />
        ) : (
          <IoMenu
            className="min-[880px]:hidden text-4xl cursor-pointer text-[#51a8ff]  transition-all duration-500 transform ease-in-out opacity-100 scale-100"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              setIsServices(false);
            }}
          />
        )}

        {/* Navigation Menu */}
        <nav
          className={`transition-all duration-300 ease-linear transform z-50 ${
            isMenuOpen
              ? "max-[880px]:mt-[0.5rem] max-[880px]:pt-3 max-[880px]:border-t max-[880px]:border-gray-200"
              : "max-[880px]:mt-[-25rem]  border-transparent"
          } flex flex-col min-[880px]:flex-row ${
            selectedLanguage === "ar" ? "min-[880px]:space-x-6" : "lg:space-x-6"
          } min-[880px]:w-auto w-full items-center max-[880px]:my-4 max-[880px]:gap-2`}
        >
          {ul.map((li, index) =>
            index !== 1 ? (
              <NavLink
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsServices(false);
                }}
                to={li.link}
                key={index}
                className={({ isActive }) =>
                  `md:ml-6  ${
                    isActive && !isServices ? "border-main-color text-main-color" : "border-transparent text-color-black "
                  }  font-[500] text-[20px] transition-all duration-300 border-b-2  hover:border-main-color hover:text-main-color`
                }
              >
                {li.name}
              </NavLink>
            ) : (
              <div
                key={index}
                className="relative md:ml-4 -5"
                onClick={() => setIsServices(!isServices)}
              >
              <Link
              to={li.link}
              className={`${isServices || loc.pathname == '/uiux_services' || loc.pathname == '/web_services' ? "border-main-color text-main-color" : "text-color-black border-transparent"} font-[500]  text-[20px] transition-all duration-300 border-b-2  hover:border-main-color hover:text-main-color flex items-center`}
            >
              {li.name}
              <FaChevronDown
                className={`inline font-normal text-sm duration-300 ease-in-out transition-transform ${selectedLanguage === "en" ? "ml-1" : "mr-1"} ${isServices ? 'rotate-180' : ''}`}
              />
            </Link>
            

                {/* Dropdown */}
                {isServices && (
                  <ServicesNav
                    setIsServices={setIsServices}
                    setIsMenuOpen={setIsMenuOpen}
                  />
                )}
              </div>
            )
          )}
        </nav>
          {/* Buttons Selection */}
        <div
          className={`transition-all z-20 duration-300 ease-in-out transform ${
            isMenuOpen ? "max-[880px]:mt-[0rem]" : "max-[880px]:mt-[-25rem]"
          } flex gap-2 max-[880px]:mx-auto `}
        >
          
          {/* Select Start */}
            <div className="relative h-fit text-left w-full sm:w-auto">
              <button onClick={handleToggle} className="p-2 border-[1px] h-full focus:border-main-color rounded-md flex items-center justify-center gap-1.5">
                <span>{options.find((option) => option.value === selectedLanguage)?.label}</span>

                <FaChevronDown
                  className={` trans font-normal text-sm mt-0.5 ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {(
                <div
                  className={`absolute z-50 top-full left-0  mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg overflow-hidden  ${
                    isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                  style={{ transitionProperty: 'max-height, opacity', overflow: 'visible', zIndex:10000 }}
                >
                  {options.map((option) => (
                    <div
                      key={option.value}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSelect(option.value)}
                    >
                      {option.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          {/* Select End */}
          <Link to="/contactUs" onClick={() => setIsMenuOpen(false)}>
            <button className="bg-main-color text-color-white w-32 min-[880px]:w-full px-4 py-2 rounded hover:bg-hover-main-color  md:w-auto ">
              {t("navBtn")}
            </button>
          </Link>
        </div>
        
      </div>
    </header>
  );
};

export default Header;
