import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  resetError = () => {
    this.setState({ hasError: false });
    if (this.props.onReset) {
      this.props.onReset(); //forceError 초기화
    }
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="box__error box__full is-active">
          <p>⚠️ 예상치 못한 오류가 발생했습니다. 잠시 후 다시 시도해주세요.</p>
          <button onClick={this.resetError}>🔄 다시 시도</button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
