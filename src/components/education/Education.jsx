import EducationItem from "./EducationItem";
import EducationData from "./EducationData.json";

const Education = () => {
  const containerStyle = {
    maxWidth: "800px", // Adjust the value as needed
    margin: "auto", // Center the container horizontally
  };

  return (
    <section
      className="section bg-gradient-education has-border-bottom"
      id="education"
    >
      <div className="container has-text-centered">
        <h1 className="title mb-6">Education</h1>
      </div>
      <div className="education-section" style={containerStyle}>
        {EducationData.education.map((university, i) => (
          // Mapping over the array of skills and rendering a SkillItem component for each skill
          <EducationItem
            key={i}
            name={university.name}
            department={university.department}
            location={university.location}
            year={university.year}
            description={university.description}
            image={university.image}
            image_dark={university.image_dark}
          />
        ))}
      </div>
    </section>
  );
};

export default Education;
