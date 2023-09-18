import React from "react";
import Image from "next/image";
import Slider from "react-slick";

const projectlogos = () => {


  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    autoplay:true,
    slidesToShow: 5,
    slidesToScroll:4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <main>
       {/* <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
      /> */}
      <div className="mt-20 flex flex-row justify-between items-center flex-wrap">
      {/* <Slider {...settings}> */}
        <img
          src="/home/projectLogos/mgmt-logo.png"
          alt="Management Logo"
          className="project_logo"
          style={{
            filter: 'grayscale(100%)',
            width:"160px",
            height:"54px"
          }}
        />
        <img
          src="/home/projectLogos/east-mojo-logo.png"
          alt="east-mojo-logo"
          className="project_logo"
          style={{
            filter: 'grayscale(100%)',
            width:"203px",
            height:"44px"
          }}
        />
         <img
          src="/home/projectLogos/beyond-logo.png"
          alt="beyond"
          className="project_logo"
          style={{
            filter: 'grayscale(100%)',
            width:"128px",
            height:"72px"
          }}
        />
          <img
            src="/home/projectLogos/bit-logo.png"
            alt="bitmemoir"
            className="project_logo"
            style={{
              filter: 'grayscale(100%)',
              width:"236px",
              height:"53px"
            }}
          />
        <img
          src="/home/projectLogos/smile-logo.png"
          alt="smile"
          className="project_logo"
          style={{
            filter: 'grayscale(100%)',
            width:"127px",
            height:"85px"
          }}
        />
        <img
          src="/home/projectLogos/numwize-logo.png"
          alt="nuberwize"
          className="project_logo"
          style={{
            filter: 'grayscale(100%)',
            width:"83px",
            height:"67px"
          }}
        />
       </div>
      {/* </Slider> */}
    </main>
  );
};

export default projectlogos;
