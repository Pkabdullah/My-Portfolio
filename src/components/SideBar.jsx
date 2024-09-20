import Image from "next/image";
import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { HiCommandLine } from "react-icons/hi2";
import { HiAcademicCap } from "react-icons/hi2";
import { VscCode } from "react-icons/vsc";
import { ImProfile } from "react-icons/im";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

const SideBar = () => {
  return (
    <div className="">
      <div className="border-2 border-transparent w-[18%] h-[100%] bg-[#09101a]">
        <div className="border-2 border-transparent w-[100%] h-[140px] bg-[#151c25]"></div>
        <nav className="mt-10">
          <ul className="flex flex-col gap-10 justify-center items-center ">
            <li className="border-2 border-[#151c25] rounded-[8px]  w-44 h-16 flex items-center ">
              <span className="flex items-center  bg-[#222831] p-5 rounded-[8px] hover:bg-[#00E6AC]  hover:text-black transition duration-200 ease-in-out">
                <IoHomeOutline className=" text-2xl" />
              </span>
              <span className="ml-4 text-[#3e454f] font-bold text-[15px] hover:text-[#00E6AC] ">
                HOME
              </span>
            </li>
            <li className="border-2 border-[#222831] rounded-[8px]  w-44 h-16 flex items-center">
              <span className="flex items-center  bg-[#151c25] p-5 rounded-[8px] hover:bg-[#00E6AC]  hover:text-black transition duration-200 ease-in-out">
                <HiCommandLine className="text-2xl" />
              </span>
              <span className="ml-4 text-[#3e454f] font-bold text-[15px] hover:text-[#00E6AC]">
                ABOUT ME
              </span>
            </li>
            <li className="border-2 border-[#222831] rounded-[8px]  w-44 h-16 flex items-center">
              <span className="flex items-center  bg-[#151c25] p-5 rounded-[8px] hover:bg-[#00E6AC]  hover:text-black transition duration-200 ease-in-out">
                <HiAcademicCap className="text-2xl" />
              </span>
              <span className="ml-4 text-[#3e454f] font-bold text-[15px] hover:text-[#00E6AC]">
                EDUCATION
              </span>
            </li>
            <li className="border-2 border-[#222831] rounded-[8px]  w-44 h-16 flex items-center">
              <span className="flex items-center  bg-[#151c25] p-5 rounded-[8px] hover:bg-[#00E6AC]  hover:text-black transition duration-200 ease-in-out">
                <VscCode className="text-2xl" />
              </span>
              <span className="ml-4 text-[#3e454f] font-bold text-[15px] hover:text-[#00E6AC]">
                SKILLS
              </span>
            </li>
            <li className="border-2 border-[#222831] rounded-[8px]  w-44 h-16 flex items-center">
              <span className="flex items-center  bg-[#151c25] p-5 rounded-[8px] hover:bg-[#00E6AC]  hover:text-black transition duration-200 ease-in-out">
                <ImProfile className="text-2xl" />
              </span>
              <span className="ml-4 text-[#3e454f] font-bold text-[15px] hover:text-[#00E6AC]">
                PROFILE
              </span>
            </li>
            <li className="border-2 border-[#151c25] rounded-[8px]  w-44 h-16 flex items-center">
              <span className="flex items-center  bg-[#151c25] p-5 rounded-[8px] hover:bg-[#00E6AC]  hover:text-black transition duration-200 ease-in-out">
                <HiOutlineChatBubbleLeftRight className="text-2xl" />
              </span>
              <span className="ml-4 text-[#3e454f] font-bold text-[15px] hover:text-[#00E6AC]">
                CONTACT
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
