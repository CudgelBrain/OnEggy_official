import React from "react";

const landing_2 = () => {
  return (
    <div className="landingPage2 mt-14 grid grid-cols-2 ">
      
      <div className="relative">
        <img
          src="./landing_2/shape1.png"
          alt="Image 1"
          className="absolute z-0 opacity-100"
        />
        <img
          src="./landing_2/shape2.png"
          alt="Image 1"
          className="absolute z-1 opacity-100"
        />
        <img
          src="./landing_2/Rectangle.png"
          alt="Image 1"
          className="absolute left-24 top-36 z-2 opacity-100"
        />
        <div class="absolute flex mt-56 left-36 font-semibold">
          <div class="text-6xl text-white">
            About <br />
            Us
          </div>
        </div>

        <img
          src="./landing_2/Mask.png"
          alt="Image 1"
          className="absolute left-[28rem] top-[17rem] z-2 opacity-100"
        />
        <img
          src="./landing_2/ImageHex.png"
          alt="Image 1"
          className="absolute left-96 top-14 z-2 4 h-50"
        />
        <img
          src="./landing_2/ImageHex.png"
          alt="Image 1"
          className="absolute left-[19rem] top-[25rem] z-2 w-50 h-50"
        />
      </div>

      <div className="mt-24 font-semibold px-14">
        <h1 className="text-3xl ">Title Here</h1>
        <p className="mt-5">
          We deploy world-class Creative Design team on demand. that can design,
          build, ship and scale your vision in the most efficient way.
        </p>
        <div className="grid grid-cols-3 mt-12 px-4">
          <h2 className="text-5xl font-bold">
            100%
            <div className=" w-14 bg-l_blue h-3 rounded-lg mt-10"/>
            <h3 className="text-xl font-bold justify-center mt-10">CLIENT SATISFACTION</h3>
          </h2>
          <h2 className="text-5xl font-bold">
            1200+
            <div className=" w-14 bg-l_blue h-3 rounded-lg mt-10"/>
            <h3 className="text-xl font-bold justify-center mt-10">COMPLETE PROJECT</h3>
          </h2>
          <h2 className="text-5xl font-bold">
            1800+
            <div className=" w-14 bg-l_blue h-3 rounded-lg mt-10"/>
            <h3 className="text-xl font-bold justify-center mt-10">DESIGN RESOURCE</h3>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default landing_2;
