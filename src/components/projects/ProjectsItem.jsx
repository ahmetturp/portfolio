import { Link } from "react-router-dom";
import parseHtmlString from "../../helpers/parseHtmlString";

function ProjectsItem(props) {
  const { title, shortDescription, tags, thumbnail, project } = props;

  return (
    <Link
      className="cell"
      to={{
        pathname: `/projects/${project.id}`,
        state: { projectData: project },
      }}
    >
      <div className="card">
        <div className="card-image">
          <figure className="image is-16by9">
            <img src={thumbnail} alt={title} />
          </figure>
        </div>
        <div className="card-content">
          <div className="container">
            {tags &&
              tags.map((tag, i) => (
                <span
                  className={`tag mr-2 mb-2 ${
                    tag === "New" ? "is-success" : ""
                  }`}
                  key={i}
                >
                  {tag}
                </span>
              ))}
          </div>

          <div className="title is-size-5 content mt-4">{title}</div>
          <div
            className="block content"
            dangerouslySetInnerHTML={parseHtmlString(shortDescription)}
          />
        </div>
        <footer className="card-footer">
          <div className="card-footer-item">
            <div className="button is-link is-ghost is-fullwidth">
              <span className="icon">
                <i className="fas fa-arrow-right"></i>
              </span>
              <span>View more</span>
            </div>
          </div>
        </footer>
      </div>
    </Link>
  );
}

export default ProjectsItem;
