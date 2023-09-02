import React from "react";

const platforms = ({ brands, alternative }) => {
  return (
    <div className="flex">
      {brands.map((brand, index) => (
        <div key={index} className="m-4">
          <img src={brand} alt={alternative[index]} />
        </div>
      ))}
    </div>
  );
};

export default platforms;
