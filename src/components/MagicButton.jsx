import React from "react";

const MagicButton = ({ title, position , icon, handleClick }) => {
  return (
   
    <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 md:w-60 md:mt-10 gap-2 sm:mt-10" onClick={handleClick}>
   
      {position === "left" && icon}
      {title}
      {position === "right" && icon}
    </button>
  );
};
export default MagicButton;
