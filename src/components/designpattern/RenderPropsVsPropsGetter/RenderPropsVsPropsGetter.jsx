import React, { useState } from "react";

// Render Props
class ToggleRenderProps extends React.Component {
  state = { on: false };

  toggle = () => this.setState((prev) => ({ on: !prev.on }));

  render() {
    return this.props.children({
      on: this.state.on,
      toggle: this.toggle,
    });
  }
}

// Props Getter Hook
function useTogglePropsGetter() {
  const [on, setOn] = useState(false);

  const toggle = () => setOn((prev) => !prev);

  const getTogglerProps = (props = {}) => ({
    ...props,
    onClick: (e) => {
      if (props.onClick) props.onClick(e);
      toggle(); // 내부 상태 변경을 마지막에 실행 (덮어쓰기 방지)
    },
  });

  return { on, toggle, getTogglerProps };
}

export default function RenderPropsVsPropsGetter() {
  const propsGetter = useTogglePropsGetter();
  const [externalTextRP, setExternalTextRP] = useState("OFF");
  const [externalTextPG, setExternalTextPG] = useState("OFF");

  return (
    <div
      style={{
        display: "flex",
        gap: "64px",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      {/* Render Props */}
      <div
        style={{
          textAlign: "center",
          padding: "16px",
          borderRadius: "8px",
          width: "200px",
          backgroundColor: externalTextRP === "ON" ? "#d1f7c4" : "#f7d1d1",
          transition: "0.3s",
        }}
      >
        <h3>Render Props</h3>
        <ToggleRenderProps>
          {({ on, toggle }) => (
            <>
              <button
                className="button"
                onClick={() => {
                  toggle();
                  setExternalTextRP((prev) => (prev === "ON" ? "OFF" : "ON"));
                }}
              >
                Toggle
              </button>
              <p>내부 상태: {on ? "ON" : "OFF"}</p>
              <p>외부에서 제어 텍스트: {externalTextRP}</p>
            </>
          )}
        </ToggleRenderProps>
      </div>

      {/* Props Getter */}
      <div
        style={{
          textAlign: "center",
          padding: "16px",
          borderRadius: "8px",
          width: "200px",
          backgroundColor: externalTextPG === "ON" ? "#d1f7c4" : "#f7d1d1",
          transition: "0.3s",
        }}
      >
        <h3>Props Getter</h3>
        <button
          className="button"
          {...propsGetter.getTogglerProps({
            onClick: () =>
              setExternalTextPG((prev) => (prev === "ON" ? "OFF" : "ON")),
          })}
        >
          Toggle
        </button>
        <p>내부 상태: {propsGetter.on ? "ON" : "OFF"}</p>
        <p>외부에서 제어 텍스트: {externalTextPG}</p>
      </div>
    </div>
  );
}
