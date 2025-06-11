"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
// import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { GlobeDemo } from "./GridGlobe";
import { leftLists, rightLists } from "@/app/data";
import { useState } from "react";
import animationData from "@/Lottie/confetti.json";
import Lottie from "react-lottie";
import MagicButton from "../MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { FaDownload } from "react-icons/fa6";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  image,
  imageClassName,
  titleClassName,
  spareimage,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("mabdullah08work@gmail.com");
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };
  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none  justify-between flex flex-col space-y-4 border border-white/[0.1] ",
        className
      )}
      style={{
        background: "rgba(2,0,36)",
        backgroundColor:
          "linear-gradient(90deg,rgba(2,0,36,1)0%,rgba(59,59,68,1)26%,rgba(93,108,111,1)100%)  ",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="absolute w-full h-full">
          {image && (
            <Image
              src={image}
              alt={image}
              className={cn(imageClassName, "object-contain, object-center")}
              width={400}
              height={50}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareimage && (
            <Image
              src={spareimage}
              alt={image}
              className={"object-contain, object-center w-full h-full"}
              width={100}
              height={50}
            />
          )}
        </div>
{/*         {id === 6 &&
        <BackgroundGradientAnimation >

        </BackgroundGradientAnimation>

        } */}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 duration-200 relative md:h-full min-h-40 flex flex-col px-5  p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10 dark:text-neutral-300">
            {description}
          </div>
          <div className="z-10 font-sans text-lg font-bold text-neutral-600 dark:text-neutral-200 lg:text-3xl max-w-96">
            {title}
          </div>
          {id === 2 && <GlobeDemo />}
          {id === 3 && (
            <div className="absolute flex gap-1  lg:gap-5 w-fit -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 lg:gap-8">
                {leftLists.map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
              </div>

              <div className="flex flex-col gap-3 lg:gap-8">
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
                {rightLists.map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="relative mt-5 ">
              {copied && (
                <div className="absolute right-0 -bottom-5">
                  <Lottie options={defaultOptions} height={200} width={400} />
                </div>
              )}
              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
              />
            </div>
          )}
          {
            id===1 &&(<div>
               <a
                href="/cv001.docx" 
                download
              >
                <MagicButton
                  title="Download Resume"
                  position="right"
                  icon={<FaDownload />}
                />
              </a>

            </div>)
          }
          
        </div>
      </div>
    </div>
  );
};
