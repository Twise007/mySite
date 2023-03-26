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
        <div className='relative w-full h-[300px] cursor-pointer' onClick={() => window.open(visit, "_blank")}>
          <img
            src={imageName}
            alt='project_Image'
            className='w-full h-[100%] object-fill rounded-xl'
          />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <BsGithub className='text-2xl' />
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