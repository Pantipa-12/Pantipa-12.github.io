import React from "react";

import { CubsImgs, OriginImgs } from "../utils";
import Carousel from "./Carousel";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Experiences = () => {
  const experinceRef = useRef();
  useGSAP(() => {
    const experinces = experinceRef.current;
    gsap.to(experinces,{
      scrollTrigger: {
        trigger: experinces,
        start: 'top 80%',
      },
      opacity:1,
      duration:2,
      ease: 'power2.inOut'
    });
  });
  return (
    <div className="text-black w-full max-h-max mt-10 opacity-0" ref={experinceRef}>
      <div className="flex justify-center">
        <h1 className="text-7xl font-semibold  text-center">EXPERIENCES</h1>
      </div>

      <div>
        <div className="carousel">
          <Carousel>
            {OriginImgs.map((img, index) => (
              <img key={index} src={img} className="imgEx"/>
            ))}
          </Carousel>
        </div>

        <div className="paragp">
          <h1 className="font-bold underline text-2xl ">
            Hackathon KKU X Origin
          </h1>
          <h2 className="font-semibold text-lg">
            2024 (First Aid Hub : 20 Finalists)
          </h2>
          <p className="p-3">
          As part of a team, I participated in a hackathon and developed 
          an object detection project using Roboflow and YOLO to detect wounds. 
          We received valuable feedback from mentors and gained firsthand experience 
          in problem-solving and project management within a competitive environment.
          </p>
        </div>
      </div>

      <div className="mb-20">
        <div className="carousel">
          <Carousel>
            {CubsImgs.map((img, index) => (
              <img key={index} src={img} className="imgEx"/>
            ))}
          </Carousel>
        </div>

        <div className="paragp">
          <h1 className="font-bold underline text-2xl ">
            CUBS BLOCKATHON
          </h1>
          <h2 className="font-semibold text-lg">
            2024 (Ticket Buddy : Honoroble Mention)
          </h2>
          <p className="p-3">
          I participated in a hackathon where my team proposed a novel solution 
          combining blockchain technology and NFTs to create a secure and transparent
          ticket booking system. This innovative approach addresses the issue of 
          counterfeit tickets. Through this experience, I gained valuable knowledge 
          in blockchain technology, strengthened my teamwork skills, and learned to 
          manage time efficiently under pressure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
