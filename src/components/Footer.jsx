import { Link } from "react-router-dom";
import logo from "../../public/assets/images/logoB.png";
import { useTranslation } from "react-i18next";
import { AiFillFacebook, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { FaSquareGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaSquareFacebook } from "react-icons/fa6";
import ScrollTopBtn from "../utils/ScrollTopBtn";
function Footer() {
  const { t } = useTranslation();
  let websitesParts = [
    { name: t("navLi1"), link: "/" },
    { name: t("navLi2"), link: "/services" },
    { name: t("navLi3"), link: "/steps" },
    { name: t("navLi4"), link: "/ourWork" },
    { name: t("navLi5"), link: "/aboutUs" },
  ];
  const services = [
    {
      title: t("servTitle1"),
      link: "/services/uiux_services",
    },
    {
      title: t("servTitle2"),
      link: "/services/web_services",
    },
    {
      title: t("servTitle3"),
      link: "/services/mobile_app_services",
    },
  ];
  const contacts = [
    {
      link: "mailto:dotcode16@gmail.com",
      icon: <MdEmail className="text-color-black text-[63px]" />,
    },
    {
      link: "https://www.linkedin.com/in/dot-code-b2b267328/",
      icon: <AiFillLinkedin className="text-color-black  text-[58px]" />,
    },
    {
      link: "https://www.facebook.com/",
      icon: <FaSquareFacebook className="text-color-black text-[58px]" />,
    },
    {
      link: "https://github.com/Dot-Code-16",
      icon: <FaSquareGithub className="text-color-black text-6xl" />,
    },
  ];
  return (
    <div className="footer relative bg-main-color py-8  sm:py-11">
      <div className="containerD flex justify-between flex-wrap  max-sm:gap-8 max-sm:flex-col max-sm:items-center  sm:gap-10  lg:gap-8   ">
        <img src={logo} className="w-[180px] h-[180px] my-auto" alt="" />

        <ul className="space-y-2 text-center">
          <li className="text-color-black font-[700] text-[32px]">
            {t("footerT1")}
          </li>
          {websitesParts.map((part, index) => (
            <li key={index} className="font-[400] text-[24px] cursor-pointer">
              <Link className="text-color-black" to={part.link}>
                {part.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="space-y-4 text-center ">
          <li className="text-color-black font-[700] mb-[-6px] text-[32px]">
            {t("footerT2")}
          </li>
          {services.map((service, index) => (
            <li key={index} className="font-[400] text-[24px] cursor-pointer">
              <Link className="text-color-black" to={service.link}>
                {service.title}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="space-y-4  ">
          <li className="text-color-black font-[700] text-[32px]">
            {t("footerT3")}
          </li>
          <div className="grid grid-cols-2 gap-4">
            {contacts.map((contact, index) => (
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
      <ScrollTopBtn />
    </div>
  );
}

export default Footer;
