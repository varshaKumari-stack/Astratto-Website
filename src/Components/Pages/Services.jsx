import React from "react";
import animate from "../../assets/video/AnimateCard.mp4";
import dashboard from "../../assets/video/dashboard.mp4";
import responsive from "../../assets/video/responsive.mp4";
import animation from "../../assets/video/animation.mp4";
import framer from "../../assets/video/framer.mp4";
import thid from "../../assets/video/thid.mp4";
import circle from "../../../img/circleone.png";
import Projects from "../Projects";
const Services = () => {
  const services = [
    {
      title: "Website Designer",
      desc: "A website designer plans and designs the structure, layout, and look of websites. They ensure the site is attractive, user-friendly, and responsive across devices.",
      video: animate,
    },
    {
      title: "UI/UX Designer",
      desc: "UI/UX design creates simple, intuitive interfaces for smooth user interaction. It focuses on user needs to deliver visually appealing and functional experiences.",
      video: dashboard,
    },
    {
      title: "Visual Design",
      desc: "Visual design focuses on creating attractive, balanced layouts using color, typography, and imagery. It enhances user experience by making interfaces clear, engaging, and visually appealing.",
      video: responsive,
    },
    {
      title: "Motion Graphics",
      desc: "Motion graphics use animation and visual effects to make designs dynamic and engaging.",
      video: thid,
    },
    {
      title: "Framer Designer",
      desc: "Framer Motion is a React library for creating smooth, declarative animations and gestures.",
      video: framer,
    },
    {
      title: "2D/3D Animation",
      desc: "Animation adds motion to UI elements, making interfaces feel dynamic and engaging.",
      video: animation,
    },
  ];

  return (
    <>
      <div className="m-4 p-4 border-2 border-gray-500 rounded-2xl service-main">
        <div className="service text-white flex flex-wrap justify-between items-center mb-8">
          <h1 className="font-[cyr] text-4xl">Services</h1>
          <p className="w-full md:w-1/2 text-gray-400 mt-4  font-[libre]">
            Builds the interactive, user-facing parts of websites and apps using
            HTML, CSS, JS and React, focusing on intuitive design,
            responsiveness, performance, and accessibility.
          </p>
        </div>

        <div className="service-section flex flex-wrap justify-center gap-24 ">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative border-4 border-violet-800 rounded-3xl w-full md:w-90 overflow-visible"
            >
              <div
                className="absolute bottom-7 left-18 z-50 opacity-0 scale-75 
                            group-hover:opacity-100 group-hover:scale-100
                            transition-all duration-300 ease-in-out  
                            border-violet-700 backdrop-blur-md p-6 rounded-full shadow-lg"
              >
                <i className="ri-arrow-right-up-line text-4xl   text-cyan-600"></i>
              </div>

              <div className="partone flex justify-between p-4 text-white border-b border-gray-500 items-center">
                <h1 className="text-2xl font-[rp] text-cyan-600">
                  {service.title}
                </h1>

                <i
                  className="ri-arrow-right-up-long-line border-[3px] border-gray-600 p-3 rounded-full text-2xl
                           opacity-100 group-hover:opacity-0
                           transition-all duration-300 ease-in-out"
                ></i>
              </div>

              <p className="text-gray-400 text-justify p-2">{service.desc}</p>

              <video
                src={service.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full rounded-4xl p-4"
              ></video>
            </div>
          ))}
        </div>
        <div className="icon text-white m-4 flex justify-between items-center">
          <div className="arrow1 flex gap-4 items-center text-4xl">
            <i className="ri-arrow-left-long-fill text-gray-500 font-bold"></i>
            <i class="ri-arrow-right-long-line"></i>
          </div>
          <div className="dash flex gap-4 items-center">
            <p className="text-5xl -mt-1 text-gray-500">—</p>
            <p>—</p>
            <p>—</p>
            <p>—</p>
            <p>—</p>
            <p>—</p>
            <p>—</p>
            <p>—</p>
            <p>—</p>
            <p>—</p>
          </div>
        </div>
        <div className="bottom-text text-white text-center m-4">
          <h1 className="text-4xl font-[areg] text-fuchsia-500 mb-4">
            - Kiara Verma
          </h1>
          <p className="text-2xl mx-auto max-w-3xl font-[cyr] text-gray-400 leading-relaxed">
            <i className="ri-guide-fill inline-block mr-4 text-5xl guide align-middle"></i>
            We <span className="text-violet-600 font-semibold">design</span> and
            <span className="text-cyan-400 font-semibold">
              develop websites
            </span>
            and apps that are interactive,
            <span className="text-fuchsia-600 font-semibold"> responsive</span>,
            <span className="inline-flex items-center mx-3 align-middle">
              <img
                src={circle}
                alt="circle"
                className="w-12 h-12 rounded-full border-4 border-violet-700 
      animate-spin object-contain"
              />
            </span>
            and user-friendly, ensuring
            <span className="text-gray-300 font-semibold"> seamless</span>
            performance and engaging
            <span className="text-amber-400 font-semibold"> experiences</span>
            for every user.
            <span className="ml-12 inline-block text-6xl animate-pulse align-middle">
              ⭐
            </span>
          </p>
        </div>
      </div>
      
    </>
  );
};

export default Services;
