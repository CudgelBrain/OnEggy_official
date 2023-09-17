import React from "react";

const compo = ({head,title,content}) => {
  return (
    <div>
      <div>
        <div>
          <img src="../about/people.png" alt="Image" className=" mx-auto" />
        </div>
        <div>
          <h2 className="bg-blue font-semibold px-2 py-1 rounded-lg text-4xl w-max">
            {head}
          </h2>
          <h3 className="font-semibold text-4xl mt-3">{title}</h3>
          <p className="mt-3 mb-5 text-lg">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default compo;
