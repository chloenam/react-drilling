import React, { useState, useCallback, useRef, useEffect } from "react";

const Child = React.memo(({ onClick }) => {
  console.log("Child 컴포넌트 렌더링!");
  return <button onClick={onClick}>Increment Count (Child)</button>;
});

const UseCallbackExample = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);
  const prevFuncRef = useRef(null);

  const incrementBefore = () => {
    console.log("❌ Before increment 실행!");
    setCount((c) => c + 1);
  };

  const incrementAfter = useCallback(() => {
    console.log("✅ After increment 실행!");
    setCount((c) => c + 1);
  }, []);

  useEffect(() => {
    const currentFunc = toggle ? incrementBefore : incrementAfter;
    if (prevFuncRef.current === currentFunc) {
      console.log("함수 재사용됨 (재생성 안됨)");
    } else {
      console.log("함수 새로 생성됨");
      prevFuncRef.current = currentFunc;
    }
  });

  return (
    <div style={{ border: "2px solid gray", padding: 15, marginBottom: 15 }}>
      <p>Count: {count}</p>
      <Child onClick={toggle ? incrementBefore : incrementAfter} />
      <button onClick={() => setToggle((t) => !t)} style={{ marginLeft: 10 }}>
        Toggle Mode ({toggle ? "Before" : "After"})
      </button>
      <p style={{ marginTop: 10, fontWeight: "bold" }}>
        현재 모드:{" "}
        {toggle ? "Before (Child 매 렌더)" : "After (useCallback 적용)"}
      </p>
    </div>
  );
};

export default React.memo(UseCallbackExample);
