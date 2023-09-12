import Image from "next/image";
import React, { useState } from "react";
import Projectlogos from "./projectlogos";
import Awards from "./awards";
import TechCompo from "./techCompo";
import GetFreeProp from "./getFreeProp";
import Headline from "../components/headline";
import Marksheet from "./marksheet";
import Testimonials from "./testimonials";
import ContactUs from "./contactUs";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import ConsultationButton from "../components/consultButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Home = (skill) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const comments = [
    "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
  ];

  const skillsArray = [
    {
      title: "Website Development",
      imageSrc: "/home/landingComponent/1.png",
      icon: "faArrowRight",
      learnMoreLink: "#",
    },
    {
      title: "Application Development",
      imageSrc: "/home/landingComponent/2.png",
      icon: "faArrowRight",
      learnMoreLink: "#",
    },
    {
      title: "UI/UX Designing",
      imageSrc: "/home/landingComponent/3.png",
      icon: "faArrowRight",
      learnMoreLink: "#",
    },
    {
      title: "DevOps Services",
      imageSrc: "/home/landingComponent/4.png",
      icon: "faArrowRight",
      learnMoreLink: "#",
    },
    {
      title: "QA & Testing",
      imageSrc: "/home/landingComponent/5.png",
      icon: "faArrowRight",
      learnMoreLink: "#",
    },
    {
      title: "Cloud Manage Services",
      imageSrc: "/home/landingComponent/6.png",
      icon: "faArrowRight",
      learnMoreLink: "#",
    },
  ];

  const mapIcons = {
    faArrowRight,
  };

  const title = "Services";
  const desc =
    "At our firm, we provide a variety of services to assist businesses in growing and succeeding online. These services include";
  const buttonPlaceholder = "Book a Consultataion"

  return (
    <div className="landingPage1 max-w-7xl mx-auto">
      <Navbar />
      <div className="mt-16 sm:max-h-screen justify-between">
        <div className="flex">
          {/*WRAPPER*/}
          <div style={{ width: "589px" }}>
            {/*HEADINGS*/}
            <h1 className="text-6xl font-semibold theme-heading">
              Transforming Technology with a Human Touch
            </h1>
            <p className="mt-12 text-justify font-spaceGrotesk sm:pr-48 px-0">
              With OnEggy's IT services, you can leave your mark in the digital
              world. Transform your company with our cutting-edge and effective
              digital solutions to set you on the way to success.
            </p>
            <ConsultationButton buttonPlaceholder={buttonPlaceholder}/>
          </div>
          <div className="m-auto">
            {/*IMAGE AI*/}
            <Image src="/ai.png" alt="aiImage" width={500} height={478} />
          </div>
        </div>

        <Projectlogos />
        <Awards />
        <Headline title={title} desc={desc} />
        <div className="flex flex-wrap sm:flex-row justify-center flex-col mt-10 overflow-hidden">
          {skillsArray.map((skill, index) => (
            <TechCompo key={index} skill={skill} index={index} />
          ))}
        </div>

        <div className="flex justify-end overflow-hidden">
          <div className="mr-5 mt-5 rounded-full p-1 bg-l_black transform -rotate-[30deg] text-[4px] cursor-pointer">
            <span className="text-white">
              <FontAwesomeIcon icon={faArrowRight} size="4x" />
            </span>
          </div>
          <div className="mr-8 mt-5 cursor-pointer">
            <a href={skill.learnMoreLink}>Learn More</a>
          </div>
        </div>
        <GetFreeProp />
        <Marksheet />
        <Testimonials comments={...comments} />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
