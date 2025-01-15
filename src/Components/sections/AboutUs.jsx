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
            About Us
          </h2>
          <p className="text-[18px] font-normal mt-[-20px]  text-white leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            libero repellendus corporis. Tempore quam blanditiis, fugit
            asperiores doloremque, velit commodi, quaerat nemo excepturi minima
            repudiandae nesciunt reiciendis ullam? Maxime consectetur
            consequatur porro quo a! Ea eaque pariatur molestiae quasi harum
            illo voluptate molestias sequi veritatis dicta veniam odit, nemo
            dolores neque omnis quae eos nisi nam? Doloremque tempore voluptate
            iste vel hic obcaecati, quaerat nobis at eum molestiae fugiat odit
            veniam officia laboriosam culpa sit in, blanditiis dolorem, iusto
            minima quod mollitia quas placeat consectetur? Delectus ipsam
            doloremque nam consequuntur pariatur. Dolorem voluptas eveniet
            expedita blanditiis nemo itaque voluptatibus minus!
          </p>
          <button className="mt-6 px-8 py-1 bg-[#FFDCC1]  hover:bg-pink-300 text-[#F15191] font-bold text-[26px] rounded-full transition duration-300">
            Know More?
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
