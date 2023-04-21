import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { BsCloudDownloadFill } from "react-icons/bs";

import { styles } from "../styles";
import { myCv, profile } from "../assets";

const Hero = () => {
  return (
    <div className="min-h-screen text-white hero lg:pt-0 pt-14">
      <div className="flex-col hero-content lg:flex-row">
        <img
          src={profile}
          alt="profile"
          className="w-auto max-w-sm bg-auto shadow-2xl bg-opacity"
          style={{ borderRadius: "63% 37% 62% 38% / 34% 31% 69% 66% " }}
        />
        <div
          className={`inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start`}
        >
          <div className="flex flex-col items-center justify-center mt-5 mr-1">
            <div className="w-5 h-5 rounded-full bg-bg-btn" />
            <div className="w-1 h-40 sm:h-80 violet-gradient" />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText}`}>
              Hi, I'm <span className="text-bg-btn">Tunde</span>
            </h1>
            <h2
              className={`text-bg-hoverT font-medium lg:text-[36px] sm:text-[32px] xs:text-[26px] text-[22px] lg:leading-[46px]`}
            >
              <span className="text-bg-white font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mr-2 ">
                A vibrant
              </span>
              <Typewriter
                loop
                cursor
                cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={90}
                delaySpeed={1500}
                words={["Web designer", "Web developer", "Network Engineer"]}
              />
            </h2>
            <p className={`${styles.heroSubText} mt-2`}>
              Turning ideas into real life <br className="hidden sm:block" />
              profit making product in the digital world.
            </p>
            <div className="flex items-center justify-start w-full pb-12 mt-2">
              <a href={myCv} download="Tunde Oke Cv.pdf">
                <div className="w-full h-[46px] rounded-3xl border-4 border-bg-white flex justify-center items-center p-2 hover:text-bg-btn hover:border-bg-btn dark:hover:border-bg-btn">
                  <motion.div
                    animate={{
                      y: [0, 12, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                  />
                  <BsCloudDownloadFill />
                  <p className={`ml-2`}>Download CV</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <div className='absolute flex items-center justify-center w-full xs:bottom-10 bottom-22'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-[#dfd9ff] flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-[#915EFF] mb-1'
            />
          </div>
        </a>
      </div> */}
    </div>
  );
};

export default Hero;
