import React from "react";
import GetFreeProp from "../home/getFreeProp";
import Navbar from "../components/navbar";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";

const about = () => {
  return (
    <div className="bg-cover bg-right sm:min-h-screen container mx-auto px-6 sm:px-20 absolute">
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <GetFreeProp/>
    </div>
  );
};

export default about;
