import React, { useState } from 'react';
import Item from './Item';

function ShoppingList() {
  const [items, setItems] = useState([
    { id: 1, name: "Yogurt", category: "Dairy" },
    { id: 2, name: "Pomegranate", category: "Produce" },
    { id: 3, name: "Lettuce", category: "Produce" },
    { id: 4, name: "String Cheese", category: "Dairy" },
    { id: 5, name: "Cookies", category: "Dessert" },
  ]);

  const handleAddToCart = (itemId) => {
    const updatedItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, inCart: true };
      }
      return item;
    });
    setItems(updatedItems);
  };

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="essert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            category={item.category}
            inCart={item.inCart}
            onAddToCart={() => handleAddToCart(item.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;