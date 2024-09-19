import { skills } from "@/app/data";
import Image from "next/image";
import React from "react";

const MySkills = () => {
  return (
    <div className="py-4" id="skills">
      <h1 className="heading">
        My <span className="text-purple">Skills</span>
      </h1>
      <div className="flex justify-center mr-14">
        <div className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center items-center max-w-7xl px-4 gap-x-20  ">
          {skills.map(({ id, image, name }) => (
            <div
          key={id}
              className="relative flex justify-center items-center border-2 border-gray-300 dark:border-gray-700 p-4 w-36 h-32   rounded-lg bg-[#13162D] overflow-hidden group "
            >
              <Image
                src={image}
                alt={name || "Skill Image"}
                width={100}
                height={100}
                className="object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 text-white text-center font-bold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-sm">{name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MySkills;
