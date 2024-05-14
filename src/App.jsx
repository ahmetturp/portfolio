import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Element } from "react-scroll";
import "bulma/css/bulma.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Hero from "./components/hero/Hero";
import AboutMe from "./components/aboutMe/AboutMe";
import Projects from "./components/projects/Projects";
import WorkExperience from "./components/workExperience/WorkExperience";
import Education from "./components/education/Education";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";
import ProjectDetails from "./components/projects/ProjectDetails";
import ScrollToTop from "./ui/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
      </div>
      <ScrollToTop />
    </BrowserRouter>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <Element name="aboutMe">
        <AboutMe />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="workExperience">
        <WorkExperience />
      </Element>
      <Element name="education">
        <Education />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Footer />
    </>
  );
}

export default App;
