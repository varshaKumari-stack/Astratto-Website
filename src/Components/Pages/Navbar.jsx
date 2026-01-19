import React from "react";
import { Link } from "react-router-dom";
import "../Pages/fonts.css";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between px-3 py-4 text-white items-center font-[areg] nav">
        <div className="part1 flex gap-12 text-3xl items-center ">
          <Link
            to="/services"
            className="hover:text-fuchsia-500 hover:text-shadow-indigo-700 nav-link"
          >
            Services
          </Link>
          <Link
            to="/projects"
            className="hover:text-fuchsia-500 hover:text-shadow-indigo-700 nav-link"
          >
            Work
          </Link>
          <Link
            to="/"
            className="hover:text-fuchsia-500 hover:text-shadow-indigo-700 nav-link"
          >
            About
          </Link>
        </div>

        <div className="part2 flex gap-2 text-3xl font-bold items-center  ">
          <Link to="/">
            <i
              className="ri-shining-2-fill inline-block text-purple-500 text-4xl 
            animate-pulse 
            drop-shadow-[0_0_10px_#a855f7]drop-shadow-[0_0_25px_#9333ea]
            drop-shadow-[0_0_40px_#7e22ce]
            transition duration-500 
            hover:rotate-360
            hover:drop-shadow-[0_0_30px_#9333ea]"
            ></i>
          </Link>

          <Link
            to="/"
            className="hover:text-fuchsia-500 hover:text-shadow-indigo-700 text-cyan-600 text-3xl nav-link"
          >
            Astratto
          </Link>
        </div>

        <div className="part3 flex gap-6 text-3xl items-center">
          <Link
            to="/Careers"
            className="hover:text-violet-500 hover:text-shadow-indigo-700  "
          >
            Careers
          </Link>

          <Link
            to="/footer"
            className="border-4 border-[#4f4f4fda] 
          px-4 py-2 contact
          rounded-4xl
          bg-[#1e1c1c] 
          hover:border-transparent 
          outline-none 
          transition-all duration-150 
          flex items-center gap-2 hover:text-violet-500 part3-link"
          >
            Contact
            <i
              className="ri-arrow-right-up-line 
          text-[#7109f9db] 
          text-4xl 
         rounded-3xl "
            ></i>
          </Link>
        </div>
      </div>
      <hr className="text-[#f2f0f089] my-0 mx-4" />
    </>
  );
};

export default Navbar;
