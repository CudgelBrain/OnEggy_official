import React from "react";

const getFreeProp = () => {
  return (
    <div className="mt-20 bg-offWhite p-14 rounded-3xl">
      <div>
        <h2 className="text-3xl font-semibold">Let's get things begun</h2>
        <p className="mt-8 w-96">
          Contact us today to learn more about how our digital services may
          assist your company in growing and succeeding online
        </p>
        <button className="bg-l_black text-white hover:bg-white border hover:border-l_black hover:text-l_black px-6 py-4 mt-8 rounded-xl">
          Get your free proposal
        </button>
      </div>
      <div className="float-right -mt-80">
        <img src="../home/getFreeProps/stars.png" alt="star frame" width={494} height={394}/>
      </div>
    </div>
  );
};

export default getFreeProp;
