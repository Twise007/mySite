import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { BsGlobe, BsGithub } from "react-icons/bs";
import { styles } from "../styles";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";

const ProjectCard = ({ desc, imageName, link, visit, title }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "var(--color-sec)",
        color: "var(--color-btn)",
      }}
      contentArrowStyle={{ borderRight: "7px solid var(--color-sec)" }}
      date={
        <div
          className={`${styles.sectionSubText} cursor-pointer sm:hover:text-[20px] hover:text-[16px] duration-500`}
        >
          <div
            onClick={() => window.open(visit, "_blank")}
            className="text-[var(--color-btn)]"
          >
            {title}
          </div>
        </div>
      }
      iconStyle={{ background: "var(--color-primary)" }}
      icon={
        <div className="justify-center items-center w-full h-full text-white">
          <BsGlobe className="text-3xl" />
        </div>
      }
    >
      <div
        className="relative w-full h-[300px] cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
        onClick={() => window.open(visit, "_blank")}
      >
        <img
          src={imageName}
          alt="project_Image"
          className="absolute inset-0 w-full h-full object-cover rounded-xl hover:scale-125 transition:transform "
        />
        <div className="absolute inset-0"></div>

        <div className="absolute inset-0 flex justify-end m-3">
          <div
            onClick={() => window.open(link, "_blank")}
            className="bg-black w-10 h-10 rounded-full flex justify-center items-center"
          >
            <BsGithub className="text-2xl hover:text-3xl duration-500 text-white" />
          </div>
        </div>
      </div>
      <p className="text-white">{desc}</p>
    </VerticalTimelineElement>
  );
};

const Project = () => {
  return (
    <>
      <p className={`${styles.sectionSubText} text-center`}>
        What I have done so far
      </p>
      <h2 className={`${styles.sectionHeadText} text-center`}>
        Project I have worked on.
      </h2>

      <div className="flex flex-col">
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
