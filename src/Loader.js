import { gsap } from "gsap";
import { ReactComponent as CatSVG } from "./image/cat.svg";
import { useGSAP } from '@gsap/react';

const Loader = () => {
  useGSAP(() => {
    const paths = document.querySelectorAll("path"); // Select all paths in the SVG
    paths.forEach((path) => {
      const length = path.getTotalLength(); // Get the total length of the path

      // Dynamically apply styles for animation
      gsap.set(path, {
        stroke: "white", // Set stroke color
        strokeWidth: 2, // Set stroke width
        fill: "none", // Ensure fill doesn't interfere
        strokeDasharray: length, // Define the stroke dash pattern
        strokeDashoffset: length, // Initially offset the stroke completely
      });

      // Animate the stroke to make it appear drawn
      gsap.to(path, {
        strokeDashoffset: 0, // Reveal the stroke
        duration: 3, // Animation duration
        ease: "power4.inOut", // Easing function
        stagger: 0.3, // Delay each path animation
      });
    });
  }, []);

  return (
    <div className="preloader">
        <CatSVG />
    </div>
  );
};

export default Loader;