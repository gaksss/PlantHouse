import React from 'react'
import PlantItem from './PlantItem'


function ShoppingList({ items, addQuantity, removeQuantity, updateQuantity }) {
  return (
    <div className="grid grid-cols-3 gap-8 p-8">
      {items.map((item) => (
        <PlantItem
          key={item.id}
          {...item} // Spread operator pour passer toutes les props
          addQuantity={addQuantity}
          removeQuantity={removeQuantity}
          updateQuantity={updateQuantity}
        />
      ))}
    </div>
  );
}

export default ShoppingList