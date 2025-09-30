import { useState, useCallback, memo } from "react";
import { useFilter } from "./FilterContext";
import FilterLayer from "./FilterLayer";
import FilterItemList from "./FilterItemList";
import styles from "./Filter.module.css";
import clsx from "clsx";

/** 개별 필터 블록을 memo 처리 */
const FilterBlock = memo(({ label, items, category }) => (
  <div className={styles.filterWrap}>
    <strong className={styles.filterTitle}>{label}</strong>
    <FilterItemList items={items} category={category} type="default" />
  </div>
));

export default function Filter() {
  const [isLayerOpen, setIsLayerOpen] = useState(false);
  const { filters, resetAll } = useFilter();

  const toggleLayer = useCallback(() => {
    setIsLayerOpen((prev) => !prev);
  }, []);

  const closeLayer = useCallback(() => {
    setIsLayerOpen(false);
  }, []);

  return (
    <div className={styles.boxFilterWrap}>
      <button className={styles.button} onClick={toggleLayer}>
        필터 열기
      </button>
      <button className={clsx(styles.button, styles.ml6)} onClick={resetAll}>
        전체 리셋
      </button>

      <div className={styles.boxFilter}>
        {Object.keys(filters).map((filterKey) => (
          <FilterBlock
            key={filterKey}
            label={filters[filterKey].label}
            items={filters[filterKey].items}
            category={filterKey}
          />
        ))}
      </div>

      {isLayerOpen && <FilterLayer onClose={closeLayer} />}
    </div>
  );
}
