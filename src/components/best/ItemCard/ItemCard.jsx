import React from "react";

const ItemCard = ({ item, index }) => {
  return (
    <li className="list-item">
      <a href={item.linkUrl} className="link">
        <div className="box__thumbnail">
          <img src={item.imageUrl} alt={`${index + 1}위`} className="image" />
          <span className="box__label-rank">{index + 1}</span>
        </div>

        <div className="box__item-info">
          <p className="box__item-title">{item.goodsName}</p>
          <div className="box__item-price">
            <div className="box__price">
              <span className="text__price-title">쿠폰적용가</span>
              <div className="box__price-original">
                <span className="for-a11y">원가</span>
                <span className="text text__value">{item.price}</span>
                <span className="text text__unit">원</span>
              </div>
            </div>
            <div className="box__price">
              <div className="box__discount">
                <span className="for-a11y">할인율</span>
                <span className="text text__value">{item.discountRate}%</span>
              </div>
              <div className="box__price-seller">
                <span className="for-a11y">판매가</span>
                <span className="text text__value">{item.discountPrice}</span>
                <span className="text text__unit">원</span>
              </div>
              <div className="box__information-tags">
                <span className="icon__tag icon__delivery-free">
                  <img
                    src="//pics.gmarket.co.kr/pc/single/kr/snowwhite/common/icon_deliveyfree_2x.png"
                    alt="무료배송"
                    className="image"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </li>
  );
};

export default ItemCard;
