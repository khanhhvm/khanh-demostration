import { useRef, useState } from 'react';
import { gsap } from "gsap";

import { useGSAP } from '@gsap/react';


const SecondPage = () => {
  const images = [
    "/image/kidtoy_1.png",
    "/image/kidtoy_2.png",
    "/image/kidtoy_3.png",
    "/image/owner.png",
    "/image/renter.png",
  ];
const main = useRef();
const [imagesLoaded, setImagesLoaded] = useState(false);
const loadedImages = useRef(0);

useGSAP(() => {
    if (imagesLoaded) {
    const boxes = gsap.utils.toArray('.image-wrapper');
    boxes.forEach((box) => {
    // Create a GSAP timeline
        const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: box,
            start: "top bottom",
            end: "bottom top",
            pin: ".second-page",
            scrub: true,
            markers: false, // For debugging
        },
        });

        // Add animation sequence
        timeline
        .fromTo(
            box,
            { xPercent: -100 }, // Start off-screen to the left
            { xPercent: 6, duration: 0.5 } // Move to the center
        )
        .to(box, { xPercent: 6, duration: 0.3 }) // Pause for 0.3 seconds in the middle
        .to(box, { xPercent: 105, duration: 0.5 }); // Move off-screen to the right
    });
    }
},{ dependencies: [imagesLoaded], scope: main});

  const handleImageLoad = () => {
    loadedImages.current += 1;
    if (loadedImages.current === images.length) {
      setImagesLoaded(true);
    }
  };

    return (
    <div className="container">
        <div ref={main} className='second-page'>
        {images.map((src, index) => (
            <div className="image-wrapper" key={index}>
                <div className="frame">
                    <img src={src} onLoad={handleImageLoad} alt={`Project ${index + 1}`} />
                </div>
            </div>
        ))}
        </div>
    </div>
    );
};

export default SecondPage;