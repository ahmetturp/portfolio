const AboutMe = () => {
  const aboutMe = `Hi, I'm Ahmet, a software developer specializing in low-code platforms, BPM solutions, and business process automation, while actively working as a full-stack developer to design scalable, user-friendly applications that help organizations digitize workflows and optimize operations.`;
  return (
    <section className="section bg-gradient-about-me is-medium has-border-bottom">
      <div className="container">
        <div className="columns">
          <div className="column is-one-third">
            <div className="container has-text-centered">
              <h1 className="title">About Me</h1>
            </div>
          </div>
          <div className="column">
            <div className="container has-text is-size-6">
              <p className="is-size-6-mobile has-text-centered-mobile">
                {aboutMe}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
