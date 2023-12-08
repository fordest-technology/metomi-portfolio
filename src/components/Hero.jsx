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

      <section className=" mt-32 pb-40 flex flex-row items-center gap-48 mx-auto justify-center max-w-5xl ">
        <div>
          <h4 className=" text-textClrLight dark:text-textClrDark font-light text-4xl">
            Welcome! I'm{" "}
          </h4>
          <h1 className=" text-5xl font-semibold text-textClrLight dark:text-textClrDark w-full ">
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
          <div className="flex flex-row gap-3">
            <button className="btn">Hire Me</button>
            <button className="btn2">Portfolio</button>
          </div>
        </div>
        <div className="relative z-30">
          <img src={heroImage} alt="" width={360} className="relative z-40 " />
          <div className="rounded-gradientbig top-[42px]"></div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
