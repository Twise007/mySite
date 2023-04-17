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

const ProjectCard = ({ desc, imageName, link, visit, title, tech }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "var(--color-sec)",
        color: "var(--color-btn)",
      }}
      contentArrowStyle={{ borderRight: "7px solid var(--color-sec)" }}
      date={
        <div
          className={`${styles.sectionSubText} cursor-pointer sm:hover:text-[26px] hover:text-[16px] duration-500`}
        >
          <div onClick={() => window.open(visit, "_blank")} className="">
            <p className="text-[var(--color-btn)]">{title}</p>
          </div>
        </div>
      }
      iconClassName="bg-bg-primary dark:bg-bg-white"
      icon={
        <div className="items-center justify-center w-full h-full text-bg-white dark:text-bg-primary">
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
          className="absolute inset-0 object-cover w-full h-full rounded-xl hover:scale-125 transition:transform "
        />
        <div className="absolute inset-0"></div>

        <div className="absolute inset-0 flex justify-end m-3">
          <div
            onClick={() => window.open(link, "_blank")}
            className="flex items-center justify-center w-10 h-10 text-2xl bg-black rounded-full hover:text-3xl"
          >
            <BsGithub className="text-white duration-500 " />
          </div>
        </div>
      </div>
      <p className="text-white">{desc}</p>
      <p className="text-white">{tech}</p>
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
