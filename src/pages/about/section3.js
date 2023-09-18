import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Headline from "../components/headline";

const section3 = (props) => {
  
  const title = "What we do?";


  return (
    <div className="flex sm:flex-row flex-col sm:mt-10 mt-2">
      <div className="bg-blue p-6 sm:p-10 rounded-3xl shadow-right-bottom relative left-16">
        <h2 className="bg-white text-black sm:text-7xl text-5xl rounded-2xl p-2 w-max  sm:w-auto">
          {props.boxTitle1}
        </h2>
        <h2 className="bg-white text-black sm:text-7xl text-5xl rounded-2xl p-2 sm:w-auto w-max">
          {props.boxTitle2}
        </h2>
        <div className="flex sm:mt-28 mt-14">
          <div className="transform -rotate-[30deg]">
            <span className="rounded-full p-2 pt-5 bg-black text-blue text-[6px] mr-3">
              <FontAwesomeIcon icon={faArrowRight} size="4x" />
            </span>
          </div>
          <p>How?</p>
        </div>
      </div>

      <div className="p-10 sm:w-1/2">
        <Headline title={props.boxParaTitle} />
        <p>{props.boxContent}</p>
      </div>
    </div>
  );
};

export default section3;
