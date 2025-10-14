import React, { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState(["React 공부하기"]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (!text.trim()) return;
    setTodos([...todos, text]);
    setText("");
  };

  return (
    <div className="box__pattern">
      <h3>State Colocation Pattern</h3>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="할 일 추가"
      />
      <button className="button" onClick={addTodo}>
        추가
      </button>
      <ul>
        {todos.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}
