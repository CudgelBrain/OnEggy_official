import React from "react";
import Navbar from "../components/navbar";
import Section1 from "./section1";

const about = () => {
  return (
    <div className="bg-cover bg-right sm:min-h-screen container mx-auto px-6 sm:px-20 absolute">
      <Navbar />
      <Section1 />
    </div>
  );
};

export default about;
