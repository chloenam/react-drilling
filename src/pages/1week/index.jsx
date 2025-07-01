import React from "react";
import "./index.css";
import CategoryList from "../../components/best/CategoryList/CategoryList";
import ItemList from "../../components/best/ItemList/ItemList";
import Title from "../../components/best/Title/Title";
import useChangeCss from "../../hook/useChangeCSS";

const Best = () => {
  useChangeCss([
    "//script.gmarket.co.kr/pc/css/common/kr/swiper.min.css",
    "//script.gmarket.co.kr/starro/desktop/css/smilefresh/smilefresh.css",
    "//script.gmarket.co.kr/pc/css/application/kr/smilefresh/app.css",
  ]);
  return (
    <div className="section__best">
      <div className="box__best-top">
        <Title />
        <CategoryList />
      </div>
      <div className="box__best-list">
        <ItemList />
      </div>
    </div>
  );
};

export default Best;
