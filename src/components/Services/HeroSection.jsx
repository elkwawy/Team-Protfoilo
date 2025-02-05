import LazyImage from "@/utils/LazyImage";
import { useTranslation } from "react-i18next";
import { MdRocket, MdRocketLaunch } from "react-icons/md";
import { Link } from "react-router-dom";
const HeroSection = ({ src, title, desc }) => {
  const { t } = useTranslation();
  return (
    <div className="gap-16 items-center">
      <div className="relative  h-[360px] sm:h-[500px] font-light py-20 flex flex-col justify-center items-center text-gray-500 sm:text-lg">
        <div className="absolute inset-0 ">
          <LazyImage
            src={src}
            alt="Background Image"
            parent={`h-[360px] sm:h-[500px]`}
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
            {t(title)}
          </h2>
          <p className="mb-4 text-white">{t(desc)}</p>
          <Link
            to={"/contactUs"}
            className={`bg-main-color group text-sm sm:text-[16px] flex items-center gap-2 rounded-md px-5 py-2.5 w-fit text-white hover:bg-hover-main-color`}
          >
            {t("heroBtnText")}
            <MdRocket className="text-lg group-hover:hidden" />
            <MdRocketLaunch className="hidden text-lg group-hover:block" />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;
