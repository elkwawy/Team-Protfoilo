import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CiHeadphones } from 'react-icons/ci';
import { FaAward, FaGripfire } from 'react-icons/fa';
import { MdHeadsetMic } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Slider from 'react-slick'; // استيراد مكتبة Slider
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function About() {
  const { t } = useTranslation();
  const [activeLink, setActiveLink] = useState("quality");
  const sliderRef = useRef(null); 

 
  const slidersettings = {
    dots: true, 
    infinite: true,
    speed: 1000, 
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    slidesToShow: 1,  
    slidesToScroll: 1,
    beforeChange: (current, next) => setActiveLink(next), 
  };

  
  const handleSlideChange = (link) => {
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
    <>
      <section className='myD'>
        <div className='containerD'>
          <h2 className='text-3xl'>{t("aboutHidding1")}</h2>
          <h3 className='text-2xl my-2'>
            {t("aboutHidding2")} <span className='text-main-color'>{t("aboutHidding3")}</span>
          </h3>
          <p className='mb-6'>
            {t("aboutDes1")}  <span className='text-main-color'>{t("aboutDes2")}</span>
          </p>
        </div>

        <div className='rounded-xl overflow-hidden containerD'>
          <img
            src="assets\images\aboutUs\marvin-meyer-SYTO3xs06fU-unsplash (1).jpg"
            className='w-full max-h-[500px] object-cover'
            alt=''
          />
        </div>

        <div className='containerD '>
        <div className='myD'>
        <h3 className='text-4xl font-bold'>{t("whotitl")}</h3>
          <div className='text-gray-500 '>
            <p className='my-4 '>{t("whoDes1")}</p>
            <p className='mb-4'>{t("whoDes2")}</p>
            <p className='mb-4'>{t("whoDes3")}</p>
            <p className='mb-4'>{t("whoDes4")}</p>
          </div>
        </div>
        </div>

        <div className='bg-gradient-to-l from-blue-300 to-blue-500 py-10 '>
          <div className='containerD grid grid-cols-12 gap-4'>
            <div className='col-span-12 md:col-span-6 xl:col-span-8 '>
              <div className='w-[100%]  xl:w-[70%]'>
                <h4 className='text-3xl font-bold text-gray-600'>{t("whyUs1")}</h4>
                <p className='my-4 font-bold text-3xl'>{t("whyUs2")}</p>
                <p>{t("whydec")}</p>
                <div className='flex justify-center md:justify-evenly items-center flex-wrap md:flex-nowrap gap-2 mt-6 text-blue-600'>
                  <Link
                    to="#"
                    className={`bg-white py-2 px-2 xl:px-6 rounded-lg shadow-xl ${
                      activeLink === "quality" ? "bg-gradient-to-t from-blue-300 to-blue-700 text-white" : ""
                    }`}
                    onClick={() => handleSlideChange("quality")}
                  >
                    {t("Btn1")}
                    <FaAward className='inline mx-2 text-xl' />
                  </Link>
                  <Link
                    to="#"
                    className={`bg-white py-2 px-2 xl:px-6 rounded-lg shadow-xl ${
                      activeLink === "fastResponse" ? "bg-gradient-to-t from-blue-300 to-blue-700 text-white" : ""
                    }`}
                    onClick={() => handleSlideChange("fastResponse")}
                  >
                    {t("Btn2")}
                    <FaGripfire className='inline mx-2 text-xl' />
                  </Link>
                  <Link
                    to="#"
                    className={`bg-white py-2 px-2 xl:px-6 rounded-lg shadow-xl ${
                      activeLink === "provideSupport" ? "bg-gradient-to-t from-blue-300 to-blue-700 text-white" : ""
                    }`}
                    onClick={() => handleSlideChange("provideSupport")}
                  >
                    {t("Btn3")}
                    <CiHeadphones className='inline mx-2 text-xl' />
                  </Link>
                </div>
              </div>
            </div>

            {/* Slider Component */}
            <div className='col-span-12 md:col-span-6 xl:col-span-4'>
              <Slider {...slidersettings} ref={sliderRef}>
                <div className='text-center'>
                  <div className='bg-white p-4 rounded-lg text-blue-600 shadow-2xl '>
                    <h3 className='text-xl font-bold my-2'>
                      <FaAward className='mb-2 inline-block' /> {t("Btn1")}
                    </h3>
                    <p>{t("Btn1Dec")}</p>
                  </div>
                </div>

                <div className='text-center'>
                  <div className='bg-white p-4 rounded-lg text-blue-600 shadow-2xl'>
                    <h3 className='text-xl font-bold my-2'>
                      <FaGripfire className='mb-2 inline-block' /> {t("Btn2")}
                    </h3>
                    <p>{t("Btn2Dec")}</p>
                  </div>
                </div>

                <div className='text-center'>
                  <div className='bg-white p-4 rounded-lg text-blue-600 shadow-2xl'>
                    <h3 className='text-xl font-bold my-2'>
                      <MdHeadsetMic className='mb-2 inline-block' /> {t("Btn3")}
                    </h3>
                    <p>{t("Btn3Dec")}</p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>

        <div className='containerD'>
          <div className='myD grid grid-cols-12 gap-4'>
            <div className='col-span-12 md:col-span-8'>
              <h3 className='text-3xl font-bold mb-4'>{t("knowUsTitle")}</h3>
              <p className='mb-4'>{t("knowUsP1")}</p>
              <p>{t("knowUsP2")}</p>
            </div>

            <div className='col-span-12 md:col-span-4 rounded overflow-hidden'>
              <img
                src='https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt=''
                className='w-full'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}