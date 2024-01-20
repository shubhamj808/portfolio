import { motion } from "framer-motion";

import {heroImage} from "../assets"

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Shubham</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A passionate DevOps Engineer, <br className='sm:block hidden' />
            based in Pune, India
          </p>
          <div>
            <button className="bg-gradient-to-r from-[#754ad1] to-[#a795cc] text-white hover:bg-[#2e195c] transition duration-300 ease-in-out py-4 px-8 mt-4 rounded-full">
              Download CV
            </button>
          </div>
          <div>
            {/* add social media icons like instagram, gmail, linkedin, github in this div */}
            <div className='flex mt-4 gap-2'>
              <a href="https://www.linkedin.com/in/shubham-jadhav-096a61190/" target="_blank" rel="noreferrer">
                <img src="https://img.icons8.com/color/24/000000/linkedin.png" alt="linkedin" />
              </a>
              <a href="https://www.instagram.com/shubham_jadhav/" target="_blank" rel="noreferrer">
                <img src="https://img.icons8.com/fluency/24/000000/instagram-new.png" alt="instagram" />
              </a>
              <a href="https://www.github.com/shubham-jadhav" target="_blank" rel="noreferrer">
                <img src="https://img.icons8.com/fluency/24/000000/github.png" alt="github" />
              </a>
              <a href="https://www.gmail.com" target="_blank" rel="noreferrer">
                <img src="https://img.icons8.com/fluency/24/000000/gmail.png" alt="gmail" />
              </a>
            </div>
          </div>


        </div>

      </div>

      {/* <ComputersCanvas /> */}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>

        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-t-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};





export default Hero;
