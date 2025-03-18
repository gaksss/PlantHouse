import React from "react";
import CareScale from "./CareScale";

function PlantItem({
  img,
  name,
  price,
  quantity,
  water,
  sun,
  id,
  addQuantity,
  removeQuantity,
  updateQuantity,
}) {
  return (
    <>
      <article className="bg-gray-100 rounded-xl shadow-md p-6 flex flex-col items-center w-72">
        <div className="relative w-56 h-56">
          <img
            src={img}
            alt={`${name}`}
            className="rounded-xl w-56 h-56 object-cover mb-4"
          />
          <p className="absolute top-0 right-0 bg-[#13ad67] text-white text-sm font-semibold px-3 py-1 rounded-tl-xl rounded-tr-xl rounded-br-xl">
            {price}€
          </p>
        </div>
        <h3 className="font-semibold text-lg text-gray-800 mb-2">{name}</h3>
        <div className="mb-4">
          <CareScale scaleWater={water} scaleSun={sun} />
        </div>

        {quantity === 0 ? (
          <button
            onClick={() => addQuantity(id)}
            className="bg-green-500 text-white px-6 py-2 rounded-lg font-medium shadow-md hover:bg-green-600 transition"
          >
            Ajouter
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <button
              onClick={() => removeQuantity(id)}
              className="bg-red-500 text-white w-8 h-8 rounded-lg font-medium shadow-md hover:bg-red-600 transition"
            >
              -
            </button>
            <input
              type="number"
              value={quantity}
              onChange={(e) => updateQuantity(id, e.target.value)}
              className="w-16 text-center border rounded-lg"
              min="0"
            />
            <button
              onClick={() => addQuantity(id)}
              className="bg-green-500 text-white w-8 h-8 rounded-lg font-medium shadow-md hover:bg-green-600 transition"
            >
              +
            </button>
          </div>
        )}
      </article>
    </>
  );
}

export default PlantItem;
