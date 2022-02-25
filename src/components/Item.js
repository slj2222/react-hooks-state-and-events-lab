import React, { useState } from "react";

function Item({ name, category }) {

  const [itemInCart, setItemInCart] = useState(false)

  function toggleInCart() {
    setItemInCart((index) => !index)
  }

  const cart = itemInCart ? "in-cart" : ""

  return (
    <li className={cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={toggleInCart} className="add">{itemInCart ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
