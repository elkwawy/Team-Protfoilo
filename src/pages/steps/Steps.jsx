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
<div>
    <h2 className='text-3xl  font-bold my-4'>{t("stepsTitle")}</h2>
    <p>{t("stepsDesc")}</p>
    <img src='https://s3-alpha-sig.figma.com/img/853e/eded/9ea05d3b8545c9be3b03cdc359066417?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FX~Gx76AsoKE~gjzl4QEIQi~DMBmX-rTTkfsEh1DF7ur0Z9LMeNiw07Ip3venG7m8JIOi54XoTN5yXSYGiSpX2GsiTgVx80nvykKyPRYWuhgWrNbL5-pE1EPaA4yBNv5qxJhoUvp11KDRtzZIarfjaDW0m0hKcwI0S5ZvarEfdLLR5vcoxOo3hAksFd0nn49EiHT1SW8RAhSZ66qtii7JBAcgzBBMtco~oq~NqMbvcdRY~pXC0Ccv923VMYC0jUMiJOSHmofAaGFkD58QT9S6-MnjJHKZNqBIzoXBWtgO8dnVsfSNrmDF4uwUGKNDZMKmWoFitxCIWiMgp8pZql47g__' alt='' className='w-full'/>
</div>

<div className='my-10'>
    <h2 className='text-3xl  font-bold my-4'>{t("comunication")}<LiaComments className='inline mx-4' /></h2>
  <div className=''>
  <p className='mb-4'>{t("comunicationP1")}</p>
    <p className='mb-4'>{t("comunicationP2")}</p>
    <p className='mb-4'>{t("comunicationP3")}</p>
    <p className='mb-4'>{t("comunicationP4")}</p>
    <p className='mb-4'>{t("comunicationP5")}</p>
    <p className='mb-4'>{t("comunicationP1")}</p>
  </div>
</div>

<div className='my-10'>
    <h2 className='text-3xl  font-bold my-4'>{t("designtitl")}<GrCubes   className='inline mx-4' /></h2>
  <div className=''>
    <p className='mb-4'>{t("designP1")}</p>
    <p className='mb-4'>{t("designP2")}</p>
    <p className='mb-4'>{t("designP3")}</p>
    <p className='mb-4'>{t("designP4")}</p>
    <p className='mb-4'>{t("designP5")}</p>
  </div>
</div>

<div className='my-10'>
    <h2 className='text-3xl  font-bold my-4'>{t("developTitl")}<PiCodeSimpleBold   className='inline mx-4' /></h2>
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
