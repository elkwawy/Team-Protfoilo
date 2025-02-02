import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { servicesMenu } from "@/data/servicesMenu";
const ServicesNav = ({ setIsServices, setIsMenuOpen }) => {
  const { t } = useTranslation();

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
          <h3 className="text-xl mb-2 font-bold text-black">
            {t(service.title)}
          </h3>
          <p className="text-base text-gray-600">{t(service.description)}</p>
        </Link>
      ))}
    </div>
  );
};

export default ServicesNav;
