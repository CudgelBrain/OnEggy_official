import React from "react";
import Navbar from "../components/navbar";
import ContactUs from "../home/contactUs";
import Footer from "../components/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const section1 = () => {
  const profile = [
    {
      name: "Aakash Sharma",
      position: "CEO and Founder",
      image: "/contact/picture.png",
      alt: "Profile Image",
      sns: faLinkedin,
    },
    {
      name: "Akanshu Sharma",
      position: "Cloud Expert",
      image: "/contact/picture.png",
      alt: "Profile Image",
      sns: faLinkedin,
    },
  ];
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <h2 className="text-5xl text-center font-semibold mt-10">Let's Talk</h2>
      <div className="flex mt-10 justify-center">
        <div className="flex">
          {profile.map((data) => (
            <div className=" border border-b-[5px] border-l_black rounded-[3rem] p-10 flex mx-6 mt-4">
              <div>
                <img src={data.image} alt={data.alt} width={105} height={102}/>
              </div>{" "}
              <div className="mx-5 items-end mt-12">
                {" "}
                <h3 className="font-semibold text-lg">{data.name}</h3>
                <p>{data.position}</p>
              </div>
              <div className="bg-l_black p-1 pr-2 pl-2 rounded-full text-blue m-auto items-start mb-16">
                <FontAwesomeIcon icon={data.sns} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <ContactUs />
      <Footer />
    </div>
  );
};

export default section1;
