import React from "react";

const ItemInfo = ({ item }) => {
  const { goodsName, price, discountPrice, discountRate, isFreeShipping } =
    item;

  const isDiscounted = price !== discountPrice;

  return (
    <div className="box__item-info">
      <p className="box__item-title">{goodsName}</p>
      <div className="box__item-price">
        {isDiscounted && (
          <div className="box__price">
            <span className="text__price-title">쿠폰적용가</span>
            <div className="box__price-original">
              <span className="for-a11y">원가</span>
              <span className="text text__value">{price}</span>
              <span className="text text__unit">원</span>
            </div>
          </div>
        )}
        <div className="box__price">
          {discountRate !== 0 && (
            <div className="box__discount">
              <span className="for-a11y">할인율</span>
              <span className="text text__value">{discountRate}%</span>
            </div>
          )}

          <div className="box__price-seller">
            <span className="for-a11y">판매가</span>
            <span className="text text__value">{discountPrice}</span>
            <span className="text text__unit">원</span>
          </div>

          {isFreeShipping && (
            <div className="box__information-tags">
              <span className="icon__tag icon__delivery-free">
                <img
                  src="//pics.gmarket.co.kr/pc/single/kr/snowwhite/common/icon_deliveyfree_2x.png"
                  alt="무료배송"
                  className="image"
                />
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemInfo;
