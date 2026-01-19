 import React from "react";
import line2 from '../../../img/line2.png'
const Bottom = () => {
  return (
    <div className="flex items-center px-8">

      <h1 className="text-white text-4xl 
      border-fuchsia-500 border-2 
      p-6 rounded-full  hover:bg-cyan-900 hover:text-gray-100 hover:border-0 transition-all duration-100 ease-in-out
 hover:animate-pulse
      rotate-350">
        Create Magic
      </h1>

      <i className="ri-asterisk -mt-7
      bg-violet-600 text-white text-4xl 
      cursor-pointer 
      rounded-full p-4 
      hover:rotate-180 transition duration-500">
      </i>
<div className="line ml-[24em] w-120">
    <img src={line2} alt="" />
</div>
    </div>
  );
};

export default Bottom;
