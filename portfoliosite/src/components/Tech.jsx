import React from "react";
import { motion } from "framer-motion";

import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
      {/* <motion.div variants={fadeIn("right", "spring")}>
       <div className="skills gap-5 items-center justify-center text-center flex relative ">
        {technologies.map((item, index) => (
          <div>
            <img src={item.icon} alt="skills" className="object-cover " />
            <p className="text-bg-white">{item.name}</p>
          </div>
        ))}
      </div>
    </motion.div> */}
      {technologies.map((item, index) => (
        <motion.div
          className="wheel"
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
              rotate: 180,
              transition: {
                duration: technologies.length,
                repeat: Infinity,
                delay: index + 1,
                ease: "linear",
              },
            },
          }}
        >
          <div>
            <img src={item.icon} alt="skills" className="techIcon" />
            <p className="text-bg-white">{item.name}</p>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default Tech;
