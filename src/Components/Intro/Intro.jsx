import React, { useEffect, useRef } from "react";
import './Intro.css'
import gsap from "gsap";
import SplitText from "gsap-trial/SplitText"
import { ScrollTrigger } from "gsap/all";
import { Button } from "@chakra-ui/react";


const Intro = () => {


  const introRef=useRef(null)
  const animateButtonRef = useRef(null);
  
  useEffect(() => {
    gsap.registerPlugin(SplitText);
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();
    const mySplitText = new SplitText(introRef.current, { type: 'words,chars' });
    const chars = mySplitText.chars; // an array of all the divs that wrap each character

    gsap.set(introRef.current, { perspective: 400 });
    // Add ScrollTrigger to the timeline
    // tl.scrollTrigger = {
    //   trigger: "#intro",
    //   start:"Top center",
    //   marker:true,
    //   toggleActions: "restart pause reverse pause",
    // };
    tl.from(chars, {
      duration: 0.8,
      opacity: 0,
      scale: 0,
      y: 80,
      rotationX: 180,
      transformOrigin: '0% 50% -50',
      ease: 'back',
      stagger: 0.01,
      delay:3
    });

    animateButtonRef.current.addEventListener('click', () => {
      tl.restart();
    });
  }, []);

  return (
    <div className="Intro">
      <h3>About us</h3>
      <h1 id="intro" ref={introRef}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam velit
        veniam quo. Omnis repellendus corrupti odit deserunt nemo quod, veniam
        ab tempore neque quae.
      </h1>
      <Button id="animate" ref={animateButtonRef}>
        Animate
      </Button>
    </div>
  );
};

export default Intro;
