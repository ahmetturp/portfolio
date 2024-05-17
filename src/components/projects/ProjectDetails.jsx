import { useParams } from "react-router-dom";
import projectsData from "./ProjectsData.json";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../footer/Footer";
import parseHtmlString from "../../helpers/parseHtmlString";
import scrollToTop from "../../helpers/scrollToTop";
import ParagraphSkeleton from "../../ui/ParagraphSkeleton";

const ProjectDetails = () => {
  const [isLoading, setIsLoading] = useState(true);

  scrollToTop(true);
  const { id } = useParams();

  const project = projectsData.projects.find(
    (project) => project.id === parseInt(id)
  );

  const [markdownContent, setMarkdownContent] = useState(null);

  useEffect(() => {
    const fetchMarkdownContent = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(project.markdownFile);
        const text = await response.text();
        setMarkdownContent(text);
      } catch (error) {
        console.error("Error fetching Markdown content:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMarkdownContent();
  }, [project.markdownFile]);

  const navigate = useNavigate();

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <div className="section">
        <div className="container is-max-desktop">
          <section className="hero is-link hero-radius">
            <div className="hero-body">
              <p className="title">{project.title}</p>
              <p
                className="subtitle mt-4"
                dangerouslySetInnerHTML={parseHtmlString(
                  project.shortDescription
                )}
              ></p>
            </div>
          </section>
        </div>

        <div className="container is-max-desktop">
          <div className="content my-6">
            {isLoading ? (
              <ParagraphSkeleton />
            ) : (
              markdownContent && (
                <ReactMarkdown>{markdownContent}</ReactMarkdown>
              )
            )}
          </div>
          <hr />
          <div className="container has-text-centered">
            <div
              className="button is-link is-ghost is-flex-mobile"
              onClick={handleGoBack}
            >
              <span className="icon">
                <i className="fas fa-chevron-left"></i>
              </span>
              <span>Return back</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectDetails;
