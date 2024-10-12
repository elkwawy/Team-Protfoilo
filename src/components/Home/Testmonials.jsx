import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const Testmonials = () => {
    const {t} = useTranslation();

    return (
        <div className='flex containerD  flex-col gap-8'>
            <div className='flex flex-col gap-3'>
                <h1 className="font-bold text-center sm:text-start text-3xl sm:text-4xl lg:text-5xl">{t('testimonialsHomeTitle')}</h1>
                <p className='text-gray-500 text-center sm:text-start'>{t('testimonialsHomeText')}</p>
            </div>
            {/* Testmonials */}
            <section className=" border-[1px]  rounded-xl ">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">

                    <div className="[column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
                        <div className="mb-8  hover:scale-105 trans cursor-default sm:break-inside-avoid">
                            <blockquote className="border-[1px] rounded-lg  p-6 shadow-sm sm:p-8">
                            <div className="flex items-center gap-4 ">
                                

                                <div>
                                <div className="flex justify-center gap-0.5 text-thrid-color">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>
                                </div>

                                <p className="mt-0.5  font-medium text-gray-900">{t("customer1name")}</p>
                                </div>
                            </div>

                            <p className="mt-4 text-gray-700">
                                {t("testimonialsHomeCustomer1")}
                            </p>
                            </blockquote>
                        </div>

                        <div className="mb-8  hover:scale-105 trans cursor-default sm:break-inside-avoid">
                            <blockquote className="border-[1px] rounded-lg  p-6 shadow-sm sm:p-8">
                            <div className="flex items-center gap-4 ">
                                

                                <div>
                                <div className="flex justify-center gap-0.5 text-thrid-color">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>
                                </div>

                                <p className="mt-0.5  font-medium text-gray-900">{t("customer2name")}</p>
                                </div>
                            </div>

                            <p className="mt-4 text-gray-700">
                                {t("testimonialsHomeCustomer2")}
                            </p>
                            </blockquote>
                        </div>

                        <div className="mb-8  hover:scale-105 trans cursor-default sm:break-inside-avoid">
                            <blockquote className="border-[1px] rounded-lg  p-6 shadow-sm sm:p-8">
                            <div className="flex items-center gap-4 ">
                                

                                <div>
                                <div className="flex justify-center gap-0.5 text-thrid-color">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>
                                </div>

                                <p className="mt-0.5  font-medium text-gray-900">{t("customer3name")}</p>
                                </div>
                            </div>

                            <p className="mt-4 text-gray-700">
                                {t("testimonialsHomeCustomer3")}
                            </p>
                            </blockquote>
                        </div>

                        <div className="mb-8  hover:scale-105 trans cursor-default sm:break-inside-avoid">
                            <blockquote className="border-[1px] rounded-lg  p-6 shadow-sm sm:p-8">
                            <div className="flex items-center gap-4 ">
                                

                                <div>
                                <div className="flex justify-center gap-0.5 text-thrid-color">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>
                                </div>

                                <p className="mt-0.5  font-medium text-gray-900">{t("customer4name")}</p>
                                </div>
                            </div>

                            <p className="mt-4 text-gray-700">
                                {t("testimonialsHomeCustomer4")}
                            </p>
                            </blockquote>
                        </div>

                        <div className="mb-8  hover:scale-105 trans cursor-default sm:break-inside-avoid">
                            <blockquote className="border-[1px] rounded-lg  p-6 shadow-sm sm:p-8">
                            <div className="flex items-center gap-4 ">
                                

                                <div>
                                <div className="flex justify-center gap-0.5 text-thrid-color">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>
                                </div>

                                <p className="mt-0.5  font-medium text-gray-900">{t("customer5name")}</p>
                                </div>
                            </div>

                            <p className="mt-4 text-gray-700">
                                {t("testimonialsHomeCustomer5")}
                            </p>
                            </blockquote>
                        </div>

                        <div className="mb-8  hover:scale-105 trans cursor-default sm:break-inside-avoid">
                            <blockquote className="border-[1px] rounded-lg  p-6 shadow-sm sm:p-8">
                            <div className="flex items-center gap-4 ">
                                

                                <div>
                                <div className="flex justify-center gap-0.5 text-thrid-color">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>
                                </div>

                                <p className="mt-0.5  font-medium text-gray-900">{t("customer6name")}</p>
                                </div>
                            </div>

                            <p className="mt-4 text-gray-700">
                                {t("testimonialsHomeCustomer6")}
                            </p>
                            </blockquote>
                        </div>

                        <div className="mb-8  hover:scale-105 trans cursor-default sm:break-inside-avoid">
                            <blockquote className="border-[1px] rounded-lg  p-6 shadow-sm sm:p-8">
                            <div className="flex items-center gap-4 ">
                                

                                <div>
                                <div className="flex justify-center gap-0.5 text-thrid-color">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>
                                </div>

                                <p className="mt-0.5  font-medium text-gray-900">{t("customer7name")}</p>
                                </div>
                            </div>

                            <p className="mt-4 text-gray-700">
                                {t("testimonialsHomeCustomer7")}
                            </p>
                            </blockquote>
                        </div>

                        <div className="mb-8  hover:scale-105 trans cursor-default sm:break-inside-avoid">
                            <blockquote className="border-[1px] rounded-lg  p-6 shadow-sm sm:p-8">
                            <div className="flex items-center gap-4 ">
                                

                                <div>
                                <div className="flex justify-center gap-0.5 text-thrid-color">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>
                                </div>

                                <p className="mt-0.5  font-medium text-gray-900">{t("customer8name")}</p>
                                </div>
                            </div>

                            <p className="mt-4 text-gray-700">
                                {t("testimonialsHomeCustomer8")}
                            </p>
                            </blockquote>
                        </div>

                        <div className="mb-8  hover:scale-105 trans cursor-default sm:break-inside-avoid">
                            <blockquote className="border-[1px] rounded-lg  p-6 shadow-sm sm:p-8">
                            <div className="flex items-center gap-4 ">
                                

                                <div>
                                <div className="flex justify-center gap-0.5 text-thrid-color">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                    </svg>
                                </div>

                                <p className="mt-0.5  font-medium text-gray-900">{t("customer9name")}</p>
                                </div>
                            </div>

                            <p className="mt-4 text-gray-700">
                                {t("testimonialsHomeCustomer9")}
                            </p>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testmonials