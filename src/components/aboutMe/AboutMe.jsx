const AboutMe = () => {
  const aboutMe = `Hi, I'm Ahmet, a software developer dedicated to crafting innovative software solutions. With a background in software development, enterprise content management, and more, I've helped businesses streamline operations and drive growth. I work at Data Market, where I lead the design and development of cutting-edge applications. Currently, I'm actively learning React and taking steps to become a full-stack developer.`;
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
