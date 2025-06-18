import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(1);

  const decrease = () => {
    setCount((current) => (current > 1 ? current - 1 : current));
  };

  const increase = () => {
    setCount((current) => current + 1);
  };

  return (
    <div className="element-info-qty">
      <button
        className="sprite__smilefresh--before element-info-qty-minus"
        aria-disabled="true"
        onClick={decrease}
      >
        <span className="for-a11y">상품 수 1 감소</span>
      </button>
      <span className="element-info-item-qty">
        <span className="for-a11y">선택된 수량</span>
        {count}
      </span>
      <button
        className="sprite__smilefresh--before element-info-qty-plus"
        onClick={increase}
      >
        <span className="for-a11y">상품 수 1 증가</span>
      </button>
    </div>
  );
};

export default Count;
