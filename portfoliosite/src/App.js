import { BrowserRouter } from "react-router-dom";
import { About, Contact, Hero, Navbar, Testimonies, Project, Tech, Mode} from './components'
import { ToastContainer } from 'react-toastify';
import { videoBg } from '../src/assets/index'
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <div className="relative z-0 bg-bg-primary">
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
