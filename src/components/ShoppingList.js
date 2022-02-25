import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectCategory, setSelectCategory] = useState("All")

    function selectFilter(items) {
      setSelectCategory(items.target.value)
    }

    const filter = items.filter(el => {
      return selectCategory === "All" || el.category === selectCategory
      // if (selectCategory === "All") {
      //   return true
      // } else {
      //   return el.category === selectCategory 
      // }
    })

    

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={selectFilter} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filter.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
