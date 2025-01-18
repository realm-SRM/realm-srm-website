import React, { useState } from "react";
import { motion } from "framer-motion";

const initialItems = [
  "Root Node",
  "Core Compiler",
  "System Process",
  "Frame Foundary",
  "App Circuit",
  "Neural Stack",
  "Design Matrix",
  "Innovation Hub",
  "Event Controllers",
];

const colors = [
  "#9A50A5", "#59569C", "#F25192", "#F77C88",
]

const TeamScroller = () => {
  const [items, setItems] = useState(initialItems);
  const [clickedIndex, setClickedIndex] = useState(4);

  const handleClick = (index) => {
    setClickedIndex(index);
    centerItem(index);
  };

  const centerItem = (itemIndex) => {
    const centerIndex = 4;

    if (itemIndex === centerIndex) {
      return;
    }

    if (itemIndex > centerIndex) {
      popTop(itemIndex);
    } else if (itemIndex < centerIndex) {
      popBot(itemIndex);
    }
  };

  const popTop = (itemIndex) => {
    let dummyItems = [...items];
    while (dummyItems.indexOf(items[itemIndex]) !== 4) {
      const firstItem = dummyItems.shift();
      dummyItems.push(firstItem);
    }
    setItems(dummyItems);
  };

  const popBot = (itemIndex) => {
    let dummyItems = [...items];
    while (dummyItems.indexOf(items[itemIndex]) !== 4) {
      const lastItem = dummyItems.pop();
      dummyItems.unshift(lastItem);
    }
    setItems(dummyItems);
  };

  return (
    <div>
      <div className="flex flex-col items-start justify-start h-screen bg-[#141930] text-white pt-20">
              {items.map((item, index) => (
                <motion.div
                  key={item}
                  onClick={() => handleClick(index)}
                  layout
                  animate={{
                    scale: index === 4 ? 1.2 : 1,
                    backgroundColor: index === 4 ? "#FFDCC1" : (index > 4 ? colors[index - 5] : colors[index] ),
                    x: index === 4 ? 175 : (index > 4 ? (4 - index)*30 + 120 : (index)*30 ) ,
                    color: index === 4 ? 'black' : '#FFDCC1',
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 40,
                  }}
                  className="w-56 h-16 rounded-full flex gap-4 items-center justify-center text-white text-xl cursor-pointer mb-5"
                >
                  <div style={{backgroundColor: index === 4 ? 'black' : '#FFDCC1'}} className="h-2 w-2 rounded-full" />
                  {item}
                  <div style={{backgroundColor: index === 4 ? 'black' : '#FFDCC1'}} className="h-2 w-2 rounded-full" />
                </motion.div>
              ))}
      </div>

      <div className="">
              
      </div>
    </div>
  );
};

export default TeamScroller;
