import { useState } from "react";
import { useFilter } from "./FilterContext";
import FilterLayer from "./FilterLayer";
import styles from "./Filter.module.css";

export default function Filter() {
  const [isLayerOpen, setIsLayerOpen] = useState(false);
  const { filters, toggleItem, resetAll } = useFilter();

  const toggleLayer = () => setIsLayerOpen((prev) => !prev);

  const renderItems = (items, category) =>
    items.map((item) => (
      <div key={item.value} className={styles.filter}>
        <label className={styles.filterText}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={item.isSelected}
            onChange={() => toggleItem(category, item.value)}
          />
          {item.text || item.altText}
        </label>
        {item.child && renderItems(item.child, category)}
      </div>
    ));

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
            {renderItems(filters[category].items, category)}
          </div>
        ))}
      </div>

      {isLayerOpen && <FilterLayer onClose={() => setIsLayerOpen(false)} />}
    </div>
  );
}
