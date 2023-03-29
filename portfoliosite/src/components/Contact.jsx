 import React, { useRef, useState } from "react";
 import { motion } from "framer-motion";
 import emailjs from "@emailjs/browser";
 import { toast } from 'react-toastify'
 import { contact } from "../assets";

 import { styles } from "../styles";
 import { SectionWrapper } from "../hoc";
 import { slideIn } from "../utils/motion";
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
        'service_vuig1ws',
       'template_adi78l2', 
        {
          from_name: form.name,
          to_name: "Tunde Oke",
          from_email: form.email,
          to_email: "tundeoke80@gmail.com",
          message: form.message,
        },
        '6MLX4o61sRGCZz9F0'
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
     <div
       className={`xl:mt-12 flex l:flex-row flex-col-reverse gap-6 overflow-hidden transCard bg-bg-sec bg-bg-btn rounded-2xl`}
   >
       <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-bg-sec p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch to me</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <Social />
        <p className='text-bg-white font-black text-[48px] text-center py-4'>OR</p>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='flex flex-col gap-8 text-bg-white font-medium'
        >
          <label className='flex flex-col'>
            <span className=' mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              required
              placeholder="What's your good name?"
              className='transCard py-4 px-6 placeholder:text-bg-hover rounded-lg outline-none border-none'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              required
              placeholder="What's your web address?"
              className='transCard py-4 px-6 placeholder:text-bg-hover rounded-lg outline-none border-none'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='transCard py-4 px-6 placeholder:text-bg-hover rounded-lg outline-none border-none'
            />
          </label>

          <button
            type='submit'
            className='bg-bg-btn hover:bg-bg-sec duration-500 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-bg-btn'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div> 

       <motion.div
         variants={slideIn("right", "tween", 0.2, 1)}
         className=' '
       >
         <div className="items-center hero justify-center md:bg-[red] mt-6">
           <img src={contact} alt="svg"  className="max-w-sm rounded-full shadow-2xl"/>
         </div>
       </motion.div>

     </div>
   );
 };

 export default SectionWrapper(Contact, "contact");


