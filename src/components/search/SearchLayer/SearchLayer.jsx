import React, { useEffect, useRef } from "react";
import { FocusTrap } from "focus-trap-react";
import Category from "../Category/Category";
import Range from "../Range/Range";
import FacilityList from "../FacilityList/FacilityList";
import Input from "../Input/Input";
import "./SearchLayer.css";

const SearchLayer = ({ onClose }) => {
  const layerRef = useRef(null);

  useEffect(() => {
    const node = layerRef.current;
    if (!node) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    node.addEventListener("keydown", handleKeyDown);
    return () => node.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <FocusTrap>
      <div
        ref={layerRef}
        role="dialog"
        aria-modal="true"
        className="box__layer-search"
      >
        <button onClick={onClose} aria-label="검색 레이어 닫기">
          닫기
        </button>
        <Category />
        <Range />
        <Input />
        <FacilityList />
      </div>
    </FocusTrap>
  );
};

export default SearchLayer;
