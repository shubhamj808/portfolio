import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { tools } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant, zoomIn } from "../utils/motion";
import { t } from "maath/dist/misc-7d870b3c.esm";

const ToolsCard = ({ index, title, skills }) => (
  <Tilt className='flex flex-wrap'>
    <motion.div
      variants={zoomIn(index * 0.5, 0.75)}
      className='w-full max-w-md green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        id="skill"
        className='bg-tertiary rounded-[20px] p-10 md:max-w-400 md:p-10 sm:max-w-330 sm:p-10'
      >
          <h3 className='text-white font-bold text-[24px] text-center'>
            {title}
          </h3>

          <div id="skillList" className="flex justify-center flex-wrap gap-2 m-2">
              {skills.map((skill, index) => (
                <div id="skillItem" className="text-[13px] font-normal text-white border rounded-xl flex items-center justify-center gap-2 md:font-normal md:p-8 sm:font-normal sm:p-6" key={index}>
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
          <div id="skillsContainer" className='w-full flex flex-wrap mt-7 justify-center gap-7'>
              {tools.map((tool, index) => (
                <ToolsCard key={index} title={tool.title} skills={tool.skills} />
              ))}
          </div>
    
        </>
      );
};

export default SectionWrapper(Skills, "skills");