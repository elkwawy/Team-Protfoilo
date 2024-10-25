import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import i18n from './../../Languages/i18n';

const TextSsection = ({header, p1, p2, p3, prefix}) => {
    const {t} = useTranslation();
    return (
        <div className=' flex flex-col gap-5 w-full  text-center'>
            <h1 className='text-center mx-auto text-3xl sm:text-4xl md:text-5xl font-bold w-full lg:leading-tight lg:w-2/3 '>{t(header)} <span className='text-main-color'>{i18n.language === 'ar' ? prefix.ar : prefix.en}</span></h1>
            <p className='text-[#6f6f6f] w-full'>{t(p1)}</p>
            <p className='text-[#6f6f6f]'>{t(p2)}</p>
            {p3 ? <p className='text-[#6f6f6f]'>{t(p3)}</p>  : null }
        </div>
    )
}

export default TextSsection