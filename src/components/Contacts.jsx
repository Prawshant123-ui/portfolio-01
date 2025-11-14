

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_hycnpvi", // 🔹 Replace with your EmailJS service ID
        "template_sjpv9pb", // 🔹 Replace with your EmailJS template ID
        form.current,
        "_m2go7TCJu414QA1_" // 🔹 Replace with your EmailJS public key
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setStatus("❌ Failed to send message. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section
      className="bg-gray-50 py-20 px-6 md:px-16 lg:px-32"
      id="contact"
    >
      <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-12 relative inline-block">
        Contact Me
        <span className="absolute left-1/2 -bottom-2 transform -translate-x-1/2 w-16 h-1 bg-blue-600 rounded-full"></span>
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600">
            I’d love to hear from you! Whether you have a question, a project
            idea, or just want to connect — feel free to reach out.
          </p>

          <div className="space-y-4 mt-6">
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-blue-600 text-xl" />
              <span className="text-gray-700">Nepal, Chitwan, Bharatpur - 05</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-blue-600 text-xl" />
              <span className="text-gray-700">+977-9864436694</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-blue-600 text-xl" />
              <span className="text-gray-700">
                aoiokido123@gmail.com <br /> coddieprawshant909@gmail.com
              </span>
            </div>
          </div>

          {/* Socials */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Follow Me
            </h3>
            <div className="flex space-x-4 text-2xl text-gray-600">
              <a
                href="https://www.linkedin.com/in/prashant-sharma-bab7aa373/"
                className="hover:text-blue-600 transition duration-300"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100089948352363"
                className="hover:text-blue-500 transition duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/praw_shantt/"
                className="hover:text-pink-500 transition duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://x.com/Praw_Shantt909"
                className="hover:text-gray-900 transition duration-300"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white shadow-lg rounded-xl p-8 space-y-6 border border-gray-100"
        >
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="from_name"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="from_email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Write your message..."
              rows="5"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full ${
              loading ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
            } text-white font-semibold py-3 rounded-lg shadow-md transition duration-300`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p
              className={`text-center text-sm ${
                status.includes("✅") ? "text-green-600" : "text-red-600"
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;












