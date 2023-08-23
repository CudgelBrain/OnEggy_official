import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const techCompo = ({ skill }) => {
  const mapIcons = {
    faArrowRight,
  };

  return (
    <div className="border border-black border-b-4 border-r-1 border-l-1 rounded-[2rem] shadow-md bg-blue mt-10 mr-7 px-44 py-8 ">
      <h2 className="text-2xl font-semibold bg-white rounded-md px-1">
        {skill.title}
      </h2>
      <div className="flex items-center">
        <span className="rounded-full bg-white transform -rotate-[30deg] text-[4px] p-1">
          <FontAwesomeIcon icon={mapIcons[skill.icon]} size="4x" />
        </span>
        <a
          href={skill.learnMoreLink}
          className="text-blue-500 hover:underline ml-3"
        >
          Learn More
        </a>
        <img
          src={skill.imageSrc}
          alt={skill.title}
          className="my-2 w-40 h-40 float-right"
        />
      </div>
    </div>
  );
};

export default techCompo;
