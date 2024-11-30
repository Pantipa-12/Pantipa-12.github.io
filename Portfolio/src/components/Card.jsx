import React, { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Card = () => {
    const cardRef= useRef();
    useGSAP(() => {
        const cards = cardRef.current;
        gsap.to(cards, {
            scrollTrigger: {
              trigger: cards,
              start: "top 80%",
            },
            opacity: 1,
            duration:1.5,
            ease: 'power2.inOut'
          });
    });
  return (
    <section className='flex gap-5 justify-center p-5 sm:flex-col md:flex-row opacity-0' ref={cardRef}>
        <div className='interestCard'>
            <h1 className='interestName'>
                Web Developement
            </h1>
            <p>
            I'm passionate about Front-End Development. 
            Through my university's elective course, I've had the opportunity 
            to dive into the world of web development, captivated by the process 
            of crafting visually appealing and user-friendly websites. 
            I enjoy the challenge of building interactive experiences, 
            working with APIs, and integrating databases. While I've made
            significant progress in the past year, I'm eager to expand 
            my knowledge and gain practical experience to further elevate my skills.
            </p>
        </div>

        <div className='interestCard'>
            <h1 className='interestName'>
                AI and Image Processing
            </h1>
            <p>
                I also have a chance to learn about how can we processing image using
                different filter to reduce noises or improve image quality, even 
                image segmentation. I'm having expereince using YOLO and Roboflow
                to create a pre-train model that use to detect/classify object.
            </p>
        </div>

        <div className='interestCard'>
            <h1 className='interestName'>
                Data Science
            </h1>
            <p>
            I've gained practical experience with MySQL and MongoDB, including 
            querying, ER diagram design, and database normalization. While these 
            concepts can be complex, I'm committed to continuous learning and improvement. 
            I'm excited to further develop my database skills and apply them to real-world projects. 
            </p>
        </div>
    </section>
  )
}

export default Card