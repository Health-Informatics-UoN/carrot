import React from "react";

interface HighlightedTextProps {
  children: React.ReactNode;
  color?: string;
}

const HighlightedText: React.FC<HighlightedTextProps> = ({ children, color = "#ffcccc" }) => {
  return (
    <span
      style={{
        backgroundColor: color,
        padding: "1px 4px",
        borderRadius: "4px",
        fontWeight: "bold",
      }}
    >
      {children}
    </span>
  );
};

export default HighlightedText;
