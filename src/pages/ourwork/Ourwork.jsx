import { t } from 'i18next'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Ourwork() {
  let workDetails = [
    {name: t("projTitl"),tittle:t("projDec1"),imagesrc:"https://media.istockphoto.com/id/2160966987/photo/smartphone-with-application-online-shopping-platform-and-shopping-cart-icon-during-sitting-at.jpg?s=2048x2048&w=is&k=20&c=rmJvCUfuwmhLgBhRAdfqexVIak1JosqHqiqVdefb25E="},
    {name: t("projTit2"),tittle:t("projDec2"),imagesrc:"https://media.istockphoto.com/id/2160966987/photo/smartphone-with-application-online-shopping-platform-and-shopping-cart-icon-during-sitting-at.jpg?s=2048x2048&w=is&k=20&c=rmJvCUfuwmhLgBhRAdfqexVIak1JosqHqiqVdefb25E="},
    {name: t("projTit2"),tittle:t("projDec2"),imagesrc:"https://media.istockphoto.com/id/2160966987/photo/smartphone-with-application-online-shopping-platform-and-shopping-cart-icon-during-sitting-at.jpg?s=2048x2048&w=is&k=20&c=rmJvCUfuwmhLgBhRAdfqexVIak1JosqHqiqVdefb25E="},
  ]

  return <>
  <section className='myD text-center'>
<div className='containerD'>
<h2 className='text-3xl font-bold'>{t("ourworkTitl")}</h2>
<p className='my-6 text-red-600'>{t("ourworkP1")}</p>

<div>


<div className=''>
  {workDetails.map((work, index) => (
    <div key={index} className='p-4 mb-4 grid grid-cols-12 gap-4  rounded overflow-hidden border border-gray-300'>
      
      <div className=' p-4 bg-white text-center  col-span-12 md:col-span-8 lg:col-span-8 order-2 md:order-1'>
        <h3 className='my-4'>
          <span className='text-xl font-bold'> {t("projectName")}: </span> {work.name}
        </h3>
        <p className='text-gray-500 mb-6'>{work.tittle}</p>
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
