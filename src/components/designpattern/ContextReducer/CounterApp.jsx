import React from "react";
import { CounterProvider, useCounter } from "./CounterContext";

function Counter() {
  const { state, dispatch } = useCounter();
  return (
    <div>
      <p>{state.count}</p>
      <button
        className="button"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        +
      </button>
      <button
        className="button"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        -
      </button>
    </div>
  );
}

export default function CounterApp() {
  return (
    <div className="box__pattern">
      <h3>Context + Reducer Pattern</h3>
      <CounterProvider>
        <Counter />
      </CounterProvider>
    </div>
  );
}
