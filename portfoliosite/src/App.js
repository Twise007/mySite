
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
  Mode,
} from "./components";
import { ToastContainer } from "react-toastify";
import { videoBg,  } from "../src/assets/index";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <div className="relative z-0 bg-bg-primary dark:bg-bg-white text-bg-white dark:text-bg-primary">
        <Mode />
        <div className="hero bg-cover bg-no-repeat bg-center">
          <video
            src={`${videoBg}`}
            autoPlay
            loop
            muted
            className={`h-[100%] w-[100%] object-cover`}
          />
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
