import React from 'react'
import PlantItem from './PlantItem'


function ShoppingList({ items, addQuantity }) {
  return (
    <section className="flex flex-col items-center w-full mt-6">
      <div className='flex flex-wrap justify-center gap-6'>
        {items.map((item) => (
          <PlantItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            addQuantity={addQuantity}
          />
        ))}
      </div>
    </section>
  );
}

export default ShoppingList