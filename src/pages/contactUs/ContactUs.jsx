import { t } from "i18next";
import React, { useRef, useState } from "react";
import { FaPhone, FaWhatsapp } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

import { IoPersonOutline, IoMailOutline, IoCallOutline } from "react-icons/io5";

export default function ContactUs() {
  const [name,setname] = useState("");
  const [email,setemail] = useState("");
  const [phone,setphone] = useState("");
  const [typeOFwebsite,settypeOFwebsite] = useState("");
  const [message,setmessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
      'service_k1arj94', // Service ID
      'template_6115i0q', // Template ID
      form.current, // Form reference
      'lVUeayaENlj1rJbVP' // Public Key (User ID)
    )
    .then(
      (result) => {
        console.log('SUCCESS!', result.text);
        setname("");     
        setmessage(""); 
        setemail(""); 
        setphone("");
        settypeOFwebsite("");
        form.current.reset()
      },
      (error) => {
        console.log('FAILED...', error.text);
      }
    );
};

  return (
    <>
      <section className="relative">
        <div className="grid grid-cols-12 min-h-[500px] ">
          <div className="col-span-12 md:col-span-6 ">
            <div className="h-[30%] md:h-1/2 text-main-color text-5xl font-bold flex justify-center  items-center py-4">
              <h2>{t("contactTitl")}</h2>
            </div>

            <div className="bg-main-color h-[70%] md:h-1/2 p-4 md:p-8 text-white text-center">
              <h3 className="text-2xl md:text-4xl font-bold my-4">
                {t("contactTitl2")}
              </h3>
              <p className="leading-relaxed pb-6">{t("contactDesc")}</p>
            </div>
          </div>

          <div className='col-span-12 md:col-span-6 relative min-h-[300px] bg-[url("https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover bg-center'>
            <div className="h-full flex justify-center items-center absolute top-0 right-0 left-0 bottom-0 bg-black  opacity-40"></div>
          </div>
        </div>

        <div className="containerD">
          <div className="myD">
            <div className="grid grid-cols-12">
              <div className="col-span-12 md:col-span-6">
                <div className="bg-main-color p-8 text-white rounded w-[100%] md:w-[90%] lg:w-[70%]">
                  <h2 className="text-3xl font-bold   mb-8">
                    {t("servicetitl")}
                  </h2>
                  <div className="flex gap-4 justify-start items-center mb-8">
                    <div className="w-[40px] h-[40px] rounded-full bg-white text-main-color flex justify-center items-center cursor-pointer">
                      <Link
                        to="tel:+201147290516"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaPhone className="text-main-color text-lg" />
                      </Link>
                    </div>
                    <div>
                      <h3>{t("contactPhone")} : </h3>
                      <p>{t("contactPhoneDesc")}</p>
                    </div>
                  </div>

                  <div className="flex gap-4 justify-start items-center mb-8">
                    <div className="w-[40px] h-[40px] rounded-full bg-white text-main-color flex justify-center items-center cursor-pointer">
                      <Link to={`https://wa.me/${"201147290516"}`}>
                        <BsWhatsapp className="text-main-color text-2xl" />
                      </Link>
                    </div>
                    <div>
                      <h3 className="text-white"> {t("whatsupnum")} : </h3>
                      <p className="text-white">{t("contactPhoneDesc")}</p>
                    </div>
                  </div>

                  <div className="flex gap-4 justify-start items-center mb-8">
                    <div className="w-[40px] h-[40px] rounded-full bg-white text-main-color flex justify-center items-center cursor-pointer">
                      <Link
                        to="mailto:example@example.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MdEmail className="text-main-color text-2xl" />
                      </Link>
                    </div>
                    <div>
                      <h3>{t("contactEmail")} : </h3>
                      <p>{t("emailDesc")}</p>
                    </div>
                  </div>

                  <div className="flex gap-4 justify-start items-center mb-8">
                    <div className="w-[40px] h-[40px] rounded-full bg-white text-main-color flex justify-center items-center cursor-pointer">
                      <Link
                        to="https://www.google.com/maps"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IoLocationSharp className="text-main-color text-2xl" />
                      </Link>
                    </div>
                    <div>
                      <h3>{t("locationtile")} : </h3>
                      <p>{t("locationDesc")}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-12 md:col-span-6">
                <h3 className="text-4xl font-bold text-blue-400 my-6">
                  {t("contactTitle") || "اتصل بنا"}
                </h3>
                <p className="text-gray-500 mb-6">
                  {t("contactDes") }
                </p>
                <form className=""  ref={form} onSubmit={sendEmail}>
                  <div className="block md:flex gap-6 ">
                    <div className="flex items-center bg-gray-200 rounded w-full mb-8 px-2">
                      <IoPersonOutline className="text-gray-600 mr-2" />
                      <input
                        type="text"
                        name="user-name"
                        placeholder={t("contactName")}
                        className="py-4 px-2 text-gray-600 bg-transparent w-full"
                        required
                      />
                    </div>
                    <div className="flex items-center bg-gray-200 rounded w-full mb-8 px-2">
                      <IoMailOutline className="text-gray-600 mr-2" />
                      <input
                        type="email"
                        name="user-email"
                        placeholder={t("contactEmail") || "البريد الإلكتروني"}
                        className="py-4 px-2 text-gray-600 bg-transparent w-full"
                        required
                      />
                    </div>
                  </div>

                  <div className="block md:flex gap-6 ">
                    <div className="flex items-center bg-gray-200 rounded w-full mb-8 px-2">
                      <IoCallOutline className="text-gray-600 mr-2" />
                      <input
                        type="text"
                        name="user-phone"
                        placeholder={t("contactPhone")}
                        className="py-4 px-2 text-gray-600 bg-transparent w-full"
                        required
                      />
                    </div>
                    <div className="flex items-center bg-gray-200 rounded w-full mb-8 px-2">
                      <select
                        className="w-full py-4 px-2 text-[16px] text-gray-400 bg-transparent rounded"
                        name="user-select"
                        required
                      >
                        <option className="" value="" disabled selected hidden>
                          {t("contactLocationType")}
                        </option>
                        <option value="website">{t("website")}</option>
                        <option value="landing_page">
                          {t("landing_page")}
                        </option>
                        <option value="ecommerce">{t("ecommerce")}</option>
                        <option value="blog">{t("blog")}</option>
                        <option value="portfolio">{t("portfolio")}</option>
                        <option value="other">{t("other")}</option>
                      </select>
                    </div>
                  </div>

                  <div className="bg-gray-200 rounded w-full mb-8 px-2">
                    <textarea
                      placeholder={t("contactMessage") || "رسالتك"}
                      name="user-message"
                      className="w-full h-32 py-4 px-2 text-gray-600 bg-transparent"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="text-white shadow-xl rounded-md w-1/2 block m-auto bg-main-color justify-center py-2 hover:shadow-2xl hover:shadow-blue-400"
                  >
                    {t("contactBtn")}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <Link
          to={`https://wa.me/${"201147290516"}`}
          className="fixed top-[85%] hover:scale-105 trans right-8 shadow-3xl scaled"
        >
          <div className="w-[40px] h-[40px] rounded-full bg-main-color border-2 border-[#fafafa]  text-white  flex justify-center items-center">
            <FaWhatsapp className="text-2xl" />
          </div>
        </Link>
      </section>
    </>
  );
}
