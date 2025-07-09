import React from "react";

const FacilityItem = ({ id, text, icon, selected, onToggle }) => {
  return (
    <button
      type="button"
      className={`button__facility ${selected ? "is-select" : ""}`}
      onClick={() => onToggle(id)}
      aria-pressed={selected}
    >
      <span className="icon">{icon}</span>
      <span className="text__facility">{text}</span>
    </button>
  );
};

export default FacilityItem;
