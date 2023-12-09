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

const App = () => {
  return (
    <div className=' bg-bgLight dark:bg-bgDark text-textClrLight dark:text-textClrDark px-32'>
      <Hero />
      <About />
      <WhatIDo />
      <MyPortfolio />
      <ClientReview />
      <ReadyToWork />
      <ContactMe />
      <Footer />
    </div>
  )
}
export default App;