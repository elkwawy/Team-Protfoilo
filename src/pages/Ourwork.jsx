
import { useEffect } from "react";
import { Link } from "react-router-dom";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from "react-lazy-load-image-component";
import LazyImage from "@/utils/LazyImage";
import { useTranslation } from "react-i18next";

export default function Ourwork() {
  const { t } = useTranslation();
  let workDetails = [
    { name: t("projTitl"), tittle: t("projDec1"), imageSrc: "../assets/projects/style-club-fashion.vercel.app_ (2).png",link:"https://style-club-fashion.vercel.app/" },

    { name: t("projTit2"), tittle: t("projDec2"),
       imageSrc: "../assets/projects/localhost_5174_dashboard (2).png",link:"https://style-club-dashboard.vercel.app" },
       { name: t("projTit3"), tittle: t("projDec3"), imageSrc: "../assets/projects/localhost_5175_ (1).png",link:"https://dot-code.vercel.app/" },
   
  ];

  const preloadImages = (images) => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  };

  useEffect(() => {
    const imageSrcs = workDetails.map((work) => work.imageSrc);
    preloadImages(imageSrcs);
  }, []);

  return (
    <>
      <section className="myD text-center">
        <div className="containerD">
          <h2 className="text-3xl font-bold mb-4">{t("ourworkTitl")}</h2>
          <p className="text-main-color text-xl">{t("ourworkP1")}</p>

          <div className="myD grid grid-cols-12 gap-4">
            {workDetails.map((work, index) => (
              <div
                key={index}
                className="mb-4 rounded-md shadow-lg overflow-hidden border border-gray-100 col-span-12 md:col-span-6 lg:col-span-4  duration-300"
              >
                <div className="max-h-[300px] overflow-scroll overflow-x-hidden">
                  <LazyImage
                    src={work.imageSrc}
                    alt={work.name}
                    parent={`w-full min-h-[300px] `}
                    className="w-full h-full min-h-[300px] object-contain"
                    effect="blur"
                  />
                </div>
                <div className="p-4 bg-white text-center">
                  <h3 className="my-4">
                    <span className="text-xl font-bold text-main-color">
                      {t("projectName")}:
                    </span>{" "}
                    {work.name}
                  </h3>
                  <p className="text-gray-500 mb-6">{work.tittle}</p>
                  <Link
                    to={work.link}
                    className="shadow-xl rounded-md bg-main-color justify-center py-1 w-1/2 md:w-[40%] text-center inline-block m-auto hover:bg-hover-main-color text-white"
                  >
                    {t("ourworkBtn")}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
