import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PositionCard from './PositionCard';

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

const categories = {
  "Frame Foundary": { domain: "Web Developer", positions: ["SDE-3 (Lead)", "SDE-2 (Associate)"] },
  "App Circuit": { domain: "App Developer", positions: ["SDE-3 (Lead)", "SDE-2 (Associate)"] },
  "Neural Stack": { domain: "AIML Engg", positions: ["SDE-3 (Lead)", "SDE-2 (Associate)"] },
  "Design Matrix": { domain: "UI/UX", positions: ["SDE-3 (Lead)", "SDE-2 (Associate)"] },
  "Innovation Hub": { domain: "R & D", positions: ["SDE-3 (Lead)", "SDE-2 (Associate)"] },
  "Event Controllers": { domain: "Events", positions: ["SDE-3 (Lead)", "SDE-2 (Associate)"] },
  "Root Node": { domain: "", positions: ["President", "Director"] },
  "Core Compiler": {domain: "", positions: ["Tech Lead", "Project Lead"] },
  "System Process": {domain: "", positions: ["Secretary"] },
};

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

  const selectedCategory = categories[items[4]];

  return (
    <div className="flex flex-row bg-[#141930] px-10 ">
      <div className="flex flex-col items-start justify-start h-screen text-white pt-16">
              {items.map((item, index) => (
                <motion.div
                  key={item}
                  onClick={() => handleClick(index)}
                  layout
                  animate={{
                    scale: index === 4 ? 1.1 : 1,
                    backgroundColor: index === 4 ? "#FFDCC1" : (index > 4 ? colors[index - 5] : colors[index] ),
                    x: index === 4 ? 175 : (index > 4 ? (4 - index)*30 + 120 : (index)*30 ) ,
                    color: index === 4 ? 'black' : '#FFDCC1',
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 40,
                  }}
                  className="w-56 h-14 rounded-full flex gap-4 items-center justify-center text-white text-xl cursor-pointer mb-5"
                >
                  <div style={{backgroundColor: index === 4 ? 'black' : '#FFDCC1'}} className="h-2 w-2 rounded-full" />
                  {item}
                  <div style={{backgroundColor: index === 4 ? 'black' : '#FFDCC1'}} className="h-2 w-2 rounded-full" />
                </motion.div>
              ))}
      </div>
      <div className="pl-40 pt-16 w-full">
        <AnimatePresence mode="wait">
  {selectedCategory && (
    <motion.div
    key={items[4]}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
    className="w-full flex flex-col h-full "
    >
      {items[4] === "System Process" && (
        <div className="flex flex-row gap-8 h-full pb-16 items-center justify-center">
          {["Secretary", "Secretary", "Secretary"].map((pos, index) => (
            <PositionCard
              key={index}
              domain={selectedCategory.domain}
              github="http://github.com/DevanshuTripathi"
              insta="#"
              linkedin="#"
              pos={pos}
            />
          ))}
        </div>
      )}

      {items[4] === "Root Node" && (
        <div className="flex flex-row gap-8 h-full pb-16 items-center justify-center">
          {["President", "Director"].map((pos, index) => (
            <PositionCard
              key={index}
              domain={selectedCategory.domain}
              github="http://github.com/DevanshuTripathi"
              insta="#"
              linkedin="#"
              pos={pos}
            />
          ))}
        </div>
      )}

      {items[4] === "Innovation Hub" && (
        <div className="flex flex-col gap-16 items-center">
          <PositionCard
            domain={selectedCategory.domain}
            github="http://github.com/DevanshuTripathi"
            insta="#"
            linkedin="#"
            pos={selectedCategory.positions[0]}
          />
          <PositionCard
            domain={selectedCategory.domain}
            github="http://github.com/DevanshuTripathi"
            insta="#"
            linkedin="#"
            pos={selectedCategory.positions[1]}
          />
        </div>
      )}

      {items[4] === "Core Compiler" && (
        <div className="flex flex-row gap-8 h-full pb-16 items-center justify-center">
          {selectedCategory.positions.map((pos, index) => (
            <PositionCard
              key={index}
              domain={selectedCategory.domain}
              github="http://github.com/DevanshuTripathi"
              insta="#"
              linkedin="#"
              pos={pos}
            />
          ))}
        </div>
      )}

      {!["System Process", "Root Node", "Innovation Hub", "Core Compiler"].includes(items[4]) && (
        <>
          <div className="Leads flex flex-row gap-10 mb-16 justify-center">
            {selectedCategory.positions[0] && (
              <>
                <PositionCard
                  domain={selectedCategory.domain}
                  github="http://github.com/DevanshuTripathi"
                  insta="#"
                  linkedin="#"
                  pos={selectedCategory.positions[0]}
                />
                <PositionCard
                  domain={selectedCategory.domain}
                  github="http://github.com/DevanshuTripathi"
                  insta="#"
                  linkedin="#"
                  pos={selectedCategory.positions[0]}
                />
              </>
            )}
          </div>
          <div className="Associates flex flex-row gap-8 justify-center">
            {selectedCategory.positions[1] && (
              <>
                <PositionCard
                  domain={selectedCategory.domain}
                  github="http://github.com/DevanshuTripathi"
                  insta="#"
                  linkedin="#"
                  pos={selectedCategory.positions[1]}
                />
                <PositionCard
                  domain={selectedCategory.domain}
                  github="http://github.com/DevanshuTripathi"
                  insta="#"
                  linkedin="#"
                  pos={selectedCategory.positions[1]}
                />
                <PositionCard
                  domain={selectedCategory.domain}
                  github="http://github.com/DevanshuTripathi"
                  insta="#"
                  linkedin="#"
                  pos={selectedCategory.positions[1]}
                />
              </>
            )}
          </div>
        </>
      )}
    </motion.div>
  )}
  </AnimatePresence>
</div>

    </div>
  );
};

export default TeamScroller;
