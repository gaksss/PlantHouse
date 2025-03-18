import React from "react";
import water from "../assets/droplet-solid.svg";
import sun from "../assets/sun-solid.svg";

function CareScale() {
  return (
    <div>
      <div className="flex gap-1">
        <img className="w-4" src={water} alt="taux d'arrosage" />
        <img className="w-4" src={water} alt="taux d'arrosage" />
        <img className="w-4" src={water} alt="taux d'arrosage" />
      </div>
      <div className="flex gap-1 mt-3">
        <img className="w-5" src={sun} alt="taux d'arrosage" />
        <img className="w-5" src={sun} alt="taux d'arrosage" />
        <img className="w-5" src={sun} alt="taux d'arrosage" />
      </div>
    </div>
  );
}

export default CareScale;
