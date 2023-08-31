import React from "react";
import ConsultationButton from "../components/consultButton";
import Footer from '../components/footer'

const section1 = () => {
  return (
    <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-semibold mt-8">   
          Tested & Derived <br/>Solutions      {/* Solutions - Not center*/}
        </h1>
        <p className="mt-7">
          This is the stage at which your solution is introduced on the real
          market with real clients.
        </p>
        <ConsultationButton />
      </div>
  );
};

export default section1;
