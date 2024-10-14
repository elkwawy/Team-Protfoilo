import { t } from 'i18next'
import React from 'react'
import { Link } from 'react-router-dom'
import HeroSection from '../../components/commonInServices/HeroSection'

export default function Ourwork() {
  let workDetails = [
    {name: t("projTitl"),tittle:t("projDec1"),imagesrc:"/assets/images/services/projects/project2.webp"},
    {name: t("projTit2"),tittle:t("projDec2"),imagesrc:"/assets/images/services/projects/GYM2.webp"},
    {name: t("projTit2"),tittle:t("projDec2"),imagesrc:"/assets/images/services/projects/Honey2.webp"},
  ]

  return <>
  <section className='myD text-center'>
<div className='containerD'>
<h2 className='text-3xl font-bold mb-4'>{t("ourworkTitl")}</h2>
<p className=' text-main-color text-xl'>{t("ourworkP1")}</p>

<div>



<div className='myD  grid grid-cols-12 gap-4 '>
  {workDetails.map((work, index) => (
    <div key={index} className='mb-4  rounded-md shadow-lg overflow-hidden border border-gray-100 col-span-12 md:col-span-6  lg:col-span-4 hover:scale-105 duration-300'>
    
      <div className='max-h-[300px] overflow-scroll overflow-x-hidden'> 
        <img src={work.imagesrc} alt='' className='w-full h-full' />
      </div>
     
      <div className=' p-4 bg-white text-center'>

<div className=''>
  {workDetails.map((work, index) => (
    <div key={index} className='p-4 mb-4 grid grid-cols-12 gap-4  rounded overflow-hidden border border-gray-300'>
      
      <div className=' p-4 bg-white text-center  col-span-12 md:col-span-8 lg:col-span-8 order-2 md:order-1'>

        <h3 className='my-4'>
          <span className='text-xl font-bold text-main-color'> {t("projectName")} : </span> {work.name}
        </h3>
        <p className='text-gray-500 mb-6'>{work.tittle}</p>

        <Link to="#" className='shadow-xl rounded-md bg-main-color justify-center py-1 w-1/2 md:w-[40%]  text-center inline-block m-auto  hover:bg-hover-main-color text-white '>{t("ourworkBtn")}</Link>

        <Link to="#" className='shadow-xl rounded-xl w-1/2 md:w-[30%]  text-center inline-block m-auto bg-main-color hover:bg-hover-main-color text-white py-2 px-4'>{t("ourworkBtn")}</Link>
      </div>

      <div className=' col-span-12 md:col-span-4 lg:col-span-4 order-1 md:order-2'> 
        <img src={work.imagesrc} alt='' className='w-full h-full' />

      </div>

    </div>
  ))}
</div>





</div>
</div>
  </section>
  
  </>
}
