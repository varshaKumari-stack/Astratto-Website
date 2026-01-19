import React from "react";
import left from "../../../img/left.avif";
import circle from "../../../img/circle-removebg-preview.png";
import right from "../../../img/right.png";
import line from "../../../img/line.png";
import Bottom from "./Bottom";
import Services from "../Pages/Services";
import Footer from "./Footer";
import Projects from "../Projects";
 

const Home = () => {
  return (
    <>
      <div className="px-6 py-12 relative flex justify-between items-center">
        <i
          className="ri-sparkling-2-fill absolute top-16 left-24 rotate-180 
      text-7xl z-10 bg-amber-300 bg-clip-text text-transparent"
        ></i>

        <div
          className="img w-100 rotate-20 hover:animate-bounce
        border-2 rounded-b-full
        transition duration-500 
        hover:drop-shadow-[0_0_40px_#9333ea] m-1"
        >
          <img src={left} alt="3d-image" className="rounded-b-full " />
        </div>
        <div className="line absolute left-36 w-56  bottom-18">
          <img src={line} alt="line" />
        </div>

        <div className="text -ml-42">
          <h1 className="text-white text-center text-5xl  text-capitalize homeH1 -ml-8">
            Igniting the Spark of Inspiration
          </h1>

          <p
            className="capitalize text-[7.5rem]   w-full 
        text-center mt-2 leading-[1.2] font-[libre] text-white"
          >
            Unleash Your <br /> Brand
            <span className="inline-block mx-3 border-violet-800 border-4 rounded-full hover:bg-gray-600  hover:border-0 animate-spin ">
              <img src={circle} alt="circle-image" className="w-24 " />
            </span>
            with Our <span className="magito font-[rock]">Magico</span> Design
          </p>
        </div>

        <div className="right gap-10 flex flex-col  border relative mr-3">
          <h1 className="absolute -top-58 right-3 rounded-2xl whitespace-nowrap   text-2xl text-white font-[abold] bg-fuchsia-400 p-2">
            Banjara Hills Road, 26
          </h1>
          <h1 className="absolute -top-44 right-3 rounded-lg font-[abold] text-2xl bg-fuchsia-400 text-white p-2">
            211007,Florence
          </h1>

          <div className="image2 w-80 absolute  -bottom-100 -right-8 ">
            <img
              src={right}
              alt="home image"
              className="  w-140  rotate-10 
           hover:animate-bounce border
        rounded-t-full
        transition duration-500 
        hover:drop-shadow-[0_0_40px_#9333ea]"
            />
          </div>
        </div>
      </div>
      <Bottom />
      <Services />
      <Projects />
      <Footer />
    </>
  );
};

export default Home;
