import React from "react";
import { useTranslation } from "react-i18next";
import { FiLink } from "react-icons/fi";
import { BiCodeAlt } from "react-icons/bi";
import { Img } from "react-image";
import i18n from "@/Languages/i18n";
import LoadingSpinner from "@/utils/LoadingSpinner";
import { ourProjects } from "@/data/ourProjects";

const ServiceProjects = () => {
  const { t } = useTranslation();
  const enterImg = (e) => {
    e.target.style.transform = `translateY(calc(-100% + 256px))`;
  };
  const leaveImg = (e) => {
    e.target.style.transform = "translateY(0)";
  };
  const prefix = { ar: "مهاراتنا:", en: "skills:" };
  return (
    <div className="w-full flex flex-col gap-12">
      <h1 className="text-3xl text-center mx-auto sm:text-4xl md:text-5xl font-bold sm:w-3/4 lg:w-2/3 ">
        {t("serviceProjectsTitle")}{" "}
        <span className="text-main-color">
          {i18n.language == "ar" ? prefix.ar : prefix.en}
        </span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
        {ourProjects.map((project) => (
          <div
            key={project.title}
            className={`flex bg-color-white w-full flex-col-reverse gap-8 sm:gap-0 items-center sm:items-start sm:flex-row justify-between p-3 sm:p-5  trans rounded-md  border-[1px]`}
          >
            <div className="flex  flex-col h-full justify-around">
              <h2 className="text-2xl font-bold">{t(project.title)}</h2>
              <p className="sm:w-3/4  text-gray-500">{t(project.details)}</p>
              <div className="flex w-full items-center justify-start gap-10">
                <a
                  href={project.demoLink}
                  className="flex items-center gap-1 rounded-md px-3 py-1 trans hover:bg-hover-main-color bg-main-color text-white cursor-pointer "
                >
                  {t("projectLiveDemo")}
                  <FiLink
                    className={`${
                      i18n.language == "en" ? "mt-0" : "mt-1"
                    } text-white text-sm`}
                  />
                </a>
                <a
                  href={project.repoLink}
                  className="flex gap-1 items-center rounded-md px-3 py-1 trans  hover:bg-gray-100 border-2 cursor-pointer "
                >
                  {t("projectRepo")}
                  <BiCodeAlt
                    className={`${
                      i18n.language == "en" ? "mt-0" : "mt-1"
                    } text-sm  `}
                  />
                </a>
              </div>
            </div>
            <div className="h-64 w-64 trans overflow-hidden rounded-md border-[1px] ">
              <Img
                onMouseEnter={enterImg}
                onMouseLeave={leaveImg}
                className=" transition-all duration-[2500ms] w-full"
                loader={
                  <div className="my-auto w-full h-64 bg-gray-100 border-[1px] flex items-center justify-center rounded-md">
                    <LoadingSpinner />
                  </div>
                }
                src={project.pic}
                alt={project.title}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceProjects;
