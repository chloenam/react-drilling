import React from "react";
import Count from "../Count/Count";
import Favorite from "../Favorite/Favorite";
import CartButton from "../CartButton/CartButton";
const ItemInfo = ({ item }) => {
  return (
    <div className="box__itemcard-info">
      <div className="box__element-info">
        <Count />
        <CartButton />
      </div>
      <a href="https://item.gmarket.co.kr/Item?goodscode=2519000890" className="link__itemcard-info">
        <span className="box__itemcard-title-area" id="itemCard_title_2519000890">
          <span className="text__title" id="item_title">
            {item.itemName}
          </span>
        </span>
        <span className="box__itemcard-price-area">
          <span className="box__price-seller">
            <span className="for-a11y">판매가</span>
            <strong className="text__price-seller">{item.sellPrice.toLocaleString()}</strong>
            <span className="text__unit">원</span>
          </span>
        </span>
        <span className="box__itemcard-info-score">
          <span className="sprite__smilefresh--before box__score-awards">
            <span className="for-a11y">평점</span>
            <span className="text text__score">{item.reviewPoint.starPoint}</span>
            <span className="for-a11y">후기</span>
            <span className="text text__num">({item.reviewPoint.reviewCount.toLocaleString()})</span>
            <span className="for-a11y">건</span>
          </span>
          <span className="box__score-buycnt">
            <span className="text text__buy">구매</span>
            <span className="text text__num">{item.buyCount.toLocaleString()}</span>
            <span className="for-a11y">건</span>
          </span>
        </span>
      </a>
      <Favorite />
    </div>
  );
};

export default ItemInfo;
