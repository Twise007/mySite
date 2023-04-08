import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Hero,
  Navbar,
  Testimonies,
  Project,
  Tech,
  Footer,
} from "./components";
import { ToastContainer } from "react-toastify";
import { videoBg } from "../src/assets/index";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if(window.matchMedia('{prefers-color-scheme: dark}').matches){
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [])
  
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <BrowserRouter>
      <ToastContainer />
      <div className="relative z-0 bg-bg-primary dark:bg-bg-white text-bg-white dark:text-bg-primary">
        {/* <input
          type="checkbox"
          className="toggle fixed z-30 bottom-[5pc] w-[50px] h-[25px] bg-bg-primary dark:bg-bg-white"
        /> */}
        <button
          onClick={handleThemeSwitch}
          className="fixed top-20 z-30 right-10 duration-600 bg-[red]"
        >
          button
        </button>

        <div className="hero bg-cover bg-no-repeat bg-center">
          <video
            src={videoBg}
            autoPlay
            loop
            muted
            className="h-[100%] w-[100%] object-cover"
          />
          <div className="hero-overlay bg-opacity-60"></div>

          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Project />
        <Testimonies />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
