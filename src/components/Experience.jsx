"use client"

import { workExperience } from "@/app/data";
import React from "react";
import { Button, MovingBorder } from "./ui/moving-border"; 
import Image from "next/image";

const Experience = () => {
  return (
    <div className="py-20" id="">
      <h1 className="heading">
        My <span className="text-purple">Work Eperience</span>
       
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map(({ id, title, desc, thumbnail }) => (
           
          <Button key={id} 
           duration={Math.floor(Math.random() * 10000) + 10000}
          className="flex-1 text-white  border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <Image
                src={thumbnail}
               
                alt="experience"
                width={200}
                height={100}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5 ">

                <h1 className="text-start text-xl md:text-2xl font-bold">{title}</h1>
                 <p className="text-start text-white-100 mt-3 font-semibold">{desc}</p>
        
              </div>
            </div>
          </Button>
         
        ))}
      </div>
    </div>
  );
};

export default Experience;