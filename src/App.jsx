import { BrowserRouter } from "react-router-dom";

import {
  About,
  Achievement,
  Experience,
  Education,
  Contact,
  Hero,
  Navbar,
  Preloader,
  StarsCanvas,
  Works,
} from "./components";
import EasterEggs from "./components/EasterEggs";
import ElasticCursor from "./components/ElasticCursor";
import SkillKeyboard from "./components/SkillKeyboard";

const App = () => {
  return (
    <Preloader>
      <BrowserRouter>
        <div
          className="relative z-0"
          style={{ backgroundColor: "#050505" }}
        >
          <ElasticCursor />
          <EasterEggs />
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <StarsCanvas />
          <About />
          <Experience />
          <SkillKeyboard />
          <Works />
          <Achievement />
          <Education />
          <div className="relative z-0">
            <Contact />
          </div>
        </div>
      </BrowserRouter>
    </Preloader>
  );
};

export default App;
