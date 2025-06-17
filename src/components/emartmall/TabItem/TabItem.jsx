import React from "react";

const TabItem = ({ id, name, isActive, onClick, logo, altText }) => {
  return (
    <label htmlFor={id} className={`filter-chip ${isActive ? "filter-chip--active" : ""}`}>
      <input id={id} name={name} type="radio" className="filter-chip__checkbox" onClick={onClick} />
      <img src={isActive ? logo.on : logo.off} alt={altText} className="image__brand-logo" />
    </label>
  );
};

export default TabItem;
