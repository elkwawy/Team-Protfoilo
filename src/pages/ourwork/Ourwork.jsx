import { t } from 'i18next';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../../utils/LoadingSpinner';
import LazyImage from '../../utils/LazyImage';

export default function Ourwork() {
  let workDetails = [
    { name: t("projTitl"), tittle: t("projDec1"), imageSrc: "/assets/images/services/projects/project2.webp" },
    { name: t("projTit2"), tittle: t("projDec2"), imageSrc: "/assets/images/services/projects/GYM2.webp" },
    { name: t("projTit2"), tittle: t("projDec2"), imageSrc: "/assets/images/services/projects/Honey2.webp" }
  ];

  const preloadImages = (images) => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  };

  useEffect(() => {
    const imageSrcs = workDetails.map(work => work.imageSrc);
    preloadImages(imageSrcs);
  }, []); 

  return (
    <>
      <section className='myD text-center'>
        <div className='containerD'>
          <h2 className='text-3xl font-bold mb-4'>{t("ourworkTitl")}</h2>
          <p className='text-main-color text-xl'>{t("ourworkP1")}</p>

          <div className='myD grid grid-cols-12 gap-4'>
            {workDetails.map((work, index) => (
              <div key={index} className='mb-4 rounded-md shadow-lg overflow-hidden border border-gray-100 col-span-12 md:col-span-6 lg:col-span-4 hover:scale-105 duration-300'>
                <div className='max-h-[300px] overflow-scroll overflow-x-hidden'> 
                  <LazyImage src={work.imageSrc} alt={work.name} className='w-full h-full' height={"300px"} />
                </div>
                <div className='p-4 bg-white text-center'>
                  <h3 className='my-4'>
                    <span className='text-xl font-bold text-main-color'>{t("projectName")}:</span> {work.name}
                  </h3>
                  <p className='text-gray-500 mb-6'>{work.tittle}</p>
                  <Link to="#" className='shadow-xl rounded-md bg-main-color justify-center py-1 w-1/2 md:w-[40%] text-center inline-block m-auto hover:bg-hover-main-color text-white'>{t("ourworkBtn")}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
