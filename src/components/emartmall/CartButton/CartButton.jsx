import React, { useState } from "react";
import Layer from "../Layer/Layer";

const CartButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button type="button" className="sprite__smilefresh--before element-info-cart" aria-describedby="itemCard_title_2519000890" onClick={() => setIsOpen(true)}>
        <span className="for-a11y">장바구니 담기</span>
      </button>
      {isOpen ? <Layer setIsOpen={setIsOpen} /> : null}
    </>
  );
};

export default CartButton;
