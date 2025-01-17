// import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

// const Domains = () => {
//   const barData = [
//     { color: 'bg-[#AE4073]', direction: 'left' },
//     { color: 'bg-[#9A3C81]', direction: 'right' },
//     { color: 'bg-[#44457C]', direction: 'left' },
//     { color: 'bg-[#2E3A67]', direction: 'right' },
//   ];

//   const barVariants = (direction) => ({
//     hidden: {
//       x: direction === 'left' ? '-100%' : '100%',
//       opacity: 0,
//     },
//     visible: {
//       x: direction === 'left' ? '-700px' : '300px',
//       opacity: 2,
//       transition: { type: 'spring', stiffness: 50, damping: 15 },
//     },
//   });

//   const lightenColor = (color) => {
//     const colorMap = {
//       'bg-[#AE4073]': 'bg-[#F05091]',
//       'bg-[#9A3C81]': 'bg-[#9A50A5]',
//       'bg-[#44457C]': 'bg-[#58579E]',
//       'bg-[#2E3A67]': 'bg-[#38467F]',
//     };
//     return colorMap[color] || color;
//   };

//   // Add intersection observer hook
//   const { ref, inView } = useInView({
//     threshold: 0.5, // Trigger animation when 50% of the component is visible
//     triggerOnce: true, // Animation should run only once
//   });

//   return (
//     <div className="bg-[#141930] min-h-screen flex items-center justify-center px-5" ref={ref}>
//       {/* Adjusted max-width to make the box smaller */}
//       <div className="relative w-full max-w-[60%] space-y-8 p-4">
//         <h1 className="text-4xl font-bold text-[#FFDCC1] text-center mb-6">Domains</h1>
//         <div className="border-2 border-[#A15766] rounded-xl p-6 overflow-hidden">
//           <div className="space-y-8 mx-auto">
//             {barData.map((bar, index) => (
//               <motion.div
//                 key={index}
//                 initial="hidden"
//                 animate={inView ? 'visible' : 'hidden'}
//                 variants={barVariants(bar.direction)}
//                 className={`relative w-[80vw] h-32 ${bar.color} flex items-center rounded-full overflow-hidden mx-auto`}
//               >
//                 <div
//                   className={`absolute w-32 h-32 rounded-full ${lightenColor(bar.color)} opacity-80`}
//                   style={{
//                     [bar.direction === 'left' ? 'right' : 'left']: '0',
//                   }}
//                 ></div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Domains;

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Domains = () => {
  const barData = [
    { color: 'bg-[#AE4073]', direction: 'left' },
    { color: 'bg-[#9A3C81]', direction: 'right' },
    { color: 'bg-[#44457C]', direction: 'left' },
    { color: 'bg-[#2E3A67]', direction: 'right' },
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

  const lightenColor = (color) => {
    const colorMap = {
      'bg-[#AE4073]': 'bg-[#F05091]',
      'bg-[#9A3C81]': 'bg-[#9A50A5]',
      'bg-[#44457C]': 'bg-[#58579E]',
      'bg-[#2E3A67]': 'bg-[#38467F]',
    };
    return colorMap[color] || color;
  };

  // Add intersection observer hook
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger animation when 50% of the component is visible
    triggerOnce: true, // Animation should run only once
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
                <div
                  className={`absolute w-32 h-32 rounded-full ${lightenColor(bar.color)} opacity-80`}
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
