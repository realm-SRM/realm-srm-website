// import React, { useState } from "react";
// import ReactFlow, { Background, Controls } from "reactflow";
// import "reactflow/dist/style.css";

// const defaultNodeStyles = {
//   background: "#1e1e2e",
//   color: "#fff",
//   padding: "10px",
//   borderRadius: "15px",
//   textAlign: "center",
//   border: "2px solid #aaa",
//   transition: "all 0.3s ease-in-out",
// };

// const highlightNodeStyles = {
//   background: "#282a36",
//   border: "2px solid #ff79c6",
//   transform: "scale(1.05)",
// };

// const nodes = [
//   { id: "1", data: { label: "Director" }, position: { x: 400, y: 0 } },
//   { id: "2", data: { label: "President" }, position: { x: 400, y: 75 } },
//   { id: "3", data: { label: "Project Lead" }, position: { x: 150, y: 150 } },
//   { id: "4", data: { label: "Tech Lead" }, position: { x: 650, y: 150 } },

//   {
//     id: "small-parent",
//     position: { x: 225, y: 250 },
//     style: {
//       width: 500,
//       height: 100,
//       border: "1px solid #aaa",
//       color: "#fff",
//       textAlign: "center",
//       paddingTop: "10px",
//     },
//     draggable: false,
//   },
//   { id: "5", data: { label: "Secretary 1" }, position: { x: 235, y: 280 } },
//   { id: "6", data: { label: "Secretary 2" }, position: { x: 400, y: 280 } },
//   { id: "7", data: { label: "Secretary 3" }, position: { x: 565, y: 280 } },

//   {
//     id: "big-parent",
//     position: { x: -75, y: 450 },
//     style: {
//       width: 1100,
//       height: 400,
//       border: "1px solid #aaa",
//       color: "#fff",
//       textAlign: "center",
//       paddingTop: "10px",
//     },
//     draggable: false,
//   },
//   {
//     id: "8",
//     data: { label: "Events" },
//     position: { x: -60, y: 475 },
//     style: { width: 200, height: 350 }, 
//   },
//   { id: "19", data: { label: "Emcee" }, position: { x: -35, y: 520 } },
//   { id: "20", data: { label: "Photography" }, position: { x: -35, y: 580 } },
//   { id: "21", data: { label: "Discipline" }, position: { x: -35, y: 640 } },
//   { id: "22", data: { label: "Social Media" }, position: { x: -35, y: 700 } },
//   { id: "23", data: { label: "Editorial" }, position: { x: -35, y: 760 } },
//   { id: "9", data: { label: "UI/UX" }, position: { x: 155, y: 475 } },
//   { id: "10", data: { label: "Web" }, position: { x: 340, y: 475 } },
//   { id: "11", data: { label: "AI/ML" }, position: { x: 520, y: 475 } },
//   { id: "12", data: { label: "APP" }, position: { x: 700, y: 475 } },
//   { id: "13", data: { label: "R&D" }, position: { x: 870, y: 475 } },
//   {
//     id: "next-parent",
//     position: { x: 275, y: 530 },
//     style: {
//       width: 700,
//       height: 300,
//       border: "1px solid #aaa",
//       color: "#fff",
//       textAlign: "center",
//       paddingTop: "10px",
//     },
//     draggable: false,
//   },
//   {
//     id: "14",
//     data: { label: "Accelerator" },
//     position: { x: 310, y: 550 },
//     style: { width: 400, height: 50 },
//   },
//   {
//     id: "15",
//     data: {
//       label: "BUFFER\n\n13 TEAMS each with its own\nheads from the new members",
//     },
//     position: { x: 310, y: 620 },
//     style: {
//       width: 400,
//       height: 120,
//       whiteSpace: "pre-line",
//       textAlign: "center",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//     },
//   },
//   {
//     id: "16",
//     data: { label: "Bench" },
//     position: { x: 310, y: 760 },
//     style: { width: 400, height: 50 },
//   },
//   {
//     id: "17",
//     data: { label: "UI/UX Team" },
//     position: { x: 730, y: 555 },
//     style: {
//       width: 200,
//       height: 250,
//       textAlign: "center",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//     },
//   },
//   {
//     id: "18",
//     data: { label: "Dev Rel Team" },
//     position: { x: 1100, y: 0 },
//     style: {
//       width: 100,
//       height: 850,
//       textAlign: "center",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//     },
//   },
// ];

// const edges = [
//   { id: "e1-2", source: "1", target: "2", animated: true },
//   { id: "e1-3", source: "2", target: "3", animated: true },
//   { id: "e1-4", source: "2", target: "4", animated: true },
//   { id: "e1-5", source: "3", target: "small-parent", animated: true },
//   { id: "e1-6", source: "4", target: "small-parent", animated: true },
//   { id: "e1-7", source: "small-parent", target: "big-parent", animated: true },
// ];

// const OurClub = () => {
//   const [hoveredNode, setHoveredNode] = useState(null);

//   const handleMouseEnter = (nodeId) => {
//     setHoveredNode(nodeId);
//   };

//   const handleMouseLeave = () => {
//     setHoveredNode(null);
//   };

//   const styledNodes = nodes.map((node) => ({
//     ...node,
//     style: {
//       ...defaultNodeStyles,
//       ...(hoveredNode === node.id ? highlightNodeStyles : {}),
//       ...node.style, 
//     },
//     onMouseEnter: () => handleMouseEnter(node.id),
//     onMouseLeave: handleMouseLeave,
//   }));

//   return (
//     <div style={{ height: "100vh", background: "#1e1e2e" }}>
//       <ReactFlow nodes={styledNodes} edges={edges} fitView>
//         <Background color="#aaa" gap={16} />
//         <Controls />
//       </ReactFlow>
//     </div>
//   );
// };

// export default OurClub;


import React, { useState } from "react";
import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";
import Benefits from "./sections/Benefits";

const defaultNodeStyles = {
  background: "#1e1e2e",
  color: "#fff",
  padding: "10px",
  borderRadius: "15px",
  textAlign: "center",
  border: "2px solid #aaa",
  transition: "all 0.3s ease-in-out",
};

const highlightNodeStyles = {
  background: "#282a36",
  border: "2px solid #ff79c6",
  transform: "scale(1.05)",
};  

const nodes = [
  { id: "1", data: { label: "Director" }, position: { x: 400, y: 0 } },
  { id: "2", data: { label: "President" }, position: { x: 400, y: 75 } },
  { id: "3", data: { label: "Project Lead" }, position: { x: 150, y: 150 } },
  { id: "4", data: { label: "Tech Lead" }, position: { x: 650, y: 150 } },
  {
    id: "small-parent",
    position: { x: 225, y: 250 },
    style: {
      width: 500,
      height: 100,
      border: "1px solid #aaa",
      color: "#fff",
      textAlign: "center",
      paddingTop: "10px",
    },
    draggable: false,
  },
  { id: "5", data: { label: "Secretary 1" }, position: { x: 235, y: 280 } },
  { id: "6", data: { label: "Secretary 2" }, position: { x: 400, y: 280 } },
  { id: "7", data: { label: "Secretary 3" }, position: { x: 565, y: 280 } },
  {
    id: "big-parent",
    position: { x: -75, y: 450 },
    style: {
      width: 1100,
      height: 400,
      border: "1px solid #aaa",
      color: "#fff",
      textAlign: "center",
      paddingTop: "10px",
    },
    draggable: false,
  },
  {
    id: "8",
    data: { label: "Events" },
    position: { x: -60, y: 475 },
    style: { width: 200, height: 350 },
  },
  { id: "19", data: { label: "Emcee" }, position: { x: -35, y: 520 } },
  { id: "20", data: { label: "Photography" }, position: { x: -35, y: 580 } },
  { id: "21", data: { label: "Discipline" }, position: { x: -35, y: 640 } },
  { id: "22", data: { label: "Social Media" }, position: { x: -35, y: 700 } },
  { id: "23", data: { label: "Editorial" }, position: { x: -35, y: 760 } },
  { id: "9", data: { label: "UI/UX" }, position: { x: 155, y: 475 } },
  { id: "10", data: { label: "Web" }, position: { x: 340, y: 475 } },
  { id: "11", data: { label: "AI/ML" }, position: { x: 520, y: 475 } },
  { id: "12", data: { label: "APP" }, position: { x: 700, y: 475 } },
  { id: "13", data: { label: "R&D" }, position: { x: 870, y: 475 } },
  {
    id: "next-parent",
    position: { x: 275, y: 530 },
    style: {
      width: 700,
      height: 300,
      border: "1px solid #aaa",
      color: "#fff",
      textAlign: "center",
      paddingTop: "10px",
    },
    draggable: false,
  },
  {
    id: "14",
    data: { label: "Accelerator" },
    position: { x: 310, y: 550 },
    style: { width: 400, height: 50 },
  },
  {
    id: "15",
    data: {
      label: "BUFFER\n\n13 TEAMS each with its own\nheads from the new members",
    },
    position: { x: 310, y: 620 },
    style: {
      width: 400,
      height: 120,
      whiteSpace: "pre-line",
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  {
    id: "16",
    data: { label: "Bench" },
    position: { x: 310, y: 760 },
    style: { width: 400, height: 50 },
  },
  {
    id: "17",
    data: { label: "UI/UX Team" },
    position: { x: 730, y: 555 },
    style: {
      width: 200,
      height: 250,
      fontSize: "20px", // Increased font size
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  {
    id: "18",
    data: { label: "Dev Rel Team" },
    position: { x: 1100, y: 0 },
    style: {
      width: 100,
      height: 850,
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
];

const edges = [
  { id: "e1-2", source: "1", target: "2", animated: true, markerEnd: { type: "arrow", width: 15, height: 15 } }, // Arrow size increased
  { id: "e1-3", source: "2", target: "3", animated: true, markerEnd: { type: "arrow", width: 15, height: 15 } },
  { id: "e1-4", source: "2", target: "4", animated: true, markerEnd: { type: "arrow", width: 15, height: 15 } },
  { id: "e1-5", source: "3", target: "small-parent", animated: true, markerEnd: { type: "arrow", width: 15, height: 15 } },
  { id: "e1-6", source: "4", target: "small-parent", animated: true, markerEnd: { type: "arrow", width: 15, height: 15 } },
  { id: "e1-7", source: "small-parent", target: "big-parent", animated: true, markerEnd: { type: "arrow", width: 15, height: 15 } },
];

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
    <>
    <div style={{ height: "100vh", background: "#1e1e2e" }}>
      <ReactFlow nodes={styledNodes} edges={edges} fitView>
        <Background color="#aaa" gap={16} />
        <Controls />
      </ReactFlow>
    </div>
    <Benefits />
    </>
  );
};

export default OurClub;
