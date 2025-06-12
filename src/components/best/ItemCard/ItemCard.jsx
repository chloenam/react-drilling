import React from "react";
import ThumbNail from "../ThumbNail/ThumbNail";
import ItemInfo from "../ItemInfo/ItemInfo";

const ItemCard = ({ item, index }) => {
  return (
    <li className="list-item">
      <a href={item.linkUrl} className="link">
        <ThumbNail item={item} />
        <ItemInfo item={item} />
      </a>
    </li>
  );
};

export default ItemCard;
