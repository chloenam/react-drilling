import React from "react";
import { useCounter } from "./useCounter";

export default function CounterDisplay() {
  const { count, increment, decrement } = useCounter(0);
  return (
    <div className="box__pattern">
      <h3>Custom Hook Pattern</h3>
      <p>Count: {count}</p>
      <button className="button" onClick={increment}>
        +
      </button>
      <button className="button" onClick={decrement}>
        -
      </button>
    </div>
  );
}
