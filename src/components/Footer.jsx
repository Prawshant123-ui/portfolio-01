import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12 px-6 md:px-16 lg:px-32">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Logo */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-widest font-serif italic hover:text-yellow-300 transition duration-300 cursor-pointer">
            Prashant
          </h1>
          <p className="text-gray-400 mt-2">Crafting modern web experiences</p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-xl font-semibold mb-4">Contact</h2>
          <ul className="space-y-2 text-gray-400">
            <li>Country: Nepal</li>
            <li>City: Chitwan, Bharatpur</li>
            <li>Phone: +977-9864436694</li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-xl font-semibold mb-4">Follow Me</h2>
          <div className="flex space-x-4 text-2xl text-gray-400">
            <a href="https://www.facebook.com/profile.php?id=100089948352363" className="hover:text-blue-500 transition duration-300">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/praw_shantt/" className="hover:text-pink-500 transition duration-300">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/prashant-sharma-bab7aa373/" className="hover:text-blue-600 transition duration-300">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/Prawshant123-ui" className="hover:text-gray-100 transition duration-300">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-gray-500 text-sm">
        © 2024 Prashant. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
