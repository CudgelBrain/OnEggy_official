import React from "react";
import Image from "next/image";

const projectlogos = () => {
  return (
    <main>
      <div className="projects flex justify-between max-w-7xl mt-16">
        <Image
          src="/projectLogos/mgmt-logo.png"
          alt="Management Logo"
          width="120"
          height="50"
          className="project_logo"
          style={{
            filter: 'grayscale(100%)'
          }}
        />
        <Image
          src="/projectLogos/east-mojo-logo.png"
          alt="east-mojo-logo"
          width="120"
          height="50"
          className="project_logo"
        />
        <Image
          src="/projectLogos/numwize-logo.png"
          alt="nuberwize"
          width="120"
          height="50"
          className="project_logo"
        />
        <Image
          src="/projectLogos/smile-logo.png"
          alt="smile"
          width="120"
          height="50"
          className="project_logo"
        />
        <Image
          src="/projectLogos/bit-logo.png"
          alt="bitmemoir"
          width="120"
          height="50"
          className="project_logo"
        />
        <Image
          src="/projectLogos/beyond-logo.png"
          alt="beyond"
          width="120"
          height="50"
          className="project_logo"
        />
      </div>
    </main>
  );
};

export default projectlogos;
