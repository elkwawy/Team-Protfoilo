import React from "react";
import { teamMembers } from "../../public/Data/teamMembers";
import { useTranslation } from "react-i18next";
import { Img } from "react-image";
import LoadingSpinner from "../utils/LoadingSpinner";
import LazyImage from "../utils/LazyImage";
const TeamDC = () => {
  const { t } = useTranslation();
  return (
    <div className="myD ">
      <div className="containerD">
        <h1 className="text-center text-4xl font-extrabold mb-4 text-gray-800">
          {t("teamTitle")}
        </h1>
        <p className="text-center text-lg mb-6 text-gray-600 leading-relaxed">
          {t("teamDesc")}
        </p>
        <div className="grid grid-cols-1 min-[490px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg  p-6 flex flex-col items-center cursor-pointer border border-gray-100"
            >
              <LazyImage loader={<div className="w-56 h-56 bg-gray-300 flex items-center justify-center rounded"><LoadingSpinner /></div>}
                src={member.imageUrl}
                alt={member.name}
                className="w-56 h-56 rounded object-cover mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">
                {t(member.nameKey)}
              </h2>
              <p className="text-gray-600 ">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamDC;
