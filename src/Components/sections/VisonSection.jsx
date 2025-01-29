import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const VisionSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const opacity = 1 - scrollY / 500; 
  return (
    <motion.div
      className="relative h-screen flex items-center justify-center text-white px-6"
      style={{ opacity: Math.max(opacity, 0) }} 
      transition={{ duration: 0.5 }}
    >
      <div className="text-center max-w-4xl">
        <h1 className="text-[82px] font-bold bg-gradient-to-r from-[#FFDCC1] to-[#998474] bg-clip-text text-transparent mb-8">
          VISION
        </h1>
        <ul className="list-disc space-y-6 text-[20px] leading-relaxed text-center">
          <li className="bg-gradient-to-r from-[#FFDCC1] to-[#998474] bg-clip-text font-bold ">
            Establish an inclusive community where core tech concepts—such as computer architecture, design systems,
            cloud computing, and DevOps—are emphasized, alongside a supportive space for open-source contributions
            and the development of industry-level projects.
          </li>
          <li className="bg-gradient-to-r from-[#FFDCC1] to-[#cba78b] bg-clip-text  font-bold">
            Facilitate more national and international conferences at SRM, aimed not only at second- and third-year
            students but also at fourth-year students working on research papers, providing them with valuable insights
            and exposure.
          </li>
          <li className="bg-gradient-to-r from-[#FFDCC1] to-[#998474] bg-clip-text font-bold">
            Build a community that functions with a corporate-like framework, serving as both a tech club and a
            professional development hub. It would provide members with industry-standard working structures and
            methods, helping them gain practical experience and skills essential for future roles in the workforce.
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default VisionSection;
