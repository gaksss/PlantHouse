import React from "react";

function Item({quantity, name, price }) {
    const itemTotal = price * quantity;
  return (
    <div className="flex items-center gap-2">
      <span>{quantity}</span>
      <span>{name}</span>
      <span>{itemTotal}€</span>
    </div>
  );
}

export default Item;
