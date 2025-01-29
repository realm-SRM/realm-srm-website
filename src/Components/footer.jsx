import React from "react";
import logo from "../assets/image.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import Waves from "../assets/Group 7.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#141930]">
      <div className="relative">
        <img
          src={Waves}
          alt="Waves"
          className="w-full h-auto block"
          style={{ marginBottom: "-40px", transform: "translateX(-2px)" }}
        />
      </div>

      <footer className="bg-[#38457C] text-gray-400 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start">
          <div className="flex-1 md:mr-auto">
            <h1 className="text-3xl font-bold flex items-center space-x-2 text-[#FCC397]">
              <span>
                <img src={logo} alt="logo" className="w-12 h-12" />
              </span>
              <span>realm SRM</span>
            </h1>
            <p className="mt-3 text-sm leading-relaxed">
              SRM Institute of Science and Technology,
              <br />
              Kattankulathur, Chennai 603203,
              <br />
              India
            </p>
            Contact Us
Last updated on 24-01-2025 00:31:22<br></br>
You may contact us using the information below:<br></br>
Merchant Legal entity name: AAKARSH KUMAR <br />
Registered Address: Purushottam Das Lane, A N Road, Gaya, Bihar, PIN: 823001 <br />
Operational Address: Purushottam Das Lane, A N Road, Gaya, Bihar, PIN: 823001 <br />
Telephone No: 6200050435 <br />
E-Mail ID: kumaraakarsh25@gmail.com
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
                <Link to="/ourclub" className="hover:text-pink-500 transition duration-300">
                  Our Club
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
              <li>
                <Link to="/TermsConditions" className="hover:text-pink-500 transition duration-300">
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-4">
          {/* Social Icons Section */}
          <div className="flex justify-center lg:justify-start lg:px-40 space-x-4 text-sm mb-4 md:px-0">
            <a href="#" className="hover:text-gray-300">
              <GitHubIcon />
            </a>
            <a href="#" className="hover:text-gray-300">
              <XIcon />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FacebookIcon />
            </a>
            <a href="#" className="hover:text-gray-300">
              <InstagramIcon />
            </a>
            <a href="#" className="hover:text-gray-300">
              <LinkedInIcon />
            </a>
            <a href="#" className="hover:text-gray-300">
              <EmailIcon />
            </a>
            <a href="#" className="hover:text-gray-300">
              <LocalPhoneIcon />
            </a>
          </div>
          <p className="text-center text-sm">&copy; 2025 Realm. All rights reserved</p>
          <p className="text-center text-sm">
            Made by:{" "}
            <a href="https://github.com/Aakarsh-Kumar" target="_blank">
              Aakarsh
            </a>
            ,{" "}
            <a href="https://github.com/DevanshuTripathi" target="_blank">
              Devanshu
            </a>
            ,{" "}
            <a href="https://github.com/Priyanshu2608" target="_blank">
              Priyanshu
            </a>
            ,{" "}
            <a href="https://github.com/jayeshmehra344" target="_blank">
              Jayesh
            </a>
            ,{" "}
            <a href="https://github.com/DevanshuTripathi" target="_blank">
              Devanshu
            </a>
            ,{" "}
            <a href="https://github.com/DevanshuTripathi" target="_blank">
              Devanshu
            </a>
            ,{" "}
            <a href="https://github.com/DevanshuTripathi" target="_blank">
              Devanshu
            </a>
            ,{" "}
            <a href="https://github.com/DevanshuTripathi" target="_blank">
              Devanshu
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

