import { motion } from "framer-motion";
import { hero } from "../assets";
import { styles } from "../styles";

const Hero = () => {
  const social_media = [
    "logo-instagram",
    "mail",
    "logo-linkedin",
    "logo-github",
  ];
  const social_media_links = [
    "https://www.instagram.com/shubham_jadhav8/",
    "mailto:shubhamjadhav123.sj@gmail.com",
    "https://www.linkedin.com/in/shubham-jadhav-2429421b3/",
    "https://github.com/shubhamj808",
  ];
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
            <button className={`${styles.buttonStyle}`}>
              Download CV
            </button>
          </div>
          <div className="mt-8 text-3xl flex md:justify-start gap-5">
            {social_media?.map((icon, index) => (
              <div
                key={icon}
                className="text-gray-600 hover:text-white cursor-pointer "
                onClick={() => window.open(social_media_links[index])}
              >
                <ion-icon name={icon}></ion-icon>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="hidden md:flex relative justify-end p-16">
        <img src={hero} alt='hero_bg' className={`${styles.imageStyle}`} />
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
