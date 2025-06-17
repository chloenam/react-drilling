import React from "react";

const Layer = ({ setIsOpen }) => {
  return (
    <div className="box__layer">
      <div className="box__layer-inner">
        장바구니 담기 완료🧺
        <button type="button" className="button__close" onClick={() => setIsOpen(false)}>
          <span className="for-a11y">닫기</span>
        </button>
      </div>
    </div>
  );
};

export default Layer;
