import { animateScroll as scroll } from "react-scroll";

export default function scrollToTop(instant = false) {
  // return window.scrollTo({ top: 0, behavior: smooth ? "smooth" : "auto" });
  scroll.scrollToTop({
    duration: instant ? 0 : 500, // Scroll duration in milliseconds
    smooth: "easeInOutQuint", // Easing function
  });
}
