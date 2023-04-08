import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { contact } from "../assets";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn, textVariant } from "../utils/motion";
import Social from "./Social";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Tunde Oke",
          from_email: form.email,
          to_email: "tundeoke80@gmail.com",
          message: form.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          toast("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          toast("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div>
      <div
        className={`bg-bg-sec rounded-2xl ${styles.padding} min-h-[400px] md:min-h-[420px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText} style={{color:"#fff"}}>Get in touch to me</p>
          <h3 className={styles.sectionHeadText}>Contact</h3>
          <div className="hero md:justify-start justify-center">
            <Social />
          </div>
          <p className="text-white font-black text-[48px] text-center">
            OR
          </p>
        </motion.div>
      </div>
      <div className="-mt-20 mx-10 hero-content flex-col lg:flex-row-reverse shadow-2xl transCard rounded-2xl ">
        <motion.div variants={slideIn("right", "tween", 0.2, 1)}>
          <img
            src={contact}
            alt="contact"
            className="max-w-sm h-[150px] md:h-[300px] lg:h-[380px] w-auto object-cover"
          />
        </motion.div>
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] w-full rounded-2xl p-0 md:p-8"
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-8 font-medium align-items justify-center"
          >
            <label className="flex flex-col">
              <span className="font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="What's your good name?"
                className="transCard border-[1px] border-bg-sec py-4 px-6 rounded-lg outline-none"
              />
            </label>
            <label className="flex flex-col">
              <span className="font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="What's your web address?"
                className="transCard border-[1px] border-bg-sec py-4 px-6 rounded-lg outline-none"
              />
            </label>
            <label className="flex flex-col">
              <span className="font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="transCard border-[1px] border-bg-sec py-4 px-6 rounded-lg outline-none"
              />
            </label>

            <button
              type="submit"
              className="bg-bg-btn hover:bg-bg-sec duration-500 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-bg-btn "
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
