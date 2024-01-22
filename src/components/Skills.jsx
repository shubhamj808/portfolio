import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { tools } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { t } from "maath/dist/misc-7d870b3c.esm";

const ToolsCard = ({ index, title, skills }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly flex-col'
      >

          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>


          <div className="relative flex justify-center flex-wrap gap-12 mb-20">
             
              {skills.map((skill, index) => (
                <div className="text-base font-normal text-[#80colorThemeTextPrimary] border border-[#80colorThemeTextPrimary] rounded-lg p-3 md:text-sm md:p-2 lg:p-1 flex items-center justify-center gap-2 md:gap-4" key={index}>
                  <img className="w-6 h-6" src={skill.icon} alt={skill.icon}></img>
                  <span>{skill.name}</span>
                </div>
              ))}
            
            
          </div>



      </div>
    </motion.div>
  </Tilt>
);


const Skills = () => {
    return (
        <>
          <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText} text-center`}>WHAT I BRING TO THE TABLE</p>
            <h2 className={`${styles.sectionHeadText} text-center`}>Skills.</h2>
          </motion.div>

          {/* <div className='relative flex items-center gap-10'> */}
          <div className='overflow-x-scroll relative flex items-center gap-10'>
              {tools.map((tool, index) => (
                <ToolsCard key={index} title={tool.title} skills={tool.skills} />
              ))}
          </div>
    
        </>
      );
};

export default SectionWrapper(Skills, "skills");