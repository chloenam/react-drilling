import React, { useState } from "react";
import Toast from "../Toast/Toast";

const Count = () => {
  const [count, setCount] = useState(1);
  const [showToast, setShowToast] = useState(false);

  const triggerToast = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const decrease = () => {
    setCount((current) => {
      const newCount = current > 1 ? current - 1 : current;
      if (newCount !== current) triggerToast();
      return newCount;
    });
  };

  const increase = () => {
    setCount((current) => {
      triggerToast();
      return current + 1;
    });
  };

  return (
    <>
      {showToast && <Toast message="수량이 변경되었습니다 🍞" />}

      <div className="element-info-qty">
        <button
          className="sprite__smilefresh--before element-info-qty-minus"
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
    </>
  );
};

export default Count;
