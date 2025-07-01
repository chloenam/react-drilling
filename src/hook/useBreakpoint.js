import { useEffect, useState } from "react";

const getBreakpoint = (width) => {
  if (width < 768) return "mobile";
  if (width >= 768 && width < 1280) return "tablet";
  return "desktop";
};

export default function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState(
    getBreakpoint(window.innerWidth)
  );

  useEffect(() => {
    const handleResize = () => {
      const newBreakpoint = getBreakpoint(window.innerWidth);
      setBreakpoint(newBreakpoint);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint;
}
