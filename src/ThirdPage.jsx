import { useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

const ThirdPage = () => {

    const wrapperRef = useRef(null);
/*------------------------------
Init ScrollSmoother
------------------------------*/

  useGSAP(
    () => {
        // GSAP animation with ScrollTrigger
        gsap.defaults({overwrite: 'auto', duration: 1});

        const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.accordions',
            pin: ".accordions",
            start: 'top 20%',
            end: 'bottom top',
            scrub: 1,
            ease: 'linear',
            }
        })

        tl.to('.accordion:not(:last-child) .thirdPageText', {
            height: 0,
            paddingBottom: 0,
            opacity: 0,
            stagger: .5,
        });
        tl.fromTo('.accordion:not(:last-child)', {marginBottom: 60}, {
            marginBottom: -15,
            stagger: .5,
        }, '<');

   },{ scope: wrapperRef });

    return (
    <>
        <div className="container" ref={wrapperRef}>
            <div className="spacer"></div>
            <div className="spacer"></div>
            <div className="thirdpage">
                <div className="accordions">
                    <div className="accordion">
                        <div className="thirdPageTitle">
                            About me
                        </div>
                        <div className="thirdPageText">
                        <p>I'm a Toronto-based software developer with a passion for building interactive and visually 
                        appealing websites. I specialize in React.js and Javascript, creating seamless animations 
                        and intuitive user experiences.</p> 
                        <p>I recently graduated in Software Development, and 
                        my projects reflect my love for problem-solving and creativity. When I'm not coding, 
                        I enjoy playing offline video game and explore exciting ideas that emerge from different user interfaces. 
                        Ex: Metaphor by Square Enix or Persona 5 by Atlus. Take a look at 
                        my work above, and let's connect if you'd like to collaborate!
                        </p>
                        </div>
                    </div>
                    <div className="accordion">
                        <div className="thirdPageTitle"> Skill</div>
                        <div className="thirdPageText">
                        <ul>
                            <li>Front End Development</li>
                            <li>Back End Management</li>
                            <li>HTML, CSS, Javascript, Typescript, React, Angular</li>
                            <li>Web Design</li>
                            <li>C#.Net, C++</li>
                        </ul>
                        </div>
                    </div>
                    <div className="accordion">
                        <div className="thirdPageTitle">Contact Me</div>
                        <div className="thirdPageText">
                        <p>Email: <a className="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="mailto:khanhhvm@gmail.com">mailto:khanhhvm@gmail.com</a></p>
                        <p>LinkedIn: <a className="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="https://www.linkedin.com/in/khanh-hoang/">https://www.linkedin.com/in/khanh-hoang/</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default ThirdPage;