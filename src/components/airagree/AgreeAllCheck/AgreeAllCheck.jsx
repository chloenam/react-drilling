import React from "react";

const AgreeAllCheck = ({ checked, onChange }) => {
  return (
    <div className="box__form--checkbox">
      <input
        type="checkbox"
        id="checkAll"
        name="form__agree"
        className="form__checkbox form__checkbox-all sprite__air-res--before"
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor="checkAll" className="text__label sprite__air-res--before">
        항공권 규정 내용을 모두 확인하였으며 이에{" "}
        <em className="text--point-blue">전체 동의</em>합니다.
        <span className="text__sub">(선택동의 포함)</span>
      </label>
    </div>
  );
};

export default AgreeAllCheck;
