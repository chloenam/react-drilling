import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(1);

  const decrease = () => {
    setCount((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const increase = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="element-info-qty">
      <button aria-describedby="itemCard_title_2519000890" className="sprite__smilefresh--before element-info-qty-minus" aria-disabled="true" onClick={decrease}>
        <span className="for-a11y">상품 수 1 감소</span>
      </button>
      <span className="element-info-item-qty" aria-describedby="itemCard_title_2519000890">
        <span className="for-a11y">선택된 수량</span>
        {count}
      </span>
      <button aria-describedby="itemCard_title_2519000890" className="sprite__smilefresh--before element-info-qty-plus" onClick={increase}>
        <span className="for-a11y">상품 수 1 증가</span>
      </button>
    </div>
  );
};

export default Count;
