import React from 'react';
import { motion } from 'framer-motion';


const Domains = () => {
  const barData = [
    { color: 'bg-[#AE4073]', direction: 'left' },
    { color: 'bg-[#9A3C81]', direction: 'right' },
    { color: 'bg-[#44457C]', direction: 'left' },
    { color: 'bg-[#2E3A67]', direction: 'right' },
  ];

  const barVariants = (direction) => ({
    hidden: {
      x: direction === 'left' ? '-100%' : '100%',
      opacity: 0, 
    },
    visible: {
      x: direction === 'left' ? '-450px' : '450px', 
      opacity: 1, 
      transition: { type: 'spring', stiffness: 50, damping: 15 },
    },
  });

  const lightenColor = (color) => {
    const colorMap = {
      'bg-[#AE4073]': 'bg-[#F05091]',
      'bg-[#9A3C81]': 'bg-[#9A50A5]',
      'bg-[#44457C]': 'bg-[#58579E]',
      'bg-[#2E3A67]': 'bg-[#38467F]',
    };
    return colorMap[color] || color;
  };

  return (
    <div className="bg-[#141930] min-h-screen flex items-center justify-center px-5">
      <div className="relative w-full max-w-[calc(100%-40px)] space-y-12 p-10">
      <h1 className="text-4xl font-bold text-[#FFDCC1] text-center mb-10">Domains</h1>
        <div className="border-2 border-[#F05091] rounded-xl p-5 overflow-hidden">
          <div className="space-y-10 mx-auto">
            {barData.map((bar, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                variants={barVariants(bar.direction)}
                className={`relative w-[80vw] h-32 ${bar.color} flex items-center rounded-full overflow-hidden mx-auto`} // Increased bar size
              >
                <div
                  className={`absolute w-32 h-32 rounded-full ${lightenColor(bar.color)} opacity-80`} // Increased circle size
                  style={{
                    [bar.direction === 'left' ? 'right' : 'left']: '0',
                  }}
                ></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Domains;
