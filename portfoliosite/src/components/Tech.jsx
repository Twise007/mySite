import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";

import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="relative flex flex-row flex-wrap no-wrap justify-center h-[20pc] md:h-[30pc] lg:h-[40pc] py-[3pc]">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="mt-[-5pc] md:mt-[-8pc]"
      >
        <p className="text-center sm:text-[18px] text-[14px] uppercase tracking-wider">
          Tools
        </p>
        <p className="text-center text-bg-btn font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Technologies.
        </p>
      </motion.div>

      {technologies.map((item, index) => (
        <motion.div
          className="absolute overflow-hidden h-[18pc] md:h-[30pc] lg:h-[40pc] rounded-full mt-4"
          key={index + 1}
          initial="initial"
          animate={["animate", "initailHide"]}
          variants={{
            initial: {
              opacity: 0,
            },
            initailHide: {
              opacity: 1,
              transition: {
                delay: index + 1,
              },
            },
            animate: {
              rotate: 360,
              transition: {
                duration: technologies.length,
                repeat: Infinity,
                delay: index + 1,
                ease: "linear",
              },
            },
          }}
        >
          <div className="w-[58px] md:w-[72px] lg:w-[90px] px-3 ">
            <img src={item.icon} alt="skills" className="techIcon" />
            <p>{item.name}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
