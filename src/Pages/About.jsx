import React, { useEffect, useRef } from "react";
import "../Style/About.css";
import gsap from "gsap";
import ScrollTrigger from "gsap-trial/ScrollTrigger";

const About = () => {
  gsap.registerPlugin(ScrollTrigger);


  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about_section",
      },
    });
    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".techStack",
      },
    });

    tl.fromTo(
      ".aboutHeading",
      {
        x: 60,
        opacity: 0, // Set opacity to 0 initially to animate it into view
        duration: 1.5,
      },
      {
        x: 0,
        opacity: 1, // Animate to opacity 1
        duration: 1.5,
        ease: "power2.out",
      }
    );

    tl.fromTo(
      ".wrapper",

      { opacity: 0, y: 50 }, // start state
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power3.out",
        stagger: 0.2,
      }
    );

    tl2.fromTo(
      ".techStack",
      {
        x: 60,
        opacity: 0, // Set opacity to 0 initially to animate it into view
        duration: 2,
      },
      {
        x: 0,
        opacity: 1, // Animate to opacity 1
        duration: 2,
        ease: "power2.out",
      }
    );

    tl2.from(".skill-item", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1.5,
      ease: "power3.out",
    });
  }, []);
  return (
    <div className="about lg:py-12 py-6  overflow-hidden">
      <div className="about_section">
        <div className="relative">
          <img
            src="../../../public/Images/underline.png"
            alt=""
            className="absolute -top-[2rem] w-[60%] left-[5rem] lg:w-[35%] lg:-top-[7rem] lg:left-[30rem]"
          />
        </div>
        <h1 className="aboutHeading lg:text-6xl text-center font-regular  text-4xl font-medium text-neutral-800 lg:mb-32 mb-20">
          About Me
        </h1>
        <div className="pb-12 lg:w-[90%] mx-auto">
          <p className="wrapper lg:text-[30px] text-xl px-3 text-center font-regular leading-10 lg:leading-[70px]">
            Hello! 👋{" "}
            <span className="text-red-500 font-semibold">
              I'm Akash Kumar, a passionate Front-End Developer{" "}
            </span>{" "}
            who loves bringing creative ideas to life on the web. With a solid
            foundation in HTML, CSS, and JavaScript, I specialize in building
            modern, responsive, and user-friendly web interfaces that provide an
            exceptional user experience. I have hands-on experience working with
            popular frameworks and libraries, including React JS, and I'm
            skilled in leveraging tools like{" "}
            <span className="text-red-500 font-semibold">
              Tailwind CSS, Bootstrap, Daisy UI, Shadcn, and Material UI
            </span>{" "}
            to create visually stunning and functional designs.
          </p>
        </div>
      </div>
      <div className="">
        <div className="relative"></div>
        <div className="px-2 relative">
          <div className="">
            <img
              src="../../../public/Images/underline.png"
              alt=""
              className="absolute -top-[1rem] w-[80%] left-[2rem] lg:w-[40%] lg:-top-[6rem] lg:left-[30rem]"
            />
          </div>
          <h1 className="techStack text-3xl text-neutral-800 lg:text-5xl text-center lg:px-12 lg:my-12 py-8 font-medium">
            Technology and Tools
          </h1>
          <div className="lg:py-12 grid grid-cols-2 lg:grid-cols-5">
            <div className="skill-item flex items-center my-12 space-x-2 p-4">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt=""
                className="w-[30%] lg:w-[20%]"
              />
              <p className="text-xl font-medium">HTML</p>
            </div>
            <div className="skill-item flex items-center my-12 p-4 space-x-2">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
                alt=""
                className="w-[30%] lg:w-[20%]"
              />
              <p className="text-xl font-medium">CSS</p>
            </div>
            <div className="skill-item flex items-center my-12 p-4 space-x-2">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt=""
                className="w-[30%] lg:w-[20%]"
              />
              <p className="text-xl font-medium px-1">JAVASCRIPT</p>
            </div>
            <div className="skill-item flex items-center my-12 p-4 space-x-2">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                alt=""
                className="w-[30%] lg:w-[20%]"
              />
              <p className="text-xl font-medium px-1">TYPESCRIPT</p>
            </div>
            <div className="skill-item flex items-center my-12 p-4 space-x-2">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                alt=""
                className="w-[30%] lg:w-[20%]"
              />
              <p className="text-xl font-medium">REACT JS</p>
            </div>
            <div className="skill-item flex items-center my-12 p-4 space-x-2">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                alt=""
                className="w-[30%] lg:w-[20%]"
              />
              <p className="text-xl font-medium">REDUX</p>
            </div>
            <div className="skill-item flex items-center my-12 p-4 space-x-2">
              <img
                src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                alt=""
                className="w-[30%] lg:w-[20%]"
              />
              <p className="text-xl font-medium">TAILWIND CSS</p>
            </div>
            <div className="skill-item flex items-center my-12 p-4 space-x-2">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg"
                alt=""
                className="w-[30%] lg:w-[20%]"
              />
              <p className="text-xl font-medium">BOOTSTRAP</p>
            </div>
            <div className="skill-item flex items-center my-12 p-4 space-x-2">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg"
                alt=""
                className="w-[30%] lg:w-[20%]"
              />
              <p className="text-xl font-medium">GIT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
