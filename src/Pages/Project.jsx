import React, { useEffect } from "react";
import { RiShareCircleLine } from "react-icons/ri";
import "../Style/Project.css";
import gsap from "gsap";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
const Project = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const tl = gsap.timeline({});
    // Select all elements with class "box"
    const boxes = document.querySelectorAll(".box");

    boxes.forEach((box) => {
      tl.from(box, {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: box,
          start: "top bottom", // Trigger when the top of the box reaches the bottom of the viewport
          end: "top top", // End when the top of the box reaches the top of the viewport
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <div className="project_section">
      <div className="relative">
        <img
          src="../../../public/Images/pop.png"
          alt=""
          className="absolute lg:w-[20%] lg:-top-[8rem] -top-[5rem] right-[1rem] w-[50%]"
        />
      </div>
      <div className="project_section  bg-rose-500 py-12">
        <h1 className="lg:text-6xl lg:px-20 lg:py-12 text-white text-4xl px-6">
          PROJECTS
        </h1>
        <div className="project">
          <div className="box w-[95%] mx-auto  flex lg:flex-row flex-col my-20">
            <div className="">
              <img
                src="../../../public/Images/Project/bookmyshow.png"
                alt=""
                className="lg:w-[90%] p-3"
              />
            </div>
            <div className="lg:w-[80%]">
              <div className="flex items-center justify-between">
                <h1 className="text-white px-2 text-4xl font-bold">
                  BookmyShow-Clone
                </h1>
                <a
                  href="https://book-my-show-seven-sandy.vercel.app/"
                  target="blank"
                  className="share_link rounded-full text-4xl lg:text-5xl p-2 text-white mr-3 lg:mr-6 my-4 hover:cursor-pointer"
                >
                  <RiShareCircleLine />
                </a>
              </div>
              <div className="my-11">
                <p className="lg:text-xl px-2 text-[#f3f8f8]">
                  The BookMyShow clone is a web application designed to
                  replicate the key features of the popular ticket-booking
                  platform. Built using React JS, Tailwind CSS, React router ,
                  React Icons, and a Movies API like OMDb API this project aims
                  to provide users with a responsive and seamless movie browsing
                  and ticket-booking experience.
                </p>
                <div className="btn_icons grid grid-cols-2 lg:grid-cols-4 gap-2 text-xl px-2 text-center my-12">
                  <p className=" text-white lg:py-4 p-4 ">React Js</p>
                  <p className=" text-white lg:py-4 p-4">Tailwind Css</p>
                  <p className=" text-white lg:py-4 p-4  ">React Icons</p>
                  <p className=" text-white lg:py-4 p-4 ">Javascript</p>
                </div>
              </div>
            </div>
          </div>
          <div className="box w-[95%] mx-auto  flex lg:flex-row flex-col my-20">
            <div className="">
              <img
                src="../../../public/Images/Project/pokemon_card.png"
                alt=""
                className="lg:w-[90%] p-3"
              />
            </div>
            <div className="lg:w-[80%]">
              <div className="flex items-center justify-between">
                <h1 className="text-white px-2 text-4xl font-bold">
                  Pokemon Card
                </h1>
                <a
                  href="https://mypokimon.vercel.app/"
                  target="blank"
                  className="share_link rounded-full text-4xl lg:text-5xl p-2 text-white mr-3 lg:mr-6 my-4 hover:cursor-pointer"
                >
                  <RiShareCircleLine />
                </a>
              </div>
              <div className="my-11">
                <p className="lg:text-xl px-2 text-[#f3f8f8]">
                  A modern and interactive Pokémon Explorer web application
                  built using React.js, Material UI, Tailwind CSS, and an
                  external Pokémon API (e.g., PokéAPI). This application allows
                  users to search, filter, and view detailed information about
                  their favorite Pokémon in a visually appealing and responsive
                  interface.
                </p>
                <div className="btn_icons grid grid-cols-2 lg:grid-cols-4 gap-2 text-xl px-2 text-center my-12">
                  <p className="p-3 text-white ">React Js</p>
                  <p className="p-3 text-white ">Tailwind Css</p>
                  <p className="p-3 text-white ">Material Ui</p>
                  <p className="p-3 text-white ">Javascript</p>
                </div>
              </div>
            </div>
          </div>
          <div className="box w-[95%] mx-auto  flex lg:flex-row flex-col my-20">
            <div className="">
              <img
                src="../../../public/Images/Project/myMart.png"
                alt=""
                className="lg:w-[90%] p-3"
              />
            </div>
            <div className="lg:w-[80%]">
              <div className="flex items-center justify-between">
                <h1 className="text-white px-2 text-4xl font-bold">myMart</h1>
                <a
                  href="https://my-mart-kappa.vercel.app/"
                  target="blank"
                  className="share_link rounded-full text-4xl lg:text-5xl p-2 text-white mr-3 lg:mr-6 my-4 hover:cursor-pointer"
                >
                  <RiShareCircleLine />
                </a>
              </div>
              <div className="my-11">
                <p className="lg:text-xl px-2 text-[#f3f8f8]">
                  The goal of this project is to build a fully functional and
                  responsive e-commerce website using modern web development
                  technologies. The website will allow users to browse products,
                  view details, add items to the cart, and proceed to checkout.
                  It will also feature dynamic data fetching using APIs and
                  maintain a seamless user experience with state management.
                </p>
                <div className="btn_icons grid grid-cols-2 lg:grid-cols-4 gap-2 text-xl px-2 text-center my-12">
                  <p className="p-3 text-white">React Js</p>
                  <p className="p-3 text-white">Tailwind Css</p>
                  <p className="p-3 text-white">React Icons</p>
                  <p className="p-3 text-white">Redux</p>
                </div>
              </div>
            </div>
          </div>
          <div className="box w-[95%] mx-auto  flex lg:flex-row flex-col my-10">
            <div className="">
              <img
                src="../../../public/Images/Project/workspace.png"
                alt=""
                className="lg:w-[90%] p-3"
              />
            </div>
            <div className="lg:w-[80%]">
              <div className="flex items-center justify-between">
                <h1 className="text-white px-2 text-4xl font-bold">
                  WorkSpace
                </h1>
                <span className="share_link rounded-full text-4xl lg:text-5xl p-2 text-white mr-3 lg:mr-6 my-4 hover:cursor-pointer">
                  <RiShareCircleLine />
                </span>
              </div>
              <div className="my-11">
                <p className="lg:text-xl px-2 text-[#f3f8f8]">
                  Workspace is a Notion-inspired website designed to enhance
                  productivity and organization. The project focuses entirely on
                  the frontend, delivering a sleek and intuitive user interface
                  for managing tasks, notes, and collaborative workflows.
                </p>
                <div className="btn_icons grid grid-cols-2 lg:grid-cols-4 gap-2 text-xl px-2 text-center my-12">
                  <p className="p-3 text-white">React Js</p>
                  <p className="p-3 text-white">Tailwind Css</p>
                  <p className="p-3 text-white">React Icons</p>
                  <p className="p-3 text-white">Gsap</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <img
          src="../../../public/Images/vector.png"
          alt=""
          className="w-[100%]"
        />
      </div>
    </div>
  );
};

export default Project;
