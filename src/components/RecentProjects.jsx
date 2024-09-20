"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/app/data";
import React from "react";
import { PinContainer } from "./ui/3D-PinContainer";
import Image from "next/image";


const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
         {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem]  flex items-center justify-center w-[80vw] sm:w-[570px]"
            onClick={() => handleVisit(link)}
          >
            <PinContainer title="Visit" href={link}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden h-[30vh]  mb-10 sm:h-[40vh]">
                <div className="relative  w-full  h-full overflow-hidden lg:rounded-3xl bg-[#13162D]">
                  <Image src="/bg.png" alt={title} width={480} height={50} />
                </div>
                <Image
                  src={img}
                  alt={title}
                  className="absolute z-10 bottom-0 object-fill"
                  width={480}
                  height={50}
                  style={{ transform: "rotate(8deg)" }}
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
