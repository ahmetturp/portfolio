import { useEffect, useState } from "react";
import SkillItem from "./SkillItem";
import "bulma/css/bulma.css";
import SkillsData from "./SkillsData.json";

const Skills = () => {
  const containerStyle = {
    maxWidth: "800px", // Adjust the value as needed
    margin: "auto", // Center the container horizontally
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Assuming 768px is your mobile viewport width
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call handleResize initially to set isMobile
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const containerClass = isMobile
    ? "tags are-medium is-centered"
    : "tags are-large is-centered";

  return (
    <section className="section bg-gradient-skills has-border-bottom">
      <div className="container has-text-centered">
        <h1 className="title mb-6">Skills</h1>
      </div>
      <div className={containerClass} style={containerStyle}>
        {SkillsData.skills.map((skill, index) => (
          // Mapping over the array of skills and rendering a SkillItem component for each skill
          <SkillItem key={index}>{skill}</SkillItem>
        ))}
      </div>
    </section>
  );
};

export default Skills;
