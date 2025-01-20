import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import img1 from '../../assets/img1.png';

const Domains = () => {
  const barData = [
    {
      color: 'bg-[#AE4073]',
      direction: 'left',
      domain: 'Web Development',
      text: 'Building the digital foundations of tomorrow, one pixel at a time.',
    },
    {
      color: 'bg-[#9A3C81]',
      direction: 'right',
      domain: 'App Development',
      text: 'Transforming ideas into apps that fit right in your pocket.',
    },
    {
      color: 'bg-[#44457C]',
      direction: 'left',
      domain: 'AI-ML',
      text: 'Empowering the future with intelligence that learns and evolves.',
    },
    {
      color: 'bg-[#2E3A67]',
      direction: 'right',
      domain: 'R&D',
      text: 'Innovating solutions that redefine the possibilities of technology.',
    },
    {
      color: 'bg-[#2B4C68]',
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
                <div
                  className="absolute w-36 h-36 rounded-full overflow-hidden"
                  style={{
                    [bar.direction === 'left' ? 'right' : 'left']: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                  }}
                >
                  <img src={img1} alt="Domain Image" className="w-full h-full object-cover rounded-full" />
                </div>

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
            className={`relative w-full ${bar.color} rounded-full p-6 text-center shadow-md flex items-center`}
          >
            <div
              className={`w-16 h-16 rounded-full overflow-hidden mx-auto mb-4 ${
                index % 2 === 0 ? 'ml-auto mr-0' : 'ml-0 mr-auto'
              } md:mb-0 md:relative md:$
                {index % 2 === 0 ? 'right-6' : 'left-6'}`}
            >
              <img src={img1} alt="Domain Image" className="w-full h-full object-cover" />
            </div>
            <div
              className={`flex flex-col ${
                index % 2 === 0 ? 'items-start' : 'items-end'
              } text-white w-full px-4`}
            >
              <h2 className="text-lg font-bold mb-2">{bar.domain}</h2>
              <p className="text-sm italic">{bar.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Domains;

// import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import img1 from '../../assets/img1.png';

// const Domains = () => {
//   const barData = [
//     {
//       color: 'bg-[#AE4073]',
//       domain: 'Web Development',
//       text: 'Building the digital foundations of tomorrow, one pixel at a time.',
//     },
//     {
//       color: 'bg-[#9A3C81]',
//       domain: 'App Development',
//       text: 'Transforming ideas into apps that fit right in your pocket.',
//     },
//     {
//       color: 'bg-[#44457C]',
//       domain: 'AI-ML',
//       text: 'Empowering the future with intelligence that learns and evolves.',
//     },
//     {
//       color: 'bg-[#2E3A67]',
//       domain: 'R&D',
//       text: 'Innovating solutions that redefine the possibilities of technology.',
//     },
//     {
//       color: 'bg-[#2B4C68]',
//       domain: 'Events',
//       text: 'Where creativity and innovation collide to inspire and connect.',
//     },
//   ];

//   const barVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   };

//   const { ref, inView } = useInView({
//     threshold: 0.3,
//     triggerOnce: false,
//   });

//   return (
//     <div className="bg-[#141930] min-h-screen flex items-center justify-center px-5" ref={ref}>
//       {/* Larger Devices */}
//       <div className="hidden lg:block relative w-full max-w-[60%] p-6 space-y-8">
//         <h1 className="text-4xl font-bold text-[#FFDCC1] text-center mb-6">Domains</h1>
//         <div className="border-2 border-[#A15766] rounded-xl overflow-hidden p-6">
//           <div className="space-y-6 mx-auto">
//             {barData.map((bar, index) => (
//               <motion.div
//                 key={index}
//                 initial="hidden"
//                 animate={inView ? 'visible' : 'hidden'}
//                 variants={{
//                   hidden: { x: index % 2 === 0 ? '-150%' : '150%', opacity: 0 },
//                   visible: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 50, damping: 15 } },
//                 }}
//                 className={`relative w-[90%] h-40 ${bar.color} flex items-center rounded-full overflow-hidden mx-auto px-6`}
//               >
//                 <div
//                   className="absolute w-36 h-36 rounded-full overflow-hidden"
//                   style={{
//                     [index % 2 === 0 ? 'right' : 'left']: '10px',
//                     top: '50%',
//                     transform: 'translateY(-50%)',
//                   }}
//                 >
//                   <img src={img1} alt="Domain" className="w-full h-full object-cover rounded-full" />
//                 </div>
//                 <div
//                   className={`z-10 text-white flex flex-col justify-center ${
//                     index % 2 === 0 ? 'items-start pl-8' : 'items-end pr-8'
//                   }`}
//                 >
//                   <h2 className="font-bold text-xl mb-2">{bar.domain}</h2>
//                   <p className="italic text-sm">{bar.text}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Medium and Smaller Devices */}
//       <div className="block lg:hidden space-y-6 w-full max-w-[90%] mx-auto">
//         <h1 className="text-2xl font-bold text-[#FFDCC1] text-center mb-4">Domains</h1>
//         {barData.map((bar, index) => (
//           <motion.div
//             key={index}
//             initial="hidden"
//             animate={inView ? 'visible' : 'hidden'}
//             variants={barVariants}
//             className={`relative w-full ${bar.color} rounded-xl p-6 shadow-md flex flex-col md:flex-row md:items-center`}
//           >
//             {/* Image */}
//             <div
//               className={`absolute top-1/2 transform -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden ${
//                 index % 2 === 0 ? 'md:right-0' : 'md:left-0'
//               }`}
//             >
//               <img src={img1} alt="Domain" className="w-full h-full object-cover" />
//             </div>

//             {/* Text */}
//             <div
//               className={`relative z-10 text-white md:w-[85%] ${
//                 index % 2 === 0 ? 'md:pl-8 md:pr-2 text-left' : 'md:pr-8 md:pl-2 text-right'
//               }`}
//             >
//               <h2 className="text-lg font-bold mb-2">{bar.domain}</h2>
//               <p className="text-sm italic">{bar.text}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Domains;
