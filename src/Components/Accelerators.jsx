import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import dummyImage from '../assets/dummyImage.png'
import Standby from '../assets/Standby.png'
import AccCard from './sections/AccCard'
import ProjectCard from './sections/ProjectCard';
import { BackgroundBeamsWithCollision } from "./sections/ui/background-beams-with-collision";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Accelerators = () => {

  const projects = {
    "Project 1": {
      name: "Project 1",
      description: "Some Random Text to talk about the Project And tell people how cool the project is so people like or club",
      image: Standby,
      repo: "https://github.com/realm-SRM/realm-srm-website",
      projectLink: "https://render-deployement-test.vercel.app"
    },
    "Project 2": {
      name: "Project 2",
      description: "Some more random text which will make you like our club even more",
      image: Standby,
      repo: "https://github.com/realm-SRM/realm-srm-website",
      projectLink: "https://render-deployement-test.vercel.app"
    },
    "Project 3": {
      name: "Project 3",
      description: "Some more project related stuff AIML, BlockChain (cool words ngl)",
      image: Standby,
      repo: "https://github.com/realm-SRM/realm-srm-website",
      projectLink: "https://render-deployement-test.vercel.app"
    },
    "Project 4": {
      name: "Project 4",
      description: "BEst project of our club approved by google.",
      image: Standby,
      repo: "https://github.com/realm-SRM/realm-srm-website",
      projectLink: "https://render-deployement-test.vercel.app"
    }
  }

  const membersList = {
    "Acc 1": { 
      name: "1", 
      image: dummyImage, 
      pfp: Standby,
      tagline: "Code smarter, Not harder", 
      skill: ["Eat", "Sleep", "Repeat" ], 
      music: "https://soundcloud.com/rana-faseeh-ullah/honey-singh-choot-vol-1-dance?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", 
      insta: "https://instagram.com", 
      github: "https://github.com", 
      linkedin: "https://linkedin.in" 
    },
    "Acc 2": { 
      name: "2", 
      image: dummyImage, 
      pfp: Standby,
      tagline: "Work smarter, Not harder", 
      skill: ["HTML", "VSCODE", "Napping" ], 
      music: "https://soundcloud.com/akise-mn/one-piece-ost-overtaken?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", 
      insta: "https://instagram.com", 
      github: "https://github.com", 
      linkedin: "https://linkedin.in" 
    },
    "Acc 3": { 
      name: "3", 
      image: dummyImage, 
      pfp: Standby,
      tagline: "Work Smart", 
      skill: ["Boostrap", "Tailwind", "CSS" ], 
      music: "https://soundcloud.com/farshad-ahmad/guzarish-ghajini?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", 
      insta: "https://instagram.com", 
      github: "https://github.com", 
      linkedin: "https://linkedin.in" 
    },
    "Acc 4": { 
      name: "4", 
      image: dummyImage, 
      pfp: Standby,
      tagline: "Be Carefree", 
      skill: ["Eat", "Care", "Dont Care" ], 
      music: "https://soundcloud.com/racso2099/the-less-i-know-the-better-vinyl?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", 
      insta: "https://instagram.com", 
      github: "https://github.com", 
      linkedin: "https://linkedin.in" 
    },
    "Acc 5": { 
      name: "5", 
      image: dummyImage, 
      pfp: Standby,
      tagline: "Be Caring", 
      skill: ["Eat", "Sleep", "Repeat" ], 
      music: "https://soundcloud.com/boogieda-king089/borderline-tame-impala-sped-up?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", 
      insta: "https://instagram.com", 
      github: "https://github.com", 
      linkedin: "https://linkedin.in" 
    }
  };


  const initialMembers = [
    "Acc 1",
    "Acc 2",
    "Acc 3",
    "Acc 4",
    "Acc 5"
  ]


  const [clickedIndex, setClickedIndex] = useState(2);
  const [members, setMembers] = useState(initialMembers);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Object.keys(projects).length);
  };

  return (
    <BackgroundBeamsWithCollision>
    <div className='pt-44 lg:pt-24 lg:px-5 xl:px-10 pb-36 h-screen ' >
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-10 h-[100vh] lg:h-[50vh] " >
          <div className='Content w-[100vw] lg:w-[20vw] flex flex-col justify-center ' >

            <p className='text-4xl text-left lg:text-left flex justify-center lg:justify-start text-[#FFDCC1] font-bold mb-4 ' >Accelerator</p>
            
            <div className='w-[100vw] lg:w-[300px] flex justify-center ' >
            <p className="text-[#FFFFFF] w-[300px] text-center lg:text-left text-sm lg:text-lg xl:text-xl " >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.
            </p>

            </div>
          </div>

          <div className='PhotoScroller hidden lg:flex w-[15vw] xl:w-[20vw] ' >

            {members.map((member, index) => (
              <motion.div
              key={member}
              onClick={ () => handleClick(index)}
              layout
              animate={{
                scale: index === parseInt(initialMembers.length/2) ? 1.15 : index === 0 || index === initialMembers.length - 1 ? 0.9 : 1,
                x: index === parseInt(initialMembers.length/2) ? 0 : (2 - index)*110,
                zIndex: index === parseInt(initialMembers.length/2) ? 10 : index === 0 || index === initialMembers.length - 1 ? 7 : 8 ,
                filter: index === parseInt(initialMembers.length/2) ? 'brightness(1)' : 'brightness(0.5)',
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
                <img src={membersList[members[index]].image} className=' w-44 xl:w-60 hover:brightness-125 transition ease-in-out ' />
              </div>
              </motion.div>
            ) )}

            
          </div>

          <div className='PhotoScrollerMobile lg:hidden w-[100vw] flex justify-center ' >

            {members.map((member, index) => (
              <motion.div
              key={member}
              onClick={ () => handleClick(index)}
              layout
              animate={{
                scale: index === parseInt(initialMembers.length/2) ? 1.15 : index === 0 || index === initialMembers.length - 1 ? 0.9 : 1,
                x: index === parseInt(initialMembers.length/2) ? 0 : (2 - index)*75,
                zIndex: index === parseInt(initialMembers.length/2) ? 10 : index === 0 || index === initialMembers.length - 1 ? 7 : 8 ,
                filter: index === parseInt(initialMembers.length/2) ? 'brightness(1)' : 'brightness(0.5)',
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
                <img src={membersList[members[index]].image} className=' w-40 hover:brightness-125 transition ease-in-out ' />
              </div>
              </motion.div>
            ) )}

            
          </div>

          <div className='ProfileCard pt-52 mb-80 lg:pt-0 h-[53vh] w-[100vw] lg:w-[18vw] ' >
            <AnimatePresence mode="wait">
              <motion.div
              key={members[clickedIndex]}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut"
              }}
              className='flex justify-center'
              >
                  <AccCard
                  name={membersList[members[2]].name}
                  pfp={membersList[members[2]].pfp}
                  tagline={membersList[members[2]].tagline}
                  skill1={membersList[members[2]].skill[0]}
                  skill2={membersList[members[2]].skill[1]}
                  skill3={membersList[members[2]].skill[2]}
                  music={membersList[members[2]].music}
                  insta={membersList[members[2]].insta}
                  github={membersList[members[2]].github}
                  linkedin={membersList[members[2]].linkedin} 
                  />
              </motion.div>
            </AnimatePresence>
          </div>

      </div>
          <div className='pt-10 hidden lg:block ' >
          <hr className=' bg-[#F15191] ' />
          </div>

          <p className='text-[#FFDCC1] font-bold text-4xl text-center pt-4 lg:pt-4 ' >Projects</p>
        
        <div className='hidden lg:flex gap-5 justify-center mt-6 h-[55vh] ' >
              {Object.values(projects).map((project) => (
                <ProjectCard
                key = {project.name}
                name = {project.name}
                description = {project.description}
                image = {project.image}
                repo = {project.repo}
                projectLink = {project.projectLink}
                />
              ))}

        </div>

        <div className='flex lg:hidden gap-5 justify-center mt-6 h-[380px] ' >
              {Object.values(projects).map((project, index) => (
                <div
                style={{
                  display: index === currentIndex ? 'block' : 'none',
                }}
                >
                <ProjectCard
                key = {project.name}
                name = {project.name}
                description = {project.description}
                image = {project.image}
                repo = {project.repo}
                projectLink = {project.projectLink}
                />
                </div>
              ))}

          <button
            onClick={goToNext}
            className="absolute right-4 bottom-52 transform opacity-50 -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10"
          >
            <ArrowForwardIosIcon />
          </button>  

        </div>

    </div>
    </BackgroundBeamsWithCollision>
  )
}

export default Accelerators
