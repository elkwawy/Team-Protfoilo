import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
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

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
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
          <Img
            src={logo}
            alt=""
            className={`h-14 ${selectedLanguage === "ar" ? "ml-6" : ""}`}
            loader={<LoadingSpinner />}
          />
        </div>
        {isMenuOpen ? (
          <MdOutlineCancel
            className="min-[795px]:hidden text-4xl cursor-pointer text-red-500 transition-all duration-500 transform ease-in-out opacity-100 scale-100"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              setIsServices(false);
            }}
          />
        ) : (
          <IoMenu
            className="min-[795px]:hidden text-4xl cursor-pointer text-[#51a8ff]  transition-all duration-500 transform ease-in-out opacity-100 scale-100"
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
              ? "max-[795px]:mt-[0.5rem] max-[795px]:pt-3 max-[795px]:border-t max-[795px]:border-gray-200"
              : "max-[795px]:mt-[-20rem]  border-transparent"
          } flex flex-col min-[795px]:flex-row ${
            selectedLanguage === "ar" ? "min-[795px]:space-x-6" : "lg:space-x-6"
          } min-[795px]:w-auto w-full items-center max-[795px]:my-4 max-[795px]:gap-2`}
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
                  ` ${
                    isActive ? "border-main-color text-main-color" : ""
                  }  font-[500] text-color-black text-[20px] transition-all duration-300 border-b-2 border-transparent hover:border-main-color hover:text-main-color md:ml-4 `
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
                  className="font-[500] text-color-black text-[20px] transition-all duration-300 border-b-2 border-transparent hover:border-main-color hover:text-main-color md:mr-1"
                >
                  {li.name}
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
          className={`transition-all z-50 duration-300 ease-in-out transform ${
            isMenuOpen ? "max-[795px]:mt-[0rem]" : "max-[795px]:mt-[-115rem]"
          } flex gap-2 max-[795px]:mx-auto `}
        >
          {/* <select
            name="language"
            value={selectedLanguage}
            onChange={handleLanguageChange}
            className={`${
              selectedLanguage === "ar" ? "pr-5" : "px-2"
            } sm:w-auto  py-[6.5px] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:border-transparent text-gray-700 cursor-pointer`}
          >
            <option value="en">English</option>
            <option value="ar">العربية</option>
          </select> */}

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
            <button className="bg-main-color text-color-white w-32 min-[795px]:w-full px-4 py-2 rounded hover:bg-hover-main-color  md:w-auto ">
              {t("navBtn")}
            </button>
          </Link>
        </div>
        
      </div>
    </header>
  );
};

export default Header;
