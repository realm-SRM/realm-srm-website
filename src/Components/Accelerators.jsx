import { useState } from 'react'
import { motion } from 'framer-motion';
import dummyImage from '../assets/dummyImage.png'
import AccCard from './sections/AccCard'
import { BackgroundBeamsWithCollision } from "./sections/ui/background-beams-with-collision"

const Accelerators = () => {

  const membersList = {
    "Acc 1": { 
      name: "Acc1", 
      image: dummyImage, 
      pfp: dummyImage,
      tagline: "Code smarter, Not harder", 
      skill: ["Eat", "Sleep", "Repeat" ], 
      music: "Laga do", 
      insta: "Insta", 
      X: "X", 
      github: "github", 
      linkedin: "Linkein" 
    },
    "Acc 2": { 
      name: "Acc2", 
      image: dummyImage, 
      pfp: dummyImage,
      tagline: "Code smarter, Not harder", 
      skill: ["Eat", "Sleep", "Repeat" ], 
      music: "Laga do", 
      insta: "Insta", 
      X: "X", 
      github: "github", 
      linkedin: "Linkein" 
    },
    "Acc 3": { 
      name: "Acc3", 
      image: dummyImage, 
      pfp: dummyImage,
      tagline: "Code smarter, Not harder", 
      skill: ["Eat", "Sleep", "Repeat" ], 
      music: "Laga do", 
      insta: "Insta", 
      X: "X", 
      github: "github", 
      linkedin: "Linkein" 
    },
    "Acc 4": { 
      name: "Acc4", 
      image: dummyImage, 
      pfp: dummyImage,
      tagline: "Code smarter, Not harder", 
      skill: ["Eat", "Sleep", "Repeat" ], 
      music: "Laga do", 
      insta: "Insta", 
      X: "X", 
      github: "github", 
      linkedin: "Linkein" 
    },
    "Acc 5": { 
      name: "Acc5", 
      image: dummyImage, 
      pfp: dummyImage,
      tagline: "Code smarter, Not harder", 
      skill: ["Eat", "Sleep", "Repeat" ], 
      music: "Laga do", 
      insta: "Insta", 
      X: "X", 
      github: "github", 
      linkedin: "Linkein" 
    }
  };


  const initialMembers = [
    "Acc 1",
    "Acc 2",
    "Acc 3",
    "Acc 4",
    "Acc 5"
  ]

  console.log(parseInt(initialMembers.length/2))

  const [clickedIndex, setClickedIndex] = useState(2);
  const [members, setMembers] = useState(initialMembers);

  const handleClick = (index) => {
    setClickedIndex(index);
    centerItem(index);
  }

  const centerItem = (itemIndex) => {
    const centerIndex = 2;

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
    let dummyMembers = [...members];
    while (dummyMembers.indexOf(members[itemIndex]) !== 2) {
      const firstItem = dummyMembers.shift();
      dummyMembers.push(firstItem);
    }
    setMembers(dummyMembers);
  };

  const popBot = (itemIndex) => {
    let dummyMembers = [...members];
    while (dummyMembers.indexOf(members[itemIndex]) !== 2) {
      const lastItem = dummyMembers.pop();
      dummyMembers.unshift(lastItem);
    }
    setMembers(dummyMembers);
  };

  return (
    <BackgroundBeamsWithCollision>
    <div className='pt-24 px-10 h-screen ' >
      <div className="flex flex-row justify-between gap-10 h-[50vh] " >
          <div className='Content' >

            <p className='text-4xl text-[#FFDCC1] font-bold mb-4 ' >Accelerator</p>
            <p className="text-[#FFFFFF] text-xl w-[20vw] " >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.
            </p>

          </div>

          <div className='PhotoScroller w-[20vw] flex ' >

            {members.map((member, index) => (
              <motion.div
              key={member}
              onClick={ () => handleClick(index)}
              layout
              animate={{
                scale: index === parseInt(initialMembers.length/2) ? 1.15 : index === 0 || index === initialMembers.length - 1 ? 0.9 : 1,
                x: index === parseInt(initialMembers.length/2) ? 0 : (2 - index)*150,
                zIndex: index === parseInt(initialMembers.length/2) ? 10 : index === 0 || index === initialMembers.length - 1 ? 7 : 8 ,
                // filter: index === parseInt(initialMembers.length/2) ? 'brightness(1.25)' : 'brightness(1)',
              }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 250,
                damping: 60,
              }}
              className='absolute'
              >
              <div className='' >
                <img src={membersList[members[index]].image} className='w-64 hover:brightness-125 transition ease-in-out ' />
              </div>
              </motion.div>
            ) )}

            
          </div>

          <div className='ProfileCard w-[18vw] ' >
              <AccCard />
          </div>

      </div>
    </div>
    </BackgroundBeamsWithCollision>
  )
}

export default Accelerators
