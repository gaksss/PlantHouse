import React, { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Cart from "./components/Cart";
import Categories from "./components/Categories";
import ShoppingList from "./components/ShoppingList";

function App() {
  const [items, setItems] = useState([
    { id: 1, quantity: 1, name: "Dionaea", price: 25 },
    { id: 2, quantity: 1, name: "Ficus", price: 35 },
    { id: 3, quantity: 1, name: "Cactus", price: 15 },
  ]);

  const addQuantity = (itemId) => {
    setItems(
      items.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  return (
    <>
      <header className="flex justify-end items-center h-24 pr-8 border-b-2 border-black">
        <Banner />
      </header>
      <section className="flex">
        <div className="bg-[#13ae67] w-[250px] h-[400px] flex">
          <Cart items={items} setItems={setItems} />
        </div>
        <div className="flex- justify-center flex-col items-center w-full">
          <Categories />
          
          <ShoppingList items={items} addQuantity={addQuantity} />
          
        </div>
      </section>
    </>
  );
}

export default App;
