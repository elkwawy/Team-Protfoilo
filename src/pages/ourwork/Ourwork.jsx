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
  <section className='myD'>
<div className='containerD'>
<h2 className='text-3xl font-bold'>{t("ourworkTitl")}</h2>
<p className='my-6 text-red-600'>{t("ourworkP1")}</p>

<div>


<div className='grid grid-cols-12 gap-4'>
  {workDetails.map((work, index) => (
    <div key={index} className='p-1 mb-4 col-span-12 md:col-span-6 lg:col-span-4  rounded overflow-hidden shadow-xl relative bg-gradient-to-r bg-gradient-to-t from-[#89CFF0] via-[#0096C7] to-[#B3E5FC] '>
      <div className=''> 
        <img src={work.imagesrc} alt='' className='w-full h-full' />
      </div>
      <div className=' p-4 bg-white text-center'>
        <h3 className='my-4'>
          <span className='text-xl font-bold'> {t("projectName")}: </span> {work.name}
        </h3>
        <p className='text-gray-500 mb-6'>{work.tittle}</p>
        <Link to="#" className='shadow-xl rounded-xl  w-1/2 text-center inline-block m-auto bg-gradient-to-t from-blue-300 to-blue-700 text-white py-2 px-4'>{t("ourworkBtn")}</Link>
      </div>
      
    </div>
  ))}
</div>





</div>
</div>
  </section>
  
  </>
}
