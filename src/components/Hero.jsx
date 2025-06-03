import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";

const Hero = () => {
  return (
    <div className="pt-20 pb-20">
      <div>
        <Spotlight
          className="h-screen -top-40 -left-10 md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        className="absolute top-0 left-0 flex items-center justify-center w-screen h-screen">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none ">
          <BackgroundBeamsWithCollision />
        </div>
      </div>

      <div className="relative z-10 flex justify-center my-20">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          
          <TextGenerateEffect
            words="Bringing ideas to life through refined experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="mb-4 text-sm text-center md:tracking-wider md:text-lg lg:text-2xl">
            Hi I&apos;m Muhammad Abdullah, a <span className="text-purple">FullStack Developer</span> based in Pakistan.
          </p>
          <a href="#projects">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
