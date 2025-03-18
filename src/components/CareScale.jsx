import React from "react";
import water from "../assets/droplet-solid.svg";
import sun from "../assets/sun-solid.svg";

function CareScale({ scaleWater, scaleSun }) {
  const range = [1, 2, 3, 4, 5];

  return (
    <div>
      <div className="flex gap-1">
        {range.map((rangeElem) =>
          scaleWater >= rangeElem ? (
            <img
              key={`water-${rangeElem}`}
              className="w-4"
              src={water}
              alt={`niveau d'arrosage ${rangeElem}`}
            />
          ) : null
        )}
      </div>
      <div className="flex gap-1 mt-3">
        {range.map((rangeElem) =>
          scaleSun >= rangeElem ? (
            <img
              key={`sun-${rangeElem}`}
              className="w-5"
              src={sun}
              alt={`niveau de soleil ${rangeElem}`}
            />
          ) : null
        )}
      </div>
    </div>
  );
}

export default CareScale;
