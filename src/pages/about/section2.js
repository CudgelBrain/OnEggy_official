import React from "react";
import Headline from "../components/headline";
import Image from "next/image";

const section2 = () => {
  const title = "Who we are?";

  return (
    <div className="flex">
      <div className="w-1/2 p-10">
        <Headline title={title} width=""/>
        <p className="mt-8">
          Despite commercial reluctance, Oneggy is devoted to Open Source
          methods in order to produce creative, sustainable alternative
          applications. Our company's objective is to promote the widespread use
          of high-quality Open Source Application Technology.
          <br />
          <br />
            We are a one-stop shop for any organization's DevOps and cloud
            needs. We offer low-cost, high-availability, secure, and scalable
            services and subscription models based on Linux, Open Source, Cloud,
            and DevOps. Our solution- and support-based approach culminates in a
            complete technological solution that allows you to reap the benefits
            of an effective IT strategy based on a solid business model.
        </p>
      </div>
      <div className="w-1/2 p-10 mt-24">
        <Image
          src="/about/people.png"
          alt="People Image"
          height={371}
          width={626}
        />
      </div>
    </div>
  );
};

export default section2;
