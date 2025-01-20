import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/image.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#1c1b29]/80 backdrop-blur-md" : "bg-[#1c1b29]"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-8 h-8 rounded-full" />
          <h1 className="text-xl font-bold text-[#FFDCC1] ml-2">realm SRM</h1>
        </div>

        {/* Burger Icon */}
        <button
          className="lg:hidden text-[#FFDCC1] focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-1 bg-[#FFDCC1] mb-1 rounded transition-all"></div>
          <div className="w-6 h-1 bg-[#FFDCC1] mb-1 rounded transition-all"></div>
          <div className="w-6 h-1 bg-[#FFDCC1] rounded transition-all"></div>
        </button>

        {/* Menu */}
        <ul
  className={`absolute top-[100%] left-0 w-full bg-[#1c1b29] lg:static lg:flex lg:items-center lg:space-x-8 lg:bg-transparent lg:w-auto lg:translate-x-0 lg:opacity-100 lg:py-0 py-4 text-center text-[#FFDCC1] transition-all duration-300 ${
    isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
  }`}
>
  <li>
    <Link
      to="/"
      className="block py-2 lg:py-0 hover:text-pink-500 transition duration-300"
      onClick={() => setIsMenuOpen(false)}
    >
      Home
    </Link>
  </li>
  <li>
    <Link
      to="/about"
      className="block py-2 lg:py-0 hover:text-pink-500 transition duration-300"
      onClick={() => setIsMenuOpen(false)}
    >
      Our Club
    </Link>
  </li>
  <li>
    <Link
      to="/events"
      className="block py-2 lg:py-0 hover:text-pink-500 transition duration-300"
      onClick={() => setIsMenuOpen(false)}
    >
      Events
    </Link>
  </li>
  <li>
    <Link
      to="/team"
      className="block py-2 lg:py-0 hover:text-pink-500 transition duration-300"
      onClick={() => setIsMenuOpen(false)}
    >
      Team
    </Link>
  </li>
  <li>
    <Link
      to="/accelerators"
      className="block py-2 lg:py-0 hover:text-pink-500 transition duration-300"
      onClick={() => setIsMenuOpen(false)}
    >
      Accelerators
    </Link>
  </li>
  <li>
    <Link
      to="/join-us"
      className="relative block py-2 px-6 lg:py-2 lg:px-6 text-white bg-[#F77C88] font-bold rounded-lg shadow-lg overflow-hidden group transition-all duration-300"
      onClick={() => setIsMenuOpen(false)}
    >  
      <span className="absolute inset-0 z-0 h-full w-full scale-x-0 bg-[#D34CA3] transition-all duration-300 ease-in-out group-hover:scale-x-100 origin-left"></span>
      <span className="relative z-10 text-[#FFDCC1]">Join Us</span>
    </Link>
  </li>
</ul>
      </div>
    </nav>
  );
};

export default Navbar;
