import React from "react";
import { useState, useEffect } from "react";
import loadCashfree from "./cashfreeService";
import { load } from "@cashfreepayments/cashfree-js";
import { motion, easeIn } from "framer-motion";
import Logo from "../assets/image.png";
import Down from "../assets/idfrontdown.png";
import Up from "../assets/idfrontup.png";
import Chip from "../assets/Chip.png";
import TapPay from "../assets/TapPay.png";
import ReactCardFlip from "react-card-flip";

let cashfree;
var initializeSDK = async function () {
  cashfree = await load({
    mode: import.meta.env.VITE_PAYMENT_MODE, // Set to "production" for production
  });
};
initializeSDK();
const submitPayment = async () => {
  // payload will have all the deinformation of the user
  // create payload by taking value from the input fields
  const payload = { name: "aakarsh", email: "aakarsh2504@gmail.com" }; // Replace with your data

  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/joinus/create_order`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: payload,
      }
    );

    const data = await response.json();

    console.log(data.payment_session_id);
    let checkoutOptions = {
      paymentSessionId: data.payment_session_id,
      redirectTarget: "_modal",
    };
    cashfree.checkout(checkoutOptions).then((result) => {
      if (result.error) {
        // This will be true whenever user clicks on close icon inside the modal or any error happens during the payment
        console.log(
          "User has closed the popup or there is some payment error, Check for Payment Status"
        );
        console.log(result.error);
      }
      if (result.redirect) {
        // This will be true when the payment redirection page couldnt be opened in the same window
        // This is an exceptional case only when the page is opened inside an inAppBrowser
        // In this case the customer will be redirected to return url once payment is completed
        console.log("Payment will be redirected");
      }
      if (result.paymentDetails) {
        // This will be called whenever the payment is completed irrespective of transaction status
        console.log("Payment has been completed, Check for Payment Status");
        console.log(result.paymentDetails.paymentMessage);
      }
    });
  } catch (error) {
    console.log("Error submitting form: " + error.message);
  }
};

const JoinUs = () => {
  const [cashfree, setCashfree] = useState(null);

  useEffect(() => {
    loadCashfree((Cashfree) => {
      const cfInstance = Cashfree({ mode: "production" });
      setCashfree(cfInstance);
    });
  }, []);

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
                <img
                  className="w-[65px] rounded-full ml-[110px]"
                  src={Logo}
                  alt="LOGO"
                />
              </div>
              <div className="flex flex-col items-start absolute top-8 left-[180px] border-l-2 border-white pl-2">
                <h2 className="text-[22px] font-semibold text-[#FFDCC1] mt-[-10px]">
                  Realm
                </h2>
                <h2 className="text-[22px] font-semibold text-[#FFDCC1] mt-[-10px]">
                  SRM
                </h2>
              </div>
              <div className="absolute top-[160px] text-[#FFDCC1] w-full">
                <input
                  type="text"
                  placeholder="Enter Your Register Number"
                  value={regNumber}
                  onChange={(e) => setRegNumber(e.target.value)}
                  className="text-md font-bold text-center mt-[30px] w-[95%] mx-auto block bg-transparent rounded px-2 py-1 placeholder-[#FFDCC1] placeholder-opacity-40 text-[18px]"
                />
                <div className="flex mt-[20px]">
                  <select
                    className="text-[14px] font-bold px-3 py-1 rounded text-[#FFDCC1] bg-transparent appearance-none"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  >
                    <option className="text-black" value="1st">
                      1st
                    </option>
                    <option className="text-black" value="2nd">
                      2nd
                    </option>
                    <option className="text-black" value="3rd">
                      3rd
                    </option>
                  </select>
                  <select
                    className="text-[14px] font-bold px-3 py-1 rounded text-[#FFDCC1] bg-transparent appearance-none"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option className="text-black" value="M">
                      M
                    </option>
                    <option className="text-black" value="F">
                      F
                    </option>
                    <option className="text-black" value="not say">
                      Prefer not to say
                    </option>
                  </select>
                </div>
                <p className="text-xs text-[#FFDCC1] ml-[10px]">
                  Year / Gender
                </p>
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
                  className="text-[22px] font-belle  px-0 outline-none  rounded text-[#FFDCC1] bg-transparent appearance-none"
                  value={domain}
                  onChange={(e) => setdomain(e.target.value)}
                >
                  <option
                    className="text-black font-poppins text-[13px] text-center"
                    value="Web Dev"
                  >
                    Web Dev
                  </option>
                  <option
                    className="text-black font-poppins text-[13px] text-center"
                    value="App Dev"
                  >
                    App Dev
                  </option>
                  <option
                    className="text-black font-poppins text-[13px] text-center"
                    value="AI/Ml"
                  >
                    AI/ML
                  </option>
                  <option
                    className="text-black font-poppins text-[13px] text-center"
                    value="R&D"
                  >
                    R&D
                  </option>
                  <option
                    className="text-black font-poppins text-[13px] text-center "
                    value="UI/UX"
                  >
                    UI/UX
                  </option>
                  <option
                    className="text-black font-poppins text-[13px] text-center"
                    value="Events"
                  >
                    Events
                  </option>
                </select>
                <h2 className="text-[11px] mt-[-8px] ml-[-25px]">
                  Select your domain
                </h2>
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
                <img
                  className="w-[65px] rounded-full ml-[110px]"
                  src={Logo}
                  alt="LOGO"
                />
              </div>
              <div className="flex flex-col items-start absolute top-8 left-[180px] border-l-2 border-white pl-2">
                <h2 className="text-[22px] font-semibold text-[#FFDCC1] mt-[-10px]">
                  Realm
                </h2>
                <h2 className="text-[22px] font-semibold text-[#FFDCC1] mt-[-10px]">
                  SRM
                </h2>
              </div>
              <div className="absolute top-[150px] text-[#FFDCC1] w-full">
                <input
                  type="text"
                  placeholder="Enter Your Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="text-md font-bold text-center w-[80%] mx-auto mt-[-20px] block bg-transparent rounded px-1 py-1 placeholder-[#FFDCC1] placeholder-opacity-40"
                />
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-md font-bold text-center w-[80%] mx-auto block bg-transparent rounded px-2 py-1 placeholder-[#FFDCC1] placeholder-opacity-40 mt-3"
                />
              </div>
              <div className="flex mt-[300px] justify-center">
                <h2 className="mt-[-70px] text-[#FFDCC1] font-bold text-[20px]">
                  Tap Here To Pay
                </h2>
              </div>
              <img
                className="w-[150px] ml-[30%] mt-[-5px]"
                src={TapPay}
                alt="Tap&Pay"
                onClick={submitPayment}
              />

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
          className="absolute left-[42%] top-[650px] border text-[#FFDCC1] bg-[#141930] outline-none px-4 py-2 rounded transition-transform duration-300 hover:scale-105 active:scale-95"
          onClick={flipCard}
        >
          Click To Flip
        </motion.button>
        <motion.button
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 500 }}
          transition={{ duration: 0.5 }}
          className="absolute left-[52%] top-[650px] border text-[#FFDCC1] bg-[#141930] outline-none px-4 py-2 rounded transition-transform duration-300 hover:scale-105 active:scale-95"
        >
          Submit
        </motion.button>
      </div>
    </>
  );
};

export default JoinUs;
