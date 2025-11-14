import { useNavigate } from "react-router-dom";
import profileImg from "../assets/prashant.png";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex flex-col md:flex-row justify-center items-center bg-gray-50 px-6 md:px-16 lg:px-32 pt-24">
      {/* Left content */}
      <div className="flex-1 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Prashant
          </span>
        </h1>

        <p className="text-gray-700 leading-relaxed max-w-xl mx-auto md:mx-0">
          Namaste! I'm Prashant, a passionate web developer dedicated to crafting
          beautiful and functional websites. I strive to create digital
          experiences that look great and perform seamlessly across all devices.
          I’m also exploring AI and IoT to bring modern technologies into my
          projects.
        </p>

        <div className="flex justify-center md:justify-start gap-4">
          <button
            onClick={() => navigate("/contacts")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300"
          >
            Hire Me
          </button>

          <a
            href="/Prashant_Resume.pdf" // place your resume file inside public folder
            download
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Right image */}
      <div className="flex-1 mt-10 md:mt-0 flex justify-center">
        <img
          src={profileImg}
          alt="Profile"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-xl object-cover border-4 border-blue-600 hover:scale-105 transition-transform duration-300"
        />
      </div>
    </section>
  );
};

export default Homepage;


import React from "react";