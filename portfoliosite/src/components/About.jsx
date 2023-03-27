import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, text }) => (
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
        className='bg-bg-sec card rounded-[20px] pt-2 min-h-[280px] flex items-center flex-col'
      >
        <figure>
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />
        </figure>
      <div className="card-body pt-2">
        <h3 className='card-title text-bg-btn text-[20px] font-bold items-center text-center'>
          {title}
        </h3>
        <p className="h-6 w-auto overflow-y-auto text-bg-white">{text}</p>
      </div>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-bg-white text-[17px] hero leading-[30px] justify-center'
      >
            A MERN stack developer that proffer professional, efficient,
            and effecftive design service for Start-Up and Cooperate companies 
            in maximazing there vision, there mission and there pontentials.
            Proficient in multiple programming languages, including JavaScript, HTML, CSS, 
            and MERN stack; and strong understanding of web development concepts such as responsive design and cross-browser compatibility.
            I'm also a productive nerd, resilient and goal oriented person.
            Tech as always been a passion for me, IOT and AI are my future ambition.<br/>
            I had a significant years of expreince as a Network engineer and being 
            certified by Cisco, web gave me the ability to explore and create my own world. 
            I enjoy making research, solving problems, taking a 
            lead, and watching football or playing football.
      </motion.p>

      <div className='mt-10 flex flex-wrap gap-10 items-center justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");