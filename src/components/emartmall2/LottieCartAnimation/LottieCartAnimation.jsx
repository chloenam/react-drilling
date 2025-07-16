import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Lottie from "lottie-react";
import animationData from "../../../assets/lottie/add_cart.json";
import "./LottieCartAnimation.css";

const LottieCartAnimation = ({ onClose }) => {
  const [moveOut, setMoveOut] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setMoveOut(true), 1000);
    const endTimer = setTimeout(() => onClose(), 2000);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(endTimer);
    };
  }, [onClose]);

  const lottieRoot = document.getElementById("lottie-root");
  if (!lottieRoot) return null;

  return createPortal(
    <div className={`lottie--cart ${moveOut ? "is-fade" : ""}`}>
      <Lottie animationData={animationData} loop={false} />
    </div>,
    lottieRoot
  );
};

export default LottieCartAnimation;
