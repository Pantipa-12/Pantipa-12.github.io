import React, { useRef } from "react";
import { CubsVid, DreamVid, JK } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectRef = useRef();
  useGSAP(() => {
    const projects = projectRef.current;
    gsap.to(
      projects,
      {
        scrollTrigger: {
          trigger: projects,
          start: "top 80%",
        },
        y: 20,
        opacity: 1,
        duration: 1.5,
        ease: "power2.inOut",
      },
      []
    );
  });
  return (
    <div className="bg-black w-full max-h-max">
      <div className="opacity-0" ref={projectRef}>
        <div className="py-20">
          <h1
            className="text-7xl font-semibold 
        mb-5 ml-auto mr-auto w-fit"
          >
            Projects
          </h1>
        </div>

        <div>
          <video
            className="
            w-4/6 h-auto ml-auto mr-auto"
            autoPlay
            muted
            loop
          >
            <source src={DreamVid} type="video/mp4" />
          </video>

          <div
            className="demo"
          >
            <h2
              className="projectName"
            >
              Dream Up
            </h2>
            <p>
            As part of my first university project in Advanced Computer Programming, 
            I contributed to the development of a To-do list application using Dart and Flutter. 
            I was responsible for the app's visual design, creating the user interface and 
            all the necessary pixel art assets using Photoshop
            </p>
          </div>
        </div>

        <div className="my-40 pb-10">
          <video
            className="
            w-4/6 h-auto ml-auto mr-auto"
            autoPlay
            muted
            loop
          >
            <source src={CubsVid} type="video/mp4" />
          </video>

          <div
            className="demo"
          >
            <h2
              className="projectName"
            >
              KKU Library Chatbot
            </h2>
            <p>
            As part of my Web Application elective course, I contributed to the development 
            of a website designed to answer frequently asked questions about Khon Kaen University's 
            library. I took on the role of front-end developer, utilizing Next.js, Tailwind CSS, 
            and Daisy UI to create a user-friendly and visually appealing interface
            </p>
          </div>
        </div>
      </div>

      <img src={JK} />
    </div>
  );
};

export default Projects;
