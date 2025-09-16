import React from "react";
import UseMemoExample from "../../components/optimization/UseMemoExample/UseMemoExample";
import UseCallbackExample from "../../components/optimization/UseCallbackExample/UseCallbackExample";
import SuspenseExample from "../../components/optimization/SuspenseExample/SuspenseExample";
import ErrorBoundaryExample from "../../components/optimization/ErrorBoundaryExample/ErrorBoundaryExample";

const Optimization = () => {
  return (
    <div style={{ padding: 20 }}>
      <h1>React 최적화</h1>

      <section style={{ marginBottom: 20 }}>
        <h2>🧠 useMemo</h2>
        <UseMemoExample />
      </section>

      <section style={{ marginBottom: 20 }}>
        <h2>🔗 useCallback</h2>
        <UseCallbackExample />
      </section>

      <section style={{ marginBottom: 20 }}>
        <h2>⏳ Suspense</h2>
        <SuspenseExample />
      </section>

      <section style={{ marginBottom: 20 }}>
        <h2>🚨 ErrorBoundary</h2>
        <ErrorBoundaryExample />
      </section>
    </div>
  );
};

export default Optimization;
