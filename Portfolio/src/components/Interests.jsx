import React from "react";
import Card from "./Card";
import { useRef } from "react";
import { DragonPic } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Interests = () => {
  const scrollRef = useRef();
  const scrollImg = useRef();
  useGSAP(() => {
    const tiInterst = scrollRef.current;
    const dragonImg = scrollImg.current;

    gsap.to(tiInterst, {
      scrollTrigger: {
        trigger: tiInterst,
        start: "top 80%",
      },
      opacity: 1,
      duration: 3,
      x:25,
    });

    gsap.to(dragonImg, {
      x:50,
      duration:4,
      repeat:-1,
      yoyo:true
    });

  }, []);

  return (
    <div className="text-black w-full max-h-max">
      <h1
        id="titleInter"
        className="text-7xl text-wrap p-10 
      font-semibold opacity-0"
        ref={scrollRef}
      >
        WHAT ARE MY INTERESTS?
      </h1>
      <Card/>
      <div>
        <img src={DragonPic} ref={scrollImg}/>
      </div>
    </div>
  );
};

export default Interests;
