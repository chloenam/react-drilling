import React from "react";

const CategoryItem = ({ category, isActive, onClick }) => {
  return (
    <a
      aria-current="page"
      className={`link__category ${isActive ? "link__category--active" : ""}`}
      onClick={onClick}
      href="#"
    >
      <div className="box__thumbnail">
        <img src={category.imageUrl} alt="" className="image" />
      </div>
      <span className="text__category">{category.groupName}</span>
    </a>
  );
};

export default CategoryItem;
