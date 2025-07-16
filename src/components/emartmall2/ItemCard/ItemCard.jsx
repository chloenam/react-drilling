import React from "react";

import ItemInfo from "../ItemInfo/ItemInfo";
import ThumbNail from "../ThumbNail/ThumbNail";

const ItemCard = ({ item }) => {
  return (
    <div className="box__itemcard-container">
      <div className="box__itemcard-body">
        <div className="box__itemcard-inner">
          <ThumbNail item={item} />
          <ItemInfo item={item} />
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
