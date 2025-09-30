import { useEffect, useState, useCallback } from "react";
import { useFilter } from "./FilterContext";
import FilterItemList from "./FilterItemList";
import styles from "./Filter.module.css";
import clsx from "clsx";

export default function FilterLayer({ onClose }) {
  const { filters, resetAll } = useFilter();
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    setSlideIn(true);
  }, []);

  const handleClose = useCallback(() => {
    setSlideIn(false);
  }, []);

  const handleTransitionEnd = useCallback(
    (e) => {
      if (e.currentTarget === e.target && !slideIn) {
        onClose?.();
      }
    },
    [onClose, slideIn]
  );

  return (
    <>
      <div className={styles.overlay} onClick={handleClose}></div>

      <div
        className={clsx(styles.layerFilterWrap, {
          [styles.open]: slideIn,
          [styles.close]: !slideIn,
        })}
        onTransitionEnd={handleTransitionEnd}
      >
        <button
          className={clsx(styles.closeBtn, styles.button)}
          onClick={handleClose}
        >
          닫기
        </button>
        <button className={styles.button} onClick={resetAll}>
          전체 리셋
        </button>

        {Object.keys(filters).map((category) => (
          <div key={category} className={styles.layerFilter}>
            <strong className={styles.layerFilterTitle}>
              {filters[category].label}
            </strong>
            <FilterItemList
              items={filters[category].items}
              category={category}
              type="layer"
            />
          </div>
        ))}
      </div>
    </>
  );
}
