import React from "react";
import logo from "../assets/image.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <footer className="bg-[#1c1b29] text-gray-400 py-4 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="flex-1 md:mr-auto">
          <h1 className="text-3xl font-bold flex items-center space-x-2 text-white">
            <span>
              <img src={logo} alt="logo" className="w-12 h-12 " />
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
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blogs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Team
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Join Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Accelerators
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-6 pt-4 text-left">
        <div className="flex px-40 space-x-2 text-sm mb-4">
          <span>Contact Us  | </span>
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
  );
};

export default Footer;