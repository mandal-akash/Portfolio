import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Hamburger from "hamburger-react";
import "../Style/Navbar.css";
import header_logo from "../../public/Images/portfolio/navbar_logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuTimeline = useRef(null);

  useEffect(() => {
    menuTimeline.current = gsap.timeline({ paused: true });
    menuTimeline.current.fromTo(
      ".navbar_menu",
      { x: 0, opacity: 0, scaleX: 0 },
      { opacity: 1, scaleX: 1, transformOrigin: "right center" }
    );
    menuTimeline.current.fromTo(
      ".menuBox li",
      { opacity: 0, y: 50 }, // Start below with zero opacity
      { opacity: 1, y: 0, stagger: 0.2, delay: 0.5, duration: 0.8, ease: "power2.out" }
    );
  }, []);

  useEffect(() => {
    if (isOpen) {
      menuTimeline.current.play();
      document.body.style.overflow = 'hidden';
    } else {
      menuTimeline.current.reverse();
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div>
      <div className="flex justify-between items-center p-3">
        <div className="navbar_logo lg:px-12">
          <img src={header_logo} alt="" className="w-[35%]"/>
        </div>
        <div className="hamburger_menu lg:px-6 z-50">
          <button
            onClick={toggleMenu}
            className="hover:bg-neutral-700 hover:text-white rounded-full p-1 transition-all duration-300 ease-in-out z-[100] transform hover:scale-105"
          >
            <Hamburger />
          </button>
        </div>
      </div>
      <div className="realtive">
        <div className="navbar_menu bg-[#00000017] fixed w-[100%] h-[100vh] top-0  z-10">
          <nav className="menuBox absolute bg-neutral-700 w-[100%] h-[100vh] right-0 z-[100] shadow-xl px-4 lg:py-8 py-12">
            <ul className="text-neutral-700 menuList text-center lg:space-y-20 space-y-16">
              <li className="menuList lg:text-[80px] text-[65px] text-white">HOME</li>
              <li className="lg:text-[80px] text-[65px] text-white">PROJECT</li>
              <li className="lg:text-[80px] text-[65px] text-white">ABOUT</li>
              <li className="lg:text-[80px] text-[65px] text-white">CONTACT</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
