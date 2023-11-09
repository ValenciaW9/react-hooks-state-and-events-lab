import React from 'react';

function Item({ name, category, inCart, onAddToCart }) {
  const itemClass = inCart ? "in-cart" : "";

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={onAddToCart}>Add to Cart</button>
    </li>
  );
}

export default Item;