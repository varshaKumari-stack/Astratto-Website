import React from "react";
import logo from "../../../img/circleone.png";
const Footer = () => {
  return (
    <>
      <div className="m-5 text-white relative border border-gray-500 rounded-2xl p-4">
        <h1 className="text-center text-4xl pt-4 font-[cyr] text-fuchsia-600">
          Open the door to forging your brand's story
        </h1>
        <h2 className="absolute left-52 text-6xl rotate-25 animate-pulse">
          ✨
        </h2>
        <p className="p-4  pt-8 text-center  mx-auto text-3xl w-full md:w-260 text-fuchsia-300">
          Embark on a Transformative Journey Shapping
          <span className="footer p-2 text-white">Your Brand's Desnity </span>
          Through Our Dedicated Partnership.
        </p>
        <p className=" p-4 text-center mx-auto text-xl w-full md:w-160 text-gray-400 font-[areg]">
          Join us a transformativejourney to shape your brand's destiny through
          our dedicated partnership,crafting a narative that resonates
        </p>
        <img
          src={logo}
          alt="circle"
          className="w-44 h-44  absolute right-76 bottom-12
              animate-spin object-contain"
        />
        <hr className="mt-6" />
        <div className="bottom-part text-gray-400 flex justify-between items-center mt-5 font-[rp]">
          <p>Vila della Creativity 23, 211007 Millaon</p>
          <div className="icon flex gap-8 text-2xl ">
            <i className="ri-twitter-x-line  text-cyan-300"></i>
            <i className="ri-whatsapp-line text-cyan-300"></i>
            <i className="ri-instagram-line text-cyan-300"></i>
          </div>
          <div className="last flex gap-6">
            <p>Policy and Cookies Party</p>
            <p>Astratto©️2000</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
