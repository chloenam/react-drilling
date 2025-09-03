import React from "react";
import styles from "./Filter.module.css";
import { useFilter } from "./FilterContext";

export default function FilterItemList({ items, category, type = "default" }) {
  const { toggleItem } = useFilter();

  return (
    <>
      {items.map((item) => (
        <div
          key={item.value}
          className={type === "layer" ? styles.layerFilter : styles.filter}
        >
          <label
            className={
              type === "layer" ? styles.layerFilterText : styles.filterText
            }
          >
            <input
              type="checkbox"
              className={styles.checkbox}
              checked={item.isSelected}
              onChange={() => toggleItem(category, item.value)}
            />
            {item.text}
          </label>
        </div>
      ))}
    </>
  );
}
