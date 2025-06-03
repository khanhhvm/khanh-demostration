import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

const Scroll = ({ children }) => {
  // Initialize ScrollSmoother
    useGSAP(
      () => {
        ScrollSmoother.create({
            wrapper: ".smooth-wrapper",
            content: ".smooth-content",
            smooth: 1.5,
            effects: true,
            normalizeScroll: true, // Improves scroll calculations
        });
   },[]);
  return (
    <div className="smooth-wrapper">
      <div className="smooth-content">{children}</div>
    </div>
  );
};

export default Scroll;