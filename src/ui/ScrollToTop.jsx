import { useState, useEffect } from "react";
import scrollToTop from "../helpers/scrollToTop";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 200); // Threshold
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    scrollToTop();
  };

  return (
    <>
      {isVisible && (
        <button
          className="button is-primary scroll-to-top-btn"
          onClick={handleScrollToTop}
        >
          <span className="icon is-small">
            <i className="fas fa-chevron-up"></i>
          </span>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
