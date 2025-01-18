import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Domains = () => {
  const barData = [
    {
      color: 'bg-[#AE4073]',
      circleColor: 'bg-[#F05091]',
      direction: 'left',
      domain: 'Web Development',
      text: 'Building the digital foundations of tomorrow, one pixel at a time.',
    },
    {
      color: 'bg-[#9A3C81]',
      circleColor: 'bg-[#B363A5]',
      direction: 'right',
      domain: 'App Development',
      text: 'Transforming ideas into apps that fit right in your pocket.',
    },
    {
      color: 'bg-[#44457C]',
      circleColor: 'bg-[#5A5A9E]',
      direction: 'left',
      domain: 'AI-ML',
      text: 'Empowering the future with intelligence that learns and evolves.',
    },
    {
      color: 'bg-[#2E3A67]',
      circleColor: 'bg-[#41507F]',
      direction: 'right',
      domain: 'R&D',
      text: 'Innovating solutions that redefine the possibilities of technology.',
    },
    {
      color: 'bg-[#2B4C68]',
      circleColor: 'bg-[#3A5F85]',
      direction: 'left',
      domain: 'Events',
      text: 'Where creativity and innovation collide to inspire and connect.',
    },
  ];

  const barVariants = (direction) => ({
    hidden: {
      x: direction === 'left' ? '-150%' : '150%',
      opacity: 0,
    },
    visible: {
      x: direction === 'left' ? '-200px' : '200px',
      opacity: 1,
      transition: { type: 'spring', stiffness: 50, damping: 15 },
    },
  });

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  return (
    <div className="bg-[#141930] min-h-screen flex items-center justify-center px-5" ref={ref}>
      {/* Larger Devices */}
      <div className="hidden lg:block relative w-full max-w-[60%] p-6 space-y-8">
        <h1 className="text-4xl font-bold text-[#FFDCC1] text-center mb-6">Domains</h1>
        <div className="border-2 border-[#A15766] rounded-xl overflow-hidden p-6">
          <div className="space-y-6 mx-auto">
            {barData.map((bar, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={barVariants(bar.direction)}
                className={`relative w-[90%] h-40 ${bar.color} flex items-center rounded-full overflow-hidden mx-auto px-6`}
              >
                {/* Circle */}
                <div
                  className={`absolute w-36 h-36 rounded-full ${bar.circleColor} opacity-80`}
                  style={{
                    [bar.direction === 'left' ? 'right' : 'left']: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                  }}
                ></div>

                {/* Text Inside the Bar */}
                <div
                  className={`z-10 text-white flex flex-col justify-center items-start ${
                    bar.direction === 'left' ? 'pl-56 pr-6 -ml-20' : 'pl-40 pr-6'
                  } w-full`}
                >
                  <h2 className="font-bold text-xl mb-2">{bar.domain}</h2>
                  <p className="italic text-sm">{bar.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden space-y-6 w-full max-w-[90%] mx-auto">
        <h1 className="text-2xl font-bold text-[#FFDCC1] text-center mb-4">Domains</h1>
        {barData.map((bar, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className={`relative w-full ${bar.color} rounded-full p-6 text-center shadow-md`}
          >
            <h2 className="text-lg font-bold text-white mb-2">{bar.domain}</h2>
            <p className="text-sm italic text-white">{bar.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Domains;

