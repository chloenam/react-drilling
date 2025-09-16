import React, { useState, Suspense, lazy } from "react";

const HeavyComponent = () => {
  let sum = 0;
  for (let i = 0; i < 1e7; i++) sum += i;
  return <p>Heavy Component Loaded! 계산 결과: {sum}</p>;
};

const LazyHeavyComponent = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve({ default: HeavyComponent }), 1000)
    )
);

const SuspenseExample = () => {
  const [show, setShow] = useState(false);
  const [toggle, setToggle] = useState(true);

  return (
    <div style={{ border: "2px solid gray", padding: 15, marginBottom: 15 }}>
      <p>Suspense 예제</p>
      <button onClick={() => setShow((s) => !s)} style={{ marginRight: 10 }}>
        Toggle Heavy Component
      </button>
      <button onClick={() => setToggle((t) => !t)}>
        Toggle Mode ({toggle ? "Before" : "After"})
      </button>

      <p style={{ marginTop: 10, fontWeight: "bold" }}>
        현재 모드:{" "}
        {toggle ? "Before (즉시 렌더)" : "After (Suspense + fallback)"}
      </p>

      <div style={{ marginTop: 10 }}>
        {show &&
          (toggle ? (
            <HeavyComponent />
          ) : (
            <Suspense fallback={<p>Loading...</p>}>
              <LazyHeavyComponent />
            </Suspense>
          ))}
      </div>
    </div>
  );
};

export default React.memo(SuspenseExample);
