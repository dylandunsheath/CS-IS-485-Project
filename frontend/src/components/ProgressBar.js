import React from "react";

const ProgressBar = ({ currentSection, totalSections }) => {
  const progress = ((currentSection + 1) / totalSections) * 100;

  return (
    <div style={{ width: "100%", background: "#e0e0e0", margin: "10px 0" }}>
      <div
        style={{
          width: `${progress}%`,
          height: "10px",
          background: "green",
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
