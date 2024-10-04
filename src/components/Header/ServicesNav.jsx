import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const ServicesNav = ({ setIsServices, setIsMenuOpen }) => {
  const { t } = useTranslation();
  const servicesMenu = [
    {
      title: t("servTitle1"),
      description: t("servDesc1"),
      link: "/services/uiux_services",
    },
    {
      title: t("servTitle2"),
      description: t("servDesc2"),
      link: "/services/web_services",
    },
    {
      title: t("servTitle3"),
      description: t("servDesc3"),
      link: "/services/mobile_app_services",
    },
  ];
  return (
    <div
      className={`${
        document.body.dir === "rtl"
          ? "right-0 max-md:right-[-7rem] max-sm:right-[-7.8rem]"
          : "max-md:right-[-7rem] max-sm:right-[-7.6rem]"
      } absolute top-[40px] p-3 w-80 bg-white rounded-lg border border-gray-200 shadow-xl z-[9999999] `}
    >
      {servicesMenu.map((service, index) => (
        <Link
          onClick={() => {
            setIsServices(false);
            setIsMenuOpen(false);
          }}
          to={service.link}
          key={index}
          className="block p-4 hover:bg-[#0000000d] rounded-lg "
        >
          <h3 className="font-bold text-black">{service.title}</h3>
          <p className="text-sm text-gray-600">{service.description}</p>
        </Link>
      ))}
    </div>
  );
};

export default ServicesNav;
