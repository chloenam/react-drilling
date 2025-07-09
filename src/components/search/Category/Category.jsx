import React, { useState } from "react";
import "./Category.css";

const categoryItems = ["호텔", "리조트", "펜션", "모텔"];

const Category = () => {
  const [activeList, setActiveList] = useState([]);

  const handleClick = (category) => {
    if (activeList.includes(category)) {
      setActiveList(activeList.filter((item) => item !== category));
    } else {
      setActiveList([...activeList, category]);
    }
  };

  return (
    <div className="box__category-select-wrap">
      {categoryItems.map((item) => (
        <button
          key={item}
          className={`button__category ${
            activeList.includes(item) ? "is-active" : ""
          }`}
          onClick={() => handleClick(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Category;
