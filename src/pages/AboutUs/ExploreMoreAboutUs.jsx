import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';


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

                <div className="max-h-[400px]  md:h-full flex items-center justify-center col-span-12 md:col-span-12 lg:col-span-4">
                    <LazyLoadImage
                        effect="blur"
                        src="assets/aboutUs/aboutUs-img1.webp"
                        alt="Explore more about us"
                        height={"100%"}
                        className="mx-auto h-full rounded my-auto object-cover"
                    />
                </div>
            </div>
        </div>
    )
}

export default ExploreMoreAboutUs