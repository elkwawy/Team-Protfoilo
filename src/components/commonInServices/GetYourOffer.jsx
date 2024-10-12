import React from 'react'
import { useTranslation } from 'react-i18next'

const GetYourOffer = () => {
    const {t} = useTranslation();
    return (
        <div className='w-full  bg-white rounded-md p-5 sm:rounded-lg border-[1px] border-zinc-100 sm:p-10 flex flex-col gap-4 sm:gap-8'>
            <h1 className=' font-bold text-3xl sm:text-4xl min-[830px]::text-5xl'>{t("getYourOfferTitle")}</h1>
            <div className='flex flex-col gap-4 sm:gap-8  min-[830px]:flex-row min-[830px]:items-center justify-between w-full'>
                <p className='text-[#6f6f6f] sm:text-lg'>{t("getYourOfferText")}</p>
                <button className='bg-main-color hover:bg-hover-main-color text-white px-4 py-1 w-fit '>{t("navBtn")}</button>
            </div>
        </div>
    )
}

export default GetYourOffer