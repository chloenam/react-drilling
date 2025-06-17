import React from "react";
import ItemCard from "../ItemCard/ItemCard";

const TabContent = ({ items }) => {
  return (
    <div className="box__items-list">
      {items.map((item) => (
        <ItemCard key={item.itemNo} item={item} />
      ))}
    </div>
  );
};

export default TabContent;
