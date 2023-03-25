import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { BsBrowserChrome } from 'react-icons/bs'

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import ProfilePicture  from "../assets/profile.png";


const ProjectCard = ({ project }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={
        <div className='text-white text-4xl font-bold'>
            {project.title}
        </div>}
      iconStyle={{background:'#000'}}
      icon={
        <div className='justify-center items-center w-full h-full text-white'>
          <BsBrowserChrome/>
        </div>
      }
    >
        {projects.desc.map((point, index) => (
        <div key={`experience-point-${index}`}>
          <img src={ProfilePicture} className="w-full h-[300px] rounded-lg object-contain"/>
          <p>{point}</p>
        </div>
         ))}
      
    </VerticalTimelineElement>
  );
};

const Project = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Project I have worked on.
        </h2>
      </motion.div>

      <div className='mt-2 flex flex-col'>
        <VerticalTimeline>
          {projects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              project={project}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Project, "project");