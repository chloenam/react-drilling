import React from "react";
import "./index.css";
import CategoryList from "../../components/best/CategoryList/CategoryList";
import ItemList from "../../components/best/ItemList/ItemList";

const Best = () => {
  return (
    <div className="section__best">
      <div className="box__best-top">
        <CategoryList />
      </div>

      <div className="box__best-list">
        <ItemList />
      </div>
    </div>
  );
};

export default Best;
