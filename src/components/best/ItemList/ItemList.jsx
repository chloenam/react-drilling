import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import dummyData from "../dummyData/dummyData";

const ItemList = () => {
  return (
    <ul className="list__best">
      {dummyData.items.map((item, index) => (
        <ItemCard key={index} item={item} index={index} />
      ))}
    </ul>
  );
};

export default ItemList;
