import React, { useState } from "react";
import "./Range.css";

const Range = ({ min = 0, max = 100, step = 1, onChange }) => {
  const [range, setRange] = useState([min, max]);

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), range[1] - step);
    const newRange = [value, range[1]];
    setRange(newRange);
    onChange?.(newRange);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), range[0] + step);
    const newRange = [range[0], value];
    setRange(newRange);
    onChange?.(newRange);
  };

  return (
    <div className="box__range-wrap">
      <div className="box__title">
        <span className="text__title">
          가격<span className="text__sub">(1박 기준)</span>
        </span>
        <span className="text__range">
          <span className="text__range-value">{range[0]}</span>만원 ~{" "}
          <span className="text__range-value">{range[1]}</span>만원 이상
        </span>
      </div>
      <div className="box__range">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={range[0]}
          onChange={handleMinChange}
          className="form__controll form__controll--left"
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={range[1]}
          onChange={handleMaxChange}
          className="form__controll form__controll--right"
        />

        <div className="box__track">
          <div className="line__track" />
          <div
            className="line__range"
            style={{
              left: `${((range[0] - min) / (max - min)) * 100}%`,
              width: `${((range[1] - range[0]) / (max - min)) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Range;
