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

  const barVariants = (direction, isSmallScreen) => {
    if (isSmallScreen) {
      return {
        hidden: {
          x: direction === 'left' ? '-50%' : '50%',
          opacity: 0,
        },
        visible: {
          x: direction === 'left' ? '-30%' : '30%',
          opacity: 1,
          transition: { type: 'spring', stiffness: 50, damping: 15 },
        },
      };
    }

    // Default (original animation for larger screens)
    return {
      hidden: {
        x: direction === 'left' ? '-100%' : '100%',
        opacity: 0,
      },
      visible: {
        x: direction === 'left' ? '-700px' : '300px',
        opacity: 1,
        transition: { type: 'spring', stiffness: 50, damping: 15 },
      },
    };
  };

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });


  const isSmallScreen = window.matchMedia('(max-width: 768px)').matches;

  return (
    <div className="bg-[#141930] min-h-screen flex items-center justify-center px-5" ref={ref}>
      <div className="relative w-full max-w-[60%] space-y-8 p-4">
        <h1 className="text-4xl font-bold text-[#FFDCC1] text-center mb-6">Domains</h1>
        <div className="border-2 border-[#A15766] rounded-xl p-6 overflow-hidden">
          <div className="space-y-8 mx-auto">
            {barData.map((bar, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={barVariants(bar.direction, isSmallScreen)}
                className={`relative w-[80vw] h-32 ${bar.color} flex items-center rounded-full overflow-hidden mx-auto`}
              >
                {/* Circle */}
                <div
                  className={`absolute w-32 h-32 rounded-full ${lightenColor(bar.color)} opacity-80`}
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

