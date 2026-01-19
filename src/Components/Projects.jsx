import React from "react";
import visualid from "../../src/assets/video/visualid.mp4";
import framer from "../assets/video/framer.mp4";
import thid from "../assets/video/thid.mp4";
import chair from "../../img/chair.jpg";
import home from "../../img/home.jpg";
import visual from "../../img/visual.jpg";
import uiImg from "../../img/ui.webp";
import uiVideo from "../assets/video/ui.mp4";
 
const Projects = () => {
  return (
    <>
      <div className="pro-sectiontext-white m-4 mt-8 rounded-2xl border-gray-500 border-2 p-4">
        <div className="project flex flex-wrap items-center mb-8 justify-between p-4 text-2xl">
          <h1 className="font-[cyr] text-4xl text-white">Recent Projects</h1>
          <p className="w-full md:w-1/2 text-gray-400 mt-4  font-[libre]">
            Step into our portfolio and experience projects crafted with vision,
            precision, and modern design excellence.
          </p>
        </div>
        <div className="section-project grid grid-cols-2 gap-10 place-items-center m-5  ">
          <div className="first-one mx-auto cursor-pointer">
            <div className="firstImg relative w-120 h-100 overflow-hidden ml-8 hover:animate-pulse">
              <img
                src={chair}
                alt=""
                className="w-full h-full object-cover rounded-4xl
               transition duration-300
             hover:opacity-0"
              />

              <video
                src={thid}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full
               object-cover object-center
               rounded-4xl opacity-0
               transition duration-300
               hover:opacity-100"
              ></video>
              <i className="ri-arrow-right-up-long-line text-3xl absolute top-2 right-3 border-2 border-[#0000004d] backdrop-blur-md p-3 rounded-full shadow-lg  "></i>
              <h2 className="text-md absolute bottom-3 left-2 font-[areg] font-bold text-white bg-fuchsia-500 p-2 rounded-2xl">
                2D/3D Animation
              </h2>
            </div>
            <h3 className="mt-4 text-3xl text-fuchsia-500 font-[areg] pl-4">
              Aristo Chairs
            </h3>
            <p className="mt-2 text-lg font-semibold font-[libre] text-gray-500 w-full md:w-160 px-3 ">
              An animation website uses motion effects to create an engaging
              user experience. Instead of static content, elements move, fade,
              scale, or react to scroll & hover actions.
            </p>
          </div>
          <div className="sec-one mt-24 cursor-pointer">
            <div className="firstImg relative w-120 h-100 overflow-hidden">
              <img
                src={home}
                alt=""
                className="w-full h-full object-cover rounded-4xl
               transition duration-300
             hover:opacity-0"
              />

              <video
                src={framer}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full
               object-cover object-center
               rounded-4xl opacity-0
               transition duration-300
               hover:opacity-100"
              ></video>
              <i className="ri-arrow-right-up-long-line text-3xl absolute top-2 right-3 border-2 border-[#0000004d] backdrop-blur-md p-3 rounded-full shadow-lg hover:rotate-180 hover:bg-cyan-700 hover:border-0"></i>
              <h2 className="text-md absolute bottom-3 left-2 font-[areg] font-bold   text-white bg-fuchsia-500 p-2 rounded-2xl">
                Motion Graphics
              </h2>
            </div>
            <h3 className="mt-4 text-3xl text-fuchsia-500 font-[areg]">
              Signature Living
            </h3>
            <p className="mt-2 text-lg font-semibold font-[libre] text-gray-500 w-full md:w-160">
              Motion Graphics create engaging animated visuals that help
              communicate ideas clearly and creatively. They are widely used in
              social media, and presentations to make content more attractive .
            </p>
          </div>
          <div className="thi-one mx-auto cursor-pointer">
            <div className="firstImg relative w-120 h-100 overflow-hidden">
              <img
                src={visual}
                alt=""
                className="w-full h-full object-cover rounded-4xl
               transition duration-300
             hover:opacity-0"
              />

              <video
                src={visualid}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full
               object-cover object-center
               rounded-4xl opacity-0
               transition duration-300
               hover:opacity-100"
              ></video>
              <i className="ri-arrow-right-up-long-line text-3xl absolute top-2 right-3 border-2 border-[#0000004d] backdrop-blur-md p-3 rounded-full shadow-lg hover:rotate-180 hover:bg-cyan-700 hover:border-0"></i>
              <h2 className="text-md absolute bottom-3 left-2 font-[areg] font-bold   text-white bg-fuchsia-500 p-2 rounded-2xl">
                Visual Identity
              </h2>
            </div>
            <h3 className="mt-4 text-3xl text-fuchsia-500 font-[areg] pl-1">
              Artify Studio
            </h3>
            <p className="mt-2 text-lg font-semibold font-[libre] text-gray-500 w-full md:w-160 px-3 ">
              Visual Identity defines how a brand looks and feels across all
              platforms. It includes logos, colors, typography, and design
              elements that create a consistent and recognizable brand image.
            </p>
          </div>

          <div className="four-one mt-24 cursor-pointer">
            <div className="firstImg relative w-120 h-100 overflow-hidden">
              <img
                src={uiImg}
                alt=""
                className="w-full h-full object-cover rounded-4xl
               transition duration-300
             hover:opacity-0"
              />

              <video
                src={uiVideo}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full
               object-cover object-center
               rounded-4xl opacity-0
               transition duration-300
               hover:opacity-100"
              ></video>
              <i className="ri-arrow-right-up-long-line text-3xl absolute top-2 right-3 border-2 border-[#0000004d] backdrop-blur-md p-3 rounded-full shadow-lg hover:rotate-180 hover:bg-cyan-700 hover:border-0"></i>
              <h2 className="text-md absolute bottom-3 left-2 font-[areg] font-bold   text-white bg-fuchsia-500 p-2 rounded-2xl">
                UI/UX Designer
              </h2>
            </div>
            <h3 className="mt-4 text-3xl text-fuchsia-500 font-[areg]">
              StreamVerse
            </h3>
            <p className="mt-2 text-lg font-semibold font-[libre] text-gray-500 w-full md:w-160">
              We craft intuitive interfaces and seamless experiences, making
              every interaction effortless. Our designs balance aesthetics with
              functionality to engage and delight users.
            </p>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Projects;
