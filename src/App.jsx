import "./App.css";
import Banner from "./components/Banner";
import Cart from "./components/Cart";
import Categories from "./components/Categories";

function App() {
  return (
    <>
      <header className="flex justify-end items-center h-24 pr-8 border-b-2 border-black">
        <Banner />
      </header>
      <section className="flex ">
      <div className="bg-[#13ae67] w-[250px] h-[400px] flex">
        <Cart />
      </div>
      <Categories />
      </section>
    </>
  );
}

export default App;
