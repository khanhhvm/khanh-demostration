import {useEffect} from 'react';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import Footer from './Footer';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(useGSAP, ScrollTrigger);
const Index = () => {

  useGSAP(() => {
    if (typeof window !== 'undefined') {
        ScrollSmoother.create({
            wrapper: '#smooth-wrapper',
            content: '#smooth-content',
            smooth: 0.8,
            effects: true,
            pin: true, // Pin the menu
            pinSpacing: false, // Adjust spacing as needed
        });
        
    }
  }, []);
  useEffect(() => {
    ScrollTrigger.refresh();
    
  }, []);
        return (
        <>
            <div id="smooth-wrapper">
                <div id="smooth-content">
                  <FirstPage />
                  <SecondPage />
                  <ThirdPage />
                  <Footer />
                </div>
            </div>
        </>
        );
    };


export default Index;