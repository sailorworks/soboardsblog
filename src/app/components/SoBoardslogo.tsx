"use client";
import React, { useState } from "react";

const SoboardsLogo = () => {
  const [showGuides, setShowGuides] = useState(false);

  const svgWidth = 200;
  const svgHeight = 60;
  const centerX = svgWidth / 2;
  const centerY = svgHeight / 2;

  return (
    <div className="inline-flex items-center justify-center">
      <svg
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        className="h-10"
        onClick={() => setShowGuides(!showGuides)}
      >
        {/* Background capsule */}
        <rect
          width={svgWidth}
          height={svgHeight}
          rx={svgHeight / 2}
          ry={svgHeight / 2}
          fill="white"
        />

        {/* Center guides (only visible when clicked) */}
        {showGuides && (
          <>
            <line
              x1={centerX}
              y1="0"
              x2={centerX}
              y2={svgHeight}
              stroke="red"
              strokeWidth="0.5"
              strokeDasharray="2,2"
            />
            <line
              x1="0"
              y1={centerY}
              x2={svgWidth}
              y2={centerY}
              stroke="red"
              strokeWidth="0.5"
              strokeDasharray="2,2"
            />
          </>
        )}

        {/* Logo text with precise positioning */}
        <text
          x={centerX}
          y={centerY}
          dominantBaseline="central"
          textAnchor="middle"
          className="text-3xl font-bold"
          style={{
            fontFamily: "Movatif Bold, sans-serif",
            fill: "black",
          }}
        >
          SoBoards
        </text>
      </svg>
      {showGuides && (
        <div className="ml-2 text-xs text-gray-500">
          Click logo to toggle guides
        </div>
      )}
    </div>
  );
};

export default SoboardsLogo;
