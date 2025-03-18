import React, { useState } from "react";
import Item from "./Item";

function Cart({ items, setItems, isOpen, setIsOpen }) {
  const activeItems = items.filter((item) => item.quantity > 0);
  const total = activeItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const totalQuantity = activeItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  function emptyCart() {
    setItems(items.map((item) => ({ ...item, quantity: 0 })));
  }

  // Trier les items actifs par ordre alphabétique
  const sortedActiveItems = [...activeItems].sort((a, b) => 
    a.name.localeCompare(b.name)
  );

  return (
    <div 
      className={`relative w-full text-white transition-all duration-300 ${
        isOpen ? "h-full" : "h-16 cursor-pointer"
      }`}
      onClick={() => !isOpen && setIsOpen(true)}
    >
      <div className="flex justify-between items-center h-16 px-6">
        <h2 className="font-bold text-xl">Panier ({totalQuantity})</h2>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          className="cursor-pointer"
        >
          {isOpen ? "Fermer" : "Ouvrir"}
        </button>
      </div>

      {isOpen && (
        <div className="px-6 pb-6">
          {activeItems.length === 0 && <p>Votre panier est vide</p>}
          <ul className="space-y-4 mt-4">
            {sortedActiveItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center">
                <Item
                  quantity={item.quantity}
                  name={item.name}
                  price={item.price}
                />
              </li>
            ))}
          </ul>
          {activeItems.length > 0 && (
            <>
              <div className="flex justify-between items-center mt-4 font-bold text-xl">
                <span>Total : {total}€</span>
              </div>
              <button 
                onClick={emptyCart}
                className="mt-4 px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg transition"
              >
                Vider le panier
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Cart;
