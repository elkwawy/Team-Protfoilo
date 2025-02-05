import LazyImage from "@/utils/LazyImage";
import { useTranslation } from "react-i18next";


const ExploreMoreAboutUs = () => {
    const { t } = useTranslation();
    return (
        <div className="containerD">
            <div className="myD grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-12 lg:col-span-8">
                    <h3 className="text-3xl font-bold mb-4">{t("knowUsTitle")}</h3>

                    <p className="mb-4 text-[18px]">{t("knowUsP1")}</p>
                    <p className="mb-4 text-[17.6px]">{t("knowUsP3")}</p>
                    <p className="text-[18px]">{t("knowUsP2")}</p>
                </div>

                <div className="max-lg:mx-auto w-full sm:w-3/4 lg:w-full max-h-[400px]  md:h-full flex items-center justify-center col-span-12 md:col-span-12 lg:col-span-4">
                    <LazyImage
                        parent={`w-full rounded h-[250px] sm:h-[400px]`}
                        src="assets/aboutUs/aboutUs-img1.webp"
                        alt="Explore more about us"
                        className="mx-auto h-full rounded my-auto object-cover"
                    />
                </div>
            </div>
        </div>
    )
}

export default ExploreMoreAboutUs