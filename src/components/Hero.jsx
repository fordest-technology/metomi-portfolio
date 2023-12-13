import React from "react";
import Nav from "./Nav";
import {IoMdCall, IoMdMail, IoMdLocate} from "react-icons/io";


import heroImage from "../Images/heroSectionInage.png";

// const CONTACY_INFO [
//   {
//     location: "Ekiti Sytate",

//   }
// ]

const Hero = () => {
  return (
    <div className="">
      <Nav />
      <section className=" md:mt-32 md:pb-40 flex flex-col md:flex-row items-center lg:gap-32 md:gap-20 mx-auto justify-center gap-24 mt-24 3xl:max-w-6xl ">
          <div className="roundeds  w-20 opacity-50"></div>
        <div className=" ">
          <h4 className=" text-textClrLight dark:text-textClrDark font-light lg:text-4xl md:text-2xl sm:text-xl text-lg">
            Welcome! I'm{" "}
          </h4>
          <h1 className=" font-semibold text-textClrLight dark:text-textClrDark lg:text-5xl md:text-3xl text-2xl">
            Metomi Oyetunde
          </h1>
          <p className=" text-primaryClr font-medium">Product Designer</p>
          <div className="flex gap-5">
            <IoMdMail />
            <p>metomioyetunde@gmail.com</p>
          </div>
          <div className="flex gap-5">
            <IoMdCall />
            <p>+234 706 879 1122</p>
          </div>
          <div className="flex gap-5">
            <IoMdLocate />
            <p>Ekiti State, Nigeria.</p>
          </div>

          <div>7icons</div>
          <div className="flex flex-row gap-3  ">
            <button className="btn whitespace-nowrap max-[450px]:w-10 max-[346px]:w-8 max-[328px]:w-4 max-[900px]:w-32">Hire Me</button>
            <button className="btn2  whitespace-nowrap max-[450px]:w-10 max-[346px]:w-8 max-[328px]:w-4 max-[900px]:w-32">Portfolio</button>
          </div>
        </div>
        <div className="relative z-30">
          <img src={heroImage} alt=""  className="relative z-40 w-60 md:w-72 xl:w-80" />
          <div className="rounded-gradientbig top-[42px]"></div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
