import React from "react";
import CareScale from "./CareScale";
import dionaea from "../assets/img/dionaea.jpg";

function PlantItem({ id, name, price, addQuantity }) {
  return (
    <>
      <article className="bg-gray-100 rounded-xl shadow-md p-6 flex flex-col items-center w-72">
        <div className="relative w-56 h-56">
          <img
            src={dionaea}
            alt="Photo de la plante"
            className="rounded-xl w-56 h-56 object-cover mb-4"
          />
          <p className="absolute top-0 right-0 bg-[#13ad67] text-white text-sm font-semibold px-3 py-1 rounded-tl-xl rounded-tr-xl rounded-br-xl">
            {price}€
          </p>
        </div>
        <h3 className="font-semibold text-lg text-gray-800 mb-2">{name}</h3>
        <div className="mb-4">
          <CareScale />
        </div>
        <button 
          onClick={() => addQuantity(id)} 
          className="bg-green-500 text-white px-6 py-2 rounded-lg font-medium shadow-md hover:bg-green-600 transition"
        >
          Ajouter
        </button>
      </article>
    </>
  );
}

export default PlantItem;
