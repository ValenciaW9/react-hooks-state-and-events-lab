



const items = [
  { id: 1, name: "Yogurt", category: "Dairy" },
  { id: 2, name: "Pomegranate", category: "Produce" },
  { id: 3, name: "Lettuce", category: "Produce" },
  { id: 4, name: "String Cheese", category: "Dairy" },
  { id: 5, name: "Cookies", category: "Dessert" },
];

export default items;

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