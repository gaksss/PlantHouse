import React, { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Cart from "./components/Cart";
import Categories from "./components/Categories";
import ShoppingList from "./components/ShoppingList";
import Footer from "./components/Footer";
import dionaea from "./assets/img/dionaea.jpg";
import ficus from "./assets/img/ficus.webp";
import cactus from "./assets/img/cactus.webp";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      quantity: 0,
      name: "Dionaea",
      price: 25,
      water: 5,
      sun: 5,
      category: "carnivores",
      img: dionaea, // Correction ici - on passe l'image directement
    },
    {
      id: 2,
      quantity: 0,
      name: "Ficus",
      price: 35,
      water: 3,
      sun: 2,
      category: "interieur",
      img: ficus, // Correction ici
    },
    {
      id: 3,
      quantity: 0,
      name: "Cactus",
      price: 15,
      water: 2,
      sun: 4,
      category: "cactus",
      img: cactus, // Correction ici
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("all");

  const addQuantity = (itemId) => {
    setItems(
      items.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const removeQuantity = (itemId) => {
    setItems(
      items.map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.max(0, item.quantity - 1) }
          : item
      )
    );
  };

  const updateQuantity = (itemId, newQuantity) => {
    const value = Math.max(0, parseInt(newQuantity) || 0);
    setItems(
      items.map((item) =>
        item.id === itemId ? { ...item, quantity: value } : item
      )
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex justify-end items-center h-24 pr-8 border-b-2 border-black">
        <Banner />
      </header>
      <section className="flex">
        <div className="bg-[#13ae67] w-[250px] h-[400px] flex rounded-br-xl">
          <Cart items={items} setItems={setItems} />
        </div>
        <div className="flex- justify-center flex-col items-center w-full">
          <Categories
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
          <ShoppingList
            items={items.filter(
              (item) =>
                selectedCategory === "all" || item.category === selectedCategory
            )}
            addQuantity={addQuantity}
            removeQuantity={removeQuantity}
            updateQuantity={updateQuantity}
          />
        </div>
      </section>
      <footer className="flex justify-center items-center h-[280px] bg-[#13ae67]">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
