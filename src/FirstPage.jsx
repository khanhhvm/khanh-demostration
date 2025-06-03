import { useRef } from "react";
import { gsap } from "gsap";
import paw from './image/paw.png';
import Image from 'react-bootstrap/Image';
import { useGSAP } from '@gsap/react';

const FirstPage = () => {
  const textRef = useRef();
  const imageRef = useRef();

  useGSAP(
    () => {
    const lines = textRef.current.querySelectorAll(".line");
        lines.forEach((line, index) => {
          const words = line.querySelectorAll(".word");
          gsap.fromTo(
            words,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              stagger: 0.15,
              duration: 1.5,
              ease: "power1.out",
              delay: index * 0.8, // Delay second line animation
            }
          );
        });

        
    },
    { scope: textRef }
  );
  useGSAP(
    () => {
      //-- image button
        // Select the image element
        const img = document.querySelector(".hover-image");

        // Define hover-in animation
        const hoverIn = () => {
          gsap.to(img, {
            filter: "hue-rotate(90deg)", // Change color using hue-rotate
            scale: 1.1, // Slightly zoom in
            duration: 0.5, // Animation duration
            ease: "power1.out", // Smooth easing
          });
        };

        // Define hover-out animation
        const hoverOut = () => {
          gsap.to(img, {
            filter: "hue-rotate(0deg)", // Reset color
            scale: 1, // Reset zoom
            duration: 0.5,
            ease: "power1.out",
          });
        };

        // Add event listeners
        img.addEventListener("mouseenter", hoverIn);
        img.addEventListener("mouseleave", hoverOut);

        // Cleanup on unmount
        return () => {
          img.removeEventListener("mouseenter", hoverIn);
          img.removeEventListener("mouseleave", hoverOut);
        };
    },
    { scope: imageRef }
  );

  return (
    <div className="container">
      <div className="spacer"></div>
      <div className="row">
        <div className="col-md-8 introBorder">
            {/* Left Side: Animated Text */}
            <div className="container">
              <div
                ref={textRef}
                className="p-8"
              >
                <h1 className="text-3xl font-bold space-y-4 intro-title">
                  <div className="line">
                    {["Good", "morning,"].map((word, index) => (
                      <span key={index} className="word text-gradient">
                        {word}&nbsp;
                      </span>
                    ))}
                  </div>
                  <div className="line ms-3">
                    {["My", "name", "is", "Khanh"].map((word, index) => (
                      <span key={index} className="word text-gradient">
                        {word}&nbsp;
                      </span>
                    ))}
                  </div>
                  <div className="line ms-3 ps-3">
                    {["A", "Website", "Developer"].map((word, index) => (
                      <span key={index} className="word inline-block text-gradient">
                        {word}&nbsp;
                      </span>
                    ))}
                  </div>
                </h1>
              </div>
            </div>
            <div className="container">
              <div className="">
                <span className="lead text-size1 text-justify intro-text"><p>I’m a passionate Web Developer specializing in 
                    creating user-friendly, responsive websites that bring ideas to life.</p>
                    <p>Feel free to explore my portfolio and get in touch—I’d love to collaborate on your next project!
                      </p>
                </span></div>
            </div>
        </div>
        {/* Right Side: SVG Image */}
        <div className="col-md-4 align-items-center justify-content-center d-flex">
          <img
            src="/cat.png"
            alt="cat"
            className="img-fluid avatar"
          />
        </div>
      </div>
      <div className="row">
          <div ref={imageRef} className="col d-flex justify-content-center py-3">
            <a href="mailto:khanhhvm@gmail.com" className=""><Image src={paw} width={200} className="hover-image" /></a>
          </div>
      </div>
    </div>
  );
};

export default FirstPage;