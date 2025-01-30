import React, { useState } from "react";
import {motion, easeIn} from "framer-motion";
import Logo from "../assets/image.png";
import Down from "../assets/idfrontdown.png";
import Up from "../assets/idfrontup.png";
import Chip from "../assets/Chip.png";
import QR from "../assets/TestQR.jpg";
import ReactCardFlip from "react-card-flip";

const JoinUs = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [name, setName] = useState("");
  const [year, setYear] = useState("1st");
  const [gender, setGender] = useState("M");
  const [regNumber, setRegNumber] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [transaction, settransaction] = useState("");
  const [domain, setdomain] = useState("");

  function flipCard() {
    setIsFlipped(!isFlipped);
  }

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-[#141930]">
        <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
          <motion.div 
           whileInView={{ opacity: 1, y: 0 }}
           initial={{ opacity: 0, y: -500 }}
           transition={{ duration: 1.3 }}
          >
            <div className="relative w-[300px] h-[500px] bg-[#1b2243] rounded-xl overflow-hidden border-2 border-[#F99D93] shadow-lg">
              <div className="absolute top-0 left-0 w-full h-20">
                <img src={Up} alt="" />
              </div>
              <div className="absolute top-6 flex justify-center text-white">
                <img className="w-[65px] rounded-full ml-[110px]" src={Logo} alt="LOGO" />
              </div>
              <div className="flex flex-col items-start absolute top-8 left-[180px] border-l-2 border-white pl-2">
                <h2 className="text-[22px] font-semibold text-[#FFDCC1] mt-[-10px]">Realm</h2>
                <h2 className="text-[22px] font-semibold text-[#FFDCC1] mt-[-10px]">SRM</h2>
              </div>
              <div className="absolute top-[160px] text-[#FFDCC1] w-full">
                <input
                  type="text"
                  placeholder="Enter Your Register Number"
                  value={regNumber}
                  onChange={(e) => setRegNumber(e.target.value)}
                  className="text-md font-bold text-center mt-[30px] w-[80%] mx-auto block bg-transparent rounded px-2 py-1 placeholder-[#FFDCC1] placeholder-opacity-40 text-[15px]"
                />
                <div className="flex mt-[20px]">
                  <select
                    className="text-[14px] font-bold px-3 py-1 rounded text-[#FFDCC1] bg-transparent appearance-none"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  >
                    <option className="text-black" value="1st">1st</option>
                    <option className="text-black" value="2nd">2nd</option>
                    <option className="text-black" value="3rd">3rd</option>
                  </select>
                  <select
                    className="text-[14px] font-bold px-3 py-1 rounded text-[#FFDCC1] bg-transparent appearance-none"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option className="text-black" value="M">M</option>
                    <option className="text-black" value="F">F</option>
                    <option className="text-black" value="not say">Prefer not to say</option>
                  </select>
                </div>
                <p className="text-xs text-[#FFDCC1] ml-[10px]">Year / Gender</p>
                <input
                  type="text"
                  placeholder="Enter Cardholder Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-[26px] w-[80%] mx-auto block text-center text-md font-bold text-[#FFDCC1] bg-transparent rounded px-2 py-1 placeholder-[#FFDCC1] placeholder-opacity-40"
                />         
              </div>
              <div className="mt-[400px] ml-[210px] text-[#FFDCC1]">
              <select
               className="text-[22px] font-belle  px-0 py-1 rounded text-[#FFDCC1] bg-transparent appearance-none"
              value={domain}
              onChange={(e) => setdomain(e.target.value)}
              >
                <option className="text-black font-poppins text-[13px] text-center" value="Web Dev">Web Dev</option>
                <option className="text-black font-poppins text-[13px] text-center" value="App Dev">App Dev</option>
                <option className="text-black font-poppins text-[13px] text-center" value="AI/Ml">AI/ML</option>
                <option className="text-black font-poppins text-[13px] text-center" value="R&D">R&D</option>
                <option className="text-black font-poppins text-[13px] text-center " value="UI/UX">UI/UX</option>
                <option className="text-black font-poppins text-[13px] text-center" value="Events">Events</option>
              </select>
            </div>
              <div className="absolute bottom-0 left-0 w-full h-18">
                <img src={Down} alt="" />
              </div>
              <div className="absolute bottom-[70px] left-[60px] transform -translate-x-1/2 w-12 h-8">
              <img src={Chip} alt="" />
            </div>
            </div>
          </motion.div>

          <div>
            <div className="relative w-[300px] h-[500px] rounded-xl overflow-hidden bg-[#1b2243] border-2 border-[#F99D93] shadow-lg">
              <div className="absolute top-0 left-0 w-full h-20">
                <img src={Up} alt="" />
              </div>
              <div className="absolute top-6 flex justify-center text-white">
                <img className="w-[65px] rounded-full ml-[110px]" src={Logo} alt="LOGO" />
              </div>
              <div className="flex flex-col items-start absolute top-8 left-[180px] border-l-2 border-white pl-2">
                <h2 className="text-[22px] font-semibold text-[#FFDCC1] mt-[-10px]">Realm</h2>
                <h2 className="text-[22px] font-semibold text-[#FFDCC1] mt-[-10px]">SRM</h2>
              </div>
              <div className="absolute top-[150px] text-[#FFDCC1] w-full">
                <input
                  type="text"
                  placeholder="Enter Your Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="text-md font-bold text-center w-[80%] mx-auto mt-[-50px] block bg-transparent rounded px-1 py-1 placeholder-[#FFDCC1] placeholder-opacity-40"
                />
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-md font-bold text-center w-[80%] mx-auto block bg-transparent rounded px-2 py-1 placeholder-[#FFDCC1] placeholder-opacity-40 mt-3"
                />
                <input
                  type="text"
                  placeholder="Enter Your Transaction ID"
                  value={transaction}
                  onChange={(e) => settransaction(e.target.value)}
                  className="text-md font-bold text-center w-[80%] mt-[180px] mx-auto block bg-transparent rounded px-2 py-1 placeholder-[#FFDCC1] placeholder-opacity-40 "
                  onClick={() => alert("FILL THE TRANSACTION ID ONLY AFTER PAYMENT")}
                />
              </div>
              <div className="flex mt-[300px] justify-center">
                <h2 className="mt-[-110px] text-[#FFDCC1] font-bold">Scan To Pay</h2>
                <img className="w-[100px] ml-[-100px] mt-[-75px]" src={QR} alt="" />
              </div>
              <div className="absolute bottom-12 ml-[38px] text-[11px] text-[#FFDCC1] text-center">
                “Good luck! Hoping to see you in our club”
              </div>
              <div className="absolute bottom-0 left-0 w-full h-18">
                <img src={Down} alt="" />
              </div>
            </div>
          </div>
        </ReactCardFlip>
        <motion.button
         whileInView={{ opacity: 1, x: 0 }}
         initial={{ opacity: 0, x: -500 }}
         transition={{ duration: 0.5, delay: 0 }}
          className="absolute left-[41%] top-[630px] border text-[#FFDCC1] bg-[#141930] outline-none px-4 py-2 rounded transition-transform duration-300 hover:scale-105 active:scale-95"
          onClick={flipCard}
        >
          Click To Flip
        </motion.button>
        <motion.button
         whileInView={{ opacity: 1, x: 0 }}
         initial={{ opacity: 0, x: 500 }}
         transition={{ duration: 0.5 }}
          className="absolute left-[52%] top-[630px] border text-[#FFDCC1] bg-[#141930] outline-none px-4 py-2 rounded transition-transform duration-300 hover:scale-105 active:scale-95"
        >
          Submit
        </motion.button>
      </div>
    </>
  );
};
export default JoinUs;
