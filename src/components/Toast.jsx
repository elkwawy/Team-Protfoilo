import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Toast() {
    const {t} = useTranslation()
  return (
   <>
   <div className='p-3 shadow-md rounded-md fixed  z-[9999]  top-16 left-1/2 -translate-x-1/2 bg-white'>
   <h2 className='text-main-color text-center'> ✔ {t("toastmsg")}</h2>
   </div>
   </>
  )
}
