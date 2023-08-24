import React from "react";
import Headline from "../components/headline";

const marksheet = () => {
  const title = "Marksheet    ";
  const desc =
    "Through our Case Studies, you may see real-life instances of our Proven Digital Services success";

  return (
    <div>
      <Headline title={title} desc={desc} />
      <div className="bg-l_black text-white rounded-3xl p-10 flex place-content-around mt-14 flex-wrap">
        <div className="mt-5 mb-5">
          <h2 className="text-8xl font-bold text-shadow-blue">100%</h2>
          <p className="mt-10 ml-10">Client Satisfaction</p>
        </div>
          <div className="mt-5 before:bg-white before:absolute before:w-[0.1px] before:h-40" />
        <div className="mt-5 mb-5 beforeAfter">
          <h2 className="text-8xl font-bold text-shadow-blue">100+</h2>
          <p className="mt-10 ml-10">Experts in the team</p>
        </div>
          <div className="mt-5 before:bg-white before:absolute before:w-[0.1px] before:h-40" />
        <div className="mt-5 mb-5">
          <h2 className="text-8xl font-bold text-shadow-blue">100+</h2>
          <p className="mt-10 ml-10">Happy Customers</p>
        </div>
      </div>
    </div>
  );
};

export default marksheet;
