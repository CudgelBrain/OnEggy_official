import React from "react";
import Navbar from "../components/navbar";
import GetFreeProp from "../home/getFreeProp";
import Section1 from "../components/mainHeadline";
import Footer from "../components/footer";

const client = () => {
  const projects1 = [
    {
      image: "",
    },
    {
      image: "",
    },
    {
      image: "",
    },
  ];
  const projects2 = [
    {
      image: "",
    },
    {
      image: "",
    },
    {
      image: "",
    },
  ];

  const showButton = true
  const head = "Creating Disruptive Products from Dreams";
  const sentence =
    " Oneggy thrives on turning dreams into disruptive reality as she embarks on an innovation journey. We challenge the norm with audacious creativity, creating extraordinary products that push the boundaries of what's possible, igniting transformative success for our clients and reshaping industries.";
  const buttonPlaceholder = "Book a consultation"
    return (
    <div className=" max-w-7xl mx-auto">
      <Navbar />
      <Section1 head={head} sentence={sentence} showButton={showButton} buttonPlaceholder={buttonPlaceholder}/>
      <GetFreeProp />
      <Footer />
    </div>
  );
};

export default client;
