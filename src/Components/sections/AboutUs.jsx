import React from "react";

const AboutUs = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#38457C]">
      <div className="flex flex-wrap lg:flex-nowrap w-[1069px] h-[573px] md:w-4/5 bg-[#19203e] rounded-lg p-8 shadow-lg">
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="w-full h-full border-2 border-gray-400 relative">
            <div className="absolute border-t-2 border-gray-400 top-0 left-0 w-full h-full"></div>
            <div className="absolute border-l-2 border-gray-400 bottom-0 right-0 w-full h-full"></div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:ml-8 text-left">
          <h2 className="text-[85px]  font-bold text-[#FFDCC1] mb-4">
            Our Vision
          </h2>
          <p className="text-[18px] font-normal mt-[-20px]  text-white leading-6">
            Our vision is to build a vibrant community of innovators,
            technologists, and leaders who drive advancements in technology and
            creativity. We strive to create a platform that fosters learning,
            collaboration, and growth. By equipping members with practical
            skills, we empower them to work on impactful projects and make
            meaningful contributions to the tech ecosystem. Through knowledge
            sharing, teamwork, and innovation, we aim to inspire a culture of
            continuous development and excellence. Together, we seek to push
            boundaries, solve real-world challenges, and shape the future of
            technology while supporting personal and professional growth for all
            members.
          </p>
          <button className="mt-6 px-8 py-1 bg-[#FFDCC1]  hover:bg-[#f1c09b] text-[#F15191] font-bold text-[26px] rounded-full transition duration-300">
            Know More?
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
