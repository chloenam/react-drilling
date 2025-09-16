import React, { useState } from "react";

class MyErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.log("ErrorBoundary caught:", error);
  }

  render() {
    if (this.state.hasError) {
      return <p style={{ color: "red" }}>오류가 발생했습니다!</p>;
    }
    return this.props.children;
  }
}

const BuggyComponent = ({ triggerError }) => {
  if (triggerError) throw new Error("버튼 클릭으로 발생시킨 에러");
  return <p>BuggyComponent 정상 렌더</p>;
};

const ErrorBoundaryExample = () => {
  const [show, setShow] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [triggerError, setTriggerError] = useState(false);

  return (
    <div style={{ border: "2px solid gray", padding: 15, marginBottom: 15 }}>
      <p>ErrorBoundary 예제</p>

      <button onClick={() => setShow((s) => !s)} style={{ marginRight: 10 }}>
        Toggle Buggy Component
      </button>
      <button onClick={() => setToggle((t) => !t)} style={{ marginRight: 10 }}>
        Toggle Mode ({toggle ? "Before" : "After"})
      </button>
      <button onClick={() => setTriggerError((v) => !v)}>Trigger Error</button>

      <p style={{ marginTop: 10, fontWeight: "bold" }}>
        현재 모드:{" "}
        {toggle ? "Before (ErrorBoundary 없음)" : "After (ErrorBoundary 적용)"}
      </p>

      <div style={{ marginTop: 10 }}>
        {show &&
          (toggle ? (
            <BuggyComponent triggerError={triggerError} />
          ) : (
            <MyErrorBoundary>
              <BuggyComponent triggerError={triggerError} />
            </MyErrorBoundary>
          ))}
      </div>
    </div>
  );
};

export default React.memo(ErrorBoundaryExample);
