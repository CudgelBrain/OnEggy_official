import Image from "next/image";
import React from "react";
import Projectlogos from "./projectlogos";
import MarginBotton from "./marginBotton";
import TechCompo from "./techCompo";
import GetFreeProp from "./getFreeProp";

const Home = () => {
  const skillsArray = [
    {
      title: "Website Development",
      imageSrc: "/landingComponent/1.png",
      icon: "faArrowRight",
      learnMoreLink: "#",
    },
    {
      title: "Application Development",
      imageSrc: "/landingComponent/2.png",
      icon: "faArrowRight",
      learnMoreLink: "#",
    },
    {
      title: "UI/UX Designing",
      imageSrc: "/landingComponent/3.png",
      icon: "faArrowRight",
      learnMoreLink: "#",
    },
    {
      title: "DevOps Services",
      imageSrc: "/landingComponent/4.png",
      icon: "faArrowRight",
      learnMoreLink: "#",
    },
    {
      title: "QA and Testing",
      imageSrc: "/landingComponent/5.png",
      icon: "faArrowRight",
      learnMoreLink: "#",
    },
    {
      title: "Cloud Manage Services",
      imageSrc: "/landingComponent/6.png",
      icon: "faArrowRight",
      learnMoreLink: "#",
    },
  ];

  return (
    <div className="landingPage1">
      <nav className="py-4 flex justify-between mx-auto max-w-7xl">
        <Image
          src="/logo.png"
          alt="Logo"
          width="165"
          height="55"
          className="logo_img"
        />
        <ul className="flex justify-end py-4 align-center">
          <li className="mx-5 cursor-pointer pt-2">About us</li>
          <li className="mx-5 cursor-pointer pt-2">Service</li>
          <li className="mx-5 cursor-pointer pt-2">Team</li>
          <li className="mx-5 cursor-pointer pt-2">Portfolio</li>
          <li className="mx-5 cursor-pointer pt-2">Blog</li>

          <button className="text-black py-2 px-6 rounded-md border border-black">
            Request a Quote
          </button>
        </ul>
      </nav>
      <div className="bg-cover bg-right min-h-screen container mx-auto px-20 absolute">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
        <main>
          <div className="grid grid-cols-2 gap-2">
            <div className="p-4 pt-12">
              <h1 className="text-6xl font-semibold">
                Transforming Technology with a Human Touch
              </h1>
              <p className="pt-10 w-7/12">
                With OnEggy's IT services, you can leave your mark in the
                digital world. Transform your company with our cutting-edge and
                effective digital solutions to set you on the way to success.
              </p>
              <div className="buttons">
                <button className="bg-l_black text-white hover:bg-white border hover:border-l_black hover:text-l_black px-6 py-4 mt-8 rounded-xl">
                  Book a Consultation
                </button>
              </div>
            </div>
            <div className="m-auto">
              <Image src="/ai.png" alt="aiImage" width={450} height={450} />
            </div>
          </div>
        </main>
        <Projectlogos />
        <div className="flex flex-wrap flex-row justify-center mt-10">
          {skillsArray.map((skill, index) => (
            <TechCompo key={index} skill={skill} />
          ))}
        </div>

        <GetFreeProp />
        <MarginBotton />
      </div>
    </div>
  );
};

export default Home;
