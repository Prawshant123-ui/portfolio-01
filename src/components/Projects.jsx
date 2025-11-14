import React from "react";
import { projects } from "../data/projects"; // Make sure you're importing the JS export

const Projects = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-16 lg:px-32" id="projects">
      <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-12 relative inline-block">
        My Projects
        <span className="absolute left-1/2 -bottom-2 transform -translate-x-1/2 w-16 h-1 bg-blue-600 rounded-full"></span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            <img
              src={project.img}
              alt={project.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-6 flex flex-col flex-1">
              <h2 className="text-2xl font-semibold mb-2 text-gray-900">
                {project.title}
              </h2>
              <p className="text-gray-700 flex-1">{project.description}</p>
              <a
                href={project.link}
                className="mt-4 inline-block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition duration-300"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
