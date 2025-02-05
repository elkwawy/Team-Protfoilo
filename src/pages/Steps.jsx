import { t } from 'i18next'
import React from 'react'
import { GrCubes } from 'react-icons/gr'
import { LiaComments } from 'react-icons/lia'
import { PiCodeSimpleBold } from 'react-icons/pi'
import { TbPrompt } from 'react-icons/tb'

export default function Steps() {
  return <>
  <section className='myD '>
<div className='containerD'>
<div className='text-center'>
    <h2 className='text-4xl  font-bold my-4'>{t("stepsTitle")}</h2>
    <p className='text-main-color text-xl'>{t("stepsDesc")}</p>
   
</div>

<div className='myD'>
    <h2 className='text-4xl  font-bold my-4 '>{t("comunication")}<LiaComments className='inline mx-4 text-main-color' /></h2>
  <div className=''>
  <p className='mb-4'>{t("comunicationP1")}</p>
    <p className='mb-4'>{t("comunicationP2")}</p>
    <p className='mb-4'>{t("comunicationP3")}</p>
    <p className='mb-4'>{t("comunicationP4")}</p>
    <p className='mb-4'>{t("comunicationP5")}</p>
    <p className='mb-4'>{t("comunicationP1")}</p>
  </div>
</div>

<div className='myD'>
    <h2 className='text-4xl  font-bold my-4'>{t("designtitl")}<GrCubes   className='inline mx-4 text-main-color' /></h2>
  <div className=''>
    <p className='mb-4'>{t("designP1")}</p>
    <p className='mb-4'>{t("designP2")}</p>
    <p className='mb-4'>{t("designP3")}</p>
    <p className='mb-4'>{t("designP4")}</p>
    <p className='mb-4'>{t("designP5")}</p>
  </div>
</div>

<div className=''>
    <h2 className='text-4xl  font-bold my-4'>{t("developTitl")}<PiCodeSimpleBold   className='inline mx-4 text-main-color' /></h2>
  <div className=''>
    <p className='mb-4'>{t("developP1")}</p>
    <p className='mb-4'>{t("developP2")}</p>
    <p className='mb-4'>{t("developP3")}</p>
    <p className='mb-4'>{t("developP4")}</p>
    <p className='mb-4'>{t("developP5")}</p>
    <p className='mb-4'>{t("developP6")}</p>
  </div>
</div>
</div>
  </section>
  
  </>
}
