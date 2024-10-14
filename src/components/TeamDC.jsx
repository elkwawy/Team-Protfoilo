import React from "react";
import { teamMembers } from "../../public/Data/teamMembers";
import { useTranslation } from "react-i18next";

const TeamDC = () => {
  const { t } = useTranslation();
  return (
    <div className="">
      <div className="containerD mx-auto">
        <h1 className=" text-4xl text-center font-extrabold mb-5 text-gray-900">
          {t("teamTitle")}
        </h1>
        <p className=" text-lg text-center mb-7 text-gray-700 leading-relaxed">
          {t("teamDesc")}
        </p>
        <div className="grid grid-cols-1 min-[490px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-color-white rounded-lg shadow-lg p-5 flex flex-col items-center transition-transform transform hover:scale-105 border border-gray-200"
            >
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-48 h-48 rounded-full object-cover mb-4"
              />
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                {t(member.nameKey)}
              </h2>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamDC;
