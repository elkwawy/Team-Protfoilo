import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick'; // استيراد مكتبة Slider
import { FaAward, FaGripfire } from 'react-icons/fa';
import { MdHeadsetMic } from 'react-icons/md';
import { CiHeadphones } from 'react-icons/ci';
import { useTranslation } from 'react-i18next';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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
        <div className='containerD text-center'>
          <h2 className='text-3xl'>{t("aboutHidding1")}</h2>
          <h3 className='text-2xl my-2'>
            {t("aboutHidding2")} <span className='text-main-color'>{t("aboutHidding3")}</span>
          </h3>
          <p className='text-xl mb-6'>
            {t("aboutDes1")}  <span className='text-main-color '>{t("aboutDes2")}</span>
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
          <div className='text-gray-500 text-lg'>
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
            <div className='col-span-12 md:col-span-6 xl:col-span-4  rounded-lg bg-white shadow-2xl'>
              <Slider {...slidersettings} ref={sliderRef}>
                <div className='text-center'>
                  <div className=' p-4  text-blue-600 '>
                    <h3 className='text-xl font-bold my-2'>
                      <FaAward className='mb-2 inline-block' /> {t("Btn1")}
                    </h3>
                    <p>{t("Btn1Dec")}</p>
                  </div>
                </div>

                <div className='text-center'>
                  <div className=' p-4  text-blue-600  '>
                    <h3 className='text-xl font-bold my-2'>
                      <FaGripfire className='mb-2 inline-block' /> {t("Btn2")}
                    </h3>
                    <p>{t("Btn2Dec")}</p>
                  </div>
                </div>

                <div className='text-center'>
                  <div className=' p-4 text-blue-600  '>
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
            <div className='col-span-12 md:col-span-12 lg:col-span-8'>
              <h3 className='text-3xl font-bold mb-4'>{t("knowUsTitle")}</h3>
              <p className=''>{t("knowUsP1")}</p>
              <p className='my-6'>{t("knowUsP2")}</p>
              <p className='mb-4'>{t("knowUsP3")}</p>
            </div>

            <div className='col-span-12 md:col-span-12 lg:col-span-4 rounded overflow-hidden'>
              <img
                src='public\assets\images\aboutUs\christopher-gower-m_HRfLhgABo-unsplash (1).webp'
                alt=''
                className='w-full h-full object-cover'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}