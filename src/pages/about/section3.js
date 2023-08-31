import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Headline from "../components/headline";

const section3 = () => {
  const title = "What we do?";
  return (
    <div className="flex mt-10">
      <div className="bg-blue p-10 rounded-3xl shadow-right-bottom">
        <h2 className="bg-white text-black text-7xl rounded-2xl p-2 w-[28rem]">
          Your Dreams
        </h2>
        <h2 className="bg-white text-black text-7xl rounded-2xl p-2 w-[28rem]">
          Empowered.
        </h2>
        <div className="flex mt-28">
          <div className="transform -rotate-[30deg]">
            <span className="rounded-full p-2 pt-5 bg-black text-blue text-[6px]">
              <FontAwesomeIcon icon={faArrowRight} size="4x" />
            </span>
          </div>
          <p>How?</p>
        </div>
      </div>
      <div className=" p-10">
        <Headline title={title} />
        <p>
          We create delectable dishes by combining design and technology with
          additional cheese of awesomeness. With demonstrated experience in
          accelerating the growth of start-ups by analyzing their needs and
          delivering the growth package. We make your dreams a reality. We're
          Oneggy. Our routine is to be ahead of schedule and under budget, to be
          forward-thinking and to create a seamless digital life. Every concept
          you bring to the table is nourished and ready to be implemented. With
          us, you invest in brand building and digital growth rather than design
          and development.
        </p>
      </div>
    </div>
  );
};

export default section3;
