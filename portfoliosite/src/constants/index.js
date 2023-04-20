import {
  sass,
  hog,
  todo,
  femi,
  isreal,
  samuel,
  enventory,
  weather,
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  cisco,
  next,
  sanity,
  project1,
  lms,
} from "../assets";

const services = [
  {
    title: "Web Developer",
    icon: web,
    text: "I am very efficient and effective in HTML, CSS, SCSS, JS, REACTJS in building a beautiful user experience.",
  },
  {
    title: "Backend Developer",
    icon: backend,
    text: "I am very efficient and effective in NODE JS, EXPRESS JS, MONDO DB and SANITY in building a seamless technology for the users.",
  },
  {
    title: "Ui-Ux",
    icon: mobile,
    text: "Being a full stack engineer the knowledge of UI tools can never be over emphasis. I also have some knowledge in ABODE XD and FIGMA.",
  },
  {
    title: "Network Engineer",
    icon: creator,
    text: "With over 5 years of exprience as a network engineer, in designing, troubleshooting and maintaining network facilities.",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "SASS",
    icon: sass,
  },
  {
    name: "Java Script",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Mongo DB",
    icon: mongodb,
  },
  {
    name: "Sanity",
    icon: sanity,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Cisco",
    icon: cisco,
  },
];

const projects = [
  {
    imageName: enventory,
    visit: "https://enventory-app.vercel.app/",
    desc: "Built a CRUB app to help users record and manage stock of products, establishing navigation. Used MERN stack, Tailwind CSS, and Redux for state management.",
    title: "Enventory App",
    link: "https://github.com/Twise007/Enventory_app",
    tech: "React, Express JS, MongoDB, Node JS",
  },
  {
    imageName: lms,
    visit: "https://teecamp.netlify.app/",
    desc: "Its a LMS project that allows the full functionality of a CRUD app. 1, The head of school to assign subject and class to teachers. 2, Allows teachers to enter student records and examination scores make full crud functionality on the records. 3, Allows students to check their records and scores. 4, Uploading of profile pictures and store it in the cloudinary",
    title: "Learning Management System",
    link: "https://github.com/Twise007/lms",
    tech: "React, Express JS, MongoDB, Node JS, tailwind",
  },
  {
    imageName: project1,
    visit: "",
    desc: "Developed and hosted a website to showcase my skills and projects with React JS.",
    title: "Portfolio website",
    link: "https://github.com/Twise007/mySite",
    tech: "React, Tailwind",
  },
  {
    imageName: hog,
    visit: "https://hogchurch.netlify.app/",
    link: "https://github.com/Twise007/churchWebsite",
    desc: "Designed and developed a church website with an interactive homepage using React, validated web links and navigation, and optimized screens for mobile",
    title: "Church Website",
    tech: "React, Tailwind",
  },
  {
    imageName: weather,
    visit: "https://tee-o-weather.netlify.app/",
    desc: "Built an app to fetch data and report on current weather status, implementing features for real-time updates using React and Bootstrap",
    title: "Weather App",
    link: "https://github.com/",
    tech: "React, Css",
  },
  {
    imageName: todo,
    visit: "https://tee-o-todo.netlify.app/",
    desc: "Developed a simple web app that allows users to add and delete to-do items; used JS, HTML, and CSS.",
    title: "Todo-App",
    link: "https://github.com/",
    tech: "React, Bootstrap",
  },
];

const testimonials = [
  {
    testimonial:
      "I highly recommend Tunde as a candidate best suite for position, his level of agility and tenacity cannot be over-emphasis in delivering projects.",
    name: "Samuel Linus",
    designation: "Instructor Lead",
    company: "Nerdy Eye",
    image: samuel,
  },
  {
    testimonial:
      "Tunde is a very hardworking and has passion for coding (eye-catching products or the exact design). He delivers his tasks right before the deadline with attention to detail and produces product solutions",
    name: "Ademiju Femi",
    designation: "Colleague",
    company: "Nerdy Eye",
    image: femi,
  },
  {
    testimonial:
      "Tunde is an hardworking, resilient and a passionate person. He is a goal oriented person, He gives his best to the progress of the team. a team player to the core",
    name: "Isreal",
    designation: "Colleague",
    company: "Nerdy Eye",
    image: isreal,
  },
];

export { services, technologies, testimonials, projects };
