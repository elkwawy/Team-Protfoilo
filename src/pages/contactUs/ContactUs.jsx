import { t } from 'i18next'
import React from 'react'
import { FaPhone, FaWhatsapp } from 'react-icons/fa6'
import { IoLocationSharp, IoLogoWhatsapp } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'

export default function ContactUs() {
  return <>
 <section className='relative'>
<div className='grid grid-cols-12 min-h-[500px] '>
<div className='col-span-12 md:col-span-6 '>
  
  <div className='h-[30%] md:h-1/2 text-main-color text-5xl font-bold flex justify-center  items-center py-4'>
  <h2>{t("contactTitl")}</h2>
  </div>
  
  <div className='bg-main-color h-[70%] md:h-1/2 p-4 md:p-8 text-white text-center'>
  <h3 className='text-2xl md:text-4xl font-bold my-4'>{t("contactTitl2")}</h3>
  <p className='leading-relaxed pb-6'>{t("contactDesc")}</p>
</div>
  
  </div>
  
  <div className='col-span-12 md:col-span-6 relative min-h-[300px] bg-[url("https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover bg-center'>
    <div className='h-full flex justify-center items-center absolute top-0 right-0 left-0 bottom-0 bg-black  opacity-40'></div>
  </div>
  
</div>


<div className='containerD'>
<div className='myD' >
<div className='grid grid-cols-12'>
<div className='col-span-12 md:col-span-6'>
<div className='bg-main-color p-8 text-white rounded w-[100%] md:w-[90%] lg:w-[70%]'>
<h2 className='text-3xl font-bold w-[100%] md:w-[70%] lg:w-[70%]  mb-8'>{t("servicetitl")}</h2>
<div className='flex gap-4 justify-start items-center mb-8'>
<div className='w-[40px] h-[40px] rounded-full bg-white text-main-color flex justify-center items-center'><FaPhone /></div>
 <Link to={`https://wa.me/${"201147290516"}`}>
 <h3 className='text-white'>  {t("whatsupnum")} : </h3>
 <p className='text-white'>{t("contactPhoneDesc")}</p>
 </Link>


</div>

<div className='flex gap-4 justify-start items-center mb-8'>
<div className='w-[40px] h-[40px] rounded-full bg-white text-main-color flex justify-center items-center'><IoLogoWhatsapp /></div>
 <div>
 <h3>{t("contactPhone")} : </h3>
 <p>{t("contactPhoneDesc")}</p>
 </div>


</div>

<div className='flex gap-4 justify-start items-center mb-8'>
<div className='w-[40px] h-[40px] rounded-full bg-white text-main-color flex justify-center items-center'><MdEmail /></div>
 <div>
 <h3>{t("contactEmail")} : </h3>
 <p>{t("emailDesc")}</p>
 </div>


</div>

<div className='flex gap-4 justify-start items-center mb-8'>
<div className='w-[40px] h-[40px] rounded-full bg-white text-main-color flex justify-center items-center'><IoLocationSharp /></div>
 <div>
 <h3>{t("locationtile")} : </h3>
 <p>{t("locationDesc")}</p>
 </div>


</div>

</div>

</div>




<div className='col-span-12 md:col-span-6'>
  <h3 className='text-4xl font-bold text-blue-400 my-6'>{t("contactTitl")}</h3>
  <form className=''>
   <div className='block md:flex gap-4  mb-2 md:mb-4'>
   <input type="text" placeholder={t("contactName")} className='py-4 px-2 text-gray-600 rounded bg-gray-200 w-full mb-8'  required/>
   <input type="email" placeholder={t("contactEmail")} className='py-4 px-2 text-gray-600 rounded bg-gray-200 w-full mb-8'  required/>
   </div>
   
   <div className='block md:flex gap-4 mb-2 md:mb-4'>
   <input type="text" placeholder={t("contactPhone")} className='py-4 px-2 text-gray-600 rounded bg-gray-200 w-full mb-8'  required/>
   <input type="text" placeholder={t("contactlocation")} className='py-4 px-2 text-gray-600 rounded bg-gray-200 w-full mb-8'  required />
   </div>
   
    <textarea type="text" placeholder={t("contactMessage")} className='w-full py-4 px-2 text-gray-600 rounded bg-gray-200 mb-8'  required/>
    <button type="buton" className=' text-white shadow-xl rounded-md w-1/2 block m-auto bg-main-color justify-center py-1 hover:shadow-2xl hover:shadow-blue-400 '>{t("contactBtn")}</button>
    
  </form>
</div>
</div>
</div>
</div>
    
 

<Link to={`https://wa.me/${"201147290516"}`} className='fixed top-[90%] right-8 shadow-3xl scaled'>
  <div className='w-[40px] h-[40px] rounded-full bg-main-color text-white  flex justify-center items-center'>
  <FaWhatsapp />
  </div>
 </Link>
 </section>

  </>
}
