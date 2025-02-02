import React from 'react'
import "../Style/Contact.css";
import footer_sec from '../../public/Images/portfolio/footer_sec.png'
import {
  FaRegEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
const Contact = () => {
  return (
    <div className="my-12 mx-auto w-[90%]">
      <div className="conatct_heading  space-y-8 p-4">
        <h1 className="text-6xl font-normal text-neutral-700 lg:text-8xl">
          Don't be a stranger
        </h1>
        <p className="text-2xl lg:text-4xl text-neutral-700">
          Get in touch and let's make something legendary together!
        </p>
      </div>
      <hr className="w-[100%] border-2 border-neutral-800 my-6" />
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="social_link space-y-8 ">
          <h1 className=" text-neutral-700 text-5xl font-normal lg:text-6xl ">
            Let's talk
          </h1>
          <div className="flex items-center space-x-4">
            <p className="text-3xl text-red-500">
              <FaRegEnvelope />
            </p>
            <p className="text-xl font-medium text-neutral-700 lg:text-2xl">
              {" "}
              akashkumar26858@gmail.com
            </p>
          </div>
          <div className="space-y-8">
            <h1 className="text-4xl font-normal lg:text-6xl text-neutral-700 ">
              Find me on
            </h1>
            <div className="flex items-center space-x-8">
              <a href='https://github.com/mandal-akash' target='blank' className="text-4xl text-neutral-700">
                <FaGithub />
              </a>
              <a href='https://www.linkedin.com/in/akash-kumar-mandal-20654921b/' target='blank' className="text-4xl text-neutral-700">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="">
          <img src={footer_sec} alt="footer_sec" className=''/>
        </div>
      </div>
      </div>
  )
}

export default Contact