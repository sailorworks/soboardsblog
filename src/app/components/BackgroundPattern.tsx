// src/app/components/BackgroundPattern.tsx
"use client";
import { useEffect, useState } from "react";

const BackgroundPattern = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    console.log("BackgroundPattern mounted:", isMounted);
  }, []);

  // Always render the div, but only apply styles after mounting
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    >
      <div
        className="absolute inset-0"
        style={
          isMounted
            ? {
                backgroundImage:
                  "radial-gradient(#94a3b8 1px, transparent 1px)",
                backgroundSize: "40px 40px",
                opacity: 0.5,
                zIndex: 0,
              }
            : {}
        }
      />
    </div>
  );
};

export default BackgroundPattern;
