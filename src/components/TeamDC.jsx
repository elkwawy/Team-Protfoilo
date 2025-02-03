import { teamMembers } from "@/data/teamMembers";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const TeamDC = () => {
  const { t } = useTranslation();
  return (
    <div className="">
      <div className="containerD mx-auto">
        <h1 className="text-4xl text-center font-extrabold mb-5 text-gray-900">
          {t("teamTitle")}
        </h1>
        <p className="text-lg text-center mb-7 text-gray-700 leading-relaxed">
          {t("teamDesc")}
        </p>
        <div className="grid grid-cols-1 min-[490px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group h-[420px] relative bg-color-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transition-all duration-300"
            >
              <LazyLoadImage
                src={member.imageUrl}
                alt={member.name}
                effect="blur"
                width={"100%"}
                style={{ transition: "all 200ms ease-in-out" }}
                className="w-full h-[419px] object-cover  group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-45 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-end text-center p-5 opacity-100 group-hover:opacity-0 transition-opacity duration-300 bg-gradient-to-t from-black via-transparent to-transparent">
                <h2 className="text-xl font-semibold mb-2 text-white drop-shadow-md">
                  {t(member.nameKey)}
                </h2>
                <p className="text-white drop-shadow-md">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamDC;
