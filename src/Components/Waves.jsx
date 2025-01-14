import React from 'react'
import './Waves.css'
const Waves = () => {
  return (
    
       <div className="bg-[#39477F] h-screen flex flex-col justify-center items-center relative overflow-hidden">
      <nav className="absolute top-0 left-0 w-full bg-[#2C2E41] p-4 flex justify-between items-center text-white">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-gradient-to-br from-[#FCC397] to-[#F77C88] rounded-full"></div>
          <span className="font-semibold text-lg">Realm</span>
        </div>
        <ul className="flex space-x-6 text-sm">
          <li><a href="#" className="hover:text-[#FCC397]">Home</a></li>
          <li><a href="#" className="hover:text-[#FCC397]">About Us</a></li>
          <li><a href="#" className="hover:text-[#FCC397]">Events</a></li>
          <li><a href="#" className="hover:text-[#FCC397]">Our Team</a></li>
          <li><a href="#" className="hover:text-[#FCC397]">Contact Us</a></li>
        </ul>
      </nav>

      <header className="text-center text-white">
        <h1 className="text-6xl font-bold">Realm.</h1>
      </header>

      <section className="absolute bottom-0 w-full">
        <div className="air air1"></div>
        <div className="air air2"></div>
        <div className="air air3"></div>
        <div className="air air4"></div>
        <div className="air air5"></div>
        <div className="air air6"></div>
      </section>
    </div>
  )
}

export default Waves
