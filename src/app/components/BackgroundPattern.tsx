"use client";
import { useEffect, useState } from "react";

const BackgroundPattern = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set mounted state after component mounts
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Base styles that are always applied
  const baseStyles = {
    position: "fixed" as const,
    inset: 0,
    pointerEvents: "none" as const,
    zIndex: 0,
  };

  // Pattern styles that are applied whether mounted or not
  const patternStyles = {
    position: "absolute" as const,
    inset: 0,
    backgroundImage: "radial-gradient(#94a3b8 1px, transparent 1px)",
    backgroundSize: "40px 40px",
    opacity: mounted ? 0.5 : 0,
    transition: "opacity 0.3s ease-in",
    zIndex: 0,
  };

  return (
    <div style={baseStyles}>
      <div style={patternStyles} />
    </div>
  );
};

export default BackgroundPattern;
