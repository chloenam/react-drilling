import React from "react";

const ThumbNail = ({ item }) => {
  return (
    <div className="box__thumbnail">
      <img src={item.imageUrl} alt={`${item.rank}위`} className="image" />
      <span className="box__label-rank">{item.rank}</span>
    </div>
  );
};

export default ThumbNail;
