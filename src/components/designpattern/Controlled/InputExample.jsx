import React, { useState, useRef } from "react";

export default function InputExample() {
  const [value, setValue] = useState("");
  const inputRef = useRef();
  const [uncontrolledValue, setUncontrolledValue] = useState("");

  return (
    <div className="box__pattern">
      <h3>Controlled vs Uncontrolled Input</h3>

      {/* Controlled */}
      <div style={{ marginBottom: "16px" }}>
        <strong>Controlled:</strong>
        <input
          style={{ marginLeft: "8px" }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <p>현재 값: {value || "(비어있음)"}</p>
      </div>

      {/* Uncontrolled */}
      <div>
        <strong>Uncontrolled:</strong>
        <input
          style={{ marginLeft: "8px" }}
          ref={inputRef}
          placeholder="ref로 접근"
        />
        <button
          className="button"
          style={{ marginLeft: "8px" }}
          onClick={() => setUncontrolledValue(inputRef.current.value)}
        >
          값 확인
        </button>
        <p>버튼 클릭 후 값: {uncontrolledValue || "(아직 없음)"}</p>
      </div>
    </div>
  );
}
