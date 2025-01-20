import React, { useState, useEffect } from "react";
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
  "Event Controllers": { domain: "Events", positions: ["Lead", "Associate"] },
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
  const [data, setData] = useState(null);

  useEffect(() => {

    const fetchData = async () => {
      try{
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/members`);
        if(!response.ok){
          throw new Error('Failed To fetch data ');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        throw new Error(`${error}`);
      }
    };

    fetchData();

  },[])

  const getMembersByRole = (role, designation = null) => {
    if(!data) return [];

    switch(role){
      case "Root Node":
        return designation === "President" ? data.President : data.Director;

      case "Core Compiler":
        return designation === "Tech Lead" ? data["Tech Lead"] : data["Project Lead"];

      case "System Process":
        return data.Secretary;

      case "Frame Foundary":
        return data["Web Developer"]?.filter(member => 
          designation ? member.designation === designation : true
        ) || [];
      case "App Circuit":
        return data["App Developer"]?.filter(member => 
          designation ? member.designation === designation : true
        ) || [];
      case "Neural Stack":
        return data["AI/ML Developer"]?.filter(member => 
          designation ? member.designation === designation : true
        ) || [];
      case "Design Matrix":
        return data["UI/UX Designer"] || [];
      case "Innovation Hub":
        return data["RnD"] || [];
      case "Event Controllers":
        return data["Events"] || [];
      default:
        return [];

    }

  };

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

  const renderPositionCards = (role, designation = null) => {
    const members = getMembersByRole(role, designation);
    return members.map((member, index) => (
      <PositionCard
        key={index}
        domain={categories[role].domain}
        name={member.name}
        tagline={member.tagline}
        image={member.image}
        github={member.github}
        insta={member.insta}
        linkedin={member.LinkedIn}
        pos={designation || categories[role].positions[0]}
      />
    ));
  };


  return (
    <div className="flex flex-row bg-[#141930] px-10 ">
      <div className="flex flex-col items-start justify-start h-screen text-white pt-16">
              {items.map((item, index) => (
                <motion.div
                  key={item}
                  onClick={() => handleClick(index)}
                  layout
                  animate={{
                    filter: index === 4 ? 'blur(0px) brightness(100%) ' : 'blur(1px) brightness(100%)',
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
                  className="w-56 h-14 rounded-full flex items-center justify-center text-white text-xl cursor-pointer mb-5"
                >
                  <div style={{backgroundColor: index === 4 ? 'black' : '#FFDCC1'}} className="h-2 w-2 rounded-full ml-4 mr-auto " />
                  {item}
                  <div style={{backgroundColor: index === 4 ? 'black' : '#FFDCC1'}} className="h-2 w-2 rounded-full mr-4 ml-auto" />
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
    exit={{ opacity: 0, y: -20, filter: 'blur(2px)' }}
    transition={{ duration: 0.4 }}
    className="w-full flex flex-col h-full "
    >
      {items[4] === "System Process" && (
                <div className="flex flex-row gap-10 h-full pb-16 items-center justify-center">
                  {renderPositionCards("System Process")}
                </div>
              )}

              {items[4] === "Root Node" && (
                <div className="flex flex-row gap-16 h-full pb-16 items-center justify-center">
                  {renderPositionCards("Root Node", "President")}
                  {renderPositionCards("Root Node", "Director")}
                </div>
              )}

              {/* Similar pattern for other conditions */}
              
              {!["System Process", "Root Node", "Innovation Hub", "Core Compiler"].includes(items[4]) && (
                <>
                  <div className="Leads flex flex-row gap-10 mb-20 justify-center">
                    {renderPositionCards(items[4], "SDE-3")}
                  </div>
                  <div className="Associates flex flex-row gap-8 justify-center">
                    {renderPositionCards(items[4], "SDE-2")}
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
