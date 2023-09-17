import React from "react";
import Navbar from "../components/navbar";
import MainHeadline from "../components/mainHeadline";
import Footer from "../components/footer";
import GetFreeProp from "../home/getFreeProp";
import Compo from "./compo";

const blogOne = () => {
  const head = "We Serve Trending Brews!";
  const sentence =
    "Create your unique footprint in the digital world with OnEggy’s IT services. Transform your business with our cutting-edge and effective digital solutions to pave your path to success..";
  const showButton = false;

  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <div className="w-[53rem] mx-auto">
        <MainHeadline head={head} sentence={sentence} showButton={showButton} />
      </div>
      <GetFreeProp/>
      <Compo />
      <Footer />
    </div>
  );
};

export default blogOne;
