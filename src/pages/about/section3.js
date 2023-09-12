import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Headline from "../components/headline";

const section3 = (props) => {
  const title = "What we do?";
  return (
    <div className="flex mt-10">
      <div className="bg-blue p-10 rounded-3xl shadow-right-bottom">
        <h2 className="bg-white text-black text-7xl rounded-2xl p-2 w-auto">
          {props.boxTitle1}
        </h2>
        <h2 className="bg-white text-black text-7xl rounded-2xl p-2 w-auto">
          {props.boxTitle2}
        </h2>
        <div className="flex mt-28">
          <div className="transform -rotate-[30deg]">
            <span className="rounded-full p-2 pt-5 bg-black text-blue text-[6px] mr-3">
              <FontAwesomeIcon icon={faArrowRight} size="4x" />
            </span>
          </div>
          <p>How?</p>
        </div>
      </div>
      <div className=" p-10 w-1/2">
        <Headline title={props.boxParaTitle} />
        <p>{props.boxContent}</p>
      </div>
    </div>
  );
};

export default section3;
