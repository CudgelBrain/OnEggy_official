import React from "react";

const section5 = ({ head, index }) => {
  function bgColor(index) {
    if (index === 0 || index === 3 || index === 4) {
      return "bg-blue";
    } else return "bg-white";
  }

  function textColor(index) {
    if (index === 1 || index === 2 || index === 5) {
      return "text-blue";
    } else return "text-white";
  }

  return (
    <div className="mt-6 mr-6 relative -left-16">
      <div className="bg-l_black rounded-[3rem] flex pl-16 p-10 sm:p-10 border border-b-[5px] border-l_black justify-between m-auto w-[90%] h-full sm:w-[38rem]">
        <div className={`w-48 m-auto ${textColor(index)}`}>
          <img src={head.image} alt={head.alt} />
        </div>

        <div className="px-5 w-auto">
          <h2
            className={`${bgColor(
              index
            )} px-5 py-2 w-auto text-3xl font-semibold rounded-2xl service-heading`}
          >
            {head.head}
          </h2>
          <p className="text-white mt-4">{head.para}</p>
        </div>
      </div>
    </div>
  );
};

export default section5;
