import React, { useState, useMemo } from "react";

const UseMemoExample = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);

  const heavyCalculationBefore = () => {
    console.log("❌ Before 계산 실행!");
    let sum = 0;
    for (let i = 0; i < 1e7; i++) sum += i;
    return sum + count;
  };

  const heavyCalculationAfter = useMemo(() => {
    console.log("✅ After 계산 실행!");
    let sum = 0;
    for (let i = 0; i < 1e7; i++) sum += i;
    return sum + count;
  }, [count]);

  return (
    <div style={{ border: "2px solid gray", padding: 15, marginBottom: 15 }}>
      <p>Count: {count}</p>
      <button
        onClick={() => setCount((c) => c + 1)}
        style={{ marginRight: 10 }}
      >
        Increment Count
      </button>
      <button onClick={() => setToggle((t) => !t)}>
        Toggle Mode ({toggle ? "Before" : "After"})
      </button>

      <p style={{ marginTop: 10, fontWeight: "bold" }}>
        현재 모드: {toggle ? "Before (매 렌더 계산)" : "After (useMemo 적용)"}
      </p>

      <div style={{ marginTop: 10 }}>
        <p>
          계산 결과: {toggle ? heavyCalculationBefore() : heavyCalculationAfter}
        </p>
      </div>
    </div>
  );
};

export default React.memo(UseMemoExample);
