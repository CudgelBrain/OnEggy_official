import React from "react";
import GetFreeProp from "../home/getFreeProp";
import Navbar from "../components/navbar";
import Section1 from "../components/mainHeadline";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";
import Section5 from "./section5";
import Headline from "../components/headline";
import Platforms from "./platforms";
import Footer from "../components/footer";

const about = () => {
  const brands = [
    "../about/amazon.png",
    "../about/dribble.png",
    "../about/hubspot.png",
    "../about/notion.png",
    "../about/netflix.png",
    "../about/zoom.png",
  ];

  const alternative = [
    "Amazon",
    "Dribble",
    "Hubspot",
    "Notion",
    "Netflix",
    "Zoom",
  ];

  const compoArray = [
    {
      head: "Customer Satisfacton",
      para: "Customer Satisfaction first. OpenSource Dev & DevOps. Elevate website with top-notch designs, UI, and growth.",
      image: "../about/thumb.png",
      alt: "Thumb",
    },
    {
      head: "Tech Innovation",
      para: "Tech Innovation drives us. OpenSource Dev & DevOps. Elevate website with cutting-edge designs, UI, and growth.",
      image: "../about/bulb.png",
      alt: "Bulb",
    },
    {
      head: "Honesty Culture",
      para: "Integrity is our pillar, and an honest culture fosters trust with clients and employees.",
      image: "../about/handshake.png",
      alt: "HandShake",
    },
    {
      head: "No-Compromise Quality",
      para: "We deliver reliable IT solutions, exceeding expectations with excellence in every project we undertake.",
      image: "../about/certify.png",
      alt: "Certify",
    },
  ];

  const title = "Our core values";
  const desc =
    "We investigate the basics of innovation while retaining the synergy that channels implementation.";
  const head = "Tested & Derived Solutions";
  const sentence =
    " This is the stage at which your solution is introduced on the real market with real clients.";
  const showButton = true
  const buttonPlaceholder = "Book a consultation"

  return (
    <div className="bg-cover bg-right sm:min-h-screen container mx-auto px-6 sm:px-20 absolute">
      <Navbar />
      <Section1 head={head} sentence={sentence} showButton={showButton} buttonPlaceholder={buttonPlaceholder}/>
      <Section2 />
      <Section3 />
      <Section4 />
      <GetFreeProp />
      <Platforms brands={brands} alternative={alternative} />
      <Headline title={title} desc={desc} />
      <div className="flex flex-wrap sm:flex-row justify-center flex-col mt-10 overflow-hidden">
        {compoArray.map((head, index) => ( 
          <Section5 key={index} head={head} index={index} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default about;
