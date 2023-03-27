import { BrowserRouter } from "react-router-dom";
import { About, Contact, Hero, Navbar, Testimonies, Project } from './components'


function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Project />
        <Testimonies />
      </div>
      <div className="relative z-0">
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
