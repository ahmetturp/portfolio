import "bulma-timeline/dist/css/bulma-timeline.min.css";
import "../../customizations.css";
import WorkExperienceItem from "./WorkExperienceItem";
import WorkExperienceData from "./WorkExperienceData.json";

const WorkExperience = () => {
  const containerStyle = {
    maxWidth: "800px", // Adjust the value as needed
    margin: "auto", // Center the container horizontally
  };
  return (
    <section
      className="section bg-gradient-work-experience has-border-bottom"
      id="work-experience"
    >
      <div className="container has-text-centered mb-5">
        <h1 className="title">Work Experience</h1>
      </div>
      <div className="work-experience-section" style={containerStyle}>
        <div className="columns is-centered">
          <div className="column">
            <div className="timeline">
              {WorkExperienceData.workExperience.map((work, index) => (
                // Mapping over the array of skills and rendering a SkillItem component for each skill
                <WorkExperienceItem
                  key={index}
                  name={work.name}
                  title={work.title}
                  website={work.website}
                  dateBegin={work.dateBegin}
                  dateEnd={work.dateEnd}
                  description={work.description}
                  stillWorking={work.stillWorking}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
