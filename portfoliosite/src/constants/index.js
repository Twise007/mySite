import {
  hog,
  todo,
  femi,
  isreal,
  samuel,
  enventory,
  weather,
  taskManager,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

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
    name: "TypeScript",
    icon: typescript,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const projects = [
    {id: '1', imageName:enventory, visit:'https://enventory-app.vercel.app/', 
    desc:'Built a CRUB app to help users record and manage stock of products, establishing navigation. Used MERN stack, Tailwind CSS, and Redux for state management.', 
    title:'Enventory App', link:'https://github.com/Twise007/Enventory_app'},
    {id: '2', imageName: 'project1.png', visit:'', 
    desc:'Developed and hosted a website to showcase my skills and projects with React JS.', 
    title:'Portfolio website', link:'https://github.com/Twise007/myPortfolio'},
    {id: '3', imageName: taskManager, visit:'Visit', link:"https://github.com/Twise007/Task-Manager-MERN-app",
    desc:'A full-stack resource management web app built using MERN stack to enable users track and manage tasks', title:'Task Manager'},
    {id: '4', imageName: hog, visit:'https://hogchurch.netlify.app/', link:"https://github.com/Twise007/churchWebsite",
    desc:'Designed and developed a church website with an interactive homepage using React, validated web links and navigation, and optimized screens for mobile', 
    title:'Church Website'},
    {id: '5', imageName: weather, visit:'https://tee-o-weather.netlify.app/', 
    desc:'Built an app to fetch data and report on current weather status, implementing features for real-time updates using React and Bootstrap', title:'Weather App', link:'https://github.com/'},
    {id: '6', imageName: todo, visit:'https://tee-o-todo.netlify.app/', 
    desc:'Developed a simple web app that allows users to add and delete to-do items; used JS, HTML, and CSS.', title:'Todo-App', link:'https://github.com/'},
  ];

  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];

export { services, technologies, testimonials, projects };