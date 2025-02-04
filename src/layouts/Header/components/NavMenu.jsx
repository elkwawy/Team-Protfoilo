import React, { useState } from "react";
import ServicesNav from "./ServicesNav";
import { FaChevronDown } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NavMenu = ({
  selectedLanguage,
  setIsMenuOpen,
  isServices,
  setIsServices,
  className,
}) => {
  const { t } = useTranslation();
  const loc = useLocation();
  let WebsiteParts = [
    { name: t("navLi1"), link: "/" },
    { name: t("navLi2") },
    { name: t("navLi3"), link: "/steps" },
    { name: t("navLi4"), link: "/ourWork" },
    { name: t("navLi5"), link: "/aboutUs" },
  ];
  return (
    <nav className={`flex items-center gap-1  ${className}`}>
      {WebsiteParts.map((li, index) =>
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
                isActive && !isServices
                  ? "border-main-color text-main-color"
                  : "border-transparent text-color-black "
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
              className={`${
                isServices ||
                loc.pathname == "/uiux_services" ||
                loc.pathname == "/web_services"
                  ? "border-main-color text-main-color"
                  : "text-color-black border-transparent"
              } font-[500]  text-[20px] transition-all duration-300 border-b-2  hover:border-main-color hover:text-main-color flex items-center`}
            >
              {li.name}
              <FaChevronDown
                className={`inline font-normal text-sm duration-300 ease-in-out transition-transform ${
                  selectedLanguage === "en" ? "ml-1" : "mr-1"
                } ${isServices ? "rotate-180" : ""}`}
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
  );
};

export default NavMenu;
