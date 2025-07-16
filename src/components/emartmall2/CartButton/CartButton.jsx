import React, { useState } from "react";
import LottieCartAnimation from "../LottieCartAnimation/LottieCartAnimation";

const CartButton = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
  };

  return (
    <>
      {isAnimating && (
        <LottieCartAnimation onClose={() => setIsAnimating(false)} />
      )}

      <button
        type="button"
        className="sprite__smilefresh--before element-info-cart"
        onClick={handleClick}
      >
        <span className="for-a11y">장바구니 담기</span>
      </button>
    </>
  );
};

export default CartButton;
