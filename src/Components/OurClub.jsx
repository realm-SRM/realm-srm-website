import React, { useState, useRef, useEffect } from "react";
import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";

import Benefits from "./sections/Benefits";
import VisionSection from "./sections/VisonSection";

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
];

const edges = [
  { id: "e1-2", source: "1", target: "2", animated: true, markerEnd: { type: "arrow", width: 15, height: 15 } },
  { id: "e1-3", source: "2", target: "3", animated: true, markerEnd: { type: "arrow", width: 15, height: 15 } },
  { id: "e1-4", source: "2", target: "4", animated: true, markerEnd: { type: "arrow", width: 15, height: 15 } },
];

const OurClub = () => {
  const [hoveredNode, setHoveredNode] = useState(null);
  const visionRef = useRef(null);

 
  

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
      <div className="relative h-screen bg-[#141930]">
        <div className="absolute inset-0 blur-lg">
          <ReactFlow nodes={styledNodes} edges={edges} fitView>
            <Background color="#aaa" gap={16} />
            <Controls />
          </ReactFlow>
        </div>

        <VisionSection/>
       
      </div>
    <Calendersection/>
    </
  );
};

export default OurClub
