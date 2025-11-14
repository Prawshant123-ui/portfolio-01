import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-widest font-serif italic hover:text-yellow-300 transition duration-300 cursor-pointer">
          Prashant
        </h1>

        {/* Navigation Menu */}
        <ul className="flex space-x-8 text-lg font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-yellow-300 cursor-pointer transition duration-300 ${
                  isActive ? "text-yellow-300 font-bold" : "text-white"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `hover:text-yellow-300 cursor-pointer transition duration-300 ${
                  isActive ? "text-yellow-300 font-bold" : "text-white"
                }`
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacts"
              className={({ isActive }) =>
                `hover:text-yellow-300 cursor-pointer transition duration-300 ${
                  isActive ? "text-yellow-300 font-bold" : "text-white"
                }`
              }
            >
              Contacts
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
