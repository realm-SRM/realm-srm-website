import React from "react";
import logo from "../assets/image.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import Waves from "../assets/Group 7.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#141930]">
      {/* Waves Section */}
      <div className="relative">
        <img
          src={Waves}
          alt="Waves"
          className="w-full h-auto block"
          style={{ marginBottom: "-50px", transform: "translateX(-2px)" }} // Moves the waves to the left
        />
      </div>

      {/* Footer Section */}
      <footer className="bg-[#38457C] text-gray-400 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start">
          <div className="flex-1 md:mr-auto">
            <h1 className="text-3xl font-bold flex items-center space-x-2 text-[#FCC397]">
              <span>
                <img src={logo} alt="logo" className="w-12 h-12" />
              </span>
              <span>Realm</span>
            </h1>
            <p className="mt-3 text-sm leading-relaxed">
              SRM Institute of Science and Technology,
              <br />
              Kattankulathur, Chennai 603203,
              <br />
              India
            </p>
          </div>

          <div className="flex-1 md:ml-auto md:text-right">
            <h3 className="font-bold text-lg text-white mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-pink-500 transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-pink-500 transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-pink-500 transition duration-300">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-pink-500 transition duration-300">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/join-us" className="hover:text-pink-500 transition duration-300">
                  Join Us
                </Link>
              </li>
              <li>
                <Link to="/accelerators" className="hover:text-pink-500 transition duration-300">
                  Accelerators
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-4 text-left">
          <div className="flex px-40 space-x-2 text-sm mb-4">
            <span>Contact Us | </span>
            <a href="#" className="hover:text-gray-300">
              <LinkedInIcon />
            </a>
            <a href="#" className="hover:text-gray-300">
              <TwitterIcon />
            </a>
            <a href="#" className="hover:text-gray-300">
              <InstagramIcon />
            </a>
            <a href="#" className="hover:text-gray-300">
              <EmailIcon />
            </a>
          </div>
          <p className="text-center text-sm">&copy; 2025 Realm. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
