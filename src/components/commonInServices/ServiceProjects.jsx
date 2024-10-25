import React, { useRef, useState } from 'react'
import { Img } from 'react-image'
import LoadingSpinner from './../../utils/LoadingSpinner';
import { useTranslation } from 'react-i18next';
import i18n from '../../Languages/i18n';

// projects => array of objects (obj => pic, title, details, technologies used in building it)
const ServiceProjects = () => {
    const {t} = useTranslation();
    const enterImg = (e) => { 
        e.target.style.transform = `translateY(calc(-100% + 256px))`
    }
    const leaveImg = (e) => { 
        e.target.style.transform = "translateY(0)"
    }
    const prefix = {ar: "مهاراتنا:", en : "skills:"}
    const projects = [
        {pic:'/assets/images/services/projects/project2.webp', title: "project1", details: "sdklahdjsbxkabckhavchavshkdbka asdvas a sdbhabkca asbdkhasb mab basdbksds", techs: ['react', 'tailwind', "router", 'figma'] },
        {pic:'/assets/images/services/projects/GYM2.webp', title: "project2", details: "sdklahdjsbxkabckhavchavshkdbka asdvas a sdbhabkca asbdkhasb mab basdbksds", techs: ['react', 'tailwind', "router", 'figma'] },
        {pic:'/assets/images/services/projects/GYM2.webp', title: "project3", details: "sdklahdjsbxkabckhavchavshkdbka asdvas a sdbhabkca asbdkhasb mab basdbksds", techs: ['react', 'tailwind', "router", 'figma'] },
        {pic:'/assets/images/services/projects/Honey2.webp', title: "project4", details: "sdklahdjsbxkabckhavchavshkdbka asdvas a sdbhabkca asbdkhasb mab basdbksds", techs: ['react', 'tailwind', "router", 'figma'] },
    ]
    return (
        <div className='w-full flex flex-col gap-12'>
            <h1 className='text-3xl text-center mx-auto sm:text-4xl md:text-5xl font-bold sm:w-3/4 lg:w-2/3 '>{t("serviceProjectsTitle")} <span className='text-main-color'>{i18n.language == 'ar' ? prefix.ar : prefix.en}</span></h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 '>
                {projects.map((project, index) => (
                        <div  key={project.title} className={`flex bg-color-white w-full flex-col-reverse gap-8 sm:gap-0 items-center sm:items-start sm:flex-row justify-between p-3 sm:p-5  trans rounded-md  border-[1px]`}>
                            <div className='flex  flex-col  gap-5'>
                                <h2 className="text-2xl font-bold">{project.title}</h2>
                                <p className='sm:w-3/4  text-gray-500'>{project.details}</p>
                                <p className='text-gray-500 text-sm sm:text-[16px]'>Technologies used: {project.techs.join(', ')}</p>
                            </div>
                            <div className='h-64 w-64 trans overflow-hidden rounded-md border-[1px] '>
                                <Img  onMouseEnter={enterImg} onMouseLeave={leaveImg} className=" transition-all duration-[2500ms] w-full" loader={<div className='my-auto w-full h-64 bg-gray-100 border-[1px] flex items-center justify-center rounded-md'><LoadingSpinner /></div>} src={project.pic} alt={project.title}  />
                            </div>
                        </div>
                ))}

            
            </div>
        </div>
    )
}

export default ServiceProjects