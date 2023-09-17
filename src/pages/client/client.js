import React from "react";
import Navbar from "../components/navbar";
import GetFreeProp from "../home/getFreeProp";
import Section1 from "../components/mainHeadline";
import Footer from "../components/footer";

const client = () => {
  const projects1 = [
    {
      image: "/client/1.png",
    },
    {
      image: "/client/2.png",
    },
    {
      image: "/client/3.png",
    },
  ];

  const projects2 = [
    {
      image: "/client/4.png",
    },
    {
      image: "/client/5.png",
    },
  ];

  const projects3 = [
    {
      image: "/client/6.png",
    },
    {
      image: "/client/7.png",
    },
    {
      image: "/client/8.png",
    },
  ];

  const showButton = true;
  const head = "Creating Disruptive Products from Dreams";
  const sentence =
    " Oneggy thrives on turning dreams into disruptive reality as she embarks on an innovation journey. We challenge the norm with audacious creativity, creating extraordinary products that push the boundaries of what's possible, igniting transformative success for our clients and reshaping industries.";
  const buttonPlaceholder = "Book a consultation";
  return (
    <div className=" max-w-7xl mx-auto">
      <Navbar />
      <Section1
        head={head}
        sentence={sentence}
        showButton={showButton}
        buttonPlaceholder={buttonPlaceholder}
      />
      <div className="flex mt-10">
        {projects1.map((data) => (
          <div className="h-[378px] w-[356px] mx-10">
            <img src={data.image} alt="Project Image 1" />
          </div>
        ))}
      </div>
      <div className="flex mt-10">
        {projects2.map((data) => (
          <div className="h-[378px] w-[595px] mx-10">
            <img src={data.image} alt="Project Image 1" />
          </div>
        ))}
      </div>
      <GetFreeProp />
      <div className="flex mt-10">
        {projects3.map((data) => (
          <div className="h-[378px] w-[356px] mx-10">
            <img src={data.image} alt="Project Image 1" />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default client;
