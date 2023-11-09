import React, { useState } from 'react';

function ShoppingList() {
  const [selectedCategory, setSelectedCategory] = useState('Selected Category');

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => this.setState({ count: this.state.count + 1 })}>
        Click me
      </button>
      <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="category1">Category 1</option>
        <option value="category2">Category 2</option>
        <option value="category3">Category 3</option>
      </select>
    </div>
  );
}

export default ShoppingList;