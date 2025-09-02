import { useEffect, useState } from "react";
import { useFilter } from "./FilterContext";
import styles from "./Filter.module.css";

export default function FilterLayer({ onClose }) {
  const { filters, toggleItem, resetAll } = useFilter();
  const [slideIn, setSlideIn] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => setSlideIn(true), 0);
  }, []);

  const handleClose = () => {
    setSlideIn(false);
    setTimeout(() => {
      setVisible(false);
      if (onClose) onClose();
    }, 300);
  };

  if (!visible) return null;

  const renderItems = (items, category) =>
    items.map((item) => (
      <div key={item.value} className={styles.layerFilter}>
        <label className={styles.layerFilterText}>
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
    <>
      <div className={styles.overlay} onClick={handleClose}></div>

      <div
        className={`${styles.layerFilterWrap} ${
          slideIn ? styles.open : styles.close
        }`}
      >
        <button
          className={`${styles.closeBtn} ${styles.button}`}
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
            {renderItems(filters[category].items, category)}
          </div>
        ))}
      </div>
    </>
  );
}
