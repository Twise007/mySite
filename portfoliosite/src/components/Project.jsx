import React from "react";
import { VerticalTimeline,VerticalTimelineElement, } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { BsGlobe, BsGithub } from 'react-icons/bs'
import { styles } from "../styles";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";


const ProjectCard = ({ desc, imageName, link, visit, title }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={
        <div className={`${styles.sectionSubText} `}>
            {title}
        </div>}
      iconStyle={{background:'#000'}}
      icon={
        <div className='justify-center items-center w-full h-full text-white'>
          <BsGlobe className='text-3xl'/>
        </div>
      }
    >
        <div className='relative w-full h-[300px] cursor-pointer  black-gradient opacity-70 hover:opacity-100 transition-opacity' onClick={() => window.open(visit, "_blank")}>
          <img
            src={imageName}
            alt='project_Image'
            className='absolute inset-0 w-full h-full object-cover rounded-xl hover:scale-125 transition:transform '
          />
          <div className="absolute inset-0"></div>
          
          <div className='absolute inset-0 flex justify-end m-3'>
            <div
              onClick={() => window.open(link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center'
            >
              <BsGithub className='text-2xl hover:text-3xl duration-500' />
            </div>
          </div>
        </div>
          <p>{desc}</p>
    </VerticalTimelineElement>
  );
};

const Project = () => {
  return (
    <>
        {/* <motion.div variants={textVariant()}>
      </motion.div> */}
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Project I have worked on.
        </h2>

      <div className='mt-2 flex flex-col'>
        <VerticalTimeline>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Project, "project");