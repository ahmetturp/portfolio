import { format } from "date-fns";
import parseHtmlString from "../../helpers/parseHtmlString";

function WorkExperienceItem(props) {
  const {
    name,
    title,
    website,
    dateBegin,
    dateEnd,
    description,
    stillWorking,
  } = props;

  // Format the dates
  const formattedBeginDate = format(new Date(dateBegin), "MMM yyyy");
  const formattedEndDate = format(new Date(dateEnd), "MMM yyyy");

  return (
    <>
      <header className="timeline-header">
        <span className="tag is-primary">
          {stillWorking ? "Present" : format(new Date(dateEnd), "yyyy")}
        </span>
      </header>
      <div className="timeline-item is-info is-block">
        <div className="timeline-marker is-icon is-large is-info">
          <i className="fa-solid fa-location-dot"></i>
        </div>
        <div className="timeline-content">
          <div className="box">
            <div className="columns is-vcentered has-text-centered-mobile">
              <div className="column">
                <div className="title is-size-4 block">{name}</div>
                <div className="subtitle is-size-5 mt-2">{title}</div>
              </div>
              <div className="column is-narrow has-text-centered has-text-weight-medium">
                <p className="is-size-7">
                  {" "}
                  {`${formattedBeginDate} - ${
                    stillWorking ? "Present" : formattedEndDate
                  }`}
                </p>
                <p>
                  {website ? (
                    <a
                      href={website}
                      className="button is-small is-ghost"
                      target="_blank"
                    >
                      <span>Visit web site</span>
                      <span className="icon is-small">
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      </span>
                    </a>
                  ) : (
                    ""
                  )}
                </p>
              </div>
            </div>
            <div
              className="block content"
              dangerouslySetInnerHTML={parseHtmlString(description)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkExperienceItem;
