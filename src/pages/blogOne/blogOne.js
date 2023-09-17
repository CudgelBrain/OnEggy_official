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
  const arr = [
    {
      head: "Business",
      title: "Top 6 free website mockuptools 2022",
      content:
        "We are a team of Artists, Innovators & Strategists who left their ordinary life to invent and reinvent the common. Our Passion for technologies changes problems into opportunities.Our heart is full of creative juice that shapes ideas, Our mind is on a quest to transform the ordinary into the extraordinary. This is our code that energizes deep-rooted human desires and makes people pursue their dreams. We took an oath to stick to the Code and call ourselves Code Theorem.",
    },
    {
      head: "Business",
      title: "Top 6 free website mockuptools 2022",
      content:
        "We are a team of Artists, Innovators & Strategists who left their ordinary life to invent and reinvent the common. Our Passion for technologies changes problems into opportunities.Our heart is full of creative juice that shapes ideas, Our mind is on a quest to transform the ordinary into the extraordinary. This is our code that energizes deep-rooted human desires and makes people pursue their dreams. We took an oath to stick to the Code and call ourselves Code Theorem.",
    },
    {
      head: "Business",
      title: "Top 6 free website mockuptools 2022",
      content:
        "We are a team of Artists, Innovators & Strategists who left their ordinary life to invent and reinvent the common. Our Passion for technologies changes problems into opportunities.Our heart is full of creative juice that shapes ideas, Our mind is on a quest to transform the ordinary into the extraordinary. This is our code that energizes deep-rooted human desires and makes people pursue their dreams. We took an oath to stick to the Code and call ourselves Code Theorem.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <div className="w-[53rem] mx-auto">
        <MainHeadline head={head} sentence={sentence} showButton={showButton} />
      </div>
      <div className="flex">
        <div className="w-3/4">
          {arr.map((props, index) => (
            <Compo key={index} {...props} />
          ))}
        </div>
        <div className="text-d_blue mt-10">
          <h2 className="text-3xl font-bold">Categories</h2>
          <ul className="font-semibold text-3xl mt-4 flex-col flex-wrap">
            <li className="border rounded-xl px-6 py-6 m-auto my-4 hover:bg-l_blue cursor-pointer"><img src="/blog/1.png" alt="Seeing Something???" width={38} className="float-left mr-4"/>Web Design</li>
            <li className="border rounded-xl px-6 py-6 m-auto my-4 hover:bg-l_blue cursor-pointer"><img src="/blog/2.png" alt="Seeing Something???" width={38} className="float-left mr-4"/>Development</li>
            <li className="border rounded-xl px-6 py-6 m-auto my-4 hover:bg-l_blue cursor-pointer"><img src="/blog/3.png" alt="Seeing Something???" width={38} className="float-left mr-4"/>UI/UX</li>
            <li className="border rounded-xl px-6 py-6 m-auto my-4 hover:bg-l_blue cursor-pointer"><img src="/blog/4.png" alt="Seeing Something???" width={38} className="float-left mr-4"/>Branding</li>
          </ul>
          <h3 className="text-3xl font-bold">All Tags</h3>
          <ul>
            <li className="border rounded-xl">Business</li>
            <li className="border rounded-xl">Experience</li>
            <li className="border rounded-xl">Screen</li>
            <li className="border rounded-xl">Technology</li>
            <li className="border rounded-xl">Marketing</li>
            <li className="border rounded-xl">Life</li>
          </ul>
        </div>
      </div>
      <GetFreeProp />
      <Footer />
    </div>
  );
};

export default blogOne;
