import React from "react";
import { createPortal } from "react-dom";
import "./Toast.css";

const Toast = ({ message }) => {
  const toastRoot = document.getElementById("toast-root");
  if (!toastRoot) return null;

  return createPortal(<div className="box__toast">{message}</div>, toastRoot);
};

export default Toast;
