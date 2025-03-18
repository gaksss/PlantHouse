import React, { useState } from "react";
import Item from "./Item";

function Cart() {
  // Données simulées
  const [items, setItems] = useState([
    { id: 1, quantity: 1, name: "Monstera", price: 25 },
    { id: 2, quantity: 1, name: "Ficus", price: 35 },
    { id: 3, quantity: 1, name: "Cactus", price: 15 },
  ]);

  const activeItems = items.filter((item) => item.quantity > 0);
  const total = activeItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const totalQuantity = activeItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  function emptyCart(){
    setItems(items.map((item) => ({...item, quantity: 0})));
    console.log("Panier vidé");
    
  }

  return (
    <div className="relative w-full text-white">
      <p className="absolute top-2 right-2 cursor-pointer">Fermer</p>
      <div className="justify-start items-start pt-10 pl-6">
        <h2 className="font-bold text-xl">Panier</h2>
        {activeItems.length === 0 && <p>Votre panier est vide</p>}
        <p>{totalQuantity} article(s)</p>
        <ul className="space-y-4 mt-4 pl-6">
          {activeItems.map((item) => (
            <li key={item.id} className="flex justify-between items-center">
              <Item
                quantity={item.quantity}
                name={item.name}
                price={item.price}
              />
            </li>
          ))}
        </ul>
        <div className="flex justify-between items-center mt-4 pl-6 font-bold text-xl">
          <span>Total : {total}€</span>
        </div>
        <button onClick={emptyCart} className="mt-4">Vider le panier</button>
      </div>
    </div>
  );
}

export default Cart;
