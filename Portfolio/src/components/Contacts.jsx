import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Contacts = () => {
  const contactRef = useRef();
  useGSAP(() => {
    const contacts = contactRef.current;
    gsap.to(contacts, {
      scrollTrigger: {
        trigger: contacts,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      y: -35,
      opacity:1,
      duration:3,
    });
  });
  return (
    <div
      className="bg-gradient-to-r from-greenHill1 to-greenHill2
    w-full max-h-max p-5"
    >
      <div className="opacity-0 text-black" ref={contactRef}>
        <h1 className="font-semibold text-7xl mb-5">Contact</h1>

        <p>Email : Pantipa.dech@gmail.com </p>
        <p>Phone Number : 093-435-7345 </p>
        <div className="flex gap-2 my-2">
          <a
            target="_blank"
            href="https://github.com/Babypant?tab=repositories"
          >
            <button className="border p-2 rounded-2xl border-black hover:bg-green-hover">
              {" "}
              Github{" "}
            </button>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/pantipa-dechpathum-5168a3335"
          >
            <button className="border p-2 rounded-2xl border-black hover:bg-green-hover">
              {" "}
              LinkIn
            </button>
          </a>
        </div>
        <p>
          @Designed by{" "}
          <span className="underline">
            <a href="https://www.freepik.com/free-psd/3d-floating-landscape-with-nature-elements-clouds_36190160.htm#fromView=serie&position=3">
              FREEPIK
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Contacts;
