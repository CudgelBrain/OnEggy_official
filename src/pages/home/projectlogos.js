import React from "react";
import Image from "next/image";

const projectlogos = () => {
  return (
    <main>
      <div className="justify-between items-center mt-20 flex max-w-7xl">
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
          src="/home/projectLogos/numwize-logo.png"
          alt="nuberwize"
          className="project_logo"
          style={{
            filter: 'grayscale(100%)',
            width:"83px",
            height:"67px"
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
          src="/home/projectLogos/beyond-logo.png"
          alt="beyond"
          className="project_logo"
          style={{
            filter: 'grayscale(100%)',
            width:"128px",
            height:"72px"
          }}
        />
      </div>
    </main>
  );
};

export default projectlogos;
