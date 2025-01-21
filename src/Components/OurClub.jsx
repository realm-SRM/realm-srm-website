import React from 'react';
import Backimg from '../assets/Ourclubbackimg.png';

const OurClub = () => {
  const [hoveredNode, setHoveredNode] = useState(null);

  const handleMouseEnter = (nodeId) => {
    setHoveredNode(nodeId);
  };

  const handleMouseLeave = () => {
    setHoveredNode(null);
  };

  const styledNodes = nodes.map((node) => ({
    ...node,
    style: {
      ...defaultNodeStyles,
      ...(hoveredNode === node.id ? highlightNodeStyles : {}),
      ...node.style,
    },
    onMouseEnter: () => handleMouseEnter(node.id),
    onMouseLeave: handleMouseLeave,
  }));

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <img
        src={Backimg}
        alt="Background"
        className="absolute inset-0 w-full h-[90vh] object-cover opacity-100 blur-lg mt-[150px]"
      />
      <div className="relative max-w-5xl p-8  bg-opacity-0 rounded-lg ">
        <h1 className="text-[80px] font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FFDCC1] to-[#998474] via-[#FFDCC1] via-45%">
          VISION
        </h1>
        <ul className="list-disc list-inside space-y-6 text-lg mt-8 text-[#f4dece] text-center tracking-wide " >
          <li>
            <span className="text-[22px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FFDCC1] to-[#998474] via-[#FFDCC1] via-95%  ">
              Establish an inclusive community where core tech concepts—such as computer
              architecture, design systems, cloud computing, and DevOps—are emphasized, alongside a
              supportive space for open-source contributions and the development of industry-level
              projects.
            </span>
          </li>
          <li>
            <span className='text-[22px] font-semibold  text-transparent bg-clip-text bg-gradient-to-r from-[#FFDCC1] to-[#998474] via-[#FFDCC1] via-95%'>
            Facilitate more national and international conferences at SRM, aimed not only at
            second- and third-year students but also at fourth-year students working on research
            papers, providing them with valuable insights and exposure.
            </span>
          </li>
          <li>
            <span className='text-[22px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FFDCC1] to-[#998474] via-[#FFDCC1] via-95%'>
            Build a community that functions with a corporate-like framework, serving as both a
            tech club and a professional development hub. It would provide members with
            industry-standard working structures and methods, helping them gain practical
            experience and skills essential for future roles in the workforce.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OurClub;
