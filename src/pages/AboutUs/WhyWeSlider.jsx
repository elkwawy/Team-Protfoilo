import { lazy, useRef, useState } from "react";
import { CiHeadphones } from "react-icons/ci";
import { FaAward, FaGripfire } from "react-icons/fa";
import { MdHeadsetMic } from "react-icons/md";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";


const WhyWeSlider = () => {
    const { t } = useTranslation();
    const [activeLink, setActiveLink] = useState("");
    const sliderRef = useRef(null);
    const slidersettings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: "ondemand",
      };
    
      const handleSlideChange = (link) => {
        if (activeLink === link) return; // Avoid unnecessary re-renders
        setActiveLink(link);
    
        if (sliderRef.current) {
          const slideIndex = getSlideIndex(link);
          sliderRef.current.slickGoTo(slideIndex);
        }
      };
    
      const getSlideIndex = (link) => {
        switch (link) {
          case "quality":
            return 0;
          case "fastResponse":
            return 1;
          case "provideSupport":
            return 2;
          default:
            return 0;
        }
      };
    return (
        <div className="bg-gradient-to-l from-blue-200 to-blue-400 py-10 ">
          <div className="containerD grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-6 xl:col-span-8 ">
              <div className="w-[100%]  xl:w-[70%]">
                <h4 className="text-3xl font-bold text-gray-600">
                  {t("whyUs1")}
                </h4>
                <p className="my-4 font-bold text-3xl">{t("whyUs2")}</p>
                <p>{t("whydec")}</p>
                <div className="flex justify-center md:justify-evenly items-center flex-wrap md:flex-nowrap gap-2 mt-6 text-blue-600">
                  <Link
                    to="#"
                    className={`bg-white py-2 px-2 xl:px-6 rounded-lg shadow-xl ${
                      activeLink === "quality"
                        ? "bg-gradient-to-t from-blue-300 to-blue-700 text-white"
                        : ""
                    }`}
                    onClick={() => handleSlideChange("quality")}
                  >
                    {t("Btn1")}
                    <FaAward className="inline mx-2 text-xl" />
                  </Link>
                  <Link
                    to="#"
                    className={`bg-white py-2 px-2 xl:px-6 rounded-lg shadow-xl ${
                      activeLink === "fastResponse"
                        ? "bg-gradient-to-t from-blue-300 to-blue-700 text-white"
                        : ""
                    }`}
                    onClick={() => handleSlideChange("fastResponse")}
                  >
                    {t("Btn2")}
                    <FaGripfire className="inline mx-2 text-xl" />
                  </Link>
                  <Link
                    to="#"
                    className={`bg-white py-2 px-2 xl:px-6 rounded-lg shadow-xl ${
                      activeLink === "provideSupport"
                        ? "bg-gradient-to-t from-blue-300 to-blue-700 text-white"
                        : ""
                    }`}
                    onClick={() => handleSlideChange("provideSupport")}
                  >
                    {t("Btn3")}
                    <CiHeadphones className="inline mx-2 text-xl" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Slider Component */}
            <div className="col-span-12 md:col-span-6 xl:col-span-4  rounded-lg bg-white shadow-2xl">
              <Slider {...slidersettings} ref={sliderRef}>
                <div className="text-center">
                  <div className=" p-4  text-blue-600 ">
                    <h3 className="text-xl font-bold my-2">
                      <FaAward className="mb-2 inline-block" /> {t("Btn1")}
                    </h3>
                    <p>{t("Btn1Dec")}</p>
                  </div>
                </div>

                <div className="text-center">
                  <div className=" p-4  text-blue-600  ">
                    <h3 className="text-xl font-bold my-2">
                      <FaGripfire className="mb-2 inline-block" /> {t("Btn2")}
                    </h3>
                    <p>{t("Btn2Dec")}</p>
                  </div>
                </div>

                <div className="text-center">
                  <div className=" p-4 text-blue-600  ">
                    <h3 className="text-xl font-bold my-2">
                      <MdHeadsetMic className="mb-2 inline-block" /> {t("Btn3")}
                    </h3>
                    <p>{t("Btn3Dec")}</p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
    )
}

export default WhyWeSlider