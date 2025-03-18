import React from "react";

function Categories({ selectedCategory, onSelectCategory }) {
  return (
    <section className="flex flex-col items-center w-full mt-6">
      <label htmlFor="category" className="text-lg font-medium text-gray-700 mb-2">
        Choisissez une catégorie :
      </label>
      <select
        name="category"
        id="category"
        value={selectedCategory}
        onChange={(e) => onSelectCategory(e.target.value)}
        className="h-10 px-4 w-64 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
      >
        <option value="all">Toutes les plantes</option>
        <option value="exterieur">Extérieur</option>
        <option value="interieur">Intérieur</option>
        <option value="grasses">Grasses</option>
        <option value="cactus">Cactus</option>
        <option value="carnivores">Carnivores</option>
      </select>
    </section>
  );
}

export default Categories;
