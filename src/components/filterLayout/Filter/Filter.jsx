import { useState } from "react";
import { useFilter } from "./FilterContext";
import FilterLayer from "./FilterLayer";
import FilterItemList from "./FilterItemList";
import styles from "./Filter.module.css";

export default function Filter() {
  const [isLayerOpen, setIsLayerOpen] = useState(false);
  const { filters, resetAll } = useFilter();

  const toggleLayer = () => setIsLayerOpen((prev) => !prev);

  return (
    <div className={styles.boxFilterWrap}>
      <button className={styles.button} onClick={toggleLayer}>
        필터 열기
      </button>
      <button className={`${styles.button} ${styles.ml6}`} onClick={resetAll}>
        전체 리셋
      </button>

      <div className={styles.boxFilter}>
        {Object.keys(filters).map((category) => (
          <div key={category} className={styles.filterWrap}>
            <strong className={styles.filterTitle}>
              {filters[category].label}
            </strong>
            <FilterItemList
              items={filters[category].items}
              category={category}
              type="default"
            />
          </div>
        ))}
      </div>

      {isLayerOpen && <FilterLayer onClose={() => setIsLayerOpen(false)} />}
    </div>
  );
}
