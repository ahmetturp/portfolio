import { useState, useRef } from "react";
import { animateScroll as scroll } from "react-scroll";
import ProjectsItem from "./ProjectsItem";
import ProjectsData from "./ProjectsData.json";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const viewAllRef = useRef(null);

  // Show either the first 6 items or all items based on `showAll`
  const visibleProjects = showAll
    ? ProjectsData.projects.filter((project) => project.isActive)
    : ProjectsData.projects.filter((project) => project.isActive).slice(0, 6);

  const handleViewAllClick = () => {
    // Scroll to the position of the View All button's container before it is hidden
    const offset = viewAllRef.current.offsetTop - 150;

    setShowAll(true);

    scroll.scrollTo(offset, {
      duration: 300,
    });
  };

  return (
    <section
      className="section bg-gradient-projects has-border-bottom"
      id="projects"
    >
      <div className="container has-text-centered">
        <h1 className="title">Projects</h1>
      </div>
      <div className="container mt-6">
        <div className="grid is-col-min-14 is-gap-3">
          {visibleProjects.map((project, i) => (
            <ProjectsItem
              key={i}
              title={project.title}
              shortDescription={project.shortDescription}
              tags={project.tags}
              thumbnail={project.thumbnail}
              project={project}
            />
          ))}
        </div>
      </div>
      {!showAll && (
        <div className="container" ref={viewAllRef}>
          <div className="has-text-centered mt-6">
            <button className="button is-ghost" onClick={handleViewAllClick}>
              <span>View All Projects</span>
              <span className="icon">
                <i className="fas fa-arrow-right"></i>
              </span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
