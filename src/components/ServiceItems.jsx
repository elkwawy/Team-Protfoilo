import { t } from "i18next";
import { CgDesignmodo } from "react-icons/cg";
import { FaCode } from "react-icons/fa";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { MdDesignServices } from "react-icons/md";

function ServiceItems() {
  return (
    <div className="relative flex flex-col justify-between h-full max-w-screen-xl px-4 mx-auto xl: mt-5">
      <h2 className="mb-12 text-3xl text-center font-extrabold leading-tight text-gray-900">
        {t("servTitleSection3")}
      </h2>

      <div className="w-full">
        <div className="flex flex-col w-full mb-10 sm:flex-row">
          <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div className="relative h-full ml-0 mr-0 sm:mr-5">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-main-color  rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 bg-main-color text-center  rounded-lg">
                <MdDesignServices
                  className="text-main-color m-auto"
                  size={30}
                />

                <div>
                  <h3 className="my-2 ml-3 text-lg font-bold text-black">
                    {t("servTitleSection3h1")}
                  </h3>
                </div>

                <p className="mb-2 text-black">{t("servTitleSection3p1")}</p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="relative h-full ml-0 sm:mr-5 sm:ml-5">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-main-color  rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 bg-main-color text-center  rounded-lg">
                <CgDesignmodo className="text-main-color m-auto" size={30} />
                <div>
                  <h3 className="my-2 ml-3 text-lg font-bold text-black">
                    {t("servTitleSection3h2")}
                  </h3>
                </div>

                <p className="mb-2 text-black">{t("servTitleSection3p2")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full mb-5 sm:flex-row">
          <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div className="relative h-full ml-0 mr-0 sm:mr-5">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-main-color rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 bg-main-color text-center  rounded-lg">
                <FaCode className="text-main-color m-auto" size={30} />
                <div>
                  <h3 className="my-2 ml-3 text-lg font-bold text-black">
                    {t("servTitleSection3h3")}
                  </h3>
                </div>

                <p className="mb-2 text-black">{t("servTitleSection3p3")}</p>
              </div>
            </div>
          </div>
          <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div className="relative h-full  mr-0 sm:mr-5 ml-5">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-main-color rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 bg-main-color text-center rounded-lg">
                <IoCheckmarkDoneCircle
                  className="text-main-color m-auto"
                  size={30}
                />

                <div>
                  <h3 className="my-2 ml-3 text-lg font-bold text-black">
                    {t("servTitleSection3h4")}
                  </h3>
                </div>

                <p className="mb-2 text-black">{t("servTitleSection3p4")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceItems;