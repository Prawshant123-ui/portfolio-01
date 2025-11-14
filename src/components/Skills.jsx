import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaDatabase, FaMobileAlt } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-600 w-6 h-6" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600 w-6 h-6" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500 w-6 h-6" /> },
  { name: "React", icon: <FaReact className="text-blue-400 w-6 h-6" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600 w-6 h-6" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-800 w-6 h-6" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700 w-6 h-6" /> },
  { name: "Git & GitHub", icon: <FaGitAlt className="text-red-600 w-6 h-6" /> },
  { name: "Responsive Design", icon: <FaMobileAlt className="text-purple-600 w-6 h-6" /> },
];

const Skills = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-6 md:px-16 lg:px-32" id="skills">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-10 relative inline-block">
          My Skills
          <span className="absolute left-1/2 -bottom-2 transform -translate-x-1/2 w-16 h-1 bg-blue-600 rounded-full"></span>
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center justify-center space-x-3 bg-white shadow-md hover:shadow-xl rounded-xl py-4 px-6 text-gray-800 font-semibold hover:bg-blue-600 hover:text-white transition duration-300 cursor-pointer"
            >
              <span>{skill.icon}</span>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
