import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Headline from "../components/headline";

const testimonials = ({ comments }) => {
  const title = "Testimonials";
  const desc =
    "Hear from our happy customers: Learn more about our digital services by reading our Testimonials";

  return (
    <div>
      <Headline title={title} desc={desc} />
      <div className="w-full mt-16">
        <Carousel
          showArrows={true}
          showStatus={false}
          showThumbs={true}
          infiniteLoop={true}
        >
          {comments.map((comment, index) => (
            <div key={index} className=" border border-gray-300 rounded-3xl text-white relative bg-l_black p-20">
              <p className="bg-d_blue rounded-3xl p-10 w-96 h-full ml-96">
                  {comment}
                <div className="absolute w-8 h-8 bg-d_blue transform rotate-45 bottom-[7.25rem]"></div>
              </p>
              <div className="">
                <h1 className="text-l_blue font-semibold text-lg">
                  John Smith
                </h1>
                <h2>Marketing Director at XYZ Corp</h2>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default testimonials;
