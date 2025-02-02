import React, { useEffect } from "react";
import "../Style/Home.css";
import About from "./About";
import Project from "../Pages/Project";
import Contact from "../Pages/Contact"
import yellow_circle from "../../public/Images/portfolio/yellow_circle.png"
import orange_circle from "../../public/Images/portfolio/orange_circle.png";
import cone from "../../public/Images/portfolio/cone.png"
import hand_icon from "../../public/Images/portfolio/hand_icon.png"
import curve_line from "../../public/Images/portfolio/curve_line.png"
import { gsap } from "gsap";

const Home = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".yellow-circle",
      { opacity: 0, x: -200, y: 100 },
      { opacity: 1, x: 0, y: 0, duration: 1.5, ease: "power3.out" }
    );

    tl.fromTo(
      ".orange-circle",
      { opacity: 0, x: 200, y: 100 },
      { opacity: 1, x: 0, y: 0, duration: 1.5, ease: "power3.out" },
      "-=1.2"
    );

    tl.fromTo(
      ".cone",
      { opacity: 0, y: 300 },
      { opacity: 1, y: 0, duration: 1.5, ease: "bounce.out" },
      "-=1"
    );

    tl.fromTo(
      ".text-greeting",
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=1"
    );
    tl.fromTo(
      ".name-highlight",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" },
      "-=0.8"
    );

    tl.fromTo(
      ".job-title",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.6"
    );

    tl.fromTo(
      ".curve-line",
      { opacity: 0, x: -200 },
      { opacity: 1, x: 0, duration: 2, ease: "power3.out" },
      "-=0.5"
    );
  }, []);
  return (
    <div className="home">
      <div>
        <div className="heading py-24 lg:py-14 text-neutral-800 pl-2 space-y-8">
          <div className="relative">
            <img
              src={yellow_circle}
              alt="yellow_circle"
              className="yellow-circle w-[40%] -left-5 lg:w-[15%] absolute lg:left-80 lg:top-10 -z-50"
            />
            <img
              src={orange_circle}
              alt="orange_circle"
              className="orange-circle w-[40%] left-4 lg:w-[15%] absolute lg:left-[25rem] lg:top-10 -z-50"
            />
            <img
              src={cone}
              alt="cone"
              className="cone lg:w-[30%] w-[75%] absolute -left-[4rem]  top-[20rem] -z-50"
            />
          </div>
          <div className="">
            <div className="flex items-center lg:justify-center justify-end space-x-3 relative -z-50">
              <p className="text-greeting lg:text-7xl text-4xl font-medium text-right lg:pt-12 lg:ml-48">
                Hii, there
              </p>
              <img
                src={hand_icon}
                alt="hand_icon"
                className="lg:w-[7%] w-[17%] lg:pt-3"
              />
            </div>
            <div className="font-medium text-center text-[40px] lg:text-8xl lg:py-4">
              <p className="py-8">
                I'm
                <span className="name-highlight bg-red-400 text-4xl lg:text-7xl text-white px-6 rounded-full mx-1 lg:mx-6">
                  Akash Kumar
                </span>
                a
              </p>
              <p className="job-title lg:py-4 relative -z-[100]">Frontend Developer</p>
            </div>
            <div className="relative">
              <img
                src={curve_line}
                alt="curve_line"
                className="curve-line absolute lg:left-[23rem]  lg:w-[55%] -top-[7rem] lg:-top-[15rem] right-3 w-[95%] -z-50"
              />
            </div>
          </div>
        </div>
        <div className="mt-52">
          <About />
          <Project />
          <Contact/>
        </div>
      </div>
    </div>
  );
};

export default Home;
