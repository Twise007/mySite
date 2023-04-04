import {
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
  figma,
  project1,
  lms,
} from "../assets";

const services = [
  {
    title: "Web Developer",
    icon: web,
    text: "I am very efficient and effective in HTML, CSS, SCSS, JS, REACTJS in building a beautiful user expreience.",
  },
  {
    title: "Backend Developer",
    icon: backend,
    text: "I am very efficient and effective in NODE JS, EXPRESS JS, MONDO DB in building a stressless technology for the users.",
  },
  {
    title: "Ui-Ux",
    icon: mobile,
    text: "Being a full stack engineer the knowledge of UI tools should never be over emphasis. I have some knowledge in ABODE XD and FIGMA.",
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
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const projects = [
  {
    imageName: lms,
    visit: "https://teecamp.netlify.app/",
    desc: "Its a LMS project that allows the full functionality of a CRUD app. 1, The head of school to assign subject and class to a teachers. 2, Allows teachers to enter student records and examination scores make full crud functionality on the records. 3, Allows students to check their records and scores. 4, Upload of profile picture with cloudinary",
    title: "Learning Management System",
    link: "https://github.com/Twise007/lms",
  },
  {
    imageName: enventory,
    visit: "https://enventory-app.vercel.app/",
    desc: "Built a CRUB app to help users record and manage stock of products, establishing navigation. Used MERN stack, Tailwind CSS, and Redux for state management.",
    title: "Enventory App",
    link: "https://github.com/Twise007/Enventory_app",
  },
  {
    imageName: project1,
    visit: "",
    desc: "Developed and hosted a website to showcase my skills and projects with React JS.",
    title: "Portfolio website",
    link: "https://github.com/Twise007/mySite",
  },
  // {imageName: taskManager, visit:'Visit', link:"https://github.com/Twise007/Task-Manager-MERN-app",
  // desc:'A full-stack resource management web app built using MERN stack to enable users track and manage tasks', title:'Task Manager'},
  {
    imageName: hog,
    visit: "https://hogchurch.netlify.app/",
    link: "https://github.com/Twise007/churchWebsite",
    desc: "Designed and developed a church website with an interactive homepage using React, validated web links and navigation, and optimized screens for mobile",
    title: "Church Website",
  },
  {
    imageName: weather,
    visit: "https://tee-o-weather.netlify.app/",
    desc: "Built an app to fetch data and report on current weather status, implementing features for real-time updates using React and Bootstrap",
    title: "Weather App",
    link: "https://github.com/",
  },
  {
    imageName: todo,
    visit: "https://tee-o-todo.netlify.app/",
    desc: "Developed a simple web app that allows users to add and delete to-do items; used JS, HTML, and CSS.",
    title: "Todo-App",
    link: "https://github.com/",
  },
];

const testimonials = [
  {
    testimonial:
      "I highly recommend Tunde as a candidate best suite for position, his level of agility and tenacity cannot be over-emphasis in delivering projects.",
    name: "Samuel Linus",
    designation: "CEO",
    company: "Nerdy Eye",
    image: samuel,
  },
  {
    testimonial:
      "Tunde is a very hardworking and has passion for coding (eye-catching products or the exact design). He delivers his tasks right before the deadline with attention to detail and produces product solutions",
    name: "Ademiju Femi",
    designation: "Colleague",
    company: "",
    image: femi,
  },
  {
    testimonial:
      "Tunde is a hardworking, resilient and passionate person. He is a goal oriented person, He gives his best to the progress of the team. a team player to the core",
    name: "Isreal",
    designation: "Colleague",
    company: "",
    image: isreal,
  },
];

export { services, technologies, testimonials, projects };
