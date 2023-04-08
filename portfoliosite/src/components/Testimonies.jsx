import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const TestimoniesCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <Tilt>
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 1)}
      className="transCard shadow-2xl p-5 rounded-3xl xs:w-[320px] w-full"
    >
      <p className="text-bg-white font-black text-[48px]">"</p>
      <div className="">
        <p className="h-[11pc] w-auto overflow-y-auto tracking-wider text-[18px]">
          {testimonial}
        </p>
        <div className="flex justify-between items-center gap-1 mt-3">
          <div className="flex-1 flex flex-col">
            <p className="font-medium text-[16px]">@ {name}</p>
            <p className="mt-1 text-bg-btn text-[12px]">
              {designation} of <span className="text-[14px]"> {company}</span>
            </p>
          </div>

          <img
            src={image}
            alt={`feedback_by-${name}`}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  </Tilt>
);

const Testimonies = () => {
  return (
    <div>
      <div
        className={`bg-bg-sec rounded-2xl ${styles.padding} min-h-[280px] md:min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText} style={{ color: "#fff" }}>
            What others say me
          </p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div
        className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 justify-center`}
      >
        {testimonials.map((testimonial, index) => (
          <TestimoniesCard
            key={testimonial.name}
            index={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Testimonies, "testimonies");
