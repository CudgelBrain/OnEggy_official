import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="landingPage">
      <div className="relative">
        <img
          src="/Rectangle.png"
          alt="Image 1"
          className="absolute top-0 right-0 z-0 opacity-20"
        />
        <img
          src="/mask.png"
          alt="Image 2"
          className="absolute top-0 right-0 z-1 opacity-50"
        />
      </div>
      <div
        className="bg-cover bg-right min-h-screen container mx-auto px-20 absolute"
        // style={{ backgroundImage: "url('/mask.png')" }}
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <nav className="py-4 flex">
            <Image
              src="/logo.png"
              alt="Logo"
              width={138}
              height={46.37}
              className="float-left "
            />
            <ul className="px-4 py-4 flex">
              <li className="mx-5 cursor-pointer text-blue">Home</li>
              <li className="mx-5 cursor-pointer">Service</li>
              <li className="mx-5 cursor-pointer">About</li>
              <li className="mx-5 cursor-pointer">Blog</li>
              <li className="mx-5 cursor-pointer">Clients</li>
              <li className="mx-5 cursor-pointer">Team</li>
            </ul>
            <div className="">
              <button className="bg-l_blue hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md ml-[35rem] mt-2">
                CONTACT
              </button>
            </div>
          </nav>
        </div>
        <main>
          <div className="grid grid-cols-2 gap-2">
            <div className="p-4 pt-12">
              <h1 className="text-6xl font-semibold">
                <span className="text-blue">
                  Technology <br />
                </span>
                With Human Touch
              </h1>
              <p className="pt-4">
                Create your unique footprint in the digital world with OnEggy’s
                IT services. Transform your business with our cutting-edge and
                effective digital solutions to pave your path to success.
              </p>
              <div className="buttons flex pt-1">
                <button className="bg-white border border-l_blue text-l_blue hover:bg-l_blue hover:text-white px-10 py-2 mt-5 rounded-md flex shadow-md">
                  <span className=" transition-transform duration-300 hover:translate-x-2">
                    WRITE TO US
                  </span>

                  <Image
                    src="/arrowSvg.svg"
                    alt="arrow"
                    height={12}
                    width={12}
                    className="ml-3 mt-1.5"
                  />
                </button>
                <button className="bg-l_blue text-white hover:bg-white border hover:border-l_blue hover:text-l_blue px-10 py-2 mt-5 rounded-md ml-4">
                  ABOUT US
                </button>
              </div>
            </div>
            <div className="m-auto">
              <Image
                src="/tech2.png"
                alt="techrafiki 2"
                width={450}
                height={450}
              />
            </div>
          </div>

          <div className="points grid grid-cols-3 text-center">
            <div className=" cursor-pointer">
              <h2 className="text-4xl font-semibold hover:text-l_blue">
                For Startups
              </h2>
              <p className="mt-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
                mollitia. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quaerat architecto iure eos, cupiditate ut voluptates
                maiores, recusandae ab reiciendis, hic minus eius? Architecto
                vero laborum pariatur sit explicabo. Expedita, architecto.
              </p>
            </div>
            <div className=" cursor-pointer">
              <h2 className="text-4xl font-semibold hover:text-l_blue">
                Free Quotation
              </h2>
              <p className="mt-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
                mollitia. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quaerat architecto iure eos, cupiditate ut voluptates
                maiores, recusandae ab reiciendis, hic minus eius? Architecto
                vero laborum pariatur sit explicabo. Expedita, architecto.
              </p>
            </div>
            <div className=" cursor-pointer mb-10">
              <h2 className="text-4xl font-semibold hover:text-l_blue">
                Free Call
              </h2>
              <p className="mt-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
                mollitia. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quaerat architecto iure eos, cupiditate ut voluptates
                maiores, recusandae ab reiciendis, hic minus eius? Architecto
                vero laborum pariatur sit explicabo. Expedita, architecto.
              </p>
            </div>
          </div>

          <div className="mt5"></div>
        </main>
      </div>
    </div>
  );
};

export default Home;
