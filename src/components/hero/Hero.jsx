import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "../../customizations.css";
import profilePhoto from "../../../public/images/hero/at.png";

const Hero = () => {
  const [isActive, setIsActive] = useState(false);

  // Retrieve dark mode preference from local storage or default to system preference
  const savedDarkModePreference = localStorage.getItem("darkModePreference");
  const [prefersDarkMode, setPrefersDarkMode] = useState(
    savedDarkModePreference
      ? savedDarkModePreference === "dark"
      : window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  // Toggle dark mode
  const setDarkMode = (mode) => {
    setPrefersDarkMode(mode === "dark");
    localStorage.setItem("darkModePreference", mode);
    document.documentElement.setAttribute(
      "class",
      `theme-${mode.toLowerCase()}`
    );
  };

  // Sync dark mode with system preference
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const handlePrefersDarkModeChange = (e) => {
      setPrefersDarkMode(e.matches);
    };

    darkModeMediaQuery.addEventListener("change", handlePrefersDarkModeChange);

    return () => {
      darkModeMediaQuery.removeEventListener(
        "change",
        handlePrefersDarkModeChange
      );
    };
  }, []);

  useEffect(() => {
    if (prefersDarkMode) {
      setDarkMode("dark");
    } else {
      setDarkMode("light");
    }
  }, [prefersDarkMode]);

  function handleToggleNavbar() {
    setIsActive(!isActive);
  }

  function handleToggleDarkMode() {
    setPrefersDarkMode(!prefersDarkMode);
  }

  return (
    <section
      className={`hero is-fullheight ${prefersDarkMode ? "" : "is-info"}`}
    >
      <div className="hero-head">
        <header className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <div className="navbar-item">
                <button
                  className="button is-ghost navbar-button"
                  onClick={handleToggleDarkMode}
                >
                  <span className="icon is-small">
                    {prefersDarkMode ? (
                      <i className="fas fa-moon has-text-link"></i>
                    ) : (
                      <i className="fas fa-sun has-text-warning"></i>
                    )}
                  </span>
                </button>
              </div>
              <span
                className={`navbar-burger has-text-white ${
                  isActive ? "is-active" : ""
                }`}
                onClick={handleToggleNavbar}
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>

            <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
              <div className="navbar-end">
                <Link
                  className="navbar-item"
                  to="projects"
                  smooth={true}
                  duration={500}
                  onClick={handleToggleNavbar}
                >
                  Projects
                </Link>
                <Link
                  className="navbar-item"
                  to="workExperience"
                  smooth={true}
                  duration={500}
                  onClick={handleToggleNavbar}
                >
                  Work Experience
                </Link>
                <Link
                  className="navbar-item"
                  to="education"
                  smooth={true}
                  duration={500}
                  onClick={handleToggleNavbar}
                >
                  Education
                </Link>
                <Link
                  className="navbar-item"
                  to="skills"
                  smooth={true}
                  duration={500}
                  onClick={handleToggleNavbar}
                >
                  Skills
                </Link>
              </div>
            </div>
          </div>
        </header>
      </div>

      <div className="hero-body">
        <div className="container has-text-centered mb-6">
          <figure className="image is-256x256 is-inline-block">
            <img className="is-rounded" src={profilePhoto} />
          </figure>
          <p className="title is-size-1 is-size-2-mobile mt-5">Ahmet Turp</p>
          <p className="subtitle is-size-4 is-size-5-mobile mt-4">
            Software Developer, ECM Specialist
          </p>
          <a
            className="button is-medium is-rounded block mt-4"
            href="./Ahmet_Turp-CV.pdf"
            download
          >
            <span>Download Resume</span>
          </a>
        </div>
      </div>

      <div className="hero-foot">
        <div className="container has-text-centered" id="lead-down">
          <span className="icon down-arrow is-size-3 is-size-4-mobile">
            <Link to="aboutMe" smooth={true} duration={500}>
              <i className="fa-solid fa-chevron-down has-text-white mb-6"></i>
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
