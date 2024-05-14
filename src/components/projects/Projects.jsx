import ProjectsItem from "./ProjectsItem";
import ProjectsData from "./ProjectsData.json";

const Projects = () => {
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
          {ProjectsData.projects
            .filter((project) => project.isActive)
            .map((project, i) => (
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
    </section>
  );
};

export default Projects;
