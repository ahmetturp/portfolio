import { useEffect, useState } from "react";
import parseHtmlString from "../../helpers/parseHtmlString";

const EducationItem = (props) => {
  const { name, department, location, year, description, image, image_dark } =
    props;

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    setIsDarkMode(darkModeMediaQuery.matches);

    const handleDarkModeChange = (event) => {
      setIsDarkMode(event.matches);
    };

    darkModeMediaQuery.addEventListener("change", handleDarkModeChange);

    return () => {
      darkModeMediaQuery.removeEventListener("change", handleDarkModeChange);
    };
  }, []);
  return (
    <div className="box">
      <div className="columns is-vcentered has-text-centered-mobile">
        <div className="column is-narrow has-text-centered">
          <figure className="is-inline-block">
            <p className="image is-64x64">
              {!isDarkMode && image_dark !== null && image_dark !== "" ? (
                <img src={image} alt={name} />
              ) : (
                <img src={image_dark || image} alt={name} />
              )}
            </p>
          </figure>
        </div>
        <div className="column">
          <div className="title is-size-4 block is-centered-mobile">{name}</div>
          <div className="subtitle is-size-5 mt-2">{department}</div>
        </div>
        <div className="column is-narrow has-text-centered has-text-weight-medium">
          <p className="is-size-7">{year}</p>
          <p className="is-size-7">{location}</p>
        </div>
      </div>
      <div
        className="block content"
        dangerouslySetInnerHTML={parseHtmlString(description)}
      />
    </div>
  );
};

export default EducationItem;
