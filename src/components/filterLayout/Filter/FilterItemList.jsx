import React, { memo, useCallback } from "react";
import styles from "./Filter.module.css";
import { useFilter } from "./FilterContext";
import clsx from "clsx";

const FilterItemList = ({ items, category, type = "default" }) => {
  const { toggleItem } = useFilter();

  /** 개별 체크박스 핸들러 최적화 */
  const handleToggle = useCallback(
    (value) => {
      toggleItem(category, value);
    },
    [category, toggleItem]
  );

  return (
    <>
      {items.map((item) => (
        <div
          key={item.value}
          className={clsx({
            [styles.layerFilter]: type === "layer",
            [styles.filter]: type === "default",
          })}
        >
          <label
            className={clsx({
              [styles.layerFilterText]: type === "layer",
              [styles.filterText]: type === "default",
            })}
          >
            <input
              type="checkbox"
              className={styles.checkbox}
              checked={item.isSelected}
              onChange={() => handleToggle(item.value)}
            />
            {item.text}
          </label>
        </div>
      ))}
    </>
  );
};

export default memo(FilterItemList);
