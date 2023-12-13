import React, { useState } from "react";
import '../App.css'
import { PiBowlFood ,PiRadicalBold,PiRepeatBold} from 'react-icons/pi'
import '../App.css'
import { FaCode  } from "react-icons/fa";
import {GiNightSleep} from 'react-icons/gi'
const About = () => {
  const [isShaking, setIsShaking] = useState(false);

  const handleMouseEnter = () => {
    setIsShaking(true);
  };

  const handleMouseLeave = () => {
    setIsShaking(false);
  };
  return (
    <div className="h-full w-full  text-white flex flex-col justify-center items-start p-[10px] lg:p-[50px]">
      <div className="h-[90%] w-full p-[20px] lg:p-[50px] bg-black rounded-lg bg-opacity-50 ">
        <h1 className="absolute lg:top-44 right-10 lg:static text-[20px] lg:text-[50px] font ">SARTHAK SANJAY</h1>
        <img
        className={`h-1/6 lg:h-1/3 absolute top-38  lg:top-28 lg:right-20 rounded-[20px] ${
          isShaking ? 'animate-shake' : '' // Apply the animation class conditionally
        }`}
        src="https://avatars.githubusercontent.com/u/107864062?s=400&u=318c6449cc868deebc86c80cd2d091e165408723&v=4"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
        <h2 className="flex items-center text-[15px] lg:text-[30px] relative top-14 lg:top-10 lg:static lg:bottom-6 ml-[140px] lg:ml-[100px]">
          I'm a{" "}
          <span className="text-[20px] lg:text-[40px] text-orange-600">
          &nbsp;
            Fullstack Developer
          </span>
        </h2>
        <p className="w-full lg:w-3/5 text-justify relative top-28 lg:top-10">
          <span className="text-lime-500 text-[20px]">Full-stack developer</span> and
          <span className="text-blue-400 text-[20px]"> open-source contributor </span>
          passionate about crafting innovative solutions . Proficient in 
          <span className="text-red-500 text-[20px]"> HTML, CSS, JavaScript, React.js, Node.js, MongoDB , Express.js&nbsp;
          </span>
           . Committed to <span className="text-orange-500 text-[20px]"> clean code </span>and 
          <span className="text-yellow-300 text-[20px]"> impactful projects</span>. Explore
          my portfolio for user-centric applications and open-source
          contributions , and let's collaborate for a tech-driven future.
        </p>
        <div className="h-1/3 w-full flex justify-center items-center gap-8 text-[40px] lg:text-[80px]  text-white relative top-32">
        <span className="hover:text-green-500">

        <PiBowlFood />
        </span>
        <span className="hover:text-red-500">

        <FaCode />
        </span>
        <span className="hover:text-blue-500">

        <GiNightSleep />
        </span>
        <span className="hover:text-yellow-500">

        <PiRepeatBold />
        </span>
        </div>
      </div>

    </div>
  );
};

export default About;
