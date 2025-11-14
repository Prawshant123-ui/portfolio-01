import React from "react";

const About = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-16 lg:px-32" id="about">
      <div className="max-w-4xl mx-auto text-center md:text-left">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 relative inline-block">
          About Me
          <span className="absolute left-1/2 md:left-0 -bottom-2 transform -translate-x-1/2 md:translate-x-0 w-16 h-1 bg-blue-600 rounded-full"></span>
        </h1>

        <p className="text-gray-700 leading-relaxed text-lg">
          Namaste! I’m{" "}
          <span className="font-semibold text-blue-600">
            Prashant Sharma
          </span>
          , a passionate web developer with a love for creating beautiful,
          functional, and user-friendly websites. I believe that great design
          goes hand in hand with clean and efficient code, and I always aim to
          deliver digital experiences that not only look amazing but also
          perform seamlessly across all devices. From crafting personal blogs to
          developing e-commerce platforms and professional business sites, I
          enjoy turning creative ideas into reality through the power of code
          and design.
        </p>

        <p className="text-gray-700 leading-relaxed text-lg mt-6">
          Currently, I’m pursuing my{" "}
          <span className="font-semibold text-blue-600">
            Bachelor in Computer Applications (BCA)
          </span>{" "}
          from Tribhuvan University, where I’m strengthening my foundation in
          software development and web technologies. Alongside web development,
          I’m exploring{" "}
          <span className="font-semibold text-indigo-600">AI</span> and{" "}
          <span className="font-semibold text-indigo-600">IoT</span> to
          integrate modern innovations into my future projects. My long-term
          goal is to pursue a{" "}
          <span className="font-semibold text-blue-600">
            Master’s in Computer Science and Software Development by Research
          </span>
          , where I can contribute to building smarter, more connected, and
          future-ready solutions.
        </p>
      </div>
    </section>
  );
};

export default About;
