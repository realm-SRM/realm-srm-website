import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/image.png";
const Navbar = () => {
  return (
    <nav className="bg-[#1c1b29] ">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-8 h-8 rounded-full" />
          <h1 className="text-xl font-bold text-[#FFDCC1] ml-2">Realm SRM</h1>
        </div>

        <ul className="flex space-x-6 text-[#FFDCC1]">
          <li>
            <Link
              to="/"
              className=" hover:text-pink-500 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/aboutus"
              className=" hover:text-pink-500 transition duration-300"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="events"
              className=" hover:text-pink-500 transition duration-300"
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              to="Team"
              className=" hover:text-pink-500 transition duration-300"
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              to="joinus"
              className=" hover:text-pink-500 transition duration-300"
            >
              Join Us
            </Link>
          </li>
          <li>
            <Link
              to="accelerators"
              className=" hover:text-pink-500 transition duration-300"
            >
              Accelerators
            </Link>
          </li> 
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
