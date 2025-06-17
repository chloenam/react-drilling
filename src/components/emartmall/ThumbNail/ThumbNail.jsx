import React from "react";

const ThumbNail = ({ item }) => {
  return (
    <>
      {item.tagLabels?.[0] && <span className="box__thumbnail__label">{item.tagLabels[0].text}</span>}
      <a className="link__itemcard" href={item.itemUrl} tabIndex="-1" aria-hidden="true">
        <span className="box__itemcard-img">
          <img src={item.imageUrl} alt={`${item.itemName} - 상품 이미지`} loading="lazy" decoding="async" className="image__itemcard" />
        </span>
      </a>
    </>
  );
};

export default ThumbNail;
