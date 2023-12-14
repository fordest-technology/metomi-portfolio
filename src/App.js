// import React, { useEffect, useState } from 'react';
// import { useMediaQuery } from '@react-hook/media-query';

import About from "./components/About";
import ClientReview from "./components/ClientReview";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MyPortfolio from "./components/MyPortfolio";
import ReadyToWork from "./components/ReadyToWork";
import WhatIDo from "./components/WhatIDo";
import Nav from "./components/Nav";

const App = () => {
  return (

    <div className=' bg-bgLight dark:bg-bgDark overflow-hidden'>
          <Nav />
           <div className=" text-textClrLight dark:text-textClrDark justify-center mx-auto w-full overflow-hidden">
        <Hero />
        <About />
        <WhatIDo />
        <MyPortfolio />
        <ClientReview />
        <ReadyToWork />
        <ContactMe />
        <Footer />
           </div>

    </div>

  );
};

export default App;
