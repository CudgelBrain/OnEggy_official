import React from "react";
import ConsultationButton from "../components/consultButton";

const section1 = ({head,sentence,showButton,buttonPlaceholder}) => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto max-w-7xl">
        <h1 className="text-6xl font-semibold mt-8 text-center w-3/5">   
           {head}      
        </h1>
        <p className="mt-7 w-2/3 text-center">
         {sentence}
        </p>
        {showButton && <ConsultationButton buttonPlaceholder={buttonPlaceholder}/>}
      </div>
  );
};

export default section1;
