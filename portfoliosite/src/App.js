import { BrowserRouter } from "react-router-dom";
import { About, Contact, Hero, Navbar, Testimonies, Project } from './components'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
    <ToastContainer />
      <div className="relative z-0 bg-bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Project />
        <Testimonies />
        <Contact />
      </div>
      <div className="relative z-0">

      </div>
    </BrowserRouter>
  );
}

export default App;
