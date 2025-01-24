import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";
import icon5 from "../../assets/icon5.png";

const Domains = () => {
  const barData = [
    {
      color: "bg-[#AE4073]",
      lighterColor: "bg-[#D06C92]",
      direction: "left",
      domain: "Web Dev",
      text: "Crafting the web, one pixel at a time.",
      icon: icon1,
    },
    {
      color: "bg-[#9A3C81]",
      lighterColor: "bg-[#B8679C]",
      direction: "right",
      domain: "App Dev",
      text: "Pocket-sized innovation at your fingertips.",
      icon: icon2,
    },
    {
      color: "bg-[#44457C]",
      lighterColor: "bg-[#6B6C9D]",
      direction: "left",
      domain: "AI-ML",
      text: "Powering the future with smart solutions.",
      icon: icon3,
    },
    {
      color: "bg-[#2E3A67]",
      lighterColor: "bg-[#51608A]",
      direction: "right",
      domain: "R&D",
      text: "Innovating tech beyond boundaries.",
      icon: icon4,
    },
    {
      color: "bg-[#2B4C68]",
      lighterColor: "bg-[#4A6D89]",
      direction: "left",
      domain: "Events",
      text: "Bringing ideas to life through connection.",
      icon: icon5,
    },
  ];

  const barVariants = (direction) => ({
    hidden: {
      x: direction === "left" ? "-150%" : "150%",
      opacity: 0,
    },
    visible: {
      x: direction === "left" ? "-200px" : "200px",
      opacity: 1,
      transition: { type: "spring", stiffness: 50, damping: 15 },
    },
  });

  const barVariantsMobile = (direction) => ({
    hidden: {
      x: direction === "left" ? "-100%" : "100%",
      opacity: 0,
    },
    visible: {
      x: direction === "left" ? "-90px" : "90px",
      opacity: 1,
      transition: { type: "spring", stiffness: 40, damping: 20 },
    },
  });

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  return (
    <div
      className="bg-[#141930] min-h-screen flex items-center justify-center px-5 overflow-x-hidden"
      ref={ref}
    >
      {/* Larger Devices */}
      <div className="hidden lg:block relative w-full max-w-[60%] space-y-8 p-10">
        <h1 className="text-4xl font-bold text-[#FFDCC1] text-center mb-6">
          Domains
        </h1>
        <div className="border-2 border-[#A15766] rounded-xl overflow-hidden p-6">
          <div className="space-y-6 mx-auto">
            {barData.map((bar, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={barVariants(bar.direction)}
                className={`relative w-[90%] h-40 ${bar.color} flex items-center rounded-full overflow-hidden mx-auto`}
              >
                <div
                  className={`absolute w-36 h-36 ${bar.lighterColor} rounded-full flex items-center justify-center`}
                  style={{
                    [bar.direction === "left" ? "right" : "left"]: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                >
                  <img
                    src={bar.icon}
                    alt="Domain Image"
                    className="w-32 h-32 object-cover rounded-full"
                  />
                </div>

                {bar.direction === "left" && (
                  <div
                    className="z-10 text-white flex flex-col justify-center items-end w-full"
                    style={{
                      paddingRight: "calc(9rem + 84px)",
                      whiteSpace: "nowrap", // Prevent wrapping
                      overflow: "visible", // Allow text to expand outside the container
                    }}
                  >
                    <h2 className="font-bold text-xl mb-2">{bar.domain}</h2>
                    <p className="italic text-sm text-right leading-tight pl-48">
                      {bar.text}
                    </p>
                  </div>
                )}

                {bar.direction === "right" && (
                  <div
                    className="z-10 text-white flex flex-col justify-center items-start pl-12 w-full"
                    style={{
                      paddingLeft: "calc(9rem + 84px)",
                      whiteSpace: "nowrap", // Prevent wrapping
                      overflow: "visible", // Allow text to expand outside the container
                    }}
                  >
                    <h2 className="font-bold text-xl mb-2">{bar.domain}</h2>
                    <p className="italic text-sm text-left leading-tight">
                      {bar.text}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden space-y-6 w-full max-w-[95%] mx-auto px-4">
        <h1 className="text-2xl font-bold text-[#FFDCC1] text-center mb-4">
          Domains
        </h1>
        {barData.map((bar, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={barVariantsMobile(bar.direction)}
            className={`relative w-full h-32 sm:h-36 ${bar.color} flex items-center rounded-full overflow-hidden mx-auto`}
          >
            {/* Circle Image */}
            <div
              className={`absolute w-24 sm:w-32 h-24 sm:h-32 ${bar.lighterColor} rounded-full flex items-center justify-center`}
              style={{
                [bar.direction === "left" ? "right" : "left"]: "10px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <img
                src={bar.icon}
                alt="Domain Image"
                className="w-20 sm:w-28 h-20 sm:h-28 object-cover rounded-full"
              />
            </div>

            {/* Text Div for Left Bars */}
            {bar.direction === "left" && (
              <div
                className="z-10 text-white flex flex-col justify-center items-end pr-8 w-full"
                style={{
                  maxWidth: "75%",
                  paddingLeft: "40px", // Adds padding for symmetry
                  marginRight: "3rem", // Space between image and text
                  textAlign: "right", // Aligns text to the right
                  wordWrap: "break-word",
                }}
              >
                <h2 className="font-bold text-lg sm:text-xl mb-1 sm:mb-2">
                  {bar.domain}
                </h2>
                <p className="italic text-xs sm:text-sm break-words leading-tight">
                  {bar.text}
                </p>
              </div>
            )}

            {/* Text Div for Right Bars */}
            {bar.direction === "right" && (
              <div
                className="z-10 text-white flex flex-col justify-center items-start pl-8 w-full"
                style={{
                  maxWidth: "75%",
                  paddingRight: "44px", // Adds padding for symmetry
                  marginLeft: "5rem", // Space between image and text
                  textAlign: "left", // Aligns text to the left
                  wordWrap: "break-word",
                }}
              >
                <h2 className="font-bold text-lg sm:text-xl mb-1 sm:mb-2">
                  {bar.domain}
                </h2>
                <p className="italic text-xs sm:text-sm break-words leading-tight">
                  {bar.text}
                </p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Domains;
