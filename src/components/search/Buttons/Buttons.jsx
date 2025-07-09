import React from "react";

import "./Button.css";

const Buttons = ({ onClick }) => {
  return (
    <>
      <div className="box__button-wrap">
        <button className="button" type="button" onClick={onClick}>
          BUTTON 1
        </button>
        <button className="button" type="button" onClick={onClick}>
          BUTTON 2
        </button>
        <button className="button" type="button" onClick={onClick}>
          BUTTON 3
        </button>
      </div>
    </>
  );
};

export default Buttons;
