import React from "react";
import { Link } from "react-router-dom";
import Shivansh from '../../assets/shivanshBhaiya.jpg';

const AboutUs = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#38457C] px-4">
      <div className="flex flex-wrap lg:flex-nowrap w-full max-w-[1009px] bg-[#19203e] rounded-lg p-6 md:p-8 shadow-lg">
        <div className="w-full lg:w-1/2 flex justify-center items-center">
        
          <div className="w-full h-[200px] sm:h-[300px] lg:h-[90%] border-2 border-gray-400 relative">
          <img 
        className="h-full w-full"
        src={Shivansh} alt="BhaiyaJI" />
            <div className="absolute border-t-2 border-gray-400 top-0 left-0 w-full h-full"></div>
            <div className="absolute border-l-2 border-gray-400 bottom-0 right-0 w-full h-full"></div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:ml-8 text-left">
          <h2 className="text-[32px] sm:text-[48px] lg:text-[85px] font-bold text-[#FFDCC1] mb-4 leading-tight">
            Our Vision
          </h2>
          <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal mt-[-10px] lg:mt-[-20px] text-white leading-6 lg:leading-7">
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
          <Link to="/OurClub">
            <button className="mt-6 px-6 sm:px-8 py-2 bg-[#FFDCC1] hover:bg-[#f1c09b] text-[#F15191] font-bold text-[18px] sm:text-[22px] lg:text-[26px] rounded-full transition duration-300">
              Know More?
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
