import React from "react";
import { HillPic } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    gsap.to('#hello', {
      y:65,
      duration: 2,
    })

    gsap.to('#myself',{
      y:-36,
      duration:2,
    })
  }, []);
  return (
    <div id="hero">
      <div className="text-center w-auto px-5">
        <h1 id='hello' className="text-8xl mb-5">HELLO!</h1>
        <p id='myself' className="text-xl mt-36">
          My name is PANTIPA DECHPATHUM, currently in my 3rd years of Computer
          Engineering of Khon Kaen University. <br />
          I'm looking for a summer internship for 2 month, 21 April to 8 June
          2025.
        </p>
      </div>
      <img src={HillPic} />
    </div>
  );
};

export default Hero;
