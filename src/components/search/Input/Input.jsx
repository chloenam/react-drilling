import React from "react";
import "./Input.css";

const Input = ({ value, onChange }) => {
  return (
    <div className="box__form-wrap">
      <div className="box__title">
        <span className="text__title">호텔명</span>
      </div>
      <div className="box__form">
        <label htmlFor="hotel-name" className="for-a11y">
          호텔명 입력
        </label>
        <input
          id="hotel-name"
          type="text"
          placeholder="(예:신라호텔)을 입력하세요."
          value={value}
          onChange={onChange}
          className="form__input"
        />
      </div>
    </div>
  );
};

export default Input;
