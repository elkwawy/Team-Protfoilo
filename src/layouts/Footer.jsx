import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LazyImage from "../utils/LazyImage";
import { OurContacts } from "@/data/OurContacts";
import { ourServices } from "@/data/ourServices";


function Footer() {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const nav = useNavigate();
  const scrollToSection = () => {
    if (pathname === "/") {
      const element = document.getElementById("ourServices");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      nav("/");
      setTimeout(() => {
        const element = document.getElementById("ourServices");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);
    }
  };

  return (
    <div className="footer bg-main-color py-8  sm:py-11">
      <div className="containerD flex justify-between flex-wrap  max-sm:gap-8 max-sm:flex-col max-sm:items-center  sm:gap-10  lg:gap-8   ">
        <LazyImage
          src="/assets/.codeLogo/logoB.webp"
          parent={`h-[180px] w-[180px] rounded-md`}
          className="w-full h-full my-auto"
          alt=""
        />

        <ul className="space-y-2 text-center">
          <li className="text-color-black font-[700] text-[32px]">
            {t("footerT1")}
          </li>

          <li className="font-[400] text-[24px] cursor-pointer">
            <Link className="text-color-black trans hover:underline" to={"/"}>
              {t("navLi1")}
            </Link>
          </li>
          <li className="font-[400] text-[24px] cursor-pointer">
            <button
              onClick={scrollToSection}
              className="text-color-black trans hover:underline"
            >
              {t("navLi2")}
            </button>
          </li>
          <li className="font-[400] text-[24px] cursor-pointer">
            <Link
              className="text-color-black trans hover:underline"
              to={"/steps"}
            >
              {t("navLi3")}
            </Link>
          </li>
          <li className="font-[400] text-[24px] cursor-pointer">
            <Link
              className="text-color-black trans hover:underline"
              to={"/ourWork"}
            >
              {t("navLi4")}
            </Link>
          </li>
          <li className="font-[400] text-[24px] cursor-pointer">
            <Link
              className="text-color-black trans hover:underline"
              to={"/aboutUs"}
            >
              {t("navLi5")}
            </Link>
          </li>
        </ul>

        <ul className="space-y-4 text-center ">
          <li className="text-color-black font-[700] mb-[-6px] text-[32px]">
            {t("footerT2")}
          </li>

          {ourServices.map((service, index) => (
            <li key={index} className="font-[400] text-[24px] cursor-pointer">
              <Link
                className="text-color-black trans hover:underline"
                to={service.link}
              >
                {t(service.title)}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="space-y-4  ">
          <li className="text-color-black font-[700] text-[32px]">
            {t("footerT3")}
          </li>
          <div className="grid grid-cols-2 gap-4">
            {OurContacts.map((contact, index) => (
              <a
                target="_blank"
                key={index}
                href={contact.link}
                className="flex items-center justify-center"
              >
                <span className="ml-2">{contact.icon}</span>
              </a>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
